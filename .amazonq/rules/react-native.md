# Regras React Native - Projeto Diary

## Padrões de Código
- Sempre use TypeScript com tipagem estrita
- Prefira componentes funcionais com hooks
- Use interfaces para props (prefixo `I` como `IHeaderProps`)
- Mantenha componentes pequenos e com responsabilidade única

## Estrutura de Arquivos
- Componentes em pastas com `index.tsx` e `style.ts`
- Imports organizados: React Native → bibliotecas → componentes locais → tipos
- Use path mapping com `@` (ex: `@ui/components`, `@app/types`)

## Estilização
- Use StyleSheet.create() em arquivos separados (`style.ts`)
- Prefira tema centralizado para cores e espaçamentos
- Use SafeAreaInsets para áreas seguras
- Implemente gradientes com expo-linear-gradient quando necessário

## Performance
- Use useMemo para cálculos complexos
- Use useCallback para funções passadas como props
- Evite re-renders desnecessários

## Navegação
- Use React Navigation com tipagem
- Prefira useNavigation hook
- Mantenha navegação simples e intuitiva

## Validação e Formulários
- Use Zod para validação de schemas
- Combine react-hook-form com Zod para formulários
- Crie schemas reutilizáveis em `@app/schemas`
- Use zodResolver para integração automática
- Valide dados de API com schemas Zod
- Prefira validação no cliente e servidor

## Boas Práticas
- Componentes reutilizáveis na pasta `@ui/components`
- Tipos centralizados em `@app/types`
- Schemas de validação em `@app/schemas`
- Use Expo quando possível para funcionalidades nativas
- Mantenha código limpo e bem documentado