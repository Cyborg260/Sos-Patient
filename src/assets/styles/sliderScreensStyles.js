import { Dimensions, StyleSheet } from "react-native";
import { FONT_FAMILY } from "../../constants";
const { width, height } = Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    allDotsImg: {
        width: 313,
        height: 270,
        resizeMode: "contain",
        alignSelf: "center",
        top: 10,
    },
    docImg: {
        width: 196,
        height: 336,
        resizeMode: "contain",
        alignSelf: "center",
        position: "absolute",
        top: -15,
    },
    bottomView: {
        backgroundColor: "#205C7E",
        width: "100%",
        height: "62%",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        position: "absolute",
        bottom: 0,
    },
    ViewTxt: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        zIndex: 1,
        backgroundColor: "red"
    },
    items2Styles: {
        justifyContent: "center",
        marginTop: 60,
    },
    MainTxt: {
        fontSize: 28,
        color: "#fff",
        fontFamily: FONT_FAMILY.MontserratBold,
        width: width,
        textAlign: "center"
    },
    detailTxt: {
        fontSize: 17,
        color: "#FEFEFE",
        fontWeight: "400",
        fontFamily: FONT_FAMILY.MontserratMedium,
        textAlign: "center",
        marginTop: 15,
        width: width
    },
    footerView1: {
        height: 20,
        width: "20%",
        justifyContent: "center",
        marginTop: 20,
        alignSelf: "center",
        zIndex: 1
    },
    footerView2: {
        flexDirection: "row",
        justifyContent: "center",
    },
    sliderDots: {
        backgroundColor: "#fff",
        height: 8,
        width: 8,
        marginHorizontal: 4,
        borderRadius: 4
    },
    txtFlatlistView: {
        position: "absolute",
        width: width,
        flexDirection: "row",
        justifyContent: "center",

    },
    dotsTxtView: {
        backgroundColor: "red",
        width: width
    },
    loaderView: {
        position: "absolute",
        bottom:60,
        height: 80,
        alignSelf: "center",
        // backgroundColor: "red"
    },
    skipTxtOpacity: {
        alignSelf: "center",
        position: "absolute",
        zIndex: 1,
        bottom: 30
    },
    skipTxt: {
        color: "#fff",
        fontSize: 20,
        fontFamily: FONT_FAMILY.MontserratMedium,
    },
})