import React from 'react';
import {ActivityIndicator, Animated, Image, SafeAreaView, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Button, SnackBar, TextInput, Icon} from 'app/elements';
import styles from 'app/styles/auth';
import I18n from 'app/services/I18n';
import Resource from 'app/resources';

export default class Login extends React.Component {

    state = {
        loading: false,
        user: {email: "", password: ""},
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

    login() {

        this.setState({loading: true});

        Resource.auth.login(this.state.user)
            .then((user) => {
                this.setState({error: null});
                this.props.navigation.navigate("Home");
            })
            .catch(error => {
                this.setState({error: error[0]});
            })
            .then(() => {
                this.setState({loading: false});
            });

    }

    loginByFacebook() {
        Resource.auth.loginByFacebook().then(data => {
           this.props.navigation.navigate("Home");
        }).catch(error => {
            this.setState({error: error[0]});
        })
    }

    loginByGoogle() {
        Resource.auth.loginByGoogle().then(data => {
            this.props.navigation.navigate("Home");
        }).catch(error => {
            this.setState({error: error[0]});
        })
    }

    render() {

        return (

            <SafeAreaView style={styles.container}>

                <Animated.View style={[styles.brand, {transform: [{translateY: this.state.brand_translate_y}]}]}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                        <Image resizeMode="contain" style={styles.logo} source={require("app/assets/icon.png")}/>
                    </TouchableOpacity>

                    <Text style={styles.title}> {I18n.t('login')} </Text>

                </Animated.View>

                <Animated.View style={[styles.form, {transform: [{translateY: this.state.form_translate_y}]}]}>

                    <View style={styles.social_buttons}>

                        <Button style={styles.facebook_button} onPress={() => this.loginByFacebook()}>
                            <Icon  style={styles.facebook_button_icon} name="logo-facebook" />
                            <Text style={styles.facebook_button_text}>{I18n.t("login_with_facebook")}</Text>
                        </Button>

                        <Button style={styles.google_button} onPress={() => this.loginByGoogle()}>
                            <Icon  style={styles.google_button_icon} name="logo-google" />
                            <Text style={styles.google_button_text}>{I18n.t("login_with_google")}</Text>
                        </Button>

                    </View>

                    <Text style={styles.form_separator}>
                        {I18n.t("or_login_with_email")}
                    </Text>

                    <TextInput value={this.state.user.email}
                               onChangeText={email => this.setState({user: {...this.state.user, email: email}})}
                               placeholder="me@example.com"
                               style={styles.input}
                    />

                    <TextInput value={this.state.user.password}
                               onChangeText={password => this.setState({
                                   user: {
                                       ...this.state.user,
                                       password: password
                                   }
                               })}
                               placeholder={I18n.t("password")}
                               secureTextEntry={true}
                               style={styles.input}
                    />

                    <View style={styles.loading_button}>
                        {this.state.loading ? <ActivityIndicator size="small" color="white"/> :
                            <Button title={I18n.t('login')} style={styles.button} onPress={this.login.bind(this)}/>}
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

                <SnackBar type="error" visible={this.state.error ? true : false}>
                    {this.state.error}
                </SnackBar>

            </SafeAreaView>
        );
    }
}
