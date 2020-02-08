import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {withNavigation} from 'react-navigation';
import {Image} from "react-native-expo-image-cache";


const Course = props => {

    let {navigation, course} = props;

    const navigateToCourse = () => {
        navigation.navigate("Course", {course})
    }

    return (

        <TouchableOpacity style={styles.box} onPress={() => navigateToCourse()}>

            <View style={styles.box_inner}>

                <Image
                    style={styles.box_inner_image}
                    uri={course.image_url}
                    preview={{color: "#ccc"}}
                />

                <LinearGradient
                    start={[0.1, 0.2]}
                    colors={['transparent', '#256ce2']}
                    style={styles.box_inner_gradient}
                />

                <View style={styles.course_details}>
                    <Text style={styles.course_name}>{course.title}</Text>
                    <Text style={styles.course_info}>{course.material.name}</Text>
                    <Text style={styles.course_info}>{course.college.name} - {course.university.name}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    box: {
        width: "100%",
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

    course_details: {
        justifyContent: "center",

        position: "absolute",
        top: 55,
        left: 0,
        bottom: 0,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: "100%"
    },

    course_name: {
        color: "#50e9f6",
        fontWeight: "bold",
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlign: "left",
        width: "100%",
        fontSize: 16
    },

    course_info: {
        textAlign: "left",
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: "white",
        fontWeight: "bold"
    }
});

export default withNavigation(Course);
