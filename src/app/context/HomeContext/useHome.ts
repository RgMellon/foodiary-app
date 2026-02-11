import { use } from 'react';
import { HomeContext } from '.';

export function useHome() {
    return use(HomeContext);
}
