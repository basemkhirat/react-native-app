import React from 'react';
import {View, Text, I18nManager} from 'react-native';
import {Button} from "app/elements";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from 'app/components/HeaderButton';
import {connect} from 'react-redux';
import Resource from 'app/resources';
import {store} from 'app/services/store';
import { Updates } from 'expo';
import I18n from 'app/services/I18n';

class Home extends React.Component {

    state = {}

    static navigationOptions = (nav) => {

        return {


            title: "Home",

            headerLeft: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item
                            title="Favorite"
                            iconName="ios-menu"
                            onPress={() => nav.navigation.toggleDrawer()}
                        />
                    </HeaderButtons>
                );
            }
        }
    };


    changeLocale(locale) {
        store.dispatch({type: "locale", locale: locale});
    }


    render() {

        return (
            <View>
                <Text> { this.props.locale }</Text>
                <Text> { this.props.direction }</Text>

                <Text>{ I18n.locale } { I18nManager.isRTL ? "rtl": "ltr" }</Text>

                {/*<Text> { this.props.user ? this.props.user.email : "no user" }</Text>*/}

                <Button title="en" onPress={() => this.changeLocale('en')} />
                <Button title="ar" onPress={() => this.changeLocale('ar')} />

                <Button title="Login now" onPress={() => this.props.navigation.navigate("Login")}/>
            </View>
        );

    }
}

export default connect(state => {
    return {
        state: state,
        user: state.auth.user,
        token: state.auth.token,
        locale: state.app.locale,
        direction: state.app.direction
    }
})(Home);
