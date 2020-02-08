import React, {useState} from 'react';
import {TextInput, Icon} from 'app/elements';
import I18n from "app/services/I18n";
import {Animated, StyleSheet, View, Text} from "react-native";
import {withNavigation} from 'react-navigation';

const SearchBar = props => {

    let [key, setKey] = useState("");


    return (
        <View style={styles.box}>

            <TextInput
                returnKeyType={"search"}
                onBlur={ e => {
                    props.navigation.navigate("Courses", {q: e.nativeEvent.text});
                }}
                defaultValue={key}
                //onChangeText={key => changeKey(key)}
                placeholder={I18n.t("search_in_app")}
                style={styles.input}
                {...props}
            />

            <View style={styles.icon}>
                <Icon name={"md-search"} color={"#ccc"}></Icon>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    box: {
        borderColor: "#cacad2",
        color: "#cacad2",
        marginVertical: 10,
        borderRadius: 30,
        fontSize: 16,
        textAlign: "right",
        backgroundColor: "#ffffff",
        flexDirection: "row",
        height: 40
    },

    input: {
         color: "#cacad2",
        fontSize: 16,
        textAlign: "right",
        paddingHorizontal: 20,
        flex: 1
    },

    icon :{
        width: 50,
        color: "#cacad2",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    }
});

export default withNavigation(SearchBar);
