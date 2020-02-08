import React from 'react';
import {I18nManager, Image, Platform, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Theme} from "app/constants";
import {Ionicons} from '@expo/vector-icons';
import Logo from 'app/components/icons/Logo';

export const Item = (props) => {

    let icon = props.icon ? props.icon : "md-close-circle";
    let size = 27;

    return (
        <TouchableOpacity {...props} style={[styles.item, props.style]}>
            <Ionicons name={icon} size={size} color="#ffffff"/>
        </TouchableOpacity>
    );
}

export const Left = (props) => {
    return (
        <View style={styles.left}>
            { /* content goes here */}
            {props.children}
        </View>
    );
}

export const Right = (props) => {

    return (
        <View style={styles.right}>
            {props.children}
            { /* content goes here */}
        </View>
    );
}

export const Center = (props) => {
    return (
        <View style={styles.center}>
            {props.children ? props.children :
                <TouchableOpacity onPress={() => props.navigation.navigate("TabsNavigator")}>
                    <Logo />
                </TouchableOpacity>
            }
        </View>
    );
}

export class Header extends React.Component {

    render() {

        let hasBack = this.props.hasBack;
        hasBack = this.props.navigation.dangerouslyGetParent().state.index > 0

        let right = this.props.right;
        let left = this.props.left;

        let LeftComponent;

        if (left == "none") {
            LeftComponent = <View style={styles.left}/>;
        } else {
            if (hasBack) {
                let icon = I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back";
                LeftComponent = <Left><Item icon={icon} onPress={() => this.props.navigation.goBack()}/></Left>;
            } else {
                LeftComponent = left ? left : <Left {...this.props}/>;
            }
        }

        let RightComponent;

        if (right == "none") {
            RightComponent = <View style={styles.right}/>;
        } else {
            RightComponent = right ? right : <Right {...this.props}/>;
        }

        let CenterComponent = <Center {...this.props}/> ;

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>{LeftComponent}{CenterComponent}{RightComponent}</View>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: Theme.dark_blue,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },

    header: {
        height: 50,
        flexDirection: "row"
    },


    left: {
        flex: 1,
        justifyContent: "flex-start",
        paddingHorizontal: 10,
        alignItems: "center",
        flexDirection: "row"
    },

    center: {
        justifyContent: "center",
        paddingHorizontal: 5,
        flexDirection: "row",
        alignItems: "center"
    },

    right: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 10,
        alignItems: "center",
        flexDirection: "row"
    },

    item: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        padding: 7
    },

    itemText: {
        backgroundColor: Theme.primary_color_inverse
    }

})
