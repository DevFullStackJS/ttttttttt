import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../resources/constants';

export const styles = StyleSheet.create({
  containers: {
    height: '100%',
    width: '100%',
  },
  containt: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: COLORS.secondary,
  },
  vtitle: {
    marginBottom: 16,
  },
  v1: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: '10%',
  },
  vInput: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  searcInput: {
    flex: 1,
  },
  vplus: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  tplus: {
    textTransform: 'uppercase',
    ...FONTS.body3,
    color: COLORS.white,
    marginLeft: 10,
  },
  title: {
    ...FONTS.body1,
    color: COLORS.primary,
    fontWeight: '800',
  },
  titleInput: {
    ...FONTS.body1,
    color: COLORS.secondary1,
    marginBottom: 10,
  },
  description: {
    ...FONTS.body4,
    color: COLORS.white,
  },
  vdescription: {
    marginBottom: 16,
  },
  v2: {
    // flex: 1,
  },
  stroke1: {
    width: 1,
    height: 14,
    transform: [{rotate: '90deg'}],
    borderWidth: 1.5,
    borderColor: COLORS.secondary1,
    opacity: 0.4,
  },
  stroke3: {
    width: 6,
    height: 12,
  },
  vlogos: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    paddingLeft: 60,
    paddingRight: 60,
  },
  vItemlogos: {
    justifyContent: 'center',
  },
  section1: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 60,
    paddingRight: 60,
  },
  containt_s11: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  containt_s2: {
    flex: 1,
    alignSelf: 'center',
    padding: 20,
  },
  containt_s2_v1: {
    marginBottom: 20,
  },
  containt_s2_v1_text: {
    fontSize: 35,
    fontWeight: '900',
    color: COLORS.gray90,
    fontFamily: 'Roboto-Bold',
  },
  containt_s2_v2: {
    marginBottom: 20,
  },
  containt_s2_v1_text2: {
    fontSize: 15,
    fontWeight: '900',
    color: COLORS.gray90,
    fontFamily: 'Roboto-Bold',
  },
  containt_s1: {
    // justifyContent: 'space-between',
    // flexDirection: 'row',
  },
  section_description: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    paddingLeft: 60,
    paddingRight: 60,
  },
  section_description1: {
    flex: 1,
  },
  section_description2: {},
  section_description1_v: {},
  section_description1_t: {},
  section_avis: {
    padding: 20,
    paddingLeft: 60,
    paddingRight: 60,
  },
  text12: {
    ...FONTS.body4,
    color: COLORS.black,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#C4C4C4',
    transform: [{rotate: '180deg'}],
  },
});
