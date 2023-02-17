import { Dimensions, StyleSheet } from "react-native";
import { FONT_FAMILY } from "../../constants";
const { width, height } = Dimensions.get('screen')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    backGrdImg: {
        flex: 1,
        resizeMode: "cover",
    },
    logoImg: {
        width: 152,
        height: 80,
        position: "absolute",
        resizeMode: "contain",
        backgroundColor: "#fff",
        top: 68,
        alignSelf: "center"
    },
    txt: {
        fontSize: 20,
        color: "#000000",
        fontFamily: FONT_FAMILY.MontserratMedium,
        alignSelf: "center",
        position: "absolute",
        top: 170

    },

    //============= Left Dots ===============//

    leftDot1: {
        width: "3%",
        height: 13,
        resizeMode: "contain",
        position: "absolute",
        top: 18,
        left: 127
    },
    leftDot2: {
        width: "10%",
        height: 39,
        resizeMode: "contain",
        position: "absolute",
        top: 46,
        left: 26,
    },
    leftDot3: {
        width: "2%",
        height: 7,
        resizeMode: "contain",
        position: "absolute",
        top: 162,
        left: 30,
    },
    leftDot4: {
        width: "3%",
        height: 13,
        resizeMode: "contain",
        position: "absolute",
        top: 238,
        left: 20,
    },
    leftDot5: {
        width: "3%",
        height: 13,
        resizeMode: "contain",
        position: "absolute",
        bottom: 96,
        left: 31,
    },
    leftDot6: {
        width: "1.8%",
        height: 6,
        resizeMode: "contain",
        position: "absolute",
        bottom: 19,
        left: 115,
    },

    //================== Right Dots ==================//

    RightDot1: {
        width: "3%",
        height: 13,
        position: "absolute",
        resizeMode: "contain",
        top: 31,
        right: 103
    },
    RightDot2: {
        width: "6%",
        height: 23,
        position: "absolute",
        resizeMode: "contain",
        top: 93,
        right: 42
    },
    RightDot3: {
        width: "1.8%",
        height: 13,
        position: "absolute",
        resizeMode: "contain",
        top: 180,
        right: 48
    },
    RightDot4: {
        width: "3%",
        height: 13,
        position: "absolute",
        resizeMode: "contain",
        top: 245,
        right: 29
    },
    RightDot5: {
        width: "6%",
        height: 23,
        position: "absolute",
        resizeMode: "contain",
        bottom: 64,
        right: 20
    },
    RightDot6: {
        width: "3%",
        height: 13,
        position: "absolute",
        resizeMode: "contain",
        bottom: 15,
        right: 92
    },
    patientView: {
        width: 252,
        height: 186,
        backgroundColor: "#fff",
        alignSelf: "center",
        position: "absolute",
        top: 425,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 60,
    },
    patientImgStyle: {
        width: 100,
        height: 72,
        resizeMode: "contain",
    },
    loginBtnView: {
        flexDirection: "row",
        position: "absolute",
        bottom: "6%",
        alignSelf: "center"
    },
    influTxt: {
        color: "#6E7071",
        fontSize: 12,
        fontFamily: FONT_FAMILY.MontserratMedium
    },
    loginTxtOpacity: {
    },
    loginTxt: {
        color: "#2790BF",
        fontSize: 12,
        fontFamily: FONT_FAMILY.MontserratBold
    },
})