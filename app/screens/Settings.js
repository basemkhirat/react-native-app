import React from 'react';
import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {Theme} from 'app/constants';
import {Icon} from 'app/elements';
import I18n from 'app/services/I18n';
import SettingItem from 'app/components/SettingItem';
import Resource from 'app/resources';
import Logo from 'app/components/icons/Settings';
import s from "app/styles/page";


class Settings extends React.Component {

    static navigationOptions = (nav) => {
        return {
            tabBarLabel: "الإعدادات",
            tabBarIcon: ({tintColor}) => {
                return (
                    <Logo color={tintColor}></Logo>
                );
            }
        }
    }

    _render_settings = () => {

        let {user} = this.props;

        return (
            <View>

                <SettingItem title="عن التطبيق" icon="md-at"
                             onPress={() => this.props.navigation.navigate('About')}/>

                {
                    user ? (
                            <React.Fragment>
                                <SettingItem title={I18n.t("edit_profile")} icon="md-contact"
                                             onPress={() => this.props.navigation.navigate('Profile')}/>

                                <SettingItem title={I18n.t("logout")} icon="ios-log-out"
                                             onPress={() => {
                                                 this.props.navigation.navigate("Login");
                                                 Resource.auth.logout();
                                             }}/>
                            </React.Fragment>
                        )
                        : null
                }

            </View>
        );

    }

    _render_profile = () => {

        let {user} = this.props;

        if (user) {
            return (
                <View style={styles.profile}>
                    <View style={styles.avatar}>
                        <Icon name="md-contact" size={49} color="white"/>
                    </View>
                    <View style={styles.welcome}>
                        <Text style={styles.welcome_title}>{I18n.t('welcome')} {user.first_name} !</Text>

                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.profile}>
                    <View style={styles.avatar}>
                        <Icon name="md-contact" size={49} color="white"/>
                    </View>
                    <View style={styles.welcome}>

                        <Text style={styles.welcome_title}>{I18n.t('welcome')} {I18n.t('guest')}!</Text>

                        <TouchableOpacity style={styles.welcome_action}
                                          onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={styles.welcome_action_text}>{I18n.t('login')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }

    }

    render() {
        return (
            <View style={s.container}>

                <View style={s.page}>
                    <StatusBar barStyle="light-content"/>
                    {this._render_profile()}
                    {this._render_settings()}
                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({

    profile: {
        backgroundColor: Theme.primary_color,
        height: 100,
        flexDirection: "row",
        marginBottom: 20
    },

    avatar: {
        paddingHorizontal: 20,
        backgroundColor: Theme.light_blue,
        justifyContent: "center"
    },

    welcome: {
        paddingHorizontal: 10,
        backgroundColor: Theme.light_blue,
        flex: 1,
        justifyContent: "center"
    },

    welcome_title: {
        fontWeight: "bold",
        textAlign: "left"
    },

    welcome_action: {
        marginVertical: 10
    },

    welcome_action_text: {
        color: Theme.primary_color,
        textAlign: "left"
    }
});

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}


export default connect(mapStateToProps)(Settings);
