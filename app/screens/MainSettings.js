import React from 'react';
import {View} from 'react-native';
import {Header} from 'app/components/Header';
import {connect} from 'react-redux';
import I18n from 'app/services/I18n';
import SettingItem from 'app/components/SettingItem';
import {store} from 'app/services/store';
import {Picker, Switch} from "app/elements";

class MainSettings extends React.Component {

    state = {
        notification: false
    }

    static navigationOptions = (nav) => {

        return {
            header: <Header {...nav} hasBack={true}/>
        }
    };

    changeLocale(locale) {
        store.dispatch({type: "locale", locale: locale});
    }

    render() {
        return (
            <View>
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

                <SettingItem title={I18n.t("notification")} icon="md-notifications">

                    <Switch
                        value={this.state.notification}
                        onPress={() => {
                            this.setState({
                                notification: !this.state.notification
                            })
                        }}
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
