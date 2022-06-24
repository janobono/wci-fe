import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LogIn, LogOut, Moon, Settings, Sun } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { hasAdminAuthority, useAuthState } from '../../context/auth-state-context-provider';
import { RESOURCE } from '../../locale/i18n';
import { Box, Flex, HStack, IconButton, Spacer, Tooltip, useColorMode, useColorModeValue } from '@chakra-ui/react';
import CookiesConsent from '../cookie-consent';
import { FlagEn, FlagSk } from '../icon';
import { useGlobalState } from '../../context/global-state-context-provider';

const ContentLayout: React.FC<any> = ({children}) => {
    const {toggleColorMode} = useColorMode();
    const SwitchIcon = useColorModeValue(Moon, Sun);

    const {t} = useTranslation();
    const globalState = useGlobalState();
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

                <Tooltip label={t(RESOURCE.ACTION.SWITCH_LOCALE)}>
                    <IconButton
                        onClick={() => globalState.setLocale(globalState.locale === 'en' ? 'sk' : 'en')}
                        icon={globalState.locale === 'en' ?
                            <FlagSk/> :
                            <FlagEn/>
                        }
                        aria-label={t(RESOURCE.ACTION.SWITCH_LOCALE)}
                    />
                </Tooltip>

                <Tooltip label={t(RESOURCE.ACTION.SWITCH_COLOR_MODE)}>
                    <IconButton
                        onClick={toggleColorMode}
                        icon={<SwitchIcon/>}
                        aria-label={t(RESOURCE.ACTION.SWITCH_COLOR_MODE)}
                    />
                </Tooltip>

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
