import React from 'react';
import {AppRegistry, Platform} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {StaticRouter as Router} from 'react-router-dom';

import {store, persistor} from './services/redux/store';

import AppNavigation from './App';

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppNavigation />
        </Router>
      </PersistGate>
    </Provider>
  );
}

AppRegistry.registerComponent('client', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('client', {
    rootTag: document.getElementById('root'),
  });
}
