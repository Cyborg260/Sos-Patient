import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';
import {fonts} from '../../utils/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  backGrdImg: {
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center',
  },
  logoImg: {
    width: 152,
    height: 80,
    resizeMode: 'contain',
    backgroundColor: Colors.white,
    alignSelf: 'center',
    marginTop: 65,
  },
  txt: {
    fontSize: 20,
    color: Colors.black,
    fontFamily: fonts.medium,
    alignSelf: 'center',
    marginTop: 28,
  },
  patientView: {
    width: 252,
    height: 186,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    marginTop: 25,
  },
  patientImgStyle: {
    width: 100,
    height: 72,
    resizeMode: 'contain',
  },
  loginBtnView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 22,
  },
  influTxt: {
    color: Colors.grey,
    fontSize: 12,
    fontFamily: fonts.medium,
  },
  loginTxt: {
    color: Colors.blue,
    fontSize: 12,
    fontFamily: fonts.bold,
  },
});
