import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
  Dimensions,
  StatusBar,
  BackHandler,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from '../assets/styles/sliderScreensStyles';
import {useNavigation} from '@react-navigation/native';
import {sliderData} from '../utils/Data/sliderData';
import NextBtn from '../components/nextBtn';
import GetStartedBtn from '../components/getStartedBtn';
import {ScreenNames} from '../routes/appStacks';
import {Colors} from '../utils/Colors';

const SliderScreen = () => {
  //============== useState ==============//
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [show, setShow] = useState(false);
  //============== useEffect =============//
  useEffect(() => {
    BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
  }, []);
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('screen');
  const per = (currentSlideIndex + 1) * (100 / sliderData.length);
  const scrollx = useRef(new Animated.Value(0)).current;
  const slidesRef1 = useRef(null);
  const slidesRef2 = useRef(null);
  const viewableItemsChanged1 = useRef(({viewableItems}) => {
    setCurrentSlideIndex(viewableItems[0].index);
  }).current;
  const viewconfig1 = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const scrollToRight = () => {
    if (currentSlideIndex < sliderData.length - 1) {
      slidesRef1.current.scrollToIndex({index: currentSlideIndex + 1});
      slidesRef2.current.scrollToIndex({index: currentSlideIndex + 1});
    } else {
    }
  };
  const sliderItems = ({item}) => (
    <Items
      dotsImage={item.dotsImage}
      docImage={item.docImage}
      txt={item.txt}
      id={item.id}
    />
  );
  const Items = ({dotsImage, docImage, index}) => (
    <View key={index} style={{width: width, height: height}}>
      <Image style={styles.allDotsImg} source={dotsImage} />
      <Image style={styles.docImg} source={docImage} />
    </View>
  );
  const renderTxtItems = ({item}) => (
    <Items2
      dotsImage={item.dotsImage}
      docImage={item.docImage}
      txt={item.txt}
      id={item.id}
      detail={item.detail}
    />
  );
  const Items2 = ({txt, index, detail}) => (
    <View key={index} style={[styles.items2Styles, {width: width}]}>
      <Text style={styles.MainTxt}>{txt}</Text>
      <Text style={styles.detailTxt}>{detail}</Text>
    </View>
  );
  const handleBackButton = () => {
    navigation.goBack();
    return true;
  };
  console.log(
    currentSlideIndex,
    '============================index==========================',
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor={Colors.white}
      />
      <FlatList
        ref={slidesRef1}
        data={sliderData}
        renderItem={sliderItems}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        bounces={false}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        initialScrollIndex={0}
        scrollEventThrottle={0}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollx}}}],
          {
            useNativeDriver: false,
          },
        )}
        onViewableItemsChanged={viewableItemsChanged1}
        viewabilityConfig={viewconfig1}
      />
      <View style={styles.bottomView}>
        {/* ================= Slider Dots ================ */}
        <View style={styles.footerView1}>
          <View style={styles.footerView2}>
            {sliderData.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.sliderDots,
                  currentSlideIndex == index && {
                    backgroundColor: Colors.blue,
                    width: 16,
                  },
                ]}
              />
            ))}
          </View>
        </View>
        <View style={styles.txtFlatlistView}>
          <FlatList
            ref={slidesRef2}
            data={sliderData}
            renderItem={renderTxtItems}
            keyExtractor={item => item.id}
            horizontal={true}
            pagingEnabled={true}
            bounces={false}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            initialScrollIndex={0}
            scrollEventThrottle={0}
            viewabilityConfig={viewconfig1}
            onViewableItemsChanged={viewableItemsChanged1}
          />
        </View>
        <View style={styles.loaderView}>
          {currentSlideIndex === 3 ? (
            <GetStartedBtn />
          ) : (
            <NextBtn
              scrollTo={scrollToRight}
              percentage={(currentSlideIndex + 1) * (100 / sliderData.length)}
            />
          )}
        </View>
        {currentSlideIndex === 3 ? (
          <></>
        ) : (
          <TouchableOpacity
            style={styles.skipTxtOpacity}
            onPress={() => navigation.navigate(ScreenNames.SelectionScreen)}
            activeOpacity={0.85}>
            <Text style={styles.skipTxt}>Skip</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
export default SliderScreen;
