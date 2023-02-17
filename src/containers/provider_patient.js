import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, Alert, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../assets/styles/provider_patient_styles'
import ProPatBox from '../components/proPatBox'
import { useDispatch, useSelector } from 'react-redux'
import { showbutton } from '../redux/action'

const Provider_patient = () => {
  //================== useEffect =====================//
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton)
  }, [])
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.visible)
  const Img = require("../assets/images/BlueDot.png")
  const handleBackButton = () => {
    BackHandler.exitApp()
    // Alert.alert(
    //   'Exit App',
    //   'Exiting the application?',
    //   [
    //     {
    //       text: 'Cancel',
    //       onPress: () => {
    //         console.log("Cancel Pressed");
    //       },
    //       style: 'cancel'
    //     },
    //     {
    //       text: 'Ok',
    //       onPress: () => BackHandler.exitApp(),
    //     },
    //   ],
    //   {
    //     cancelable: false
    //   },
    // );
    return true;
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* Left Dots */}
      <Image style={styles.leftDot1} source={Img} />
      <Image style={styles.leftDot2} source={Img} />
      <Image style={styles.leftDot3} source={Img} />
      <Image style={styles.leftDot4} source={Img} />
      <Image style={styles.leftDot5} source={Img} />
      <Image style={styles.leftDot6} source={Img} />
      {/* Right Dots */}
      <Image style={styles.RightDot1} source={Img} />
      <Image style={styles.RightDot2} source={Img} />
      <Image style={styles.RightDot3} source={Img} />
      <Image style={styles.RightDot4} source={Img} />
      <Image style={styles.RightDot5} source={Img} />
      <Image style={styles.RightDot6} source={Img} />
      <Text style={styles.txt}>Continue as a</Text>
      <ProPatBox img={require("../assets/images/Provider.png")} txt="Provider" />
      <ProPatBox img={require("../assets/images/patient.png")} txt="Patient" patientStyle={[styles.patientView]} imgStyle={[styles.patientImgStyle]} />
      <Image style={styles.logoImg} source={require("../assets/images/sosLogo.png")} />
      <View style={styles.loginBtnView}><Text style={styles.influTxt}>Influencer </Text><TouchableOpacity activeOpacity={0.85} onPress={() => Alert.alert("Login Screen in Progress")} style={styles.loginTxtOpacity}><Text style={styles.loginTxt}>Login</Text></TouchableOpacity></View>
    </SafeAreaView>
  )
}
export default Provider_patient;