import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './page/sign-in';
import NotFoundPage from './page/404';
import IndexPage from './page';
import { useAuthState } from './context/auth-state-context-provider';
import SignUpPage from './page/sign-up';
import CookiesInfoPage from './page/cookies-info';
import { useGlobalState } from './context/global-state-context-provider';
import { FullScreenSpinner } from './component/ui/progress';

const App: React.FC = () => {
    const globalState = useGlobalState();
    const authState = useAuthState();

    useEffect(() => {
        if (globalState.applicationName) {
            document.title = globalState.applicationName;
        }
    }, [globalState.applicationName])

    return (
        globalState.applicationName ?
            <BrowserRouter>
                <Routes>
                    <Route path="/cookies-info" element={<CookiesInfoPage/>}/>
                    <Route path="/sign-in" element={<SignInPage/>}/>
                    <Route path="/sign-up" element={<SignUpPage/>}/>
                    <Route path="/" element={<IndexPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
            :
            <FullScreenSpinner/>
    );
}

export default App;
