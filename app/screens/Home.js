import React from 'react';
import {View} from 'react-native';
import {Button} from "app/elements";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from 'app/components/HeaderButton';
import {connect} from 'react-redux';
import {store} from 'app/services/store';
import {Updates} from 'expo';

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
        Updates.reload();
    }

    render() {

        return (
            <View>

                <Button title="en" onPress={() => this.changeLocale('en')}/>
                <Button title="ar" onPress={() => this.changeLocale('ar')}/>

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
