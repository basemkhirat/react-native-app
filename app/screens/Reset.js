import React from 'react';
import {ActivityIndicator, Animated, Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Button, SnackBar, TextInput} from 'app/elements';
import styles from 'app/styles/auth';
import I18n from 'app/services/I18n';
import Resource from 'app/resources';

export default class Verify extends React.Component {

    state = {
        loading: false,
        code: "",
        password: "",
        error: null,
        form_translate_y: new Animated.Value(50),
        brand_translate_y: new Animated.Value(-50)
    }

    componentDidMount() {
        Animated.parallel([
            Animated.timing(this.state.form_translate_y, {
                toValue: 0
            }),
            Animated.timing(this.state.brand_translate_y, {
                toValue: 0
            }),
        ]).start();
    }

    reset() {

        this.setState({loading: true});

        Resource.auth.post('/reset', {code: this.state.code, password: this.state.password})
            .then((user) => {
                this.setState({error: null});
                this.props.navigation.replace("Login");
            })
            .catch(error => {
                this.setState({error: error[0]});
            })
            .then(() => {
                this.setState({loading: false});
            })

    }

    render() {

        return (

            <SafeAreaView style={styles.container}>

                <Animated.View style={[styles.brand, {transform: [{translateY: this.state.brand_translate_y}]}]}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                        <Image resizeMode="contain" style={styles.logo} source={require("app/assets/icon.png")}/>
                    </TouchableOpacity>

                    <Text style={styles.title}> {I18n.t('reset_password')} </Text>

                </Animated.View>

                <Animated.View style={[styles.form, {transform: [{translateY: this.state.form_translate_y}]}]}>

                    <TextInput defaultValue={this.state.code}
                               onChangeText={code => this.setState({code})}
                               placeholder={I18n.t('verification_code')}
                               style={styles.input}
                    />

                    <TextInput value={this.state.password}
                               onChangeText={password => this.setState({password})}
                               placeholder={I18n.t("password")}
                               secureTextEntry={true}
                               style={styles.input}
                    />

                    <View style={styles.loading_button}>
                        {this.state.loading ? <ActivityIndicator size="small" color="white"/> :
                            <Button title={I18n.t('change_password')} style={styles.button}
                                    onPress={this.reset.bind(this)}/>}
                    </View>

                    <View style={styles.links}>
                        <TouchableOpacity onPress={() => this.props.navigation.replace("Forget")}>
                            <Text style={styles.first}>{I18n.t("forget_password")}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.replace("Register")}>
                            <Text style={styles.second}>{I18n.t("new_user")}</Text>
                        </TouchableOpacity>
                    </View>

                </Animated.View>

                <SnackBar type="success" visible={true}>
                    {I18n.t("password_reset_code_sent")}
                </SnackBar>

                <SnackBar type="error" visible={this.state.error ? true : false}>
                    {this.state.error}
                </SnackBar>

            </SafeAreaView>
        );
    }
}
