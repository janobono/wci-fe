import React from 'react';
import { useTranslation } from 'react-i18next';
import { RESOURCE } from '../locale/i18n';

const NotFoundPage: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className="flex min-h-screen justify-center items-center">
            <p className="font-mono text-xl">{t(RESOURCE.PAGE_NOT_FOUND)}</p>
        </div>
    );
};

export default NotFoundPage;
