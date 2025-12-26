import AsyncStorage from '@react-native-async-storage/async-storage';

export class AuthManagerToken {
    private static TOKEN = '@diary/auth-token';

    static async save(tokens: AuthManagerToken.Token) {
        await AsyncStorage.setItem(this.TOKEN, JSON.stringify(tokens));
    }

    static async load(): Promise<AuthManagerToken.Token | null> {
        try {
            const tokens = await AsyncStorage.getItem(this.TOKEN);

            if (!tokens) {
                return null;
            }

            return JSON.parse(tokens);
        } catch {
            return null;
        }
    }

    static async clear(): Promise<void> {
        await AsyncStorage.clear();
    }
}

export namespace AuthManagerToken {
    export type Token = {
        accessToken: string;
        refreshToken: string;
    };
}
