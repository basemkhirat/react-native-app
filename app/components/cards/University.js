import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {withNavigation} from 'react-navigation';
import {Image} from "react-native-expo-image-cache";

const University = props => {

    let {university, navigation} = props;

    return (
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("Colleges", {university})}>

            <View style={styles.box_inner}>
                <Image
                    resizeMode="contain"
                    style={styles.box_inner_image}
                    uri={university.image_url}
                />
                <Text style={styles.box_inner_text}>{university.name}</Text>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    box: {
        width: "50%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },

    box_inner: {
        backgroundColor: "#ffffff",
        alignItems: "center",
        flex: 1,
        width: "90%",
        borderRadius: 20,
        shadowColor: "#86878b",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        paddingTop: 10,
        borderWidth: 1,
        borderColor: "#e6e8ee"
    },

    box_inner_image: {
        width: "90%",
        height:200,
        flex: 1
    },

    box_inner_text: {
        height: 50,
        justifyContent: "center",
        paddingVertical: 20,
        color: "#8a8a8a"
    }
});


export default withNavigation(University);
