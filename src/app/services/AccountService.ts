import { Service } from './Service';
import { GenderOptions } from '@app/types/GenderOptions';
import { ActivityLevelOptions } from '@app/types/ActivityLevel';

export class AccountService extends Service {
    static async me(): Promise<AccountService.MeResponse> {
        const { data } = await this.client.get<AccountService.MeResponse>('/me');

        return {
            ...data,
            profile: {
                ...data.profile,
                birthDate: new Date(data.profile.birthDate),
            },
        };
    }
}

export namespace AccountService {
    export type MeResponse = {
        goal: {
            calories: string;
            fat: string;
            proteins: number;
            carbohydrates: number;
        };
        profile: {
            name: string;
            birthDate: Date;
            gender: GenderOptions;
            height: number;
            weight: number;
            activityLevel: ActivityLevelOptions;
        };
    };
}
