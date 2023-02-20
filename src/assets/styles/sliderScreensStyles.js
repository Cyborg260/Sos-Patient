import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';
import {fonts} from '../../utils/Fonts';
const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  allDotsImg: {
    width: 313,
    height: 270,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  docImg: {
    width: 196,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'absolute',
    top: -15,
  },
  bottomView: {
    backgroundColor: Colors.lightBlue,
    width: '100%',
    height: 420,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  items2Styles: {
    justifyContent: 'center',
    marginTop: 40,
  },
  MainTxt: {
    fontSize: 26,
    color: Colors.white,
    fontFamily: fonts.bold,
    width: width,
    textAlign: 'center',
  },
  detailTxt: {
    fontSize: 15,
    color: Colors.lightWhite,
    fontWeight: '400',
    fontFamily: fonts.medium,
    textAlign: 'center',
    marginTop: 20,
    width: width,
  },
  footerView1: {
    height: 20,
    width: '20%',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  footerView2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sliderDots: {
    backgroundColor: Colors.white,
    height: 8,
    width: 8,
    marginHorizontal: 4,
    borderRadius: 4,
  },
  txtFlatlistView: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dotsTxtView: {
    backgroundColor: 'red',
    width: width,
  },
  loaderView: {
    position: 'absolute',
    bottom: 60,
    height: 80,
    alignSelf: 'center',
    // backgroundColor: "red"
  },
  skipTxtOpacity: {
    alignSelf: 'center',
    marginTop: 110,
  },
  skipTxt: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: fonts.medium,
  },
});
