import { AccountService } from '@app/services/AccountService';
import { AuthService } from '@app/services/AuthService';
import { createContext } from 'react';

interface IAuthContext {
    account:AccountService.MeResponse;
    signedUp: boolean;
    signedIn: boolean;
    signIn: (payload: AuthService.SignInPayload) => Promise<void>;
    signUp: (payload: AuthService.SignUpPayload) => Promise<void>;
    signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);
