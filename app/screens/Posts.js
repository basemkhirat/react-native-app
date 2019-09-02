import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';


export default class extends React.Component {

    static navigationOptions = {
        title: 'Home screen'
    };

    render() {

        return (
            <View style={styles.container}>
                <Button
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate("Login")}
                    title="Login now" />

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    button: {

    }
})
