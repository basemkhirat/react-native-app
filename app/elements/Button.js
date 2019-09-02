import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {Theme} from 'app/constants';

export default (props) => {
    return (
        <TouchableOpacity {...props} style={[styles.container, props.style]}>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
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
        fontSize: 17,
        color: Theme.primary_color_inverse
    }
});

