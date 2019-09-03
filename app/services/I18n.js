import {store} from 'app/services/store';
import i18n from 'i18n-js';
import en from 'app/lang/en';
import ar from 'app/lang/ar';
import {I18nManager} from "react-native";

i18n.fallbacks = true;
i18n.translations = {en, ar};

i18n.setLocale = (locale) => {
    i18n.locale = locale;
    I18nManager.forceRTL(locale == "ar" ? true : false);
}

export default i18n;



