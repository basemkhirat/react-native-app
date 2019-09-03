import React from 'react';
import {I18nManager, StatusBar} from 'react-native';
import {useScreens} from 'react-native-screens'
import {persistor, store} from 'app/services/store';
import Navigation from 'app/services/navigation';
import {connect, Provider} from 'react-redux';
import {AppLoading} from "expo";
import {PersistGate} from 'redux-persist/integration/react';
import I18n from 'app/services/I18n';
import {Updates} from 'expo';

useScreens();

class App extends React.Component {

    state = {
        ready: false
    };

    constructor(props) {
        super(props);
    }

    async boot() {
        return await new Promise((resolve => {

            I18n.setLocale(store.getState().app.locale);

            let store_direction = store.getState().app.direction;
            let native_direction = I18nManager.isRTL ? "rtl" : "ltr";

            if (native_direction != store_direction) {
                Updates.reload();
            }

            resolve();
        }));
    }

    render() {

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
                    <Navigation/>
                </PersistGate>
            </Provider>
        );
    }

}

export default App;
