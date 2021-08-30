import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {FONTS, COLORS} from '../../resources/constants';

interface Props {
  onPress: any;
  title: string;
  type?: string;
  styleBtnTxt?: any;
  styleBtnOuter?: any;
}

const styles = StyleSheet.create({
  textBtnSearch: {
    ...FONTS.body3,
    color: COLORS.white,
  },
  vInputbtn: {
    backgroundColor: COLORS.primary,
    padding: 16,
    margin: 8,
    borderRadius: 8,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
});

export const ButtonComponent = ({onPress, title}: Props) => (
  <View>
    <TouchableOpacity style={styles.vInputbtn} onPress={onPress}>
      <Text style={styles.textBtnSearch}>{title}</Text>
    </TouchableOpacity>
  </View>
);
