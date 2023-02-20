import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';
import {fonts} from '../../utils/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  docImg: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  appNameTxt: {
    color: Colors.blue,
    fontSize: 30,
    alignSelf: 'center',
    fontFamily: fonts.bold,
    marginTop: 400,
  },
  instTxt: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: fonts.medium,
    marginTop: 30,
  },
});
