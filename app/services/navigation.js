import React from 'react';
import {
    createAppContainer,
    createBottomTabNavigator,
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';
import Home from "app/screens/Home";
import Settings from "app/screens/Settings";
import MainSettings from "app/screens/MainSettings";
import Profile from "app/screens/Profile";
import Posts from "app/screens/Posts";
import Login from "app/screens/Login";
import Register from "app/screens/Register";
import Verify from "app/screens/Verify";
import Forget from "app/screens/Forget";
import Reset from "app/screens/Reset";
import {Ionicons} from "@expo/vector-icons";
import {Theme} from 'app/constants';
import Drawer from 'app/components/Drawer';
import {I18nManager} from "react-native";


const StackNavigationOptions = {
    headerTintColor: "white",
    headerStyle: {backgroundColor: Theme.primary_color}
}

const MainStackNavigator = createStackNavigator({
        Settings: Settings,
        Home: Home,

        MainSettings: MainSettings,
        Profile: Profile,
    },
    {
        defaultNavigationOptions: {
            ...StackNavigationOptions
        }
    });


const TabsNavigator = createBottomTabNavigator({

    Home: {
        screen: MainStackNavigator,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({tintColor}) => {
                return <Ionicons name="md-laptop" size={25} color={tintColor}/>;
            }
        }
    },

    xxx: createStackNavigator({
        xxx: {
            screen: Posts,
            navigationOptions: {
                ...StackNavigationOptions
            }
        }
    }, {
        navigationOptions: {
            tabBarLabel: "Posts",
            tabBarIcon: ({tintColor}) => {
                return <Ionicons name="md-camera" size={25} color={tintColor}/>;
            },

        }
    }),
}, {

    tabBarOptions: {
        style: {backgroundColor: Theme.primary_color},
        showLabel: false,
        inactiveTintColor: Theme.inactive_Color,
        activeTintColor: "white"
    }
});

const MainAppNavigator = createStackNavigator({
    Tabs: TabsNavigator,
    Login,
    Register,
    Verify,
    Forget,
    Reset
}, {
    mode: "modal",
    headerMode: "none"

});

const drawer = createDrawerNavigator({
    Home: {
        screen: MainAppNavigator,
        navigationOptions: {
            drawerLabel: "Home",
            drawerIcon: ({tintColor}) => {
                return <Ionicons name="md-laptop" size={25} color={tintColor}/>;
            }
        }
    },
    posts: {
        screen: Posts,
        navigationOptions: {
            drawerLabel: "Posts",
            drawerIcon: ({tintColor}) => {
                return <Ionicons name="md-camera" size={25} color={tintColor}/>;
            }
        }
    }
}, {
    drawerPosition: I18nManager.isRTL ? "right" : "left",
    contentComponent: Drawer,
    drawerBackgroundColor: "white",
    drawerType: "slide",
    hideStatusBar: false,
    contentOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: Theme.primary_color,
        itemsContainerStyle: {
            marginVertical: 0,
            backgroundColor: "white",
            flex: 1,
            alignItems: "stretch",
            height: "100%",

        },
        iconContainerStyle: {
            opacity: 0.4
        }
    }
})


export default createAppContainer(drawer);
