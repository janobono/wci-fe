import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/translation.json';
import sk from './sk/translation.json';

export const LOCALE_ITEM = 'LOCALE';

export const LOCALE = {
    EN: 'en',
    SK: 'sk'
};

export const RESOURCE = {
    PAGE_NOT_FOUND: 'page-not-found',
    UNKNOWN_ERROR: 'unknown-error',
    ACTION: {
        HOME: 'action.home',
        SWITCH_LOCALE: 'action.switch-locale',
        SWITCH_COLOR_MODE: 'action.switch-color-mode',
        SIGN_IN: 'action.sign-in',
        SIGN_UP: 'action.sign-up',
        SIGN_OUT: 'action.sign-out'

    },
    COOKIES_CONSENT: {
        TEXT: 'cookies-consent.text',
        LINK: 'cookies-consent.link',
        AGREE: 'cookies-consent.agree'
    },
    COOKIES_INFO: {
        WEBSITE_INSTRUCTIONS: 'cookies-info.website-instructions',
        PERSONAL_INSTRUCTIONS: 'cookies-info.personal-instructions',
        AGREE_INSTRUCTIONS: 'cookies-info.agree-instructions',
        LEARN_INSTRUCTIONS: 'cookies-info.learn-instructions',
        DISABLE_INSTRUCTIONS: 'cookies-info.disable-instructions'
    },
    DELETE_CONFIRMATION_DIALOG: {
        TITLE: 'delete-confirmation-dialog.title'
    },
    ERROR_MESSAGE: {
        ERROR: 'error-message.error',
        SHOW_ERROR: 'error-message.show-error',
        COPY: 'error-message.copy'
    },
    SIGN_IN: {
        USERNAME: {
            LABEL: 'sign-in.username.label',
            PLACEHOLDER: 'sign-in.username.placeholder'
        },
        PASSWORD: {
            LABEL: 'sign-in.password.label',
            PLACEHOLDER: 'sign-in.password.placeholder'
        },
        ERROR: {
            USERNAME_REQUIRED: 'sign-in.error.username-required',
            PASSWORD_REQUIRED: 'sign-in.error.password-required',
            INVALID_CREDENTIALS: 'sign-in.error.invalid-credentials'
        }
    }
};

const resources = {
    en: {
        translation: en
    },
    sk: {
        translation: sk
    }
};

export const getLocale = () => {
    const locale = localStorage.getItem(LOCALE_ITEM);
    return locale ? locale : 'sk';
}

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        lng: getLocale(),
        fallbackLng: LOCALE.SK,
        interpolation: {
            escapeValue: false,
        },
        resources
    });

export default i18n;
