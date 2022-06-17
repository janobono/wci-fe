import { Center, Text } from '@chakra-ui/react';
import { FallbackProps } from 'react-error-boundary';

function ErrorFallback(_props: FallbackProps) {
    return (
        <Center role="alert" height="100vh">
            <Text>Unexpected error occurred</Text>
        </Center>
    );
}

export default ErrorFallback;
