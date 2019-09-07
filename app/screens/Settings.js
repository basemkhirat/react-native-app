import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header} from 'app/components/Header';
import {connect} from 'react-redux';
import {Theme} from 'app/constants';
import {Icon} from 'app/elements';
import I18n from 'app/services/I18n';
import SettingItem from 'app/components/SettingItem';
import Resource from 'app/resources';

class Settings extends React.Component {

    static navigationOptions = (nav) => {
        return {
            header: <Header {...nav} hasBack={true}/>
        }
    };

    _render_profile = () => {

        let {user} = this.props;

        if (user) {
            return (
                <View style={styles.profile}>
                    <View style={styles.avatar}>
                        <Icon name="md-contact" size={49} color="white"/>
                    </View>
                    <View style={styles.welcome}>
                        <Text style={styles.welcome_title}>{I18n.t('welcome')} {user.name} !</Text>
                        <TouchableOpacity style={styles.welcome_action}
                                          onPress={() => this.props.navigation.navigate('Profile')}>
                            <Text style={styles.welcome_action_text}>{I18n.t('edit_profile')}</Text>
                        </TouchableOpacity>
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

        let {user} = this.props;

        return (

            <View>
                {this._render_profile()}
                <SettingItem title={I18n.t("general_settings")} icon="ios-settings"
                             onPress={() => this.props.navigation.navigate("MainSettings")}/>
                {user ? <SettingItem title={I18n.t("logout")} icon="ios-log-out"
                                     onPress={() => Resource.auth.logout()}/> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    profile: {
        backgroundColor: Theme.primary_color,
        height: 100,
        flexDirection: "row"
    },

    avatar: {
        paddingHorizontal: 20,
        backgroundColor: Theme.secondary_color,
        justifyContent: "center"
    },

    welcome: {
        paddingHorizontal: 10,
        backgroundColor: "#f5f5f5",
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
