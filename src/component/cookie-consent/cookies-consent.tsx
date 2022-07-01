import React from 'react';
import { useGlobalState } from '../../context/global-state-context-provider';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RESOURCE } from '../../locale/i18n';
import { Button } from '../ui/button';

const CookiesConsent: React.FC = () => {
    const {t} = useTranslation();
    const globalState = useGlobalState();

    if (globalState.cookiesEnabled) {
        return null;
    }

    return (
        <div className="flex flex-wrap justify-center items-center py-1">
            <p className="text-sm px-1">
                {t(RESOURCE.COOKIES_CONSENT.TEXT)}
                <span> </span>
                <NavLink
                    className="text-gray-500 hover:text-gray-800"
                    to="/cookies-info"
                >{t(RESOURCE.COOKIES_CONSENT.LINK)}
                </NavLink>
            </p>
            <Button
                pill={true}
                variant="light"
                size="small"
                onClick={() => globalState.setCookiesEnabled(true)}
            >
                {t(RESOURCE.COOKIES_CONSENT.AGREE)}
            </Button>
        </div>
    );
}

export default CookiesConsent;
