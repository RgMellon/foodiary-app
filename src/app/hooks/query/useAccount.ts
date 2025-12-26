import { AccountService } from '@app/services/AccountService';
import { useQuery } from '@tanstack/react-query';

interface IUseAccountParams {
    enabled?: boolean
}

export function useAccount(params?: IUseAccountParams) {
    const { data, refetch, isError } = useQuery({
        enabled: params?.enabled ?? true,
        queryKey: ['account'],
        queryFn: () => AccountService.me(),
        staleTime: Infinity,
    });

    return {
        account: data,
        refetchAccount: refetch,
        isError,
    };
}
