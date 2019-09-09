import {StyleSheet} from "react-native";
import {Theme} from "app/constants";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Theme.primary_color,
        alignItems: "center",
        justifyContent: "center"
    },

    brand: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },

    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 5
    },

    title: {
        fontWeight: "bold",
        color: "#ffffff",
        fontSize: 18
    },

    form: {
        width: "85%",
        flex: 3
    },

    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        color: "#cccccc",
        marginVertical: 10
    },

    loading_button: {
        height: 70,
        justifyContent: "center"
    },

    button: {
        marginVertical: 10,
        height: 35,
        borderRadius: 5,
        backgroundColor: Theme.secondary_color,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4
    },

    links: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    first: {
        color: Theme.secondary_color
    },

    second: {
        color: Theme.secondary_color
    },

    error: {
        backgroundColor: "#800001",
        alignItems: "center",
        color: "blue",

    },

    facebook_button: {
        flexDirection: "row",

        backgroundColor: "#4267b2",
        paddingVertical:5,
        height: 40,
        borderRadius: 5,
        marginBottom: 10
    },

    facebook_button_text: {
        marginHorizontal: 10,
        color: "#ffffff",
        flex: 1,
        textAlign: "center"
    },

    facebook_button_icon: {
        color: "#ffffff",
        marginHorizontal:10
    },

    google_button: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#db3e29",
        paddingVertical:5,
        height: 40,
        borderRadius: 5,
        marginBottom: 10
    },

    google_button_text: {
        marginHorizontal: 10,
        color: "#ffffff",
        flex: 1,
        textAlign: "center"
    },

    google_button_icon: {
        color: "#ffffff",
        marginHorizontal:10
    },

    form_separator: {
        textAlign: "center",
        color: "#f5f5f5",
        marginVertical: 20
    }
});


