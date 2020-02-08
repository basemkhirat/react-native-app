import React from 'react';
import {ActivityIndicator, Animated, Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Button, SnackBar, TextInput} from 'app/elements';
import styles from 'app/styles/auth';
import I18n from 'app/services/I18n';
import Resource from 'app/resources';

export default class _Register extends React.Component {

    state = {
        loading: false,
        user: {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        },
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

    register() {

        this.setState({loading: true});

        Resource.user.post("/", this.state.user)
            .then(user => {
                this.setState({error: null});
                this.props.navigation.replace("Verify");
            })
            .catch(error => {
                this.setState({error: error[0]});
            })
            .then(() => {
                this.setState({loading: false});
            });

    }

    render() {

        return (

            <SafeAreaView style={styles.container}>

                <Animated.View style={[styles.brand, {transform: [{translateY: this.state.brand_translate_y}]}]}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                        <Image resizeMode="contain" style={styles.logo} source={require("app/assets/icon.png")}/>
                    </TouchableOpacity>

                    <Text style={styles.title}> {I18n.t('register')} </Text>

                </Animated.View>

                <Animated.View style={[styles.form, {transform: [{translateY: this.state.form_translate_y}]}]}>

                    <TextInput value={this.state.user.first_name}
                               onChangeText={first_name => this.setState({
                                   user: {
                                       ...this.state.user,
                                       first_name: first_name
                                   }
                               })}
                               placeholder={I18n.t("first_name")}
                               style={styles.input}
                    />

                    <TextInput value={this.state.user.last_name}
                               onChangeText={last_name => this.setState({
                                   user: {
                                       ...this.state.user,
                                       last_name: last_name
                                   }
                               })}
                               placeholder={I18n.t("last_name")}
                               style={styles.input}
                    />

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
                            <Button title={I18n.t('register_now')} style={styles.button} onPress={this.register.bind(this)}/>}
                    </View>

                    <View style={styles.links}>
                        <TouchableOpacity onPress={() => this.props.navigation.replace("Forget")}>
                            <Text style={styles.first}>{I18n.t("forget_password")}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.replace("Login")}>
                            <Text style={styles.second}>{I18n.t("already_have_account")}</Text>
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
