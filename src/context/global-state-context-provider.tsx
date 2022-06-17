import React, { createContext, useContext, useEffect, useState } from 'react';
import i18n, { getLocale, LOCALE_ITEM } from '../locale/i18n';
import { client } from '../api/client';

const COOKIES_ENABLED = 'COOKIES_ENABLED';

const paths = {
    applicationProperties: '/application-properties'
};

interface ApplicationPropertiesResponse {
    applicationName: string,
    locales: string[]
}

export interface GlobalState {
    applicationName: string | undefined,
    locales: string[] | undefined,
    cookiesEnabled: boolean,
    setCookiesEnabled: (cookiesEnabled: boolean) => void,
    locale: string,
    setLocale: (locale: string) => void
}

const globalStateContext = createContext<GlobalState | undefined>(undefined);

const GlobalStateContextProvider: React.FC<any> = ({children}) => {
    const [applicationName, setApplicationName] = useState<string>();

    const [locales, setLocales] = useState<string[]>();

    const [cookiesEnabled, setCookiesEnabled] = useState(localStorage.getItem(COOKIES_ENABLED) === 'true');

    const [locale, setLocale] = useState(getLocale());

    const setCookiesEnabledToLocalStorage = (cookiesEnabled: boolean) => {
        if (cookiesEnabled) {
            localStorage.setItem(COOKIES_ENABLED, cookiesEnabled.toString());
        } else {
            localStorage.clear();
        }
        setCookiesEnabled(cookiesEnabled);
    }

    const setLocaleAndChangeLanguage = (locale: string) => {
        if (i18n.language !== locale) {
            i18n.changeLanguage(locale);
        }
        setLocale(locale);
    }

    useEffect(() => {
        client.get<ApplicationPropertiesResponse>(paths.applicationProperties).then(
            (data) => {
                setApplicationName(data.data.applicationName);
                setLocales(data.data.locales);
            }
        );
    }, [client]);

    useEffect(() => {
        if (cookiesEnabled) {
            localStorage.setItem(LOCALE_ITEM, locale);
        }
    }, [locale, cookiesEnabled])

    return (
        <globalStateContext.Provider
            value={
                {
                    applicationName,
                    locales,
                    cookiesEnabled,
                    setCookiesEnabled: setCookiesEnabledToLocalStorage,
                    locale,
                    setLocale: setLocaleAndChangeLanguage
                }
            }
        >{children}
        </globalStateContext.Provider>
    );
}

export default GlobalStateContextProvider;

export const useGlobalState = () => {
    const globalState = useContext(globalStateContext);

    if (!globalState) {
        throw Error('"useGlobalState" must be used within "GlobalStateContextProvider"');
    }

    return globalState;
}
