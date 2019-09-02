import {store} from 'app/services/store';
import i18n from 'i18n-js';
import en from 'app/lang/en';
import ar from 'app/lang/ar';
import {I18nManager} from "react-native";


i18n.fallbacks = true;
i18n.translations = {en, ar};
i18n.locale = store.getState().app.locale;
I18nManager.forceRTL(store.getState().app.direction == "rtl" ? true : false);

export default i18n;



