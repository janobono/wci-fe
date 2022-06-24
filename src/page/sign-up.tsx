import React, { useEffect, useState } from 'react';
import { SimpleLayout } from '../component/layout';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from '../context/auth-state-context-provider';

const SignUpPage: React.FC = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const authState = useAuthState();
    const [error, setError] = useState<string>();

    useEffect(() => {
        if (authState.token) {
            navigate('/');
        }
    }, [authState.token, navigate]);

    return (
        <SimpleLayout>
        </SimpleLayout>
    );
}

export default SignUpPage;
