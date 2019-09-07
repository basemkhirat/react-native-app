import React from "react";
import {I18nManager, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Icon} from 'app/elements';

export default props => {

    let icon = props.icon ? props.icon : null;
    let title = props.title ? props.title : "";
    let arrowIcon = I18nManager.isRTL ? "ios-arrow-back" : "ios-arrow-forward";
    let onPress = props.onPress ? props.onPress : false;

    let wrapper = (

        <View {...props} style={[styles.setting_row, props.style]}>

            {icon ? (<View style={styles.left}>
                <Icon style={styles.icon} name={icon}/>
            </View>) : null}

            <View style={styles.center}>
                <Text style={styles.title}>{title}</Text>
            </View>

            <View style={styles.right}>
                {onPress ? (<Icon style={styles.arrow} name={arrowIcon}/>) : props.children}
            </View>

        </View>
    );

    return onPress ? <TouchableOpacity onPress={onPress}>{wrapper}</TouchableOpacity> : wrapper;
}


const styles = StyleSheet.create({

    setting_row: {
        flexDirection: "row",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#f5f5f5",
        height: 50
    },

    left: {
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingRight: 0
    },

    icon: {
        color: "#7d7d7d"
    },

    center: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 14
    },

    title: {
        textAlign: "left",
        fontWeight: "bold",
        color: "#7d7d7d"
    },

    right: {
        justifyContent: "center",
        paddingHorizontal: 14
    },

    arrow: {
        color: "#7d7d7d"
    },
});
