import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    fallbackLng: 'ru',
    debug: __IS_DEV__,
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
});

export default i18n;
