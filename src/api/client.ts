import axios, { AxiosError } from 'axios';
import { getLocale } from '../locale/i18n';
import { getToken, removeToken } from '../context/auth-state-context-provider';

export const client = axios.create({
    baseURL: '/api',
});

client.interceptors.request.use(async (config) => {
    if (!config.headers) {
        config.headers = {};
    }

    const locale = getLocale();
    if (locale) {
        config.headers['Accept-Language'] = locale;
    }

    const token = getToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
});

client.interceptors.response.use(undefined, (error: AxiosError) => {
    if (error?.response?.status === 401) {
        removeToken();
    }
    throw error;
});
