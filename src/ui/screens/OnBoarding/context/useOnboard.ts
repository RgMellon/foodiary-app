import { use } from 'react';
import { OnboardContext } from '.';

export function useOnboard() {
    const value = use(OnboardContext);

    if(!value) {
        throw new Error('use onBoard inside a onBoard context');
    }

    return value;
}
