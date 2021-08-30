import React from 'react';
import {ScrollView, View} from 'react-native';
import {HeaderScreen} from '../../components/HeaderScreen';

import {useWidthHeight} from '../../../hooks/dimension';
import {formsStyles} from '../../formStyles';
import {styles} from './styles';

type Props = {
  children?: any;
  type?: string;
  refresh?: any;
};

export function PageContainer({children, refresh}: Props) {
  const {width} = useWidthHeight();

  return (
    <View style={styles.containers}>
      <HeaderScreen />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.realFlex}
        refreshControl={refresh}>
        <View style={[styles.webformContain]}>
          <View
            style={[
              {
                maxWidth: width > 1140 ? 1100 : '100%',
                // backgroundColor: 'red',
                // paddingLeft:
                //   widthScreen < 1141 && Platform.OS === 'web' ? 120 : 16,
              },
              formsStyles.formContain,
            ]}>
            {children}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
