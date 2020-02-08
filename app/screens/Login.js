import React from 'react';
import {ActivityIndicator, Animated, Image, Text, TouchableOpacity, View, StatusBar} from 'react-native';
import {Button, SnackBar, TextInput} from 'app/elements';
import styles from 'app/styles/auth';
import I18n from 'app/services/I18n';
import Resource from 'app/resources';
import {connect} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";

class Login extends React.Component {

    state = {
        loading: false,
        user: {email: "basem@gmail.com", password: "admin"},
        error: null,
        form_translate_y: new Animated.Value(50),
        brand_translate_y: new Animated.Value(-50)
    }

    async componentWillMount() {
        if(this.props.user){
            return await this.props.navigation.replace("TabsNavigator");
        }
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

        let { user } = this.props;

        this.setState({loading: true});

        Resource.auth.login(this.state.user)
            .then((user) => {
                this.setState({error: null});
                this.setState({loading: false});
                this.props.navigation.replace("TabsNavigator");
            })
            .catch(error => {
                this.setState({error});
                this.setState({loading: false});
            });
    }

    loginByFacebook() {

        alert("Not yet");
        return;

        Resource.auth.loginByFacebook().then(data => {
            this.props.navigation.replace("Universities");
        }).catch(error => {
            this.setState({error: error[0]});
        })
    }

    loginByGoogle() {

        alert("Not yet");
        return;

        Resource.auth.loginByGoogle().then(data => {
            this.props.navigation.navigate("TabsNavigator");
        }).catch(error => {
            this.setState({error: error[0]});
        })
    }

    render() {

        return (

            <View style={styles.container}>

                <StatusBar barStyle="dark-content"/>

                <Animated.View style={[styles.brand, {transform: [{translateY: this.state.brand_translate_y}]}]}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                        <Image resizeMode="contain" style={styles.logo} source={require("app/assets/logo_detailed.png")}/>
                    </TouchableOpacity>

                </Animated.View>

                <Animated.View style={[styles.form, {transform: [{translateY: this.state.form_translate_y}]}]}>

                    <TextInput value={this.state.user.email}
                               onChangeText={email => this.setState({user: {...this.state.user, email: email}})}
                               placeholder={I18n.t("email")}
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
                        {this.state.loading ? <ActivityIndicator size="small" color="blue"/> :
                            <Button title={I18n.t('login')} style={styles.button} onPress={this.login.bind(this)}/>}
                    </View>


                </Animated.View>

                <Animated.View style={[styles.form_extra]}>

                    <View style={styles.form_separator}>

                        <View style={styles.form_separator_line}/>

                        <View style={styles.form_separator_text_wrapper}>
                            <Text style={styles.form_separator_text}>{I18n.t("or_login_with_email")}</Text>
                        </View>

                    </View>

                    <View style={styles.social_buttons}>

                        <Button style={styles.twitter_button} onPress={() => this.loginByFacebook()}>
                            <Text style={styles.twitter_button_text}>Twitter</Text>
                        </Button>

                        <Button style={styles.google_button} onPress={() => this.loginByGoogle()}>
                            <Text style={styles.google_button_text}>Google</Text>
                        </Button>

                    </View>

                    <View style={styles.links}>
                        {/*<TouchableOpacity onPress={() => this.props.navigation.replace("Forget")}>*/}
                        {/*    <Text style={styles.first}>{I18n.t("forget_password")}</Text>*/}
                        {/*</TouchableOpacity>*/}

                        <TouchableOpacity onPress={() => this.props.navigation.replace("Register")}>
                            <Text style={styles.second}>{I18n.t("new_user")}</Text>
                        </TouchableOpacity>
                    </View>

                </Animated.View>

                <SnackBar type="error" visible={this.state.error ? true : false}>
                    {this.state.error}
                </SnackBar>

            </View>
        );
    }
}


export default connect(state => {
    return {
        user: state.auth.user,
        screen: state.app.screen
    }
})(Login);
