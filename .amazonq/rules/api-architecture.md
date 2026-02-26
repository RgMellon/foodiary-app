# Arquitetura de API e Requests

## Estrutura de Camadas

### 1. Service Layer (`@app/services/`)
- Todos os services estendem a classe base `Service`
- Use métodos estáticos para operações de API
- Organize por domínio (MealService, AccountService, GoalService)
- Sempre tipifique requests e responses com namespaces

### 2. Hooks Layer (`@app/hooks/`)
- **Query hooks** (`@app/hooks/query/`): Para buscar dados (GET)
- **Mutation hooks** (`@app/hooks/mutations/`): Para modificar dados (POST, PUT, DELETE)
- Use React Query (TanStack Query) para cache e estado

### 3. Schema Layer (`@app/schemas/`)
- Validação com Zod para requests e responses
- Schemas reutilizáveis entre componentes
- Tipos TypeScript automáticos com `z.infer`

## Padrões de Service

### Estrutura Base
```typescript
export class ExampleService extends Service {
    static async getData(): Promise<ExampleService.DataResponse> {
        const { data } = await this.client.get<ExampleService.DataResponse>('/endpoint');
        return data;
    }
    
    static async createData(payload: ExampleService.CreatePayload): Promise<void> {
        await this.client.post('/endpoint', payload);
    }
}

export namespace ExampleService {
    export type DataResponse = {
        // tipagem da response
    };
    
    export type CreatePayload = {
        // tipagem do payload
    };
}
```

### Cliente Axios
- Use `this.client` (herda de Service)
- Configuração automática de baseURL e interceptors
- Token de autenticação gerenciado automaticamente
- Refresh token automático em caso de 401

## Padrões de Hooks

### Query Hooks (GET)
```typescript
export function useExample(params?: { enabled?: boolean }) {
    const { data, refetch, isError, isLoading } = useQuery({
        enabled: params?.enabled ?? true,
        queryKey: ['example'],
        queryFn: () => ExampleService.getData(),
        staleTime: Infinity, // ou tempo específico
    });

    return {
        data,
        refetch,
        isError,
        isLoading,
    };
}
```

### Mutation Hooks (POST, PUT, DELETE)
```typescript
export function useCreateExample() {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: (payload: CreatePayload) => ExampleService.createData(payload),
    });

    return {
        createExample: mutateAsync,
        isLoading: isPending,
    };
}
```

## Query Client
- Configurado em `@app/libs/QueryClient.ts`
- `retry: false` por padrão
- Use para invalidar cache quando necessário

## Boas Práticas

### Nomenclatura
- Services: `ExampleService`
- Query hooks: `useExample`, `useExampleById`
- Mutation hooks: `useCreateExample`, `useUpdateExample`, `useDeleteExample`
- Schemas: `exampleSchema`, `createExampleSchema`

### Tipagem
- Sempre tipifique requests e responses
- Use namespaces nos services para organizar tipos
- Combine schemas Zod com tipos TypeScript

### Cache e Invalidação
- Use `queryKey` descritivas e consistentes
- Invalide cache após mutations quando necessário
- Configure `staleTime` apropriado para cada query

### Tratamento de Erros
- Services propagam erros automaticamente
- Trate erros nos componentes com try/catch
- Use Alert ou toast para feedback visual

### Upload de Arquivos
- Use `uploadPresignedPOST` para uploads
- Combine com `getFileInfo` para metadados
- Exemplo no `MealService.createMeal`