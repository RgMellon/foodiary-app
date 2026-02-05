import { env } from '@app/config/env';
import axios, { isAxiosError } from 'axios';

export abstract class Service {
    protected static client = axios.create({
        baseURL: env.api.url,
    });

    private static refreshTokenInterceptorId: undefined | number = undefined;

    static setToken(token: string) {
        this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    static removeAccessToken() {
        this.client.defaults.headers.common['Authorization'] = undefined;
    }

    static removeRefreshTokenHandler() {
        if(this.refreshTokenInterceptorId !== undefined) {
            this.client.interceptors.request.eject(this.refreshTokenInterceptorId);
            this.refreshTokenInterceptorId = undefined;
        }
    }

    static addRefreshTokenInterceptor(refreshHandler: () => Promise<void>) {
        this.removeRefreshTokenHandler();

        this.refreshTokenInterceptorId = this.client.interceptors.response.use(
            response => response,
            async (error) => {
                if(!isAxiosError(error) || error.response?.status !== 401 || !error.config || error.config.url === '/auth/refresh-token') {
                    return Promise.reject(error);
                }

                await refreshHandler();

                // Aqui dentro tem o baseurl, o method, a fn e td que preccisa
                return this.client(error.config);
            },
        );
    }
}
