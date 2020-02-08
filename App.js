import React from 'react';
import {StatusBar} from 'react-native';
import {useScreens} from 'react-native-screens'
import {persistor, store} from 'app/services/store';
import Navigation from 'app/services/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import I18n from 'app/services/I18n';
import Splash from "app/components/Splash";

I18n.setLocale("ar");

useScreens();

class App extends React.Component {

    state = {
        ready: false
    };

    boot() {
        return new Promise(resolve => {
            resolve();
        });
    }

    render() {

        if (!this.state.ready) {
            return (
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                <Splash
                    startAsync={this.boot}
                    onFinish={() => this.setState({ready: true})}
                    onError={(error => console.warn(error))}
                />
                    </PersistGate>
                </Provider>
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
