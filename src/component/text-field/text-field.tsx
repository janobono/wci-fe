import { forwardRef } from 'react';
import { FormControl, FormErrorMessage, FormLabel, Input, InputProps, } from '@chakra-ui/react';
import { useField } from 'formik';

export interface TextFieldProps extends InputProps {
    label: string;
    name: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    function TextField({sx, isRequired, ...props}, ref) {
        const [field, meta] = useField(props.name);

        return (
            <FormControl
                isRequired={isRequired}
                isInvalid={meta.touched && !!meta.error}
                sx={sx}
            >
                <FormLabel htmlFor={props.id || props.name}>{props.label}</FormLabel>
                <Input {...field} {...props} id={props.id || props.name} ref={ref}/>
                <FormErrorMessage>{meta.error}</FormErrorMessage>
            </FormControl>
        );
    }
);

TextField.defaultProps = {
    variant: 'filled',
    size: 'lg',
};

export default TextField;
