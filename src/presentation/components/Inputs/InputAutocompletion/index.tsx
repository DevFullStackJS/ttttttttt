import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {formsStyles} from '../../../formStyles';
import {InputField} from '../InputField';

export const InputAutocompletion = (props: any) => {
  const {
    label,
    required,
    value,
    name,
    onChange,
    error,
    showError,
    data,
    isEditable,
  } = props;
  let editable = isEditable;
  if (typeof isEditable === 'undefined') {
    editable = true;
  }

  const [list, setList] = React.useState(data);
  const [displayError, setDisplayError] = React.useState(showError);
  useEffect(() => {
    setDisplayError(showError);
  }, [showError]);

  const [tempList, setTempList] = React.useState(data);
  const [isFocusing, setIsFocusing] = React.useState(false);
  const Item = ({title, value}: any) => (
    <TouchableOpacity
      onPress={() => {
        handleInputFieldClick(name, value, true);
      }}
      style={[formsStyles.autoCompleteTxt]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({item}: any) => (
    <Item title={item.label} value={item.value} />
  );

  const handleInputFieldChange = (
    name: string,
    value: string,
    isFired: boolean,
  ) => {
    const _list = list && list.length > 0 ? [...list] : [];
    const _data = _list.filter(
      item => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1,
    );
    setTempList(_data);

    if (_data.length === 0) {
      onChange(name, value, isFired);
    } else {
      onChange(name, value, isFired);
    }
  };
  const handleInputFieldClick = (
    name: string,
    value: string,
    isFired?: boolean,
  ) => {
    onChange(name, value, isFired);
    setTempList([]);
  };

  const onblur = () => {
    if (Platform.OS === 'web') {
      setTimeout(() => {
        setTempList([]);
      }, 500);
    }
  };
  const onfocus = () => {
    setIsFocusing(true);
    const _list = list && list.length > 0 ? [...list] : [];
    const _data = _list.filter(
      item => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1,
    );
    setTempList(_data);
  };

  React.useEffect(() => {}, [list]);
  React.useEffect(() => {
    setList(data);
  }, [data]);
  return (
    <View>
      <InputField
        label={label}
        required={required}
        value={value}
        name={name}
        isEditable={editable}
        onChange={(name, value, isFired) =>
          handleInputFieldChange(name, value, isFired)
        }
        error={error}
        showError={displayError}
        onBlur={() => {
          editable && onblur();
        }}
        onFocus={() => {
          editable && onfocus();
        }}
      />

      {isFocusing && tempList.length > 0 && (
        <SafeAreaView style={[{flex: 1}]}>
          <FlatList
            style={[formsStyles.autoComplete]}
            data={tempList.filter((item: any, idx: number) => idx <= 10)}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
      )}
    </View>
  );
};
