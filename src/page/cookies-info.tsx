import React from 'react';
import { SimpleLayout } from '../component/layout';
import { useTranslation } from 'react-i18next';
import { useGlobalState } from '../context/global-state-context-provider';

const CookiesInfoPage: React.FC = () => {
    const {t} = useTranslation();
    const globalState = useGlobalState();

    return (
        <SimpleLayout>
            {/*<Center>*/}
            {/*    <Box>*/}
            {/*        <Text>*/}
            {/*            {t(RESOURCE.COOKIES_INFO.WEBSITE_INSTRUCTIONS)}*/}
            {/*        </Text>*/}
            {/*        <Text>*/}
            {/*            {t(RESOURCE.COOKIES_INFO.PERSONAL_INSTRUCTIONS)}*/}
            {/*        </Text>*/}
            {/*        <Text>*/}
            {/*            {t(RESOURCE.COOKIES_INFO.AGREE_INSTRUCTIONS)}*/}
            {/*        </Text>*/}
            {/*        <Text>*/}
            {/*            {t(RESOURCE.COOKIES_INFO.LEARN_INSTRUCTIONS)}<span> </span>*/}
            {/*            <a href="https://ico.org.uk/for-organisations/guide-to-pecr/cookies-and-similar-technologies/">Information*/}
            {/*                Commissioner's Office</a>.*/}
            {/*        </Text>*/}
            {/*        <Text pt={10}>*/}
            {/*            {t(RESOURCE.COOKIES_INFO.DISABLE_INSTRUCTIONS)}*/}
            {/*        </Text>*/}
            {/*        <Box pl={10} pt={5}>*/}
            {/*            <ul>*/}
            {/*                <li>*/}
            {/*                    <a href={`https://support.google.com/accounts/answer/61416?hl=${globalState.locale}`}>chrome</a>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <a href="https://support.mozilla.org/en-GB/kb/enable-and-disable-cookies-website-preferences">firefox</a>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <a href="https://help.opera.com/en/latest/web-preferences/#cookies">opera</a>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac">safari</a>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </Box>*/}
            {/*    </Box>*/}
            {/*</Center>*/}
        </SimpleLayout>
    );
}

export default CookiesInfoPage;
