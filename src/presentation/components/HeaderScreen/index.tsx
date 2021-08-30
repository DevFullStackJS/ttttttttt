import React from 'react';

import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';

import mapDispatchToProps from '../../../services/redux/mapDispatchToProps';
import mapStateToProps from '../../../services/redux/mapStateToProps';
import {styles} from './styles';

import {icons} from '../../resources/constants';
import {useWidthHeight} from '../../../hooks/dimension';

type Props = {
  title: string;
};

export function FHeaderScreen(_props: Props) {
  const {width} = useWidthHeight();
  return (
    <View style={styles.containers}>
      <View style={[styles.v1, {width: width > 1140 ? 1100 : '100%'}]}>
        <View style={styles.vLeft}>
          <View style={styles.vlogo}>
            <Image
              source={icons.app?.default}
              resizeMode="contain"
              style={{
                width: 70,
                height: 70,
              }}
            />
            <View style={styles.v1logo}>
              <Text style={styles.tHeader}>Votre Logo</Text>
            </View>
          </View>
        </View>
        <View style={styles.vHeaderLink}>
          <View style={styles.currency}>
            <Text style={styles.tHeader}>Les offres</Text>
          </View>
          <View style={styles.currency}>
            <Text style={styles.tHeader}>Explorer</Text>
          </View>
          <View style={styles.currency}>
            <Image
              source={icons.langue?.default}
              resizeMode="contain"
              style={{
                width: 14,
                height: 14,
                marginBottom: 4,
                marginRight: 4,
              }}
            />
            <Text style={styles.tHeaderLogo}>Français</Text>
          </View>
          <View style={[styles.currency, {flex: 1, alignSelf: 'center'}]}>
            <Image
              source={icons.currency?.default}
              resizeMode="contain"
              style={{
                width: 14,
                height: 14,
                marginBottom: 4,
                marginRight: 4,
              }}
            />
            <Text style={styles.tHeaderLogo}>USD</Text>
          </View>
        </View>
        <View style={styles.v2}>
          <View style={styles.currency}>
            <Text style={styles.tHeader}>Se connecter</Text>
          </View>
          <View style={styles.currency}>
            <Text style={styles.tHeader}>Créer un compte</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export const HeaderScreen: any = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FHeaderScreen);
