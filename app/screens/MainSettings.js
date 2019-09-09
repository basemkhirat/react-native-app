import React from 'react';
import {View} from 'react-native';
import {Header} from 'app/components/Header';
import {connect} from 'react-redux';
import I18n from 'app/services/I18n';
import SettingItem from 'app/components/SettingItem';
import {store} from 'app/services/store';
import {Picker, Switch} from "app/elements";
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

class MainSettings extends React.Component {

    state = {
        notifications: false
    }

    static navigationOptions = (nav) => {

        return {
            header: <Header {...nav} hasBack={true}/>
        }
    };


    changeLocale(locale) {
        store.dispatch({type: "locale", locale: locale});
    }

    async changeNotifications(locale) {


        const existingPermission = await Permissions.getAsync(Permissions.NOTIFICATIONS);

        let finalStatus = existingPermission.status;

        // only ask if permissions have not already been determined, because
        // iOS won't necessarily prompt the user a second time.
        if (finalStatus !== 'granted') {
            // Android remote notification permissions are granted during the app
            // install, so this will only ask on iOS
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }

        // Stop here if the user did not grant permissions
        if (finalStatus !== 'granted') {
            alert(I18n.t("push_notifications_not_granted"));
            return;
        }

        // Get the token that uniquely identifies this device
        let token = await Notifications.getExpoPushTokenAsync();

        console.log(token);

        this.setState({
            notifications: !this.state.notifications
        });
    }

    render() {
        return (
            <View>

                <SettingItem title={I18n.t("notifications")} icon="md-notifications">

                    <Switch
                        value={this.state.notifications}
                        onPress={() => this.changeNotifications()}
                    />

                </SettingItem>

                <SettingItem title={I18n.t("language")} icon="ios-globe">
                    <Picker
                        onValueChange={value => this.changeLocale(value)}
                        value={this.props.locale}
                        items={[
                            {label: 'English', value: 'en'},
                            {label: 'العربية', value: 'ar'},
                        ]}
                    />

                </SettingItem>

            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        locale: state.app.locale,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(MainSettings);
