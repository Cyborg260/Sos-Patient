import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {FONT_FAMILY} from '../constants';
import {useDispatch, useSelector} from 'react-redux';
import {showbutton} from '../redux/action';
import {images} from '../utils/Images';
import {fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';

const ProPatBox = ({...props}) => {
  //======================== useState ==========================//
  const [show, setShow] = useState();
  //======================== useEffect =========================//
  useEffect(() => {
    setShow(show);
  }, []);
  const dispatch = useDispatch();
  const visible = useSelector(state => state.visible);
  const showButton = dispatch(showbutton(true));
  const {img, txt, patientStyle, imgStyle} = props;

  return (
    <TouchableOpacity
      onPress={() => {
        setShow(!show);
      }}
      activeOpacity={0.88}
      style={[styles.container, patientStyle, {elevation: 5}]}>
      <Image style={[styles.img, imgStyle]} source={img} />
      <Text style={styles.txt}>{txt}</Text>
      {show ? (
        <Image style={styles.doneicon} source={images.DoneIcon} />
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default ProPatBox;
const styles = StyleSheet.create({
  container: {
    width: 252,
    height: 186,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    marginTop: 20,
  },
  txt: {
    color: Colors.black,
    fontSize: 18,
    marginTop: 20,
    fontFamily: fonts.medium,
  },
  img: {
    width: 67,
    height: 76,
    resizeMode: 'contain',
  },
  doneicon: {
    width: '14%',
    height: 32,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
