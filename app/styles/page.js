import {StyleSheet} from "react-native";
import {Theme} from "app/constants";

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: Theme.dark_blue
    },

    search: {
        height: 70,
        paddingHorizontal: 20
    },

    page: {
        flex: 1,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        padding: 20
    },

    page_title: {

    },

    page_title_text: {
        color: Theme.light_blue,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18
    },

    breadcrumb: {
        flexDirection: "row",
        height: 30,
        marginHorizontal: 5,

    },

    breadcrumb_item: {
        marginHorizontal: 3,
        justifyContent: "center"
    },

    breadcrumb_item_text: {
        color: "#838383",
        fontWeight: "bold",
        fontSize: 15
    },

    breadcrumb_item_text_active: {
        color: Theme.light_blue,
        fontWeight: "bold",
        fontSize: 15
    },

    boxes_wrapper: {
        paddingTop: 20
    },

    boxes: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingBottom: 40
    },

    loader_wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    no_content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    no_content_text: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#a7a7a7"
    },


    // accordion


    accordion: {

    },

    accordion_item: {


    },

    accordion_item_head: {
        backgroundColor: "#e3e3e3",
        height: 50,
        borderBottomColor: "#eaeaea",
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    accordion_item_head_text: {
        fontSize: 18,
        justifyContent: "center",
        alignItems: "center",
        color: Theme.dark_blue
    },
    accordion_item_head_icon: {
        paddingHorizontal: 10,
        color: Theme.dark_blue
    },

    accordion_item_content: {
        display: "none",
    },

    video_row: {
        flexDirection: "row",
        marginTop: 10,
        backgroundColor: "#f5f5f5",
        padding: 10
    },

    video_image: {
        width: "25%",
        backgroundColor: "#cccccc",
        height: 80
    },

    video_details: {
        padding: 10
    },

    video_title: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 10,
        textAlign: "left",
        color: Theme.dark_blues
    },

    video_length: {
        textAlign: "left"
    },

    header_title: {
        color: "white",
        fontSize: 17
    }
});


