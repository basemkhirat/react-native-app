import {I18nManager} from 'react-native';
import I18n from 'react-native-i18n';
import en from 'app/lang/en';
import ar from 'app/lang/ar';

/*
    We are very likely not to have all the languages translated,
    so fallback to default locale in case we don't
 */
I18n.fallbacks = true;

/*
    Set the translations themselves.
    Remember that iw=he
 */
const iw=ar;
I18n.translations = {
    en,
    ar,
};

/*
    Only allow RTL if we have translations for RTL languages (ie. not fallbacks)
*/
I18nManager.allowRTL(I18n.locale in I18n.translations);

/*
    Set start/end for developer use in non-RTL aware cases,
    for example, when using 'react-native-navigation':
        this.props.navigator.toggleDrawer({
            side: I18n.start, //instead of hardcoing left/right
            animated: true
        });
 */
I18n.start  = I18nManager.isRTL ? 'right' : 'left';
I18n.end    = I18nManager.isRTL ? 'left' : 'right';

export default I18n;
