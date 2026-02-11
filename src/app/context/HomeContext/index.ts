import { Meal } from '@app/types/Meal';
import { createContext } from 'react';

export interface IHomeContextValue {
    meals: Meal[];
    nextDay: () => void;
    prevDay: () => void;
    date: Date;
    isFetching: boolean;
}

export const HomeContext = createContext({} as IHomeContextValue);
