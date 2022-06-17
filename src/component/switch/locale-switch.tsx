import React from 'react';
import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { useGlobalState } from '../../context/global-state-context-provider';
import { FlagEn, FlagSk } from '../icon';

type LocaleSwitchProps = Omit<IconButtonProps, 'aria-label'>;

const LocaleSwitch: React.FC<LocaleSwitchProps> = (props) => {
    const globalState = useGlobalState();

    return (
        <IconButton
            onClick={() => globalState.setLocale(globalState.locale === 'en' ? 'sk' : 'en')}
            icon={globalState.locale === 'en' ?
                <FlagSk/> :
                <FlagEn/>
            }
            aria-label=""
            {...props}
        />
    );
}

export default LocaleSwitch;
