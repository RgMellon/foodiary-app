import Constants from 'expo-constants';
import z from 'zod';

const schema = z.object({
   EXPO_PUBLIC_API_URL: z.string(),
});

const parsedEnv = schema.parse({
    EXPO_PUBLIC_API_URL: Constants.expoConfig?.extra?.EXPO_PUBLIC_API_URL,
});

export const env = {
    api: {
        url: parsedEnv.EXPO_PUBLIC_API_URL,
    },
};
