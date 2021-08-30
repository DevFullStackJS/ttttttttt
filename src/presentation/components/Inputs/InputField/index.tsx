import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {thousandSeparator} from '../../../../data/factory';
import {formsStyles} from '../../../formStyles';
import styles from '../style';
import localStyle from './styles';
import {TitleLabel} from './TitleLabel';
import {CONSTANT_DATA} from '../../../../common/utils/constant';
interface Props {
  label?: string;
  required?: boolean;
  value?: any;
  onChange?: any;
  name?: any;
  error?: any;
  showError?: boolean;
  onBlur?: any;
  onFocus?: any;
  maxLength?: any;
  type?: string;
  isEditable?: boolean;
  onSubmitEditing?: any;
}
export const InputField = ({
  label,
  required,
  value,
  onChange,
  name,
  error,
  showError,
  onBlur,
  onFocus,
  maxLength,
  type,
  isEditable,
  onSubmitEditing,
}: Props) => {
  const handleChange = (name: string, value: string) => {
    let bSend = true;
    let data = value;

    if (type === 'numeric') {
      data = value.replace(/[^0-9]/g, '').toString();
    }
    if (type === 'numericFloat') {
      data = value.replace(/[^0-9.]/g, '').toString();
    }
    if (type === 'alphanumeric') {
      data = value.replace(/[^A-Za-z0-9\s]/g, '').toString();
    }

    if (type === 'anneeScolaire') {
      data = value.replace(/[^0-9-]/g, '').toString();
    }
    if (type === 'price') {
      data = value.replace(/[^0-9]/g, '').toString();
      data = thousandSeparator(data, ' ');
    }
    if (type === 'telephone') {
      data = value.replace(/[^0-9]/g, '').toString();
      if (data.length > 10) {
        bSend = false;
      }
    }

    bSend && onChange(name, data, true);
  };

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [errorToDisplay, setErrorToDisplay] = useState(error);
  const keyboardType = type === 'anneeScolaire' ? 'phone-pad' : 'default';

  useEffect(() => {
    setTimeout(() => {
      setErrorToDisplay(error);
    }, 150);
  }, [error]);
  return (
    <View style={[{maxHeight: 120}, styles.container]}>
      <TitleLabel label={label} required={required} />
      <View
        style={[
          type === 'textArea'
            ? formsStyles.itemInputStyleTextArea
            : formsStyles.itemInputStyle,
          required && showError && error !== '' && formsStyles.inputError,
          {
            backgroundColor: isEditable
              ? '#ffffff'
              : 'rgba(240, 244, 248, 0.87)',
          },
        ]}>
        <TextInput
          style={[localStyle.textIput, {textAlignVertical: 'top'}]}
          value={value}
          multiline={type === 'textArea'}
          numberOfLines={9}
          onChangeText={(value: any) => handleChange(name, value)}
          onBlur={onBlur}
          onFocus={onFocus}
          maxLength={maxLength}
          editable={isEditable}
          secureTextEntry={type === 'password' && !isPasswordShown}
          keyboardType={
            type === 'numeric' || type === 'telephone' || type === 'price'
              ? 'numeric'
              : keyboardType
          }
          onSubmitEditing={onSubmitEditing}
        />

        {type === 'password' && (
          <TouchableOpacity
            onPress={() => {
              setIsPasswordShown(!isPasswordShown);
            }}>
            <View
              style={{
                width: 60,
                height: 50,
              }}>
              {isPasswordShown && (
                <Image
                  style={[formsStyles.iconEye]}
                  source={require('../../../../ressources/images/visibility.png')}
                />
              )}
              {!isPasswordShown && (
                <Image
                  style={[formsStyles.iconEye]}
                  // source={require('../../../../ressources/images/Shownot.png')}
                  source={require('../../../../ressources/images/novisibility.png')}
                />
              )}
            </View>
          </TouchableOpacity>
        )}
      </View>
      {required && showError && errorToDisplay !== '' && (
        <Text style={styles.textError}>{errorToDisplay}</Text>
      )}
    </View>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  showError: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  isEditable: PropTypes.bool,
};

InputField.defaultProps = {
  label: '',
  name: '',
  required: false,
  showError: false,
  value: '',
  error: '',
  maxLength: CONSTANT_DATA.MAX_CASUAL_FIELD_LENGTH,
  type: '',
  isEditable: true,
};
