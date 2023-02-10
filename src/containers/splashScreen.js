import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import styles from '../assets/styles/splashScreen_styles'
import { useNavigation } from '@react-navigation/native'
const SplashScreen = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} activeOpacity={1} onPress={() => navigation.navigate("slider")}>
            <StatusBar animated={true} barStyle="dark-content" backgroundColor="#fff" />
            {/* <View style={styles.docImgView}> */}
                <Image style={styles.docImg} source={require("../assets/images/GroupDoc.png")} />
                {/* </View> */}
            <Text style={styles.appNameTxt}> Welcome to SOS{'\n'}Doctor House Call</Text>
            <Text style={styles.instTxt}> The best online doctor appointment &{'\n'}
                consultation app of the century for your{"\n"}             health and medical need!</Text>
        </TouchableOpacity>
    )
}
export default SplashScreen;
