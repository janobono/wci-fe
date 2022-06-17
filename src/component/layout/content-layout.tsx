import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LogIn, LogOut, Settings } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { hasAdminAuthority, useAuthState } from '../../context/auth-state-context-provider';
import { RESOURCE } from '../../locale/i18n';
import { Box, Flex, HStack, IconButton, Spacer, Tooltip } from '@chakra-ui/react';
import { LocaleSwitch } from '../switch';
import ColorModeSwitch from '../switch/color-mode-switch';
import CookiesConsent from '../cookie-consent';

const ContentLayout: React.FC<any> = ({children}) => {
    const {t} = useTranslation();
    const authState = useAuthState();

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
                <LocaleSwitch/>
                <ColorModeSwitch/>
                <Spacer/>

                {hasAdminAuthority(authState.user) ? (
                    <Tooltip label="Settings">
                        <IconButton
                            as={NavLink}
                            aria-label="Go to settings"
                            icon={<Settings/>}
                            to="/settings"
                        />
                    </Tooltip>
                ) : null}

                {authState.token ? (
                    <Tooltip label={t(RESOURCE.ACTION.SIGN_OUT)}>
                        <IconButton
                            colorScheme="transparent"
                            aria-label={t(RESOURCE.ACTION.SIGN_OUT)}
                            onClick={() => authState.signOut()}
                            icon={<LogOut/>}
                        />
                    </Tooltip>
                ) : (
                    <Tooltip label={t(RESOURCE.ACTION.SIGN_IN)}>
                        <IconButton
                            as={NavLink}
                            aria-label={t(RESOURCE.ACTION.SIGN_IN)}
                            icon={<LogIn/>}
                            to="/sign-in"
                        />
                    </Tooltip>
                )
                }
            </HStack>
            <Box as="main" flex={1} p={4}>
                {children}
            </Box>
            <CookiesConsent/>
        </Flex>
    );
};

export default ContentLayout;
