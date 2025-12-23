import { useCallback, useState } from 'react';
import { AuthContext } from '.';
import { AuthService } from '@app/services/AuthService';

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [signedIn, setSignedIn] = useState(false);

    const signIn = useCallback(async (payload: AuthService.SignInPayload) => {
        await AuthService.signIn(payload);
        setSignedIn(true);
    }, []);

    const signUp = useCallback(async (payload: AuthService.SignUpPayload) => {
        await AuthService.signUp(payload);
        setSignedIn(true);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signedIn,
                signIn,
                signUp,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
