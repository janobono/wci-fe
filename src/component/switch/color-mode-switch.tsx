import * as React from 'react';
import { IconButton, IconButtonProps, useColorMode, useColorModeValue, } from '@chakra-ui/react';
import { Moon, Sun } from 'react-feather';

type ColorModeSwitchProps = Omit<IconButtonProps, 'aria-label'>;

const ColorModeSwitch: React.FC<ColorModeSwitchProps> = (props) => {
    const {toggleColorMode} = useColorMode();
    const SwitchIcon = useColorModeValue(Moon, Sun);

    return (
        <IconButton
            onClick={toggleColorMode}
            icon={<SwitchIcon/>}
            aria-label=""
            {...props}
        />
    );
}

export default ColorModeSwitch;
