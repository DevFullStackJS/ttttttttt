import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../resources/constants';

export const styles = StyleSheet.create({
  containers: {
    height: 72,
    width: '100%',
    backgroundColor: COLORS.secondary,
    alignContent: 'center',
    alignItems: 'center',
  },
  v1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  vlogo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
  },
  v1logo: {
    marginLeft: 10,
  },
  vLeft: {
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  v2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  vHeaderLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flex: 1,
  },
  currency: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
  },
  tHeader: {
    color: COLORS.white,
    ...FONTS.h3,
  },
  tHeaderLogo: {
    color: COLORS.white,
    ...FONTS.h3,
  },
});
