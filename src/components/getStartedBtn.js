import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONT_FAMILY} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../routes/appStacks';
import {fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';

const GetStartedBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.btnOpacity}
      activeOpacity={0.98}
      onPress={() => navigation.navigate(ScreenNames.SelectionScreen)}>
      <Text style={styles.btnTxt}>Get Started</Text>
    </TouchableOpacity>
  );
};

export default GetStartedBtn;

const styles = StyleSheet.create({
  btnOpacity: {
    width: 330,
    height: 58,
    backgroundColor: Colors.white,
    borderRadius: 12,
    elevation: 2.5,
    shadowColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 16,
    color: Colors.blue,
    fontWeight: '600',
    fontFamily: fonts.medium,
  },
});
