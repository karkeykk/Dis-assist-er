import React from "react";
import {Platform, StyleSheet, Text, View} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation";
import Home from "../screens/Home";
import HelpFeed from "../screens/HelpFeed";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";
import Fund from "../screens/Fund";
import {AskHelpSwitchNav} from "./Switch";
import CheckProfile from "../secondary/CheckProfile";
import AskHelpHome from "../screens/AskHelpHome";
import AskHelpForm from "../screens/AskHelpForm";
import CheckAskHelp from "../secondary/CheckAskHelp";

const HomeStack = createStackNavigator({
    Home: Home,
    Alert: Home,
    Weather: Home,
},{
    initialRouteName: "Home",
    headerMode: 'float',
});


const FeedStack = createStackNavigator({
    Feed: HelpFeed,
    Feed1: HelpFeed
},{
    initialRouteName: "Feed",
    headerMode: 'float'
});


const FundStack = createStackNavigator({
    Fund: Fund
},{
    initialRouteName: "Fund",
    headerMode: 'float'
});


const ChatStack = createStackNavigator({
    Chat: {
        screen: Chat
    }
}, {
    initialRouteName: "Chat",
    headerMode: 'float',
});

const ProfileStack = createStackNavigator({
    Profile: {
        screen: Profile
    }
}, {
    initialRouteName: "Profile",
    headerMode: 'none',
});

const HelpStack = createStackNavigator({
    HelpStackHome: AskHelpHome,
}, {
    initialRouteName: "HelpStackHome",
    headerMode: 'float',
});

const HelpFormStack = createStackNavigator({
    HelpFormStackHome: {
        screen: AskHelpForm
    }
}, {
    initialRouteName: "HelpFormStackHome",
    headerMode: 'none',
});



export const HomeStackNavigator = createAppContainer(HomeStack);
export const FeedStackNavigator = createAppContainer(FeedStack);
export const ChatStackNavigator = createAppContainer(ChatStack);
export const FundStackNavigator = createAppContainer(FundStack);
export const ProfileStackNavigator = createAppContainer(ProfileStack);
export const HelpStackNavigator = createAppContainer(HelpStack);
export const HelpFormNavigator = createAppContainer(HelpFormStack);


const AppTabNavigator = createBottomTabNavigator({
        HelpFeed: {
            screen: FeedStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Feed',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-hand" size={35} color={tintColor}/>
                )
            }
        },
        AskHelp: {
            screen: HelpStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Ask Help',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-help-buoy" size={35} color={tintColor}/>
                )
            }
        },
        Home: {
            screen: HomeStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-home" size={35} color={tintColor}/>
                )
            }
        },
        Fund: {
            screen: FundStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Fund',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-cash" size={35} color={tintColor}/>
                )
            }
        },
        Profile: {
            screen: CheckProfile,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-person" size={35} color={tintColor}/>
                )
            }
        }
    },
    {   initialRouteName:"Home",
        swipeEnabled: true,
        animationEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            activeTintColor: '#2D3F43',
            inactiveTintColor: '#A7B6B9',
            showLabel: false,
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: '#EEF2F5',
            },
        },
    }
);




const AppStack = createStackNavigator({
    Apps: {
        screen: createAppContainer(AppTabNavigator),
    },
    AppChat: ChatStackNavigator,
    FormPage: CheckAskHelp
}, {
    headerMode: 'none'
});



export const AppStackNav = createAppContainer(AppStack);
