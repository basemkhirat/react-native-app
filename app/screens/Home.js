import React from 'react';
import {Button, Picker, StyleSheet, Text, View} from 'react-native';
import {I18nManager} from 'react-native';

export default class extends React.Component {

    static navigationOptions = {
        title: 'Home 2'
    };

    constructor() {
        super();
        this.state = {
            name: "hiiii default",
            language: "java"
        }
    }

    render() {

        return (

            <View>

                <Text style={{textAlign: "right"}}> Hi this is a sample text </Text>

                <Button style={styles.button} title={this.state.language}
                        //onPress={() => this.props.navigation.navigate("Login", {title: this.state.language})}/>
                        onPress={() => I18nManager.forceRTL(true)} />

                <Picker

                    selectedValue={this.state.language}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                    }>
                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="JavaScript" value="js"/>
                </Picker>

                {/*<Button style={styles.button} title={this.state.name} onPress={() => this.props.navigation.navigate("Login", {title: "Dfa"})}/>*/}

                {/*<TextInput*/}
                {/*    style={styles.input}*/}
                {/*    autoCapitalize="none"*/}
                {/*    value={this.state.name}*/}
                {/*    onChangeText={(xxx) => this.setState({name: xxx})}*/}
                {/*    placeholder="enter your name" />*/}
            </View>

        );
    }

}

const styles = StyleSheet.create({

    input: {
        borderWidth: 1,
        borderColor: "#cccccc",
        height: 30,
        padding: 5,

    },

    button: {
        borderWidth: 4,
        borderColor: "#cccccc",
        marginTop: "10",
        height: 50
    }
})
