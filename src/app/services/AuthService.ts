import { Goal } from '@app/types/Goal';
import { Service } from './Service';
import { GenderOptions } from '@app/types/GenderOptions';
import { ActivityLevelOptions } from '@app/types/ActivityLevel';

export class AuthService extends Service {
    static async signIn({
        email,
        password,
    }: AuthService.SignInPayload): Promise<AuthService.SignInResponse> {
        const { data } = await this.client.post<AuthService.SignInResponse>(
            '/auth/sign-in',
            {
                email,
                password,
            },
        );

        return data;
    }

    static async signUp(payload: AuthService.SignUpPayload) {
        const { data } = await this.client.post<AuthService.SignUpResponse>(
            '/auth/sign-up', payload,
        );

        return data;
    }
}

export namespace AuthService {
    export type SignInPayload = {
        email: string;
        password: string;
    };

    export type SignInResponse = {
        accessToken: string;
        refreshToken: string;
    };

    export type SignUpPayload = {
        account: {
            email: string;
            password: string;
        };
        profile: {
            name: string;
            birthDate: string;
            goal: Goal;
            gender: GenderOptions;
            height: number;
            weight: number;
            activityLevel: ActivityLevelOptions;
        };
    };

    export type SignUpResponse = {
        accessToken: string;
        refreshToken: string;
    };
}
