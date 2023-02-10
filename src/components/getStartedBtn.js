import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FONT_FAMILY } from '../constants';
import { useNavigation } from '@react-navigation/native';

const GetStartedBtn = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.btnOpacity} activeOpacity={0.98} onPress={() => navigation.navigate("provdrPatnt")} >
            <Text style={styles.btnTxt}>Get Started</Text>
        </TouchableOpacity>
    )
}

export default GetStartedBtn;

const styles = StyleSheet.create({
    btnOpacity: {
        width: 330,
        height: 58,
        backgroundColor: "#fff",
        borderRadius: 12,
        elevation: 2.5,
        shadowColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    btnTxt: {
        fontSize: 16,
        color: "#2790BF",
        fontWeight: "600",
        fontFamily: FONT_FAMILY.MontserratMedium,
    }
})