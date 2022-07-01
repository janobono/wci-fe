import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthState } from '../../context/auth-state-context-provider';
import { useGlobalState } from '../../context/global-state-context-provider';
import CookiesConsent from '../cookie-consent';
import { NavLink } from 'react-router-dom';
import { Tooltip } from '../ui/tooltip';
import { RESOURCE } from '../../locale/i18n';
import { Home, LogIn, LogOut } from 'react-feather';
import { FlagEn, FlagSk } from '../ui/icon';

const ContentLayout: React.FC<any> = ({children}) => {
    const {t} = useTranslation();
    const globalState = useGlobalState();
    const authState = useAuthState();

    return (
        <div className="flex flex-col min-h-screen">
            <header className="flex flex-wrap items-center justify-between px-12 h-32 relative">
                <div className="flex w-auto h-full items-center">
                    <NavLink
                        className="block text-center text-black text-lg no-underline"
                        to="/"
                    >{globalState.applicationName}</NavLink>
                </div>
                <div className="flex-1">
                </div>
                <div className="flex flex-wrap gap-10 items-baseline">
                    <Tooltip label={t(RESOURCE.ACTION.HOME)} className="-bottom-14">
                        <NavLink className="text-sm" to="/"><Home/></NavLink>
                    </Tooltip>

                    {
                        authState.token ? (
                            <Tooltip label={t(RESOURCE.ACTION.SIGN_OUT)} className="-bottom-14">
                                <div className="text-sm" onClick={() => authState.signOut()}><LogOut/></div>
                            </Tooltip>
                        ) : (
                            <Tooltip label={t(RESOURCE.ACTION.SIGN_IN)} className="-bottom-14">
                                <NavLink className="text-sm" to="/sign-in"><LogIn/></NavLink>
                            </Tooltip>
                        )
                    }

                    <Tooltip label={t(RESOURCE.ACTION.SWITCH_LOCALE)} className="-bottom-14">
                        <div
                            className="cursor-pointer"
                            onClick={() => globalState.setLocale(globalState.locale === 'en' ? 'sk' : 'en')}
                        >
                            {
                                globalState.locale === 'en'
                                    ? <FlagEn/>
                                    : <FlagSk/>
                            }
                        </div>
                    </Tooltip>
                </div>
            </header>
            <main className="flex-1 px-12">
                {children}
            </main>
            <footer className="px-12 py-12">
                <div className="w-full p-12 bg-blue-100">
                    <CookiesConsent/>
                </div>
            </footer>
        </div>
        // <Flex direction="column" minHeight="100vh">
        //     <HStack p={4} spacing={4}>
        //         <Tooltip label={t(RESOURCE.ACTION.HOME)}>
        //             <IconButton
        //                 as={NavLink}
        //                 aria-label={t(RESOURCE.ACTION.HOME)}
        //                 icon={<Home/>}
        //                 to="/"
        //             />
        //         </Tooltip>
        //
        //         <Tooltip label={t(RESOURCE.ACTION.SWITCH_LOCALE)}>
        //             <IconButton
        //                 onClick={() => globalState.setLocale(globalState.locale === 'en' ? 'sk' : 'en')}
        //                 icon={globalState.locale === 'en' ?
        //                     <FlagSk/> :
        //                     <FlagEn/>
        //                 }
        //                 aria-label={t(RESOURCE.ACTION.SWITCH_LOCALE)}
        //             />
        //         </Tooltip>
        //
        //         <Tooltip label={t(RESOURCE.ACTION.SWITCH_COLOR_MODE)}>
        //             <IconButton
        //                 onClick={toggleColorMode}
        //                 icon={<SwitchIcon/>}
        //                 aria-label={t(RESOURCE.ACTION.SWITCH_COLOR_MODE)}
        //             />
        //         </Tooltip>
        //
        //         <Spacer/>
        //
        //         {hasAdminAuthority(authState.user) ? (
        //             <Tooltip label="Settings">
        //                 <IconButton
        //                     as={NavLink}
        //                     aria-label="Go to settings"
        //                     icon={<Settings/>}
        //                     to="/settings"
        //                 />
        //             </Tooltip>
        //         ) : null}
        //
        //         {authState.token ? (
        //             <Tooltip label={t(RESOURCE.ACTION.SIGN_OUT)}>
        //                 <IconButton
        //                     aria-label={t(RESOURCE.ACTION.SIGN_OUT)}
        //                     onClick={() => authState.signOut()}
        //                     icon={<LogOut/>}
        //                 />
        //             </Tooltip>
        //         ) : (
        //             <Tooltip label={t(RESOURCE.ACTION.SIGN_IN)}>
        //                 <IconButton
        //                     as={NavLink}
        //                     aria-label={t(RESOURCE.ACTION.SIGN_IN)}
        //                     icon={<LogIn/>}
        //                     to="/sign-in"
        //                 />
        //             </Tooltip>
        //         )
        //         }
        //     </HStack>
        //     <Box as="main" flex={1} p={4}>
        //         {children}
        //     </Box>
        //     <CookiesConsent/>
        // </Flex>
    );
};

export default ContentLayout;
