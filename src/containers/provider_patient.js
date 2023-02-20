import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  BackHandler,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../assets/styles/provider_patient_styles';
import ProPatBox from '../components/proPatBox';
import {useDispatch, useSelector} from 'react-redux';
import {showbutton} from '../redux/action';
import {images} from '../utils/Images';

const Provider_patient = () => {
  //================== useEffect =====================//
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
  }, []);
  const dispatch = useDispatch();
  const visible = useSelector(state => state.visible);
  const Img = images.Img;
  const handleBackButton = () => {
    BackHandler.exitApp();
    return true;
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backGrdImg}
        source={images.selScreenBackGround}>
        <Image style={styles.logoImg} source={images.SosLogo} />
        <Text style={styles.txt}>Continue as a</Text>
        <ProPatBox img={images.ProviderImg} txt="Provider" />
        <ProPatBox
          img={images.PatientImg}
          txt="Patient"
          patientStyle={[styles.patientView]}
          imgStyle={[styles.patientImgStyle]}
        />
        <View style={styles.loginBtnView}>
          <Text style={styles.influTxt}>Influencer </Text>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => Alert.alert('Login Screen in Progress')}
            style={styles.loginTxtOpacity}>
            <Text style={styles.loginTxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Provider_patient;
