import {createStore} from 'redux';
import reducers from 'app/reducers';

import {persistReducer, persistStore} from "redux-persist";
import {AsyncStorage} from 'react-native';

const persistConfig = {
    key: "datax",
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {
    store,
    persistor
}

