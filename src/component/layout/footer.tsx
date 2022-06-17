import React from 'react';
import { HStack, Text } from '@chakra-ui/react';
import CookiesConsent from '../cookie-consent';

const Footer: React.FC = () => {
    return (
        <footer>
            <CookiesConsent/>
            <HStack w="100%" p={4} spacing={4}>
                <Text>Footer</Text>
            </HStack>
        </footer>
    );
};

export default Footer;
