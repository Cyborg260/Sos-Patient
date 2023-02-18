import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from '../assets/styles/splashScreen_styles';
import {useNavigation} from '@react-navigation/native';
import { images } from '../utils/Images';
import { ScreenNames } from '../routes/appStacks';

const SplashScreen = () => {
  const navigation = useNavigation();
  //====================== useEffect ===========================//
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: ScreenNames.GuideScreen}],
      });
    }, 2500);
  }, []);

  return (
    <SafeAreaView
      style={styles.container}
      activeOpacity={1}
      onPress={() => navigation.navigate(ScreenNames.GuideScreen)}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#fff"
      />
      {/* <View style={styles.docImgView}> */}
      <Image
        style={styles.docImg}
        source={images.GroupDoc}
      />
      {/* </View> */}
      <Text style={styles.appNameTxt}>
        {' '}
        Welcome to SOS{'\n'}Doctor House Call
      </Text>
      <Text style={styles.instTxt}>
        {' '}
        The best online doctor appointment &{'\n'}
        consultation app of the century for your{'\n'} health and medical need!
      </Text>
    </SafeAreaView>
  );
};
export default SplashScreen;
