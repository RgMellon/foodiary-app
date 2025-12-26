import { useReducer } from 'react';

export function useRender() {
    return useReducer((a) => a + 1, 0)[1];
}
