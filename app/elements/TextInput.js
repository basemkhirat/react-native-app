import React from 'react';
import {StyleSheet, TextInput} from "react-native";

export default (props) => {
    return (
        <TextInput
            autoCapitalize="none"
            placeholderTextColor="#cccccc"
            {...props}
            style={[styles.input, props.style]}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 8
    }
})
