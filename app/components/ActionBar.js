import React from 'react';
import {StyleSheet, StatusBar, View, Text} from 'react-native';

export default props => {

    return (
        <View>
            <View style={styles.statusbar} />
            <View style = {styles.bar}>
            <Text class={styles.title}> Hi App </Text>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    statusbar: {
        height: 30
    },

    bar: {
        height: 90,
        backgroundColor: "#2c205c",
        alignItems: "center",
        justifyContent: "center"
    },

    title: {
        color: "#ffcc00"
    }
});
