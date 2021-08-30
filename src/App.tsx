import React, {useEffect, useRef} from 'react';

import {SafeAreaView} from 'react-native';
import {Navigation} from './presentation/navigation';
import {reduxConnect} from './controllers/tamplete';

export function App() {
  const navigationRef = useRef<any | null>(null);

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation refNavigation={navigationRef} />
    </SafeAreaView>
  );
}

export default reduxConnect(App);
