import { StyleSheet } from "react-native";
import { FONT_FAMILY } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    // docImgView: {
    //     // // width: "98%",
    //     // // height: "60%",
    //     width:"100%",
    //     height:"52%",
    //     marginTop: 45,
    // },
    docImg: {
        width: "90%",
        height: 356,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: "7%",
        
    },
    appNameTxt: {
        color: "#2E90BF",
        fontSize: 30,
        alignSelf: "center",
        position: "absolute",
        top: 470,
        fontFamily: FONT_FAMILY.MontserratExtraBold
    },

    instTxt: {
        color: "#000000",
        alignSelf: "center",
        fontSize: 14,
        position: "absolute",
        top: 580,
        fontWeight: "500",
        fontFamily: FONT_FAMILY.MontserratMedium
    },

    // docImg1:{
    //     width:110,
    //     height:110,
    //     position:"absolute",
    //     top:85,
    //     left:234,
    // },
    // docImg2:{
    //     width:59,
    //     height:59,
    //     position:"absolute",
    //     top:176,
    //     left:14,
    // },
    // docImg3:{
    //     width:129,
    //     height:129,
    //     position:"absolute",
    //     top:198,
    //     left:94,
    // },
    // docImg4:{
    //     width:69,
    //     height:69,
    //     position:"absolute",
    //     top:228,
    //     left:251,
    // },
    // docImg5:{
    //     width:74,
    //     height:74,
    //     position:"absolute",
    //     top:308,
    //     left:10,
    // },
    // docImg6:{
    //     width:74,
    //     height:74,
    //     position:"absolute",
    //     top:308,
    //     left:209,
    // },
    // docImg7:{
    //     width:59,
    //     height:59,
    //     position:"absolute",
    //     top:382,
    //     left:99,
    // },
    // docImg8:{
    //     width:87,
    //     height:87,
    //     position:"absolute",
    //     top:354,
    //     left:214,
    // },

})