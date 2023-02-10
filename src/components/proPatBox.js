import { Alert, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FONT_FAMILY } from '../constants'
import { useDispatch, useSelector } from 'react-redux';
import { showbutton } from '../redux/action';
import DropShadow from 'react-native-drop-shadow';
import { Shadow } from 'react-native-shadow-2';
import { Card } from 'react-native-shadow-cards'

const ProPatBox = ({ ...props }) => {
    //useState
    const [show, setShow] = useState();
    //useEffect
    useEffect(() => {
        setShow(show)
    }, [])
    const dispatch = useDispatch();
    const visible = useSelector((state) => state.visible)
    const showButton = dispatch(showbutton(true))
    const { img, txt, patientStyle, imgStyle } = props

    return (
        // <Shadow
        //     distance={5}
        //     startColor={'#00000010'}
        //     containerViewStyle={{ marginVertical: 20 }}
        //     radius={8}
        // >
        // <DropShadow style={styles.shadowProps}>
        // <View>
        // <Card
        // style={{}}
        // >
        <TouchableOpacity onPress={() => { setShow(!show) }} activeOpacity={0.88} style={[styles.container, patientStyle, { elevation: 5 }]}>
            <Image style={[styles.img, imgStyle]} source={img} />
            <Text style={styles.txt}>{txt}</Text>
            {show ? <Image style={styles.doneicon} source={require("../assets/images/doneIcon.png")} /> : <></>}
        </TouchableOpacity>
        // </Card>
        // </View>
        // {/* </DropShadow> */}
        // {/* </Shadow> */}
    )
}

export default ProPatBox;
const styles = StyleSheet.create({
    container: {
        width: 252,
        height: 186,
        backgroundColor: "#fff",
        alignSelf: "center",
        position: "absolute",
        top: 220,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 60,
    },
    shadowProps: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
        // background color must be set
        backgroundColor: "#0000" // invisible color
    },
    txt: {
        color: "#000000",
        fontSize: 18,
        marginTop: 20,
        fontFamily: FONT_FAMILY.MontserratMedium
    },
    img: {
        width: 67,
        height: 76,
        resizeMode: "contain",
    },
    doneicon: {
        width: "14%",
        height: 32,
        resizeMode: "contain",
        position: "absolute",
        right: 0,
        bottom: 0
    },
})