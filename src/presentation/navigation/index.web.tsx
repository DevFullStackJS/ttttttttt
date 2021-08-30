import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Platform} from 'react-native';
import store from '../../services/redux/store';
import {Loader} from '../components/Loader';
import {HomeScreen, InscriptionScreen, LoginScreen} from '../screens';

import './GestureHandler';

const title = (text: string) => Platform.select({web: text, default: text});
export type StackParams = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  MotdepasseOublieScreen: undefined;
  InscriptionScreen: {id: string} | undefined;
  Profil: undefined;
};

const config = {
  screens: {
    HomeScreen: {
      path: '/accueil',
    },
    LoginScreen: {
      path: '/connexion',
    },
    MotdepasseOublieScreen: {
      path: '/forget_password',
    },
    InscriptionScreen: {
      path: '/inscription',
    },

    Profil: {
      path: '/profil',
    },
  },
};
const linking = {
  prefixes: ['fullstack://app'],
  config,
};

const Stack = createStackNavigator<StackParams>();

export function Navigation(props: any) {
  const {refNavigation} = props;
  const user = store.getState().users;

  console.log({user});

  return (
    <NavigationContainer
      ref={refNavigation}
      linking={linking}
      fallback={<Loader />}>
      <Stack.Navigator
        // initialRouteName={user ? LoginScreen : ZoneScreen}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: title('Accueil')}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: title('Connexion')}}
        />
        {/* <Stack.Screen
          name="MotdepasseOublieScreen"
          component={MotdepasseOublieScreen}
          options={{title: title('Mot de passe oublié')}}
        /> */}
        <Stack.Screen
          name="InscriptionScreen"
          component={InscriptionScreen}
          options={{title: title('Inscription')}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
