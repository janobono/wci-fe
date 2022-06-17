import React from 'react';
import { Center, Spinner, SpinnerProps } from '@chakra-ui/react';

const FullScreenSpinner: React.FC<SpinnerProps> = (props) => (
    <Center height="100vh">
        <Spinner {...props} />
    </Center>
);

export default FullScreenSpinner;
