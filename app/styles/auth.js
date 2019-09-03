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
        height: 100
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

    }
});

