import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {Theme} from 'app/constants';

export default (props) => {

    let content = props.title ? (<Text style={styles.text}>{props.title}</Text>) : props.children;

    return (
        <TouchableOpacity {...props} style={[styles.container, props.style]}>{content}</TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        backgroundColor: Theme.secondary_color
    },
    text: {
        textAlign: "center",

        color: Theme.primary_color_inverse
    }
});

