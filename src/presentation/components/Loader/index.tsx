import React from 'react';
import {View, ActivityIndicator, Platform} from 'react-native';

export function Loader() {
  return (
    <View style={{flex: 1}}>
      <ActivityIndicator
        size="large"
        color="#1D5C42"
        style={{padding: Platform.OS === 'web' ? 32 : 10, flex: 1, flexGrow: 1}}
      />
    </View>
  );
}
