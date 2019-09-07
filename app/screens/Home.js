import React from 'react';
import {Text, View} from 'react-native';
import {Button} from "app/elements";
import {connect} from 'react-redux';
import {store} from 'app/services/store';
import {Updates} from 'expo';
import {Header, Left, Right, Item} from 'app/components/Header';
import RNPickerSelect from 'react-native-picker-select';

class Home extends React.Component {

    static navigationOptions = (nav) => {

        let leftComponent = (
            <Left>
                <Item icon="ios-menu" onPress={() => nav.navigation.toggleDrawer()} />
            </Left>
        );

        let RightComponent = (
            <Right>
                <Item icon="ios-settings" onPress={() => nav.navigation.navigate("Settings")}/>
            </Right>
        );

        return {
            header: <Header {...nav} left={leftComponent} right={RightComponent}/>
        }
    };

    changeLocale(locale) {
        store.dispatch({type: "locale", locale: locale});
        Updates.reload();
    }

    render() {

        return (
            <View>

                <Text>{ this.props.locale }</Text>



                {/*<Button onPress={() => this.props.navigation.navigate("Posts")} title="Posts"/>*/}

                {/*<Button title="en" onPress={() => this.changeLocale('en')}/>*/}
                {/*<Button title="ar" onPress={() => this.changeLocale('ar')}/>*/}

                {/*<Button title="Login now" onPress={() => this.props.navigation.navigate("Login")}/>*/}



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
