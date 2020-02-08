import {StyleSheet} from "react-native";
import {Theme} from "app/constants";

export default StyleSheet.create({

    wrapper: {
        flex: 1
    },

    
    
    
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "stretch",
        paddingHorizontal: 50
    },

    brand: {
        height: 250,
        justifyContent: "center",
        alignItems: "center"
    },

    logo: {
        width: 256,
        borderRadius: 50,
    },

    title: {
        justifyContent: "center",

        height: 100
    },

    title_text: {
        fontWeight: "bold",
        color: Theme.black_color,
        fontSize: 18,
        textAlign: "center",
    },

    form: {
        marginVertical: 50
    },

    input: {
        borderWidth: 1,
        borderColor: "#cacad2",
        color: "#cacad2",
        marginVertical: 10,
        borderRadius: 30,
        padding: 20,
        fontSize: 16,
        textAlign: "right"
    },

    loading_button: {
        height: 70,
        justifyContent: "center"
    },

    button: {
        backgroundColor: Theme.light_blue,
        color: "#ffffff"
    },

    form_extra: {

        height: 200,
        justifyContent: "space-between"
    },

    links: {
        flexDirection: "row",
        justifyContent: "center",
    },

    first: {
        color: "#a2a2a2",
        marginHorizontal: 10
    },

    second: {
        color: "#a2a2a2",
        marginHorizontal: 10
    },

    error: {
        backgroundColor: "#800001",
        alignItems: "center",
        color: "blue",
    },

    social_buttons: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    twitter_button: {
        backgroundColor: "#1ca1f3",
        width: "47%",
        justifyContent: "center",
        alignItems: "center"
    },

    twitter_button_text: {
        color: "#ffffff"
    },

    google_button: {
        backgroundColor: "#db3e29",
        width: "47%",
        justifyContent: "center",
        alignItems: "center"
    },

    google_button_text: {
        color: "#ffffff"
    },

    form_separator: {
        color: "#cdccd5",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    },

    form_separator_line: {
        width: "100%",
        borderColor: 1,
        borderWidth: 1,
        backgroundColor: "#cdccd5",
        position: "absolute"
    },

    form_separator_text_wrapper: {
        backgroundColor: "#cac9d1",
       // width: 40,
        minWidth: 37,
        height: 40,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },

    form_separator_text: {
        color: "#ffffff"
    },

    picker: {
        borderWidth: 1,
        borderColor: "#cacad2",
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 50,
        textAlign: "right",
        marginVertical:10
    },

    picker_select_android: {
        backgroundColor: "white"
    },

    picker_select_ios: {
        backgroundColor: "white",
        textAlign: "right",
        color: "#cacad2"
    }
});


