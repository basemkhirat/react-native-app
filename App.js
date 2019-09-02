import React from 'react';
import {useScreens} from 'react-native-screens'
import {persistor, store} from 'app/services/store';
import Navigation from 'app/services/navigation';
import {Provider} from 'react-redux';
import {StatusBar, Text, View} from 'react-native';
import {AppLoading} from "expo";
import {PersistGate} from 'redux-persist/integration/react';
require("app/services/I18n");





useScreens();
console.log(store.getState().app.locale);
export default class App extends React.Component {

    state = {
        ready: false
    };




    constructor(props){
        super(props);
        console.log(store.getState().app.locale);
    }


    async boot() {
        return await new Promise((resolve => {
            resolve();
        }))
    }

    render() {

        // setTimeout(() => {
        //     RNRestart.Restart();
        // }, 3000)

        if (!this.state.ready) {
            return (
                <AppLoading
                    startAsync={this.boot}
                    onFinish={() => this.setState({ready: true})}
                    onError={console.warn}
                />
            );
        }

        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <StatusBar barStyle="light-content"/>
                    {/*<Text>{ store.getState().app.locale }</Text>*/}
                    <Navigation/>
                </PersistGate>
            </Provider>
        );
    }

}
