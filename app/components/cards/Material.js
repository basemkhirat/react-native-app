import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {withNavigation} from 'react-navigation';
import {Image} from "react-native-expo-image-cache";

const Material = props => {

    let {navigation, material} = props;
    let preview = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";

    return (
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("Courses", {material})}>

            <View style={styles.box_inner}>

                <Image
                    style={styles.box_inner_image}
                    uri={material.image_url}
                    preview={{color: "#ccc"}}
                />

                <LinearGradient
                    colors={['transparent', '#256ce2']}
                    style={styles.box_inner_gradient}
                />

                <Text style={styles.box_inner_text}>{material.name}</Text>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    box: {
        width: "50%",
        height: 180,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },

    box_inner: {
        alignItems: "center",
        flex: 1,
        width: "93%",
        borderRadius: 20,
        shadowColor: "#86878b",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        borderWidth: 1,
        borderColor: "#e6e8ee",
        overflow: "hidden"
    },

    box_inner_gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: "100%",
    },

    box_inner_image: {
        width: "100%",
        flex: 1
    },

    box_inner_text: {
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        position: "absolute",
        top: 110,
        left: 0,
        bottom: 0,
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlign: "left",
        width: "100%"
    }
});

export default withNavigation(Material);
