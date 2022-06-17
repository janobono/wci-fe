import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Flex, HStack, IconButton, Tooltip } from '@chakra-ui/react';
import { RESOURCE } from '../../locale/i18n';
import { Home } from 'react-feather';
import CookiesConsent from '../cookie-consent';

const SimpleLayout: React.FC<any> = ({children}) => {
    const {t} = useTranslation();

    return (
        <Flex direction="column" minHeight="100vh">
            <HStack p={4} spacing={4}>
                <Tooltip label={t(RESOURCE.ACTION.HOME)}>
                    <IconButton
                        as={NavLink}
                        aria-label={t(RESOURCE.ACTION.HOME)}
                        icon={<Home/>}
                        to="/"
                    />
                </Tooltip>
            </HStack>
            <Box as="main" flex={1} p={4}>
                {children}
            </Box>
            <CookiesConsent/>
        </Flex>
    );
};

export default SimpleLayout;
