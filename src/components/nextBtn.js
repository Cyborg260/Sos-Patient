import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Svg, {Circle, G} from 'react-native-svg';
import {images} from '../utils/Images';
import {Colors} from '../utils/Colors';

const NextBtn = ({percentage, scrollTo}) => {
  //================== useState ===========================//
  const [onboarding, setOnboarding] = useState();
  //================== useEffect ==========================//
  useEffect(() => {
    console.log('================= first ==============');
    animation(percentage);
  }, [percentage]);
  useEffect(() => {
    console.log(percentage, '================= second ==============');
    progressAnimation.addListener(
      value => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;
        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage],
    );
  });
  const loader = () => {
    if (strokeDasharray === 57) {
      setOnboarding(!onboarding);
    } else {
      console.log('not found');
    }
  };
  const size = 75;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);
  const animation = toValue => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G origin={center} rotation="-90">
          <Circle
            stroke={Colors.white}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke={Colors.blue}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            fill={Colors.lightBlue}
          />
        </G>
      </Svg>

      {loader ? (
        <TouchableOpacity
          onPress={() => {
            scrollTo();
          }}
          style={styles.imgOpacity}
          activeOpacity={0.9}>
          <Image style={styles.rightArrowImg} source={images.ArrowRight} />
        </TouchableOpacity>
      ) : (
        <Text>shuja</Text>
      )}
    </View>
  );
};

export default NextBtn;

const styles = StyleSheet.create({
  rightArrowImg: {
    width: '70%',
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  imgOpacity: {
    width: '100%',
    height: 80,
    position: 'absolute',
    top: 8,
  },
  container: {},
});
