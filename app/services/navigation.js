import React from 'react';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Settings from "app/screens/Settings";
import Profile from "app/screens/Profile";
import Login from "app/screens/Login";
import Register from "app/screens/Register";
import Universities from "app/screens/Universities";
import Colleges from "app/screens/Colleges";
import Courses from "app/screens/Courses";
import Enroll from "app/screens/Enroll";
import Course from "app/screens/Course";
import Video from "app/screens/Video";
import About from "app/screens/About";
import Materials from "app/screens/Materials";
import {Theme} from "app/constants";
import {Header} from 'app/components/Header';

const TabsNavigator = createBottomTabNavigator({
    Universities: Universities,
    MyCollege: {
        screen: Materials,
        params: {me: 1}
    },
    MyCourses: {
        screen: Courses,
        params: {me: 1}
    },
    Settings: Settings
}, {
    tabBarOptions: {
        style: {
            backgroundColor: Theme.dark_blue,
            height: 80
        },
        showLabel: false,
        inactiveTintColor: "#ffffff",
        activeTintColor: "#50e9f5"
    }
});

const MainStackNavigator = createStackNavigator({

    Login: {
        screen: Login,
        navigationOptions: {header: null}
    },
    Register: {
        screen: Register,
        navigationOptions: {header: null}
    },

    Enroll: Enroll,
    TabsNavigator: {screen: TabsNavigator},
    Course: Course,
    Video: Video,
    Courses: Courses,
    Profile: Profile,
    Colleges: Colleges,
    Materials: Materials,

    About: About
}, {
    defaultNavigationOptions: nav => {
        return {
            header: <Header {...nav}/>
        }
    },
});

export default createAppContainer(MainStackNavigator);
