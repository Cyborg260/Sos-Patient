import { View, Text, Easing } from 'react-native'
import React from 'react'
import SplashScreen from '../containers/splashScreen';
import Provider_patient from '../containers/provider_patient';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators, createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import SliderScreen from '../containers/sliderScreen';

const Stack = createStackNavigator();
const config = {
    animation: "spring",
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
    animation: "timing",
    config: {
        duration: 200,
        easing: Easing.linear,
    }
}

const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid
    },
});

const AppStacks = () => {
    return (
        <Stack.Navigator
            initialRouteName='splashScreen'
            sceeenOptions={{
                gestureEnabled: true,
                cardStyleInterpolator: CardStyleInterpolators.forNoAnimation
            }}
        >
            <Stack.Screen name='splashScreen' component={SplashScreen}
                options={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    transitionSpec: {
                        open: config,
                        close: closeconfig,
                    },
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            />
            <Stack.Screen name='provdrPatnt' component={Provider_patient}
                options={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    transitionSpec: {
                        open: config,
                        close: closeconfig,
                    },
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            />
            <Stack.Screen name='slider' component={SliderScreen}
                options={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    transitionSpec: {
                        open: config,
                        close: closeconfig,
                    },
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            />
        </Stack.Navigator>
    )
}
export default AppStacks;