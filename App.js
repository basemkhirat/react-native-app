import React from 'react';
import {I18nManager, StatusBar} from 'react-native';
import {useScreens} from 'react-native-screens'
import {persistor, store} from 'app/services/store';
import Navigation from 'app/services/navigation';
import {Provider} from 'react-redux';
import {AppLoading, Updates} from "expo";
import {PersistGate} from 'redux-persist/integration/react';
import I18n from 'app/services/I18n';

useScreens();

class App extends React.Component {

    state = {
        ready: false
    };

    boot() {
        return new Promise(resolve => {

            I18n.setLocale(store.getState().app.locale);

            setTimeout(() => {
                if (store.getState().app.isRTL != I18nManager.isRTL) {
                    Updates.reload();
                }

                resolve();
            }, 3000)

        });
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
