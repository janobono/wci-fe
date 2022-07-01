import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { AlertTriangle } from 'react-feather';
import { useAuthState } from '../context/auth-state-context-provider';
import { useTranslation } from 'react-i18next';
import { RESOURCE } from '../locale/i18n';
import errorToAppError, { AppErrorCode } from '../util';
import { SimpleLayout } from '../component/layout';

const SignInPage: React.FC = () => {
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
            await authState.signIn({username: values.username, password: values.password});
        } catch (error: any) {
            const appError = await errorToAppError(error);
            switch (appError.code) {
                case AppErrorCode.INVALID_CREDENTIALS: {
                    setError(t(RESOURCE.SIGN_IN.ERROR.INVALID_CREDENTIALS));
                    break;
                }
                case AppErrorCode.UNKNOWN:
                default: {
                    setError(t(RESOURCE.UNKNOWN_ERROR));
                    break;
                }
            }
        }
    }

    return (
        <SimpleLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-4 max-w-xs">
                    <div>
                    {/*<div isInvalid={errors.username}>*/}
                        <label htmlFor="username">{t(RESOURCE.SIGN_IN.USERNAME.LABEL)}</label>
                        <input
                            type="text"
                            id="username"
                            placeholder={t(RESOURCE.SIGN_IN.USERNAME.PLACEHOLDER)}
                            {...register('username', {
                                required: t(RESOURCE.SIGN_IN.ERROR.USERNAME_REQUIRED).trim()
                            })}
                        />
                        {/*<FormErrorMessage>*/}
                        {/*    {errors.username && errors.username.message}*/}
                        {/*</FormErrorMessage>*/}
                    </div>

                    <div>
                    {/*<div isInvalid={errors.password}>*/}
                        <label htmlFor="password">{t(RESOURCE.SIGN_IN.PASSWORD.LABEL)}</label>
                        <input
                            type="password"
                            id="password"
                            placeholder={t(RESOURCE.SIGN_IN.PASSWORD.PLACEHOLDER)}
                            {...register('password', {
                                required: t(RESOURCE.SIGN_IN.ERROR.PASSWORD_REQUIRED).trim()
                            })}
                        />
                        {/*<FormErrorMessage>*/}
                        {/*    {errors.password && errors.password.message}*/}
                        {/*</FormErrorMessage>*/}
                    </div>

                    {/*{error ? (*/}
                    {/*    <HStack role="alert" color="red.500">*/}
                    {/*        <AlertTriangle aria-hidden="true"/>*/}
                    {/*        <Text color="red.500" fontSize="sm" fontWeight="medium">*/}
                    {/*            {error}*/}
                    {/*        </Text>*/}
                    {/*    </HStack>*/}
                    {/*) : null}*/}

                    {/*<ButtonGroup width="full">*/}
                    {/*    <Button*/}
                    {/*        colorScheme="teal"*/}
                    {/*        variant="outline"*/}
                    {/*        flex="1"*/}
                    {/*        onClick={() => {*/}
                    {/*            navigate('/sign-up')*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        {t(RESOURCE.ACTION.SIGN_UP)}*/}
                    {/*    </Button>*/}

                    {/*    <Button*/}
                    {/*        colorScheme="teal"*/}
                    {/*        type="submit"*/}
                    {/*        flex="1"*/}
                    {/*        isDisabled={isSubmitting}*/}
                    {/*        isLoading={isSubmitting}*/}
                    {/*    >*/}
                    {/*        {t(RESOURCE.ACTION.SIGN_IN)}*/}
                    {/*    </Button>*/}
                    {/*</ButtonGroup>*/}
                </div>
            </form>
        </SimpleLayout>
    );
    //
    // return (
    //     <SimpleLayout>
    //         <Formik
    //             initialValues={initialValues}
    //             onSubmit={handleSubmit}
    //             validateOnBlur={false}
    //             validateOnChange={false}
    //             validate={validateInput}
    //         >
    //             {({isSubmitting}) => (
    //                 <Form method="POST">
    //                     <VStack
    //                         spacing={5}
    //                         alignItems="start"
    //                         maxWidth="300px"
    //                         marginX="auto"
    //                     >
    //                         <TextField
    //                             label={t(RESOURCE.SIGN_IN.USERNAME.LABEL)}
    //                             name="username"
    //                             placeholder={t(RESOURCE.SIGN_IN.USERNAME.PLACEHOLDER)}
    //                         />
    //
    //                         <TextField
    //                             label={t(RESOURCE.SIGN_IN.PASSWORD.LABEL)}
    //                             name="password"
    //                             placeholder={t(RESOURCE.SIGN_IN.PASSWORD.PLACEHOLDER)}
    //                             type="password"
    //                         />
    //
    //                         {error ? (
    //                             <HStack role="alert" color="red.500">
    //                                 <AlertTriangle aria-hidden="true"/>
    //                                 <Text color="red.500" fontSize="sm" fontWeight="medium">
    //                                     {error}
    //                                 </Text>
    //                             </HStack>
    //                         ) : null}
    //
    //                         <ButtonGroup width="full">
    //                             <Button
    //                                 colorScheme="teal"
    //                                 variant="outline"
    //                                 flex="1"
    //                                 onClick={() => {
    //                                     navigate('/sign-up')
    //                                 }}
    //                             >
    //                                 {t(RESOURCE.ACTION.SIGN_UP)}
    //                             </Button>
    //
    //                             <Button
    //                                 colorScheme="teal"
    //                                 type="submit"
    //                                 flex="1"
    //                                 isDisabled={isSubmitting}
    //                                 isLoading={isSubmitting}
    //                             >
    //                                 {t(RESOURCE.ACTION.SIGN_IN)}
    //                             </Button>
    //                         </ButtonGroup>
    //                     </VStack>
    //                 </Form>
    //             )}
    //         </Formik>
    //     </SimpleLayout>
    // );
};

export default SignInPage;
