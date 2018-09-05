import I18n from 'react-native-i18n';
import fr from './locales/fr.json';
import en from './locales/en.json';

I18n.translations = { fr , en};
I18n.locale = 'en';

export function translate(name, params = {}) {
    return I18n.t(name, params);
}
