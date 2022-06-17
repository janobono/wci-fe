import React from 'react';
import { useGlobalState } from '../../context/global-state-context-provider';
import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RESOURCE } from '../../locale/i18n';

const CookiesConsent: React.FC = () => {
    const {t} = useTranslation();
    const globalState = useGlobalState();

    if (globalState.cookiesEnabled) {
        return null;
    }

    return (
        <Box w="100%" p={4}>
            <Flex>
                <Center flex={1}>
                    <Text
                        fontSize="sm"
                        pr="1"
                    >
                        {t(RESOURCE.COOKIES_CONSENT.TEXT)}<span> </span>
                        <NavLink to="/cookies-info">{t(RESOURCE.COOKIES_CONSENT.LINK)}</NavLink>
                    </Text>
                    <Button
                        colorScheme="teal"
                        size="xs"
                        onClick={() => globalState.setCookiesEnabled(true)}
                    >
                        {t(RESOURCE.COOKIES_CONSENT.AGREE)}
                    </Button>
                </Center>
            </Flex>
        </Box>
    );
}

export default CookiesConsent;
