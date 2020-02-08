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
        marginVertical: 10,
        height: 60,
        borderRadius: 5,
        borderRadius: 30,
        fontSize: 16,
    },
    text: {
        textAlign: "center",
        color: Theme.primary_color,
        paddingVertical: 15,
        fontSize: 20,
        flex: 1
    }
});

