import React, { PropsWithChildren, ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

interface CardProps extends PropsWithChildren {
    menu?: ReactNode;
}

const Card: React.FC<CardProps> = ({children, menu}) => (
    <Flex>
        <Box
            padding={4}
            paddingRight={menu ? 0 : undefined}
            flex={1}
        >
            {children}
        </Box>
        {menu ? (
            <Box
                paddingRight={1}
                paddingTop={1}
            >
                {menu}
            </Box>
        ) : null}
    </Flex>
);

export default Card;
