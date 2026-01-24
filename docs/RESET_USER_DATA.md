# Como Resetar Dados dos Usuários

Este documento explica as diferentes formas de resetar os dados dos usuários no Agent Flow.

## 📋 Formas de Reset

### 1. **Reset via Console do Navegador (Recomendado)**

Para resetar seus próprios dados:

1. Abra o console do navegador (F12 ou Cmd+Option+I)
2. Digite: `resetAgentFlow()`
3. Confirme a ação
4. A página será recarregada automaticamente

**O que é resetado:**
- ✅ Capital e Valuation
- ✅ Agentes adquiridos
- ✅ Status e conquistas
- ✅ Streak e tarefas diárias
- ✅ Dados do CloudStorage do Telegram
- ✅ Dados do LocalStorage

**O que é mantido:**
- ✅ Nome do usuário
- ✅ ID do usuário
- ✅ Nível de Prestígio (se houver)

### 2. **Reset via Comando do Telegram**

Envie `/reset` no bot do Telegram para ver instruções de como resetar.

### 3. **Reset via Botão no Jogo**

- Use o botão "REINICIAR PARA NOVA ESCALA" no modal de Singularidade
- Use o botão de Prestígio quando disponível

### 4. **Reset Programático (Para Desenvolvedores)**

```typescript
import { resetUserData, saveFreshState } from './utils/resetUserData';

// Resetar dados de um usuário específico
const userId = '123456789';
await resetUserData(userId);

// Resetar e salvar estado limpo
await saveFreshState(userId, {
  id: userId,
  name: 'Nome do Usuário',
  type: 'telegram'
});
```

## 🔧 Funções Utilitárias

### `resetUserData(userId: string | number)`

Limpa completamente os dados do usuário:
- Remove do CloudStorage do Telegram
- Remove do LocalStorage
- Remove dados relacionados (streak, tasks, etc.)

### `saveFreshState(userId: string | number, user?: UserProfile)`

Salva um estado limpo para o usuário, mantendo apenas informações básicas.

### `createFreshGameState(user?: UserProfile)`

Cria um novo estado de jogo limpo, preservando apenas o perfil do usuário.

## 📍 Onde os Dados são Armazenados

### Telegram CloudStorage
- Chave: `ceo_state_${userId}`
- Acessível via: `telegram.cloudStorage.getItem/setItem/removeItem`

### LocalStorage (Fallback)
- Chaves:
  - `ceo_state_${userId}`
  - `ceo_game_state`
  - `ceo_streak`
  - `ceo_daily_tasks`
  - `ceo_task_date`

## ⚠️ Avisos Importantes

1. **Ação Irreversível**: O reset remove permanentemente todos os dados
2. **CloudStorage**: Dados no CloudStorage do Telegram são sincronizados entre dispositivos
3. **Backup**: Não há sistema de backup automático - o reset é definitivo
4. **Prestígio**: O nível de prestígio é mantido após reset (se aplicável)

## 🎯 Casos de Uso

### Reset Individual (Usuário)
- Usuário quer começar do zero
- Problemas técnicos que requerem reset
- Teste de novas funcionalidades

### Reset em Massa (Admin)
Para resetar múltiplos usuários, use um script que itera sobre os IDs:

```typescript
const userIds = ['user1', 'user2', 'user3'];
for (const userId of userIds) {
  await resetUserData(userId);
  await saveFreshState(userId);
}
```

## 🔐 Segurança

- Apenas o próprio usuário pode resetar seus dados via console
- Comandos administrativos devem ser protegidos com autenticação
- Sempre confirme ações destrutivas antes de executar
