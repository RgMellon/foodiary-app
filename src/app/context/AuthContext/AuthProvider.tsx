import { useCallback, useLayoutEffect, useState } from 'react';
import { AuthContext } from '.';
import { AuthService } from '@app/services/AuthService';
import { AuthManagerToken } from '@app/libs/AuthManagerToken';
import { useAccount } from '@app/hooks/query/useAccount';
import { Service } from '@app/services/Service';
import * as SplashScreen from 'expo-splash-screen';
import { useRender } from '@app/hooks/app/useRender';
import { useQueryClient } from '@tanstack/react-query';

SplashScreen.preventAutoHideAsync();

interface IAuthToken {
    accessToken: string;
    refreshToken: string;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const forceRender = useRender();
    const client = useQueryClient();

    const [isReady, setIsReady] = useState(false);
    const { account, refetchAccount } = useAccount({
        enabled: false,
    });

     const signOut = useCallback(async () => {
        await AuthManagerToken.clear();
        client.clear();
        Service.removeAccessToken();
        Service.removeRefreshTokenHandler();
        forceRender();
    }, []);

    const setupToken = useCallback(
        async (token: IAuthToken) => {
            Service.setToken(token.accessToken);
            Service.addRefreshTokenInterceptor(async () => {
                try {
                    const storagedToken = await AuthManagerToken.load();

                if(!storagedToken) {
                    throw new Error('Tokens not found');
                }

                const newTokens = await AuthService.refreshToken({
                    refreshToken: storagedToken.refreshToken,
                });

                Service.setToken(newTokens.accessToken);
                await AuthManagerToken.save(newTokens);
                } catch {
                    signOut();
                }
            });

            await refetchAccount();
            await SplashScreen.hideAsync();
            setIsReady(true);
        },
        [refetchAccount],
    );

    useLayoutEffect(() => {
        async function load() {
            const token = await AuthManagerToken.load();

            if (!token) {
                await SplashScreen.hideAsync();
                setIsReady(true);
                return;
            }

            await setupToken(token);
        }

        load();
    }, []);

    const signIn = useCallback(async (payload: AuthService.SignInPayload) => {
        const tokens = await AuthService.signIn(payload);
        await AuthManagerToken.save(tokens);
        await setupToken(tokens);
    }, []);

    const signUp = useCallback(async (payload: AuthService.SignUpPayload) => {
        const tokens = await AuthService.signUp(payload);
        await AuthManagerToken.save(tokens);
        await setupToken(tokens);
    }, []);

    if (!isReady) {
        return null;
    }

    return (
        <AuthContext.Provider
            value={{
                signedIn: !!account,
                signIn,
                signUp,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
