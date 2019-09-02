import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from 'app/components/HeaderButton';
import {Button} from "app/elements";

export default class extends React.Component {

    static navigationOptions = (nav) => {

        return {
            title: 'Posts',
            headerLeft: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item
                            title="Favorite"
                            iconName="ios-menu"
                            onPress={() => nav.navigation.toggleDrawer()}
                        />
                    </HeaderButtons>

                );
            }
        }
    };
    render() {

        return (

            <SafeAreaView style={{ backgroundColor: "#ffcc00"}}>

                <View style={{ backgroundColor: "#ffcc00", height: 60, alignItems: "center", justifyContent: "center"}}>
                    <Button title="go" onPress={() => this.props.navigation.navigate("Login")} />
                </View>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    button: {}
})
