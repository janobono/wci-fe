import React from 'react';
import { Center, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { RESOURCE } from '../locale/i18n';

const NotFoundPage: React.FC = () => {
    const {t} = useTranslation();

    return (
        <Center role="alert" height="100vh">
            <Text>{t(RESOURCE.PAGE_NOT_FOUND)}</Text>
        </Center>
    );
};

export default NotFoundPage;
