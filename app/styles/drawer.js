import {StyleSheet} from 'react-native';
import {Theme} from "app/constants";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Theme.primary_color,

    },

    box: {
        flex: 1,
        height: 200,
        backgroundColor: Theme.primary_color,
        justifyContent: "center",
        alignItems: "center",
    }

});
