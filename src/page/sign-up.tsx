import React, { useEffect, useState } from 'react';
import { SimpleLayout } from '../component/layout';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from '../context/auth-state-context-provider';
import { FieldValues, useForm } from 'react-hook-form';
import errorToAppError, { AppErrorCode } from '../util';
import { RESOURCE } from '../locale/i18n';

const SignUpPage: React.FC = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const authState = useAuthState();
    const [error, setError] = useState<string>();
    const {handleSubmit, register, formState: {errors, isSubmitting},} = useForm();

    useEffect(() => {
        if (authState.token) {
            navigate('/');
        }
    }, [authState.token, navigate]);

    const onSubmit = async (values: FieldValues) => {
        setError(undefined);
        try {
            await authState.signUp({
                username: values.username,
                password: values.password,
                titleBefore: values.titleBefore,
                firstName: values.firstName,
                midName: values.midName,
                lastName: values.lastName,
                titleAfter: values.titleAfter,
                email: values.email,
                captchaText: values.captchaText,
                captchaToken: ''
            });
        } catch (error: any) {
            const appError = await errorToAppError(error);
            switch (appError.code) {
                case AppErrorCode.INVALID_CAPTCHA: {
                    setError(t(RESOURCE.SIGN_UP.ERROR.INVALID_CAPTCHA));
                    break;
                }
                case AppErrorCode.GDPR: {
                    setError(t(RESOURCE.SIGN_UP.ERROR.GDPR));
                    break;
                }
                case AppErrorCode.USER_USERNAME_IS_USED: {
                    setError(t(RESOURCE.SIGN_UP.ERROR.USERNAME_USED));
                    break;
                }
                case AppErrorCode.USER_EMAIL_IS_USED : {
                    setError(t(RESOURCE.SIGN_UP.ERROR.EMAIL_USED));
                    break;
                }
                case AppErrorCode.UNKNOWN:
                default: {
                    setError(t(RESOURCE.UNKNOWN_ERROR));
                }
            }
        }
    }

    return (
        <SimpleLayout>
        </SimpleLayout>
    );
}

export default SignUpPage;
