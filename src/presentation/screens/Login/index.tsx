// import {useNavigation} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';
import ConfirmationModal from '../../components/ConfirmationModal';
import {Loader} from '../../components/Loader';
import {PageContainerWithoutSidebar} from '../../layout/PageContainerWithoutSidebar';
// import {StackParams} from '../../navigation';

import {connect} from 'react-redux';
import mapDispatchToProps from '../../../services/redux/mapDispatchToProps';
import mapStateToProps from '../../../services/redux/mapStateToProps';

export const Login = () => {
  //   const {navigate, goBack} = useNavigation<NavigationProps>();
  //   const [postSucces, setPostSuccess] = useState(false);
  const [IsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  //   const [error, setError] = useState('');
  //   const [dataDto, setDataDto] = useState<any>({
  //     identifiant: 'azerty@gmail.com',
  //     password: '123@test',
  //   });

  // rotation of screen without load

  const [width, setWidth] = useState(Dimensions.get('window').width);
  const screenWidth = () => {
    setWidth(Dimensions.get('window').width);
  };
  Dimensions.addEventListener('change', screenWidth);

  const [height, setHeight] = useState(Dimensions.get('window').height);
  const screenHeight = () => {
    setHeight(Dimensions.get('window').height);
  };
  Dimensions.addEventListener('change', screenHeight);

  return (
    <View style={{maxWidth: width, height: height}}>
      <PageContainerWithoutSidebar>
        {/** Confirmation modal */}
        {showError && (
          <ConfirmationModal
            title="Erreur"
            content={'Erreur de connexion'}
            btn1="OK"
            handleBtn1={() => setShowError(false)}
          />
        )}
        {IsLoading && <Loader />}
        {/** Form content */}
      </PageContainerWithoutSidebar>
    </View>
  );
};

export const LoginScreen: any = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
