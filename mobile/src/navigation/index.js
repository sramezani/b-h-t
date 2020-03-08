/**
 * App Navigation
 *
 * */
import React from 'react';
import { Easing, Animated, View } from 'react-native';
import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Intro Screens
import Splash from '@containers/Intro/Splash/';


// MAin Screens
import Home from '@containers/Main/Home/';


// Consts and Libs
import { Color, StyleDefault } from '@theme/';

// Components
import { Util } from '@lib';

/* Navigation Options ======================== */
const headerOptions = {
    headerTitleContainerStyle: {
        ...StyleDefault.align_c,
        borderBottomWidth: 0
    },
    headerStyle: {
        backgroundColor: Color.primary
    },
    headerTitleStyle: {
        textAlign: 'center',
        paddingVertical: 7,
        color: Color.default
    },
    headerTintColor: Color.default
};

/* Transition Config ========================= */
const transitionConfig = () => ({
    transitionSpec: {
        duration: 100,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true
    },
    screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;

        const thisSceneIndex = scene.index;
        const width = layout.initWidth;

        const translateX = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex],
            outputRange: [width, 0]
        });

        return { transform: [{ translateX }] };
    }
});

const navigationConfig = {
    defaultNavigationOptions: {
        ...headerOptions,
        // headerBackImage: <Icon name="arrow-back" size={20} />,
        headerRight: <View />,
        headerBackTitle: null,
        gesturesEnabled: false
    },
    transitionConfig
    // headerMode: 'float'
};


const MainStackNavigator = createStackNavigator({

    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    }

}, {
    ...navigationConfig,
    initialRouteName: 'Home'
});

// MainStackNavigator.navigationOptions = ({ navigation }) => {
//     const { routeName } = navigation.state.routes[navigation.state.index];
//     const navigationOptions = {};

//     return navigationOptions;
// };


const AppNavigatorScreens = {
    Splash: {
        screen: Splash,
        navigationOptions: { header: null }
    },
    Main: {
        screen: MainStackNavigator,
        navigationOptions: { header: null }
    }
};

const AppNavigatorConfig = {
    initialRouteName: 'Splash'
};

/* Export Component ========================== */
export default createAppContainer(createSwitchNavigator(AppNavigatorScreens, AppNavigatorConfig));
