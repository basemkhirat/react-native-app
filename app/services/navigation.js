import React from 'react';
import {
    createAppContainer,
    createBottomTabNavigator,
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';
import Home from "app/screens/Home";
import Posts from "app/screens/Posts";
import Login from "app/screens/Login";
import {Ionicons} from "@expo/vector-icons";
import Colors from 'app/constants/colors';
import Drawer from 'app/components/Drawer';


const StackNavigationOptions = {
    headerTintColor: "white",

    headerStyle:
        {
            backgroundColor: Colors.primary,
        }
}

const MainStackNavigator = createStackNavigator({
        Home: Home,
        Posts: Posts
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

        style: {
            backgroundColor: Colors.primary
        },

        showLabel: false,
        inactiveTintColor: Colors.inactive,
        activeTintColor: "white"

    }
});

const MainAppNavigator = createStackNavigator({
    Tabs: TabsNavigator,
    Login: Login
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
    drawerPosition: "left",
    contentComponent: Drawer,
    drawerBackgroundColor: "white",
    drawerType: "slide",
    hideStatusBar: false,
    contentOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: Colors.primary,
        itemsContainerStyle: {
            marginVertical: 0,
            backgroundColor:"white",
            flex: 1,
            alignItems: "stretch",
            height: "100%",

        },
        iconContainerStyle: {
            opacity: .4
        }
    }
})


export default createAppContainer(drawer);
