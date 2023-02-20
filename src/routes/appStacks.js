import {Easing} from 'react-native';
import React from 'react';
import SplashScreen from '../containers/splashScreen';
import Provider_patient from '../containers/provider_patient';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import SliderScreen from '../containers/sliderScreen';

const Stack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeconfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

export const ScreenNames = {
  SplashScreen: 'splashScreen',
  GuideScreen: 'guideScreen',
  SelectionScreen: 'selctionScreen',
};

const AppStacks = () => {
  const options = {
    headerShown: false,
    gestureEnabled: false,
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: config,
      close: closeconfig,
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };

  const screenOptions = {
    gestureEnabled: false,
    cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
  };

  return (
    <Stack.Navigator
      initialRouteName="splashScreen"
      sceeenOptions={screenOptions}>
      <Stack.Screen
        name="splashScreen"
        component={SplashScreen}
        options={options}
      />
      <Stack.Screen
        name="guideScreen"
        component={SliderScreen}
        options={options}
      />
      <Stack.Screen
        name="selctionScreen"
        component={Provider_patient}
        options={options}
      />
    </Stack.Navigator>
  );
};
export default AppStacks;
