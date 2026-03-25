This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where comments have been removed, empty lines have been removed.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Code comments have been removed from supported file types
- Empty lines have been removed from all files
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.cursor/
  standards/
    ai.rules.md
    markdown.rules.md
    readme.signature.md
    WORKFLOW.md
.well-known/
  farcaster.json
api/
  create-invoice.js
  leaderboard.js
  payment-telemetry.js
  sync.js
  webhook.js
blockchain/
  config.ts
  Web3Provider.tsx
components/
  AgentDetailsModal.tsx
  AgentStore.tsx
  DailyTasksModal.tsx
  IntroOverlay.tsx
  LeaderboardModal.tsx
  Navigation.tsx
  NeoMintModal.tsx
  NeoTerminal.tsx
  OfflineEarningsModal.tsx
  Operation.tsx
  PrestigeModal.tsx
  ReferralModal.tsx
  SingularityCertificate.tsx
  SolutionsTerminal.tsx
  StoreModal.tsx
  TopBar.tsx
  WithdrawModal.tsx
  XRay.tsx
constants/
  abis/
    NeoTokenV2.json
  auditorMessages.ts
docs/
  BUSINESS_PITCH.md
  DEPLOYMENT_HISTORY.md
  GUIA_EMPRESA_MINIAPP.md
  GUIA_USUARIO_MINIAPP.md
  MARKETING_KIT.md
  NAVIGATION_QA_GATE.md
  PRIVACY_POLICY.md
  README_SESSIONS.md
  RESET_USER_DATA.md
  ROADMAP_WEB3.md
  TECH_OVERVIEW.md
  TELEGRAM_LAUNCH_GUIDE.md
engine/
  gameLogic.ts
  regimes.ts
  soundEffects.ts
hooks/
  useAuth.ts
  useNeoToken.ts
public/
  assets/
    hero.png
    icon.png
    splash.png
  agent_neo.png
  android-icon-144x144.png
  android-icon-192x192.png
  android-icon-36x36.png
  android-icon-48x48.png
  android-icon-72x72.png
  android-icon-96x96.png
  apple-icon-114x114.png
  apple-icon-120x120.png
  apple-icon-144x144.png
  apple-icon-152x152.png
  apple-icon-180x180.png
  apple-icon-57x57.png
  apple-icon-60x60.png
  apple-icon-72x72.png
  apple-icon-76x76.png
  apple-icon-precomposed.png
  apple-icon.png
  demo.webp
  favicon-16x16.png
  favicon-32x32.png
  favicon-96x96.png
  favicon.ico
  icon-512.webp
  icon-512.xmp
  logo.svg
  manifest.json
  ms-icon-144x144.png
  ms-icon-150x150.png
  ms-icon-310x310.png
  ms-icon-70x70.png
  og-agent.png
  og-redes.png
  privacy.html
tests/
  e2e/
    navigation.spec.ts
utils/
  cloudSave.ts
  dailyTasks.ts
  navigation.ts
  payments.ts
  resetUserData.ts
  telegramUtils.ts
  tracing.ts
.gitignore
App.tsx
constants.ts
index.css
index.html
index.tsx
Makefile
metadata.json
package.json
playwright.config.ts
pnpm-workspace.yaml
progress.md
README.md
tsconfig.json
types.ts
vercel.json
vite.config.ts
```

# Files

## File: .cursor/standards/ai.rules.md
````markdown
<!-- ai rules -->

**Última atualização:** 2025-12-25

## Regras para IAs e Assistentes

### Como Funciona

O Cursor lê automaticamente o `.cursorrules` na raiz do projeto. Este arquivo referencia os padrões em `standards/`.

### Quando Criar ou Editar Arquivos

1.  **SEMPRE** siga os padrões de Markdown (linha em branco após headers)
2.  **SEMPRE** use 2 espaços para indentação
3.  **SEMPRE** remova trailing whitespace
4.  **SEMPRE** adicione newline final
5.  **SEMPRE** use LF line endings (Unix)

### Padrões de Código

- **Indentação**: 2 espaços (não tabs)
- **Encoding**: UTF-8
- **Line endings**: LF (Unix)
- **Trailing whitespace**: Remover
- **Final newline**: Sempre adicionar

### Padrões de Markdown

**CRITICAL**: Linha em branco após qualquer header (###, ##, #)

```markdown
### ✅ Correto

Conteúdo aqui.

### ❌ Incorreto
Conteúdo aqui.
```

### Assinaturas

**Para projetos e READMEs** (use `standards/readme.signature.md`):

```markdown
<div align="center">
## Contact
[neo@neoprotocol.space](mailto:neo@neoprotocol.space)

</div>

<div align="center">
  <a href="https://x.com/node_mello">
    <img src="https://img.shields.io/badge/-@node_mello-ff008e?style=flat-square&logo=twitter&logoColor=white" />
  </a>
  <a href="https://www.instagram.com/neoprotocol.eth/">
    <img src="https://img.shields.io/badge/-@neoprotocol.eth-ff008e?style=flat-square&logo=instagram&logoColor=white" />
  </a>
  <a href="https://etherscan.io/">
    <img src="https://img.shields.io/badge/-neomello.eth-ff008e?style=flat-square&logo=ethereum&logoColor=white" />
  </a>
</div>

<div align="center">
  <i>"Expand until silence becomes structure."</i>
</div>
```

**Para contratos e tokens** (use `standards/readme.signature.contracts.md`):

```solidity
/**
 * @dev [Descrição breve do contrato]
 * @author MELLO // POST-HUMAN
 */
```

**⚠️ Regras importantes:**

-  Use `MELLO` (sem Ø) em código Solidity para compatibilidade
-  Não use `@title` específico - deixe genérico ou remova
-  Use apenas `@dev` e `@author` nos comentários
-  Consulte `standards/contract.template.sol` para template base

### Referências

-  Ver `standards/markdown.rules.md` para regras completas de Markdown
-  Ver `standards/README.md` para padrões de trabalho
-  Ver `.markdown-style-guide.md` para guia completo
````

## File: .cursor/standards/markdown.rules.md
````markdown
<!-- markdown rules -->

**Última atualização:** 2025-12-25

## Regras de Markdown - NEØ Dev

### Regra Principal: Linha em Branco Após Headers

**SEMPRE adicione uma linha em branco após qualquer título** (###, ##, #) antes de iniciar o conteúdo.

#### ✅ Correto

```markdown
### 1. **Título da Seção** ✅ STATUS

-  **Campo**: Valor
-  **Outro campo**: Outro valor
```

#### ❌ Incorreto

```markdown
### 1. **Título da Seção** ✅ STATUS
-  **Campo**: Valor
-  **Outro campo**: Outro valor
```

### Padrões de Formatação

#### Títulos

-  Use `#` para título principal (H1)
-  Use `##` para seções principais (H2)
-  Use `###` para subseções (H3)
-  Use `####` para sub-subseções (H4)

**Sempre adicione uma linha em branco após o título antes do conteúdo.**

#### Listas

-  Use `-` para listas não ordenadas
-  Use `1.`, `2.`, etc. para listas ordenadas
-  Indente com 2 espaços para subitens
-  **MD030**: Use **2 espaços** após o marcador da lista (não 1)
-  **MD032**: Listas devem ser cercadas por linhas em branco (antes e depois)

##### ✅ Correto (MD030)

```markdown
-  Item da lista (2 espaços após o `-`)
1.  Item ordenado (2 espaços após o `1.`)
```

##### ❌ Incorreto (MD030)

```markdown
- Item da lista (1 espaço - ERRADO)
1. Item ordenado (1 espaço - ERRADO)
```

##### ✅ Correto (MD032)

```markdown
Texto antes da lista.

-  Item 1
-  Item 2

Texto depois da lista.
```

##### ❌ Incorreto (MD032)

```markdown
Texto antes da lista.
-  Item 1
-  Item 2
Texto depois da lista.
```

#### Código

-  Use \`backticks\` para código inline
-  Use blocos de código com \`\`\` para blocos
-  **MD040**: Sempre especifique a linguagem nos blocos de código (obrigatório)

##### ✅ Correto (MD040)

```markdown
\`\`\`bash
echo "Hello World"
\`\`\`

\`\`\`text
Estrutura de diretórios
\`\`\`

\`\`\`json
{"key": "value"}
\`\`\`
```

##### ❌ Incorreto (MD040)

```markdown
\`\`\`
echo "Hello World"
\`\`\`

\`\`\`
Estrutura de diretórios
\`\`\`
```

#### Ênfase

-  Use `**negrito**` para destaque
-  Use `*itálico*` para ênfase suave
-  Use `~~riscado~~` para texto descontinuado

##### Emojis e Unicode

NUNCA use emojis (😀, ✅, ❌, etc.) em documentação ou código.

Use caracteres Unicode quando necessário para simbolismo visual:

⟁ ⟠ ⧉ ⧇ ⧖ ⧗ ⍟
◬ ◭ ◮ ◯ ⨀ ⨂ ⨷
◱ ◲ ◳ ◴ ◵ ◶ ◷ ⦿ ꙮ

### Configurações do Projeto

Este projeto usa:

-  **EditorConfig** (`.editorconfig`) - Configurações do editor
-  **Prettier** (`.prettierrc.json`) - Formatação automática
-  **Markdownlint** (`.markdownlint.json`) - Validação de estilo

Ver `.markdown-style-guide.md` para guia completo.
````

## File: .cursor/standards/readme.signature.md
````markdown
<!-- readme signature - para projetos e READMEs -->

## Contact

[neo@neoprotocol.space](mailto:neo@neoprotocol.space)

</div>

<div align="center">
  <a href="https://x.com/node_mello">
    <img src="https://img.shields.io/badge/-@node_mello-ff008e?style=flat-square&logo=twitter&logoColor=white" alt="Twitter @node_mello" />
  </a>
  <a href="https://www.instagram.com/neoprotocol.eth/">
    <img src="https://img.shields.io/badge/-@neoprotocol.eth-ff008e?style=flat-square&logo=instagram&logoColor=white" alt="Instagram @neoprotocol.eth" />
  </a>
  <a href="https://etherscan.io/">
    <img src="https://img.shields.io/badge/-neomello.eth-ff008e?style=flat-square&logo=ethereum&logoColor=white" alt="Ethereum neomello.eth" />
  </a>
</div>

<div align="center">
  <i>"Expand until silence becomes structure."</i>
</div>
````

## File: .cursor/standards/WORKFLOW.md
````markdown
# Workflow Protocol — Resumo

**Referência completa:** `../neomello-workflow.md`

**Última atualização:** 2025-12-25

---

## Princípios Fundamentais

1.  Código é consequência, não ponto de partida.
2.  Decisões irreversíveis devem ser externalizadas em texto antes de execução.
3.  Versionamento preserva entendimento, não apenas estado.
4.  Sistemas devem operar corretamente mesmo na ausência do criador.
5.  Clareza futura tem prioridade sobre otimização imediata.

---

## Modos Operacionais (Workflows)

### WF-01: Arquitetura de Sistema

**Quando usar:**

-  Problema estrutural ou mal definido
-  Sistema ainda não existe
-  Decisões iniciais impactam todo o ciclo de vida

**Características:**

-  Inicia sempre em markdown
-  Uso intensivo de diagramas
-  README antes de qualquer código executável
-  Definição explícita de escopo e não-escopo
-  Ausência deliberada de UI

**Artefatos esperados:**

-  `docs/ARCHITECTURE.md`
-  `docs/PHILOSOPHY.md`
-  `README.md`
-  Diagramas mermaid

**Padrões relacionados:**

-  `readme.template.md` - Template para README
-  `markdown.rules.md` - Regras de documentação

---

### WF-02: Execução Direta

**Quando usar:**

-  Arquitetura já está definida
-  Objetivo é destravar avanço
-  Necessidade de velocidade controlada

**Características:**

-  Foco em código funcional
-  Documentação mínima, porém suficiente
-  Commits frequentes e sem medo de refatoração
-  Testes focados em pontos críticos

**Artefatos esperados:**

-  Código executável
-  Scripts utilitários
-  Automações

**Padrões relacionados:**

-  `ai.rules.md` - Regras de código
-  `contract.template.sol` - Template para contratos

---

### WF-03: Consolidação e Padronização

**Quando usar:**

-  Algo funcionou e precisa ser reutilizável
-  Surgem repetições
-  Risco de fragmentação aumenta

**Características:**

-  Reorganização de pastas
-  Extração de padrões
-  Criação de templates
-  Documentação pragmática

**Artefatos esperados:**

-  Templates de repositório
-  Padrões de README
-  Workflows de CI
-  Convenções explícitas

**Padrões relacionados:**

-  Todos os arquivos em `standards/` são resultado deste workflow
-  `readme.template.md` - Template consolidado
-  `contract.template.sol` - Template consolidado

---

### WF-04: Recuperação e Continuidade

**Quando usar:**

-  Ocorre falha crítica
-  Ambiente é corrompido
-  Há perda parcial de contexto

**Características:**

-  Prioridade em preservar sentido
-  Extração manual de dados
-  Registros narrativos humanos
-  Decisão consciente sobre reintegração

**Artefatos esperados:**

-  Pasta RECOVERY
-  Arquivos .save
-  Logs manuais

**Padrões relacionados:**

-  `scripts/install.sh` - Script de recuperação
-  Documentação completa em `standards/`

---

## Perfis Operacionais

### Perfil Arquiteto

-  Define estruturas
-  Cria contratos
-  Estabelece padrões
-  Decide o que não entra

**Permissões:** Alterações estruturais, decisões irreversíveis

### Perfil Executor

-  Implementa soluções
-  Opera dentro dos padrões
-  Avança entregas

**Restrições:** Não redefinir arquitetura

### Perfil Auditor

-  Revisa decisões passadas
-  Valida coerência sistêmica
-  Remove excessos
-  Documenta falhas

### Perfil Nó Externo Simulado

-  Testa onboarding
-  Identifica fricções
-  Valida legibilidade

**Atuação:** Leitura fria, execução sem contexto prévio

---

## Regras de Transição

-  WF-01 pode transitar para WF-02 somente após contratos explícitos
-  WF-02 deve transitar para WF-03 ao detectar padrões repetidos
-  WF-04 pode ser acionado a partir de qualquer workflow
-  Nenhuma transição é automática

---

## Anti-Padrões

-  Começar por UI
-  Codar sem README
-  Decisões implícitas
-  Dependência tácita do autor
-  Confundir velocidade com pressa

---

## Observação Final

Este protocolo não busca eficiência máxima.
Busca continuidade, clareza e soberania operacional.

Quando corretamente aplicado, o sistema se sustenta, evolui e incorpora novos nós sem exigir presença constante do criador.

---

**Para detalhes completos, consulte:** `../neomello-workflow.md`
````

## File: .well-known/farcaster.json
````json
{
    "miniapp": {
        "version": "1",
        "name": "AgentFlow",
        "iconUrl": "https://agenteflow.vercel.app/public/assets/icon.png",
        "homeUrl": "https://agenteflow.vercel.app",
        "splashImageUrl": "https://agenteflow.vercel.app/public/assets/splash.png",
        "splashBackgroundColor": "#0f53f0",
        "heroImageUrl": "https://agenteflow.vercel.app/public/assets/hero.png",
        "tagline": "O jogo é apenas o começo. Leve agentes para o seu negócio real."
    }
}
````

## File: api/create-invoice.js
````javascript
import crypto from 'node:crypto';
const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_INITDATA_ENFORCE = process.env.TELEGRAM_INITDATA_ENFORCE === 'true';
const APP_ORIGIN_ALLOWLIST = (process.env.APP_ORIGIN_ALLOWLIST || '')
    .split(',')
    .map(origin => origin.trim())
    .filter(Boolean);
const MAX_TITLE_LENGTH = 32;
const MAX_DESCRIPTION_LENGTH = 255;
const MAX_PAYLOAD_LENGTH = 128;
const MAX_STARS_AMOUNT = 100000;
function isOriginAllowed(origin) {
    if (!APP_ORIGIN_ALLOWLIST.length) return true;
    if (!origin) return true;
    return APP_ORIGIN_ALLOWLIST.includes(origin);
}
function timingSafeHexEquals(a, b) {
    if (!a || !b) return false;
    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(Buffer.from(a, 'hex'), Buffer.from(b, 'hex'));
}
function verifyTelegramInitData(initData, botToken) {
    if (!initData || !botToken) return false;
    const params = new URLSearchParams(initData);
    const hash = params.get('hash');
    if (!hash) return false;
    params.delete('hash');
    const dataCheckString = [...params.entries()]
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, value]) => `${key}=${value}`)
        .join('\n');
    const secretKey = crypto
        .createHmac('sha256', 'WebAppData')
        .update(botToken)
        .digest();
    const calculatedHash = crypto
        .createHmac('sha256', secretKey)
        .update(dataCheckString)
        .digest('hex');
    if (!timingSafeHexEquals(calculatedHash, hash)) {
        return false;
    }
    const authDate = Number.parseInt(params.get('auth_date') || '0', 10);
    if (!authDate) return false;
    const ageSeconds = Math.floor(Date.now() / 1000) - authDate;
    const maxAgeSeconds = 60 * 60 * 24 * 7;
    return ageSeconds >= 0 && ageSeconds <= maxAgeSeconds;
}
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    if (!TELEGRAM_TOKEN) {
        return res.status(500).json({ error: 'Telegram token is not configured' });
    }
    const requestOrigin = req.headers.origin;
    if (!isOriginAllowed(requestOrigin)) {
        return res.status(403).json({ error: 'Origin not allowed' });
    }
    const initDataHeader = req.headers['x-telegram-init-data'];
    const initDataBody = req.body?.initData;
    const initData = typeof initDataHeader === 'string' && initDataHeader.length > 0
        ? initDataHeader
        : (typeof initDataBody === 'string' ? initDataBody : '');
    if (TELEGRAM_INITDATA_ENFORCE && !verifyTelegramInitData(initData, TELEGRAM_TOKEN)) {
        return res.status(401).json({ error: 'Unauthorized request' });
    }
    const { title, description, payload, price, currency = "XTR" } = req.body;
    if (!title || !description || !payload || !price) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    if (typeof title !== 'string' || title.length > MAX_TITLE_LENGTH) {
        return res.status(400).json({ error: `Invalid title. Max ${MAX_TITLE_LENGTH} chars.` });
    }
    if (typeof description !== 'string' || description.length > MAX_DESCRIPTION_LENGTH) {
        return res.status(400).json({ error: `Invalid description. Max ${MAX_DESCRIPTION_LENGTH} chars.` });
    }
    if (typeof payload !== 'string' || payload.length > MAX_PAYLOAD_LENGTH) {
        return res.status(400).json({ error: `Invalid payload. Max ${MAX_PAYLOAD_LENGTH} chars.` });
    }
    const parsedPrice = Number.parseInt(String(price), 10);
    if (!Number.isInteger(parsedPrice) || parsedPrice <= 0 || parsedPrice > MAX_STARS_AMOUNT) {
        return res.status(400).json({ error: `Invalid price. Use integer between 1 and ${MAX_STARS_AMOUNT}.` });
    }
    if (currency !== 'XTR') {
        return res.status(400).json({ error: 'Only XTR currency is supported.' });
    }
    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/createInvoiceLink`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                description,
                payload,
                provider_token: "", // Empty for Stars
                currency: "XTR",
                prices: [{ label: title, amount: parsedPrice }]
            }),
        });
        const data = await response.json();
        if (!data.ok) {
            console.error('Telegram API Error:', data);
            const statusCode = data?.error_code === 401 ? 401 : 500;
            return res.status(statusCode).json({ error: 'Failed to create invoice link', details: data });
        }
        return res.status(200).json({ ok: true, invoiceLink: data.result });
    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
````

## File: api/leaderboard.js
````javascript
import { kv } from '@vercel/kv';
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, score, user_id } = req.body;
        if (!name || !score || !user_id) {
            return res.status(400).json({ error: 'Missing fields' });
        }
        try {
            await kv.zadd('leaderboard_valuation', { score: parseInt(score), member: `${name}::${user_id}` });
            return res.status(200).json({ ok: true });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to update leaderboard' });
        }
    }
    else if (req.method === 'GET') {
        try {
            const rawData = await kv.zrange('leaderboard_valuation', 0, 9, { rev: true, withScores: true });
            const formatted = [];
            for (let i = 0; i < rawData.length; i += 2) {
                const member = rawData[i];
                const score = rawData[i + 1];
                const [name] = member.split('::');
                formatted.push({ name, score });
            }
            return res.status(200).json({ leaderboard: formatted });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to fetch leaderboard' });
        }
    }
    return res.status(405).json({ error: 'Method not allowed' });
}
````

## File: api/payment-telemetry.js
````javascript
import { kv } from '@vercel/kv';
const ALLOWED_EVENTS = new Set(['invoice_created', 'invoice_paid', 'invoice_failed']);
const TIMELINE_KEY = 'payments:timeline';
function normalizeString(value, max = 256) {
    if (value === undefined || value === null) return null;
    const text = String(value).trim();
    return text.length > max ? text.slice(0, max) : text;
}
function dayTag(timestamp) {
    const date = new Date(timestamp);
    const year = date.getUTCFullYear();
    const month = `${date.getUTCMonth() + 1}`.padStart(2, '0');
    const day = `${date.getUTCDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
}
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {
            eventType,
            itemId,
            itemTitle,
            itemPrice,
            userId,
            username,
            source,
            appVersion,
            invoiceStatus,
            errorMessage,
            failureStage,
            timestamp
        } = req.body || {};
        if (!ALLOWED_EVENTS.has(eventType)) {
            return res.status(400).json({ error: 'Invalid eventType' });
        }
        const now = Number(timestamp) || Date.now();
        const eventId = `payment:event:${now}:${Math.random().toString(36).slice(2, 9)}`;
        const eventPayload = {
            id: eventId,
            eventType,
            timestamp: now,
            day: dayTag(now),
            userId: normalizeString(userId, 128),
            username: normalizeString(username, 128),
            source: normalizeString(source, 32),
            appVersion: normalizeString(appVersion, 32),
            itemId: normalizeString(itemId, 128),
            itemTitle: normalizeString(itemTitle, 128),
            itemPrice: Number.isFinite(Number(itemPrice)) ? Number(itemPrice) : null,
            invoiceStatus: normalizeString(invoiceStatus, 32),
            failureStage: normalizeString(failureStage, 64),
            errorMessage: normalizeString(errorMessage, 512)
        };
        try {
            await kv.set(eventId, eventPayload, { ex: 60 * 60 * 24 * 90 });
            await kv.zadd(TIMELINE_KEY, { score: now, member: eventId });
            await Promise.all([
                kv.incr(`payments:count:${eventType}`),
                kv.incr(`payments:count:${eventType}:${eventPayload.day}`)
            ]);
            return res.status(200).json({ ok: true, eventId });
        } catch (error) {
            console.error('[PaymentTelemetry] Failed to persist event', error);
            return res.status(500).json({ error: 'Failed to persist telemetry' });
        }
    }
    if (req.method === 'GET') {
        const limit = Math.min(100, Math.max(1, Number.parseInt(String(req.query.limit || '20'), 10) || 20));
        try {
            const [created, paid, failed, eventIds] = await Promise.all([
                kv.get('payments:count:invoice_created'),
                kv.get('payments:count:invoice_paid'),
                kv.get('payments:count:invoice_failed'),
                kv.zrange(TIMELINE_KEY, 0, limit - 1, { rev: true })
            ]);
            const events = await Promise.all((eventIds || []).map((id) => kv.get(id)));
            return res.status(200).json({
                ok: true,
                counters: {
                    invoice_created: Number(created || 0),
                    invoice_paid: Number(paid || 0),
                    invoice_failed: Number(failed || 0)
                },
                events: events.filter(Boolean)
            });
        } catch (error) {
            console.error('[PaymentTelemetry] Failed to fetch telemetry', error);
            return res.status(500).json({ error: 'Failed to fetch telemetry' });
        }
    }
    return res.status(405).json({ error: 'Method not allowed' });
}
````

## File: api/sync.js
````javascript
import { kv } from '@vercel/kv';
export default async function handler(req, res) {
    const { userId } = req.query;
    if (!userId) {
        return res.status(400).json({ error: 'Missing userId' });
    }
    const userKey = `user:${userId}:data`;
    if (req.method === 'POST') {
        const { gameState, timestamp } = req.body;
        if (!gameState) {
            return res.status(400).json({ error: 'Missing gameState' });
        }
        try {
            await kv.set(userKey, {
                state: gameState,
                last_updated: timestamp || Date.now()
            });
            return res.status(200).json({ ok: true });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to save data' });
        }
    }
    else if (req.method === 'GET') {
        try {
            const data = await kv.get(userKey);
            if (!data) {
                return res.status(404).json({ error: 'No save found' });
            }
            return res.status(200).json({
                gameState: data.state,
                last_updated: data.last_updated
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to load data' });
        }
    }
    return res.status(405).json({ error: 'Method not allowed' });
}
````

## File: api/webhook.js
````javascript
const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_WEBHOOK_SECRET = process.env.TELEGRAM_WEBHOOK_SECRET;
const WEB_APP_URL = process.env.WEB_APP_URL || "https://agenteflow.vercel.app/";
const COMMANDS = new Set(['/start', '/app', '/play', '/help', '/reset']);
function normalizeCommand(text) {
    if (typeof text !== 'string') return null;
    const raw = text.trim().split(/\s+/)[0] || '';
    if (!raw.startsWith('/')) return null;
    const command = raw.split('@')[0].toLowerCase();
    return command.length > 64 ? null : command;
}
async function callTelegram(method, payload) {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/${method}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok || !data.ok) {
        console.error(`[Webhook] Telegram API error on ${method}`, data);
        throw new Error(`Telegram API error on ${method}`);
    }
    return data.result;
}
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    if (!TELEGRAM_TOKEN) {
        return res.status(500).json({ error: 'Telegram token is not configured' });
    }
    if (TELEGRAM_WEBHOOK_SECRET) {
        const headerSecret = req.headers['x-telegram-bot-api-secret-token'];
        if (headerSecret !== TELEGRAM_WEBHOOK_SECRET) {
            return res.status(401).json({ error: 'Unauthorized webhook source' });
        }
    }
    const { message, pre_checkout_query } = req.body;
    if (pre_checkout_query) {
        if (!pre_checkout_query.id) {
            return res.status(400).json({ error: 'Invalid pre_checkout_query payload' });
        }
        try {
            await callTelegram('answerPreCheckoutQuery', {
                pre_checkout_query_id: pre_checkout_query.id,
                ok: true
            });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to answer pre_checkout_query' });
        }
        return res.status(200).json({ ok: true });
    }
    if (!message) {
        return res.status(200).json({ ok: true });
    }
    const chatId = message?.chat?.id;
    if (!chatId) {
        return res.status(200).json({ ok: true });
    }
    if (message?.chat?.type && message.chat.type !== 'private') {
        return res.status(200).json({ ok: true });
    }
    if (message.successful_payment) {
        const payment = message.successful_payment;
        try {
            await callTelegram('sendMessage', {
                chat_id: chatId,
                text: `✅ **Pagamento Confirmado!**\n\n` +
                    `Recebemos ${payment.total_amount} Stars.\n` +
                    `Seus recursos foram creditados na operação.\n\n` +
                    `_Mantenha o flow._`,
                parse_mode: 'Markdown'
            });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to notify payment confirmation' });
        }
        return res.status(200).json({ ok: true });
    }
    const command = normalizeCommand(message.text);
    if (!command) {
        return res.status(200).json({ ok: true });
    }
    if (!COMMANDS.has(command)) {
        try {
            await callTelegram('sendMessage', {
                chat_id: chatId,
                text: `Comando não reconhecido.\n\nUse /help para suporte com @neomello.`,
                parse_mode: 'Markdown'
            });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to handle unknown command' });
        }
        return res.status(200).json({ ok: true });
    }
    let responseText = "";
    let replyMarkup = {};
    if (command === '/start') {
        responseText = `**> INICIANDO PROTOCOLO AGENTE FLOW v2.5...**\n\n` +
            `Bem-vindo à central de comando, Operador.\n\n` +
            `A era da escala manual acabou. Seu tempo é o ativo mais caro da sua empresa, e o **Agent Flow** é a ferramenta para devolvê-lo.\n\n` +
            `🛠 **Eliminar Gargalos**: Identificar onde sua operação está travada.\n` +
            `🤖 **Desprender Frotas**: Contratar Agentes IA para trabalhar 24/7.\n` +
            `📈 **Gerar Valuation**: Construir equity digital real.\n\n` +
            `**Pare de ser o gargalo. Comece a ser o arquiteto.**`;
        replyMarkup = {
            inline_keyboard: [
                [{ text: "🕹 ABRIR CONSOLE", web_app: { url: WEB_APP_URL } }]
            ]
        };
    } else if (command === '/app') {
        responseText = "Acesse o Console de Operação Agente Flow:";
        replyMarkup = {
            inline_keyboard: [
                [{ text: "🚀 INICIAR OPERAÇÃO", web_app: { url: WEB_APP_URL } }]
            ]
        };
    } else if (command === '/play') {
        responseText = "Gamificação iniciada. Acesse o console para continuar:";
        replyMarkup = {
            inline_keyboard: [
                [{ text: "🎮 JOGAR AGORA", web_app: { url: WEB_APP_URL } }]
            ]
        };
    } else if (command === '/help') {
        responseText = `**PROTOCOLO DE SUPORTE**\n\n` +
            `Se você precisa de diagnósticos reais para escalar sua operação fora da simulação:\n\n` +
            `🚀 [Agência FlowOFF](https://flowoff.xyz)\n` +
            `💬 [Suporte Direto](https://t.me/neomello)\n\n` +
            `Use o botão abaixo para retornar à operação.`;
        replyMarkup = {
            inline_keyboard: [
                [{ text: "Voltar para o App", web_app: { url: WEB_APP_URL } }]
            ]
        };
    } else if (command === '/reset') {
        responseText = `⚠️ **RESETAR DADOS DO JOGO**\n\n` +
            `Isso vai ZERAR completamente seu progresso:\n` +
            `• Capital e Valuation\n` +
            `• Agentes adquiridos\n` +
            `• Status e conquistas\n` +
            `• Streak e tarefas diárias\n\n` +
            `**ATENÇÃO:** Esta ação é IRREVERSÍVEL!\n\n` +
            `Para resetar, abra o console e digite no navegador:\n` +
            `\`resetAgentFlow()\`\n\n` +
            `Ou use o botão de reset dentro do jogo.`;
        replyMarkup = {
            inline_keyboard: [
                [{ text: "🕹 ABRIR CONSOLE", web_app: { url: WEB_APP_URL } }]
            ]
        };
    }
    if (responseText) {
        try {
            await callTelegram('sendMessage', {
                chat_id: chatId,
                text: responseText,
                parse_mode: 'Markdown',
                reply_markup: replyMarkup
            });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to send command response' });
        }
    }
    return res.status(200).json({ ok: true });
}
````

## File: blockchain/config.ts
````typescript
import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { base } from '@reown/appkit/networks'
export const projectId = import.meta.env.VITE_REOWN_PROJECT_ID || 'YOUR_REOWN_PROJECT_ID'
const hasValidProjectId = projectId !== 'YOUR_REOWN_PROJECT_ID'
export const wagmiAdapter = new WagmiAdapter({
    projectId,
    networks: [base],
})
export const config = wagmiAdapter.wagmiConfig
if (hasValidProjectId) {
    createAppKit({
        adapters: [wagmiAdapter],
        networks: [base],
        projectId,
        metadata: {
            name: 'NEO FlowOFF',
            description: 'B2B Scalability Processing for Telegram',
            url: 'https://neoprotocol.space',
            icons: ['https://avatars.githubusercontent.com/u/179229938']
        },
        themeMode: 'dark',
        themeVariables: {
            '--w3m-accent': '#ff008e',
            '--w3m-border-radius-master': '1px'
        }
    })
}
````

## File: blockchain/Web3Provider.tsx
````typescript
import React from 'react'
import { wagmiAdapter } from './config'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
export function Web3Provider({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    )
}
````

## File: components/AgentDetailsModal.tsx
````typescript
import React, { useState } from 'react';
import { Agent, AgentOwnership } from '../types';
import { calculateAgentCost } from '../engine/gameLogic';
import { X, Rocket, Cpu, CheckCircle } from 'lucide-react';
import { playDeploy, playTyping } from '../engine/soundEffects';
interface AgentDetailsModalProps {
    agent: Agent;
    inventory: AgentOwnership[];
    capital: number;
    onBuy: (agent: Agent) => void;
    onClose: () => void;
}
const AgentDetailsModal: React.FC<AgentDetailsModalProps> = ({ agent, inventory, capital, onBuy, onClose }) => {
    const [deployingId, setDeployingId] = useState<string | null>(null);
    const [successId, setSuccessId] = useState<string | null>(null);
    const owned = inventory.find(i => i.id === agent.id)?.quantity || 0;
    const cost = calculateAgentCost(agent.custo_base, owned);
    const handlePurchase = async () => {
        if (deployingId || successId) return;
        if (capital < cost) return;
        setDeployingId(agent.id);
        playTyping();
        await new Promise(resolve => setTimeout(resolve, 1400));
        setDeployingId(null);
        setSuccessId(agent.id);
        playDeploy();
        onBuy(agent);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSuccessId(null);
        onClose();
    };
    return (
        <div id="modal-agent-details" className="fixed inset-0 z-[600] flex items-end justify-center pointer-events-none">
            <div id="modal-agent-details-backdrop" className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-auto animate-in fade-in" onClick={() => !deployingId && !successId && onClose()} />
            <div className="relative w-full max-w-lg bg-[#0d0714] border-t border-white/10 rounded-t-[32px] p-8 pointer-events-auto animate-in slide-in-from-bottom pb-[calc(40px+env(safe-area-inset-bottom))]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-white/20 rounded-full" />
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none">{agent.nome}</h2>
                        <p className="text-[10px] text-magenta font-bold uppercase tracking-widest mt-2">Dossiê Operacional</p>
                    </div>
                    <button id="modal-agent-details-close" onClick={onClose} className="p-2 text-gray-500"><X size={20} /></button>
                </div>
                <div className="space-y-6">
                    <div className="bg-white/5 p-6 rounded-[24px] border border-white/10 italic text-sm text-gray-400 leading-relaxed">
                        "{agent.descricao_curta}"
                    </div>
                    {deployingId ? (
                        <div className="bg-magenta/10 border border-magenta/20 p-8 rounded-[24px] flex flex-col items-center justify-center gap-4 animate-pulse">
                            <Cpu size={40} className="text-magenta animate-spin-slow" />
                            <p className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Deploying Agent...</p>
                        </div>
                    ) : successId ? (
                        <div className="bg-green-500/10 border border-green-500/30 p-8 rounded-[24px] flex flex-col items-center justify-center gap-4">
                            <CheckCircle size={40} className="text-green-500" />
                            <p className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Active Protocol</p>
                        </div>
                    ) : (
                        <div className="pt-2">
                            <button
                                onClick={handlePurchase}
                                disabled={capital < cost}
                                className={`w-full py-5 rounded-[22px] font-black uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-3 ${capital >= cost
                                        ? 'bg-magenta text-white active:scale-[0.96]'
                                        : 'bg-white/5 text-gray-600'
                                    }`}
                            >
                                <Rocket size={18} />
                                INVESTIR $ {cost.toLocaleString()}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default AgentDetailsModal;
````

## File: components/AgentStore.tsx
````typescript
import React from 'react';
import { Agent, AgentOwnership } from '../types';
import { calculateAgentCost } from '../engine/gameLogic';
import { Plus, Timer, Lock, TrendingUp } from 'lucide-react';
interface AgentStoreProps {
  agents: Agent[];
  inventory: AgentOwnership[];
  pu: number;
  totalPu: number;
  onBuy: (agent: Agent) => void;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}
const AgentStore: React.FC<AgentStoreProps> = ({ agents, inventory, pu, totalPu, selectedId, onSelect }) => {
  return (
    <div className="space-y-8 pb-24">
      <header className="px-1">
        <h2 className="text-[10px] font-bold text-magenta uppercase tracking-widest opacity-80 mb-1">Mercado de Automação</h2>
        <h1 className="text-3xl font-black tracking-tight text-white uppercase italic">Agentes</h1>
      </header>
      <div className="space-y-4">
        {agents.map(agent => {
          const owned = inventory.find(i => i.id === agent.id)?.quantity || 0;
          const cost = calculateAgentCost(agent.custo_base, owned);
          const isUnlocked = totalPu >= agent.desbloqueia_em_capital_total;
          const canAfford = pu >= cost;
          if (!isUnlocked) {
            return (
              <div key={agent.id} className="bg-white/5 border border-white/5 p-5 rounded-[24px] flex items-center gap-5 grayscale opacity-50">
                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center border border-white/10 text-gray-700"><Lock size={20} /></div>
                <div className="flex-1">
                  <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">{agent.nome}</h3>
                  <p className="text-[10px] text-gray-600 font-mono">Requer $ {agent.desbloqueia_em_capital_total.toLocaleString()}</p>
                </div>
              </div>
            );
          }
          return (
            <div
              key={agent.id}
              id={`agent-card-${agent.id}`}
              className={`bg-white/5 ios-blur border rounded-[26px] overflow-hidden transition-all active:scale-[0.98] cursor-pointer group ${canAfford ? 'border-white/10' : 'border-white/5 opacity-80'} ${selectedId === agent.id ? 'border-magenta shadow-[0_0_20px_rgba(255,0,255,0.1)]' : ''}`}
              onClick={() => onSelect(agent.id)}
            >
              <div className="p-5 relative">
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="flex-1">
                    <h3 className={`font-black text-lg uppercase tracking-tight transition-colors ${selectedId === agent.id ? 'text-magenta' : 'text-white'}`}>{agent.nome}</h3>
                    <p className="text-[11px] text-gray-500 mt-1">NÍVEL {owned}</p>
                  </div>
                  <Plus size={18} className={canAfford ? 'text-magenta' : 'text-gray-600'} />
                </div>
                <div className="flex gap-3 text-[10px] font-bold text-gray-400 mb-4 relative z-10">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-cyan-400/5 rounded-lg border border-cyan-400/10 text-cyan-400">
                    <TrendingUp size={12} />
                    <span>+${agent.receita_passiva_segundo.toFixed(1)}/s</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-400/5 rounded-lg border border-green-400/10 text-green-400">
                    <Timer size={12} />
                    <span>-{agent.economia_diaria_minutos}m/d</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">CUSTO: ${cost.toLocaleString()}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AgentStore;
````

## File: components/DailyTasksModal.tsx
````typescript
import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Circle, Flame, Calendar } from 'lucide-react';
import { DailyTask, DayStreak, getStreakBonus } from '../utils/dailyTasks';
interface DailyTasksModalProps {
    isOpen: boolean;
    onClose: () => void;
    tasks: DailyTask[];
    streak: DayStreak;
    onClaim: (taskId: string) => void;
}
export const DailyTasksModal: React.FC<DailyTasksModalProps> = ({ isOpen, onClose, tasks, streak, onClaim }) => {
    if (!isOpen) return null;
    const streakBonus = getStreakBonus(streak.current);
    return (
        <div id="modal-daily-tasks" className="fixed inset-0 z-[650] flex items-center justify-center animate-in fade-in duration-200">
            <div
                id="modal-daily-tasks-backdrop"
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />
            <div className="relative w-[90%] max-w-sm bg-[#1a1625] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                {}
                <div className="bg-gradient-to-r from-orange-900/40 to-orange-600/10 p-4 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Calendar className="text-orange-400" size={20} />
                        <h2 className="text-white font-bold text-lg">Daily Operations</h2>
                    </div>
                    <button id="modal-daily-tasks-close" onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-5 space-y-6">
                    {}
                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 flex items-center justify-between">
                        <div>
                            <div className="text-[10px] text-orange-400 font-bold uppercase tracking-widest mb-1">Login Streak</div>
                            <div className="text-2xl font-black text-white flex items-center gap-2">
                                {streak.current} DIAS <Flame className="fill-orange-500 text-orange-500 animate-pulse" size={20} />
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-1">Atual Bonus</div>
                            <div className="text-sm font-bold text-white bg-white/10 px-2 py-1 rounded">{streakBonus}</div>
                        </div>
                    </div>
                    {}
                    <div className="space-y-3">
                        <p className="text-xs text-white/50 font-bold uppercase tracking-widest">Tarefas de Hoje</p>
                        {tasks.map((task) => (
                            <div key={task.id} className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center gap-3">
                                <div className="flex-1">
                                    <h3 className="text-white font-bold text-sm">{task.description}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-magenta transition-all duration-500"
                                                style={{ width: `${Math.min(100, (task.current / task.target) * 100)}%` }}
                                            />
                                        </div>
                                        <span className="text-[10px] text-white/40">{task.current}/{task.target}</span>
                                    </div>
                                </div>
                                {task.completed ? (
                                    <div className="flex flex-col items-end">
                                        <div className="text-green-500 flex items-center gap-1 text-xs font-bold mb-1">
                                            <CheckCircle size={12} /> FEITO
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => {
                                            if (task.current >= task.target) onClaim(task.id);
                                        }}
                                        disabled={task.current < task.target}
                                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${task.current >= task.target
                                                ? 'bg-green-500 text-black hover:bg-green-400 animate-pulse'
                                                : 'bg-white/5 text-white/20 cursor-not-allowed'
                                            }`}
                                    >
                                        {task.current >= task.target ? 'COLETAR' : task.reward}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
````

## File: components/IntroOverlay.tsx
````typescript
import React, { useState, useEffect, useCallback } from 'react';
import { Terminal, ArrowRight, ShieldAlert, Cpu, FastForward, CheckCircle2 } from 'lucide-react';
import { playTyping, playNotification } from '../engine/soundEffects';
interface IntroOverlayProps {
  onComplete: () => void;
}
const INTRO_SCRIPT = [
  { text: "> INICIANDO PROTOCOLO Agente Flow v2.5...", type: 'system' },
  { text: "> ESCANEANDO SISTEMA ATUAL... ERRO: DEPENDÊNCIA HUMANA DETECTADA.", type: 'error' },
  { text: "> O JOGO: Você é um CEO em busca da Escala Infinita. Não seja o gargalo.", type: 'instruction' },
  { text: "> INSTRUÇÃO 1: Clique nos botões de OPERAÇÃO para gerar capital inicial.", type: 'instruction' },
  { text: "> INSTRUÇÃO 2: Use o CAPITAL para comprar AGENTES e automatizar sua rotina.", type: 'instruction' },
  { text: "> CUIDADO: Agentes reduzem seu STRESS. Se o Stress atingir 100%, você entra em BURNOUT.", type: 'error' }
];
const LEGAL_NOTICE = "> AVISO LEGAL: Esta é uma simulação educacional e de entretenimento. Os valores em $NEOFLW são virtuais e representam o valuation teórico da sua operação no simulador.";
const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete }) => {
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isFastForward, setIsFastForward] = useState(false);
  const [isInitialActive, setIsInitialActive] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialActive(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const completeAll = useCallback(() => {
    setDisplayedLines(INTRO_SCRIPT.map(s => s.text));
    setCurrentLineIdx(INTRO_SCRIPT.length);
    setIsFinished(true);
  }, []);
  useEffect(() => {
    if (currentLineIdx < INTRO_SCRIPT.length) {
      const currentLine = INTRO_SCRIPT[currentLineIdx].text;
      if (currentCharIdx < currentLine.length) {
        const timeout = setTimeout(() => {
          const newDisplayedLines = [...displayedLines];
          if (!newDisplayedLines[currentLineIdx]) {
            newDisplayedLines[currentLineIdx] = "";
          }
          newDisplayedLines[currentLineIdx] += currentLine[currentCharIdx];
          setDisplayedLines(newDisplayedLines);
          setCurrentCharIdx(currentCharIdx + 1);
          if (currentCharIdx % 3 === 0) playTyping();
        }, isFastForward ? 5 : 25);
        return () => clearTimeout(timeout);
      } else {
        let pauseDuration = isFastForward ? 50 : 300;
        if (currentLineIdx === 0) pauseDuration = isFastForward ? 100 : 800;
        if (currentLineIdx === 1) pauseDuration = isFastForward ? 200 : 1500;
        const timeout = setTimeout(() => {
          setCurrentLineIdx(currentLineIdx + 1);
          setCurrentCharIdx(0);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      setIsFinished(true);
    }
  }, [currentLineIdx, currentCharIdx, displayedLines, isFastForward]);
  const handleStart = () => {
    if (!termsAccepted) return;
    playNotification();
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };
  return (
    <div
      className={`fixed inset-0 z-[500] bg-black flex flex-col items-center justify-center p-8 transition-all duration-700 ease-in-out ${isExiting ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'}`}
      onClick={() => !isFinished && setIsFastForward(true)}
    >
      {/* Efeito de Scanline e Flicker CRT */}
      <div className="absolute inset-0 pointer-events-none z-[510] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      {/* Camada de Cor Pink (Magenta) - Agora só pulsa na entrada (isInitialActive) e na saída (isExiting) */}
      <div className={`absolute inset-0 pointer-events-none z-[511] opacity-[0.02] bg-magenta transition-opacity duration-1000 ${isInitialActive || isExiting ? 'animate-pulse opacity-[0.04]' : 'opacity-[0.01]'}`} />
      {/* Noise Visual nos Cantos - Adicionado safe area top */}
      <div className="absolute left-6 font-mono text-[8px] text-magenta/20 select-none z-10" style={{ top: 'calc(1.5rem + env(safe-area-inset-top, 0px))' }}>
        ADDR: 0x59aa4EaE743d6...<br />
        MEM_LOAD: 88.4%
      </div>
      <div className="absolute right-6 font-mono text-[8px] text-magenta/20 text-right select-none z-10" style={{ top: 'calc(1.5rem + env(safe-area-inset-top, 0px))' }}>
        LATENCY: 12ms<br />
        ENCRYPTION: AES-256
      </div>
      <div className="w-full max-w-md flex-1 flex flex-col justify-center font-mono relative z-20" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
        <div className="mb-10 flex items-center gap-3">
          <div className="w-12 h-12 bg-magenta/10 border border-magenta/30 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,0,255,0.2)]">
            <Terminal className="text-magenta" size={24} />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-magenta/50 to-transparent" />
          {!isFinished && (
            <button
              onClick={(e) => { e.stopPropagation(); completeAll(); }}
              className="flex items-center gap-1 text-[9px] font-black text-white/30 hover:text-magenta uppercase tracking-widest transition-colors"
            >
              Skip <FastForward size={10} />
            </button>
          )}
        </div>
        <div className="space-y-4 min-h-[220px]">
          {displayedLines.map((line, idx) => {
            const config = INTRO_SCRIPT[idx];
            return (
              <div key={idx} className="flex gap-3 items-start">
                <span className="text-magenta/40 mt-1 shrink-0">{'>'}</span>
                <p className={`text-[13px] md:text-sm leading-relaxed tracking-tight font-medium ${config.type === 'error' ? 'text-magenta font-black text-glow' :
                  config.type === 'instruction' ? 'text-cyan-400/90' :
                    'text-gray-300'
                  }`}>
                  {line}
                  {config.type === 'instruction' && idx < currentLineIdx && (
                    <CheckCircle2 size={12} className="inline ml-2 text-cyan-400 animate-pulse" />
                  )}
                  {idx === currentLineIdx && !isFinished && (
                    <span className="inline-block w-2 h-4 bg-magenta ml-1 animate-pulse" />
                  )}
                </p>
              </div>
            );
          })}
        </div>
        <div className={`mt-10 transition-all duration-1000 ${isFinished ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-0'}`}>
          <div className="mb-6 flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              className="mt-1 w-5 h-5 rounded border-magenta/40 bg-black text-magenta focus:ring-magenta"
            />
            <label htmlFor="terms" className="text-[10px] text-gray-500 leading-tight cursor-pointer select-none">
              Eu entendo que este é um simulador gamificado e concordo com os termos de uso e privacidade da plataforma NEØFLW.
            </label>
          </div>
          <div className="relative group mb-8">
            <div className={`absolute -inset-1 bg-magenta/40 rounded-[24px] blur-xl transition-all duration-500 ${termsAccepted ? 'group-hover:bg-magenta/60 animate-pulse' : 'bg-gray-800/40 opacity-0'}`} />
            <button
              id="start-btn"
              onClick={(e) => { e.stopPropagation(); handleStart(); }}
              disabled={!termsAccepted}
              className={`w-full relative py-6 px-4 bg-black/40 backdrop-blur-xl border rounded-[22px] overflow-hidden transition-all active:scale-[0.97] group ${termsAccepted ? 'border-magenta/50' : 'border-white/10 opacity-50 grayscale'}`}
            >
              {termsAccepted && <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-[conic-gradient(from_0deg_at_50%_50%,#ff00ff_0%,#000_25%,#ff00ff_50%,#000_75%,#ff00ff_100%)] animate-[spin_4s_linear_infinite]" />}
              <div className="absolute inset-y-0 left-0 w-1 bg-white/40 shadow-[0_0_15px_#fff] -translate-x-full animate-[scan_3s_linear_infinite] z-20" />
              <div className="relative flex flex-col items-center gap-2 z-10">
                <div className="flex items-center gap-4 text-white font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                  <Cpu size={18} className={`${termsAccepted ? 'text-magenta animate-pulse' : 'text-gray-500'}`} />
                  CONECTAR COM NEØFLW
                  <ArrowRight size={18} strokeWidth={3} className={`transition-transform duration-300 ${termsAccepted ? 'text-magenta group-hover:translate-x-2' : 'text-gray-500'}`} />
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-8 bg-white/10 rounded-full" />
                  <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Acesso Autorizado</span>
                  <div className="h-0.5 w-8 bg-white/10 rounded-full" />
                </div>
              </div>
            </button>
          </div>
          <p className="text-[9px] md:text-[10px] text-gray-500 italic leading-relaxed text-center px-4 mb-8 font-mono opacity-60">
            {LEGAL_NOTICE}
          </p>
          <div className="flex items-center justify-center gap-2 opacity-30 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            <ShieldAlert size={12} />
            END-TO-END ENCRYPTION
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scan {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(400%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--magenta)_0%,_transparent_70%)]" />
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#ff00ff 1px, transparent 1px), linear-gradient(90deg, #ff00ff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>
    </div>
  );
};
export default IntroOverlay;
````

## File: components/LeaderboardModal.tsx
````typescript
import React, { useEffect, useState } from 'react';
import { X, Trophy, Crown, Loader2 } from 'lucide-react';
interface LeaderboardEntry {
    name: string;
    score: number;
}
interface LeaderboardModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentValuation: number;
    userName: string;
    userId: number | string;
}
export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({ isOpen, onClose, currentValuation, userName, userId }) => {
    const [leaders, setLeaders] = useState<LeaderboardEntry[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if (isOpen) {
            fetchLeaderboard();
            submitScore();
        }
    }, [isOpen]);
    const fetchLeaderboard = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('/api/leaderboard');
            if (!res.ok) throw new Error('Falha na conexão');
            const data = await res.json();
            setLeaders(data.leaderboard || []);
        } catch (e) {
            setError('Erro ao carregar ranking.');
        } finally {
            setLoading(false);
        }
    };
    const submitScore = async () => {
        try {
            await fetch('/api/leaderboard', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: userName,
                    score: Math.floor(currentValuation),
                    user_id: userId
                })
            });
        } catch (e) {
            console.warn('Failed to submit score');
        }
    };
    if (!isOpen) return null;
    return (
        <div id="modal-leaderboard" className="fixed inset-0 z-[650] flex items-center justify-center animate-in fade-in duration-200">
            <div
                id="modal-leaderboard-backdrop"
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />
            <div className="relative w-[90%] max-w-sm bg-[#1a1625] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[80vh]">
                {}
                <div className="bg-gradient-to-r from-purple-900/40 to-purple-600/10 p-4 border-b border-white/5 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-2">
                        <Trophy className="text-purple-400" size={20} />
                        <h2 className="text-white font-bold text-lg">Ranking Global</h2>
                    </div>
                    <button id="modal-leaderboard-close" onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>
                {}
                <div className="p-4 overflow-y-auto custom-scrollbar flex-1">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-10 text-purple-400">
                            <Loader2 className="animate-spin mb-2" size={32} />
                            <span className="text-xs uppercase tracking-widest opacity-70">Sincronizando...</span>
                        </div>
                    ) : error ? (
                        <div className="text-center py-10 text-red-400 text-sm">
                            {error}
                            <button onClick={fetchLeaderboard} className="block mx-auto mt-2 text-xs underline">Tentar novamente</button>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {leaders.map((leader, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-between p-3 rounded-xl border ${leader.name === userName
                                        ? 'bg-purple-500/20 border-purple-500/40'
                                        : 'bg-white/5 border-white/5'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 flex items-center justify-center rounded-lg font-black text-sm ${index === 0 ? 'bg-yellow-500 text-black' :
                                            index === 1 ? 'bg-gray-400 text-black' :
                                                index === 2 ? 'bg-orange-700 text-white' :
                                                    'bg-white/5 text-white/40'
                                            }`}>
                                            {index + 1}
                                        </div>
                                        <div>
                                            <div className="text-white text-sm font-bold flex items-center gap-1">
                                                {leader.name}
                                                {index === 0 && <Crown size={12} className="text-yellow-500 fill-yellow-500" />}
                                            </div>
                                            <div className="text-[10px] text-white/40 uppercase tracking-wider">CEO</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-purple-300 font-mono font-bold text-sm">
                                            ${leader.score.toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {leaders.length === 0 && (
                                <div className="text-center text-white/30 text-xs py-10">
                                    Seja o primeiro no topo!
                                </div>
                            )}
                        </div>
                    )}
                </div>
                {}
                <div className="p-3 bg-black/20 text-[10px] text-white/30 text-right shrink-0">
                    * Valuation Total Acumulado
                </div>
            </div>
        </div>
    );
};
````

## File: components/Navigation.tsx
````typescript
import React from 'react';
import { Terminal, Users, ScanLine, Library } from 'lucide-react';
import { View } from '../types';
interface NavigationProps {
  active: View;
  onChange: (view: View) => void;
}
const Navigation: React.FC<NavigationProps> = ({ active, onChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full max-w-lg mx-auto ios-blur border-t border-magenta/20 px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] flex justify-between items-center z-[70]">
      <button
        id="nav-operacao"
        onClick={() => onChange('operacao')}
        className={`flex flex-col items-center gap-1.5 transition-all active:scale-90 flex-1 ${active === 'operacao' ? 'text-magenta' : 'text-gray-500'}`}
      >
        <div className={`p-1.5 rounded-xl transition-all ${active === 'operacao' ? 'bg-magenta/10' : ''}`}>
          <Terminal size={22} strokeWidth={active === 'operacao' ? 2.5 : 2} />
        </div>
        <span className="text-[9px] font-bold uppercase tracking-widest leading-none">Receita</span>
      </button>
      <button
        id="nav-agentes"
        onClick={() => onChange('agentes')}
        className={`flex flex-col items-center gap-1.5 transition-all active:scale-90 flex-1 ${active === 'agentes' ? 'text-magenta' : 'text-gray-500'}`}
      >
        <div className={`p-1.5 rounded-xl transition-all ${active === 'agentes' ? 'bg-magenta/10' : ''}`}>
          <Users size={22} strokeWidth={active === 'agentes' ? 2.5 : 2} />
        </div>
        <span className="text-[9px] font-bold uppercase tracking-widest leading-none">Escala</span>
      </button>
      <button
        id="nav-protocols"
        onClick={() => onChange('protocols')}
        className={`flex flex-col items-center gap-1.5 transition-all active:scale-90 flex-1 ${active === 'protocols' ? 'text-magenta' : 'text-gray-500'}`}
      >
        <div className={`p-1.5 rounded-xl transition-all ${active === 'protocols' ? 'bg-magenta/10' : ''}`}>
          <Library size={22} strokeWidth={active === 'protocols' ? 2.5 : 2} />
        </div>
        <span className="text-[9px] font-bold uppercase tracking-widest leading-none">Playbook</span>
      </button>
      <button
        id="nav-raiox"
        onClick={() => onChange('raiox')}
        className={`flex flex-col items-center gap-1.5 transition-all active:scale-90 flex-1 ${active === 'raiox' ? 'text-magenta' : 'text-gray-500'}`}
      >
        <div className={`p-1.5 rounded-xl transition-all ${active === 'raiox' ? 'bg-magenta/10' : ''}`}>
          <ScanLine size={22} strokeWidth={active === 'raiox' ? 2.5 : 2} />
        </div>
        <span className="text-[9px] font-bold uppercase tracking-widest leading-none">Board</span>
      </button>
    </nav>
  );
};
export default Navigation;
````

## File: components/NeoMintModal.tsx
````typescript
import React from 'react';
import { Wallet, Zap, ShieldCheck, ChevronRight, Loader2, ExternalLink } from 'lucide-react';
import { useNeoToken } from '../hooks/useNeoToken';
interface NeoMintModalProps {
    onClose: () => void;
}
const NeoMintModal: React.FC<NeoMintModalProps> = ({ onClose }) => {
    const {
        isConnected,
        balance,
        stats,
        mint,
        isPending,
        mintSuccess,
        error
    } = useNeoToken();
    const handleAction = async () => {
        if (!isConnected) {
            const connectButton = document.querySelector('appkit-button');
            if (connectButton) {
                (connectButton as any).click();
            } else {
                window.alert("Por favor, conecte sua carteira usando o botão no topo.");
            }
            return;
        }
        try {
            await mint();
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div id="modal-neomint" className="fixed inset-0 z-[600] flex items-end justify-center">
            <div id="modal-neomint-backdrop" className="absolute inset-0 bg-black/95 backdrop-blur-xl animate-in fade-in" onClick={onClose} />
            <div className="relative w-full max-w-lg bg-[#0a0510] border-t-2 border-magenta/40 rounded-t-[40px] p-8 pointer-events-auto animate-in slide-in-from-bottom duration-500 pb-[calc(40px+env(safe-area-inset-bottom))]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/10 rounded-full" />
                <header className="text-center mb-8">
                    <div className="inline-flex p-4 bg-magenta/10 rounded-2xl border border-magenta/20 mb-4 group hover:bg-magenta/20 transition-all duration-500">
                        <Zap className="text-magenta animate-pulse" size={32} />
                    </div>
                    <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-tight">MINT $NEOFLW</h2>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Protocolo Mainnet Base ⦿ Official</p>
                </header>
                <div className="space-y-4">
                    {}
                    <div className="bg-white/5 p-6 rounded-[28px] border border-white/10 flex justify-between items-center bg-gradient-to-br from-magenta/10 via-transparent to-transparent">
                        <div>
                            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest block mb-1">Seu Saldo Real</span>
                            <div className="flex items-baseline gap-2">
                                <p className="text-3xl font-black text-white font-mono leading-none">{balance}</p>
                                <span className="text-[10px] font-black text-magenta uppercase tracking-widest">$NEOFLW</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest block mb-1">Status Mint</span>
                            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${stats?.mintEnabled ? 'text-green-500 border-green-500/20 bg-green-500/5' : 'text-orange-500 border-orange-500/20 bg-orange-500/5'}`}>
                                {stats?.mintEnabled ? 'ATIVO' : 'PAUSADO'}
                            </span>
                        </div>
                    </div>
                    {}
                    {stats && (
                        <div className="bg-white/5 p-4 rounded-[24px] border border-white/5">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Suprimento Distribuído</span>
                                <span className="text-[9px] font-bold text-white uppercase tracking-widest">
                                    {Math.round((Number(stats.currentSupply) / Number(stats.maxSupply)) * 100)}%
                                </span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-magenta transition-all duration-1000 ease-out"
                                    style={{ width: `${(Number(stats.currentSupply) / Number(stats.maxSupply)) * 100}%` }}
                                />
                            </div>
                            <div className="flex justify-between mt-2">
                                <span className="text-[8px] font-medium text-gray-600 uppercase tracking-tighter">Genesis</span>
                                <span className="text-[8px] font-medium text-gray-600 uppercase tracking-tighter">1,000,000,000 MAX</span>
                            </div>
                        </div>
                    )}
                    {}
                    {error && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl animate-in fade-in zoom-in duration-300">
                            <p className="text-[10px] font-medium text-red-400 text-center uppercase tracking-wide">
                                {error}
                            </p>
                        </div>
                    )}
                    {}
                    {mintSuccess && (
                        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-center space-y-2 animate-in fade-in zoom-in duration-300">
                            <div className="flex items-center justify-center gap-2 text-green-400">
                                <ShieldCheck size={16} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Mint Realizado com Sucesso!</span>
                            </div>
                            <p className="text-[9px] text-gray-400 uppercase tracking-tight leading-relaxed">
                                Suas quotas de escalabilidade foram protocoladas on-chain.
                            </p>
                        </div>
                    )}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/5 rounded-2xl">
                            <div className="w-2 h-2 rounded-full bg-magenta animate-pulse" />
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tight italic">Mainnet Base</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/5 rounded-2xl">
                            <ShieldCheck className="text-gray-500" size={14} />
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tight italic">Verificado</span>
                        </div>
                    </div>
                    <div className="pt-4">
                        <button
                            onClick={handleAction}
                            disabled={isPending || (isConnected && !stats?.mintEnabled)}
                            className={`w-full py-6 rounded-[24px] font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(255,0,255,0.2)] active:scale-[0.96] transition-all group relative overflow-hidden ${isPending
                                    ? 'bg-magenta/50 cursor-not-allowed'
                                    : 'bg-magenta text-white hover:brightness-110'
                                }`}
                        >
                            {isPending ? (
                                <>
                                    <Loader2 className="animate-spin" size={18} />
                                    PROCESSANDO MINT...
                                </>
                            ) : !isConnected ? (
                                <>
                                    <Wallet size={18} />
                                    CONECTAR CARTEIRA
                                </>
                            ) : (
                                <>
                                    INICIAR MINT ({stats?.mintPrice} ETH)
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                        <a
                            href="https://basescan.org/address/0x41F4ff3d45DED9C1332e4908F637B75fe83F5d6B"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 text-[9px] font-black text-gray-600 uppercase tracking-[0.3em] flex items-center justify-center gap-2 hover:text-magenta transition-colors mt-2"
                        >
                            VER CONTRATO NO EXPLORER
                            <ExternalLink size={10} />
                        </a>
                    </div>
                    <button
                        id="modal-neomint-close"
                        onClick={onClose}
                        className="w-full text-[9px] font-black text-gray-700 uppercase tracking-[0.3em] hover:text-white transition-colors"
                    >
                        FECHAR
                    </button>
                </div>
            </div>
        </div>
    );
};
export default NeoMintModal;
````

## File: components/NeoTerminal.tsx
````typescript
import React, { useState, useEffect, useRef, memo } from 'react';
import { GameState } from '../types';
import { playTyping, playNotification, playAlert } from '../engine/soundEffects';
import { calculateAgentCost, calculateValuation } from '../engine/gameLogic';
import { AUDITOR_MESSAGES } from '../constants/auditorMessages';
import { openExternalLink } from '../utils/navigation';
interface NeoTerminalProps {
  gameState: GameState;
  soundEnabled: boolean;
}
const NEO_AVATAR = {
  primary: "/agent_neo.png",
  fallback: "/agent_neo.png"
};
const NeoTerminal: React.FC<NeoTerminalProps> = ({ gameState, soundEnabled }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [fullText, setFullText] = useState(AUDITOR_MESSAGES.SYSTEM.IDLE_INITIAL);
  const [activeCta, setActiveCta] = useState<{ label: string, link: string } | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  // Refs para controle de memória do Auditor
  const lastMessageRef = useRef<string>("");
  const lastIdleSwitchRef = useRef<number>(0);
  const lastAdviceTimeRef = useRef<number>(0);
  const socialEventTriggeredRef = useRef(false);
  const trafficEventTriggeredRef = useRef(false);
  const supportEventTriggeredRef = useRef(false);
  const sdrEventTriggeredRef = useRef(false);
  const infraEventTriggeredRef = useRef(false);
  const fastGrowthRef = useRef(false);
  const whaleValuationRef = useRef(false);
  const burnoutProRef = useRef(0);
  const prevInventoryCount = useRef(gameState.inventory.reduce((acc, i) => acc + i.quantity, 0));
  const prevStatus = useRef(gameState.meta.status);
  const userName = gameState.meta.user?.name || "Operador";
  const initializedRef = useRef(false);
  useEffect(() => {
    const { resources, inventory, meta, agents } = gameState;
    const totalCap = meta.capital_total_gerado;
    const stress = resources.stress;
    const currentInventoryCount = inventory.reduce((acc, i) => acc + i.quantity, 0);
    const now = Date.now();
    const currentValuation = calculateValuation(gameState);
    const playMinutes = (now - meta.start_time) / 1000 / 60;
    if (!initializedRef.current && meta.start_time) {
      initializedRef.current = true;
      if (meta.event_social_media_triggered) {
        socialEventTriggeredRef.current = true;
      }
      if (meta.event_traffic_loss_triggered) {
        trafficEventTriggeredRef.current = true;
      }
      if (meta.event_support_backlog_triggered) {
        supportEventTriggeredRef.current = true;
      }
      if (meta.event_sdr_fatigue_triggered) {
        sdrEventTriggeredRef.current = true;
      }
      if (meta.event_infra_downtime_triggered) {
        infraEventTriggeredRef.current = true;
      }
      if (playMinutes >= 3 || currentValuation > 10000) {
        fastGrowthRef.current = true;
      }
      if (currentValuation > 10000) {
        whaleValuationRef.current = true;
      }
      prevInventoryCount.current = currentInventoryCount;
      prevStatus.current = meta.status;
      if (meta.capital_total_gerado > 0) {
        const idlePool = AUDITOR_MESSAGES.IDLE_THOUGHTS;
        const initialIdle = idlePool[Math.floor(Math.random() * idlePool.length)];
        setFullText(initialIdle);
        lastMessageRef.current = initialIdle;
        lastIdleSwitchRef.current = now;
      } else {
        lastMessageRef.current = "";
      }
      // Retorna early na primeira inicialização para evitar processar mensagens antigas
      return;
    }
    let priorityMessage = "";
    let isHighPriority = false;
    let currentCta = null;
    // 1. Mensagens Críticas (Sempre Verificadas)
    if (meta.is_crashed) {
      if (burnoutProRef.current < 1) {
        priorityMessage = AUDITOR_MESSAGES.CRITICAL.CRASH(userName);
        burnoutProRef.current = 1;
        isHighPriority = true;
      }
    } else if (currentValuation > 500 && playMinutes < 3 && !fastGrowthRef.current) {
      priorityMessage = AUDITOR_MESSAGES.EASTER_EGG.FAST_GROWTH.text;
      currentCta = AUDITOR_MESSAGES.EASTER_EGG.FAST_GROWTH.cta;
      fastGrowthRef.current = true;
      isHighPriority = true;
    } else if (currentValuation > 10000 && !whaleValuationRef.current) {
      priorityMessage = AUDITOR_MESSAGES.EASTER_EGG.WHALE_VALUATION.text;
      currentCta = AUDITOR_MESSAGES.EASTER_EGG.WHALE_VALUATION.cta;
      whaleValuationRef.current = true;
      isHighPriority = true;
    } else if (meta.event_social_media_triggered && !socialEventTriggeredRef.current) {
      priorityMessage = AUDITOR_MESSAGES.CRITICAL.SOCIAL_VULNERABILITY;
      socialEventTriggeredRef.current = true;
      isHighPriority = true;
    } else if (meta.event_traffic_loss_triggered && !trafficEventTriggeredRef.current) {
      priorityMessage = AUDITOR_MESSAGES.CRITICAL.TRAFFIC_LOSS;
      trafficEventTriggeredRef.current = true;
      isHighPriority = true;
    } else if (meta.event_support_backlog_triggered && !supportEventTriggeredRef.current) {
      priorityMessage = AUDITOR_MESSAGES.CRITICAL.SUPPORT_BACKLOG;
      supportEventTriggeredRef.current = true;
      isHighPriority = true;
    } else if (meta.event_sdr_fatigue_triggered && !sdrEventTriggeredRef.current) {
      priorityMessage = AUDITOR_MESSAGES.CRITICAL.SDR_FATIGUE;
      sdrEventTriggeredRef.current = true;
      isHighPriority = true;
    } else if (meta.event_infra_downtime_triggered && !infraEventTriggeredRef.current) {
      priorityMessage = AUDITOR_MESSAGES.CRITICAL.INFRA_DOWNTIME;
      infraEventTriggeredRef.current = true;
      isHighPriority = true;
    } else if (stress > 95 && lastMessageRef.current !== AUDITOR_MESSAGES.CRITICAL.BURNOUT_WARNING) {
      priorityMessage = AUDITOR_MESSAGES.CRITICAL.BURNOUT_WARNING;
      isHighPriority = true;
    }
    // 2. Mudanças de Estado (Gatilhos Únicos)
    else if (currentInventoryCount > prevInventoryCount.current) {
      priorityMessage = AUDITOR_MESSAGES.PROGRESS.AGENT_INJECTED;
      prevInventoryCount.current = currentInventoryCount;
    } else if (prevStatus.current !== meta.status) {
      priorityMessage = AUDITOR_MESSAGES.PROGRESS.STATUS_EVOLUTION(meta.status);
      prevStatus.current = meta.status;
    } else if (totalCap === 0 && lastMessageRef.current === "") {
      priorityMessage = AUDITOR_MESSAGES.SYSTEM.INITIAL(userName);
    }
    // 3. Conselhos Contextuais (Com Cooldown de 120s)
    else {
      const nextAgent = agents.find(a => totalCap >= a.desbloqueia_em_capital_total);
      const nextAgentCost = nextAgent ? calculateAgentCost(nextAgent.custo_base, inventory.find(i => i.id === nextAgent.id)?.quantity || 0) : 0;
      const isAdviceCooldownOver = now - lastAdviceTimeRef.current > 120000;
      if (nextAgentCost > 0 && resources.capital > nextAgentCost * 2 && isAdviceCooldownOver) {
        priorityMessage = AUDITOR_MESSAGES.ADVICE.IDLE_CAPITAL;
        lastAdviceTimeRef.current = now;
      }
    }
    // Reset burnout ref when not crashed
    if (!meta.is_crashed && burnoutProRef.current > 0) {
      burnoutProRef.current = 0;
    }
    // 4. Lógica de Troca de Mensagem
    const shouldUpdateIdle = now - lastIdleSwitchRef.current > 45000;
    if (priorityMessage && priorityMessage !== lastMessageRef.current) {
      // Se houver uma mensagem de prioridade NOVA, exibe imediatamente
      setFullText(priorityMessage);
      setDisplayedText("");
      if (currentCta) {
        const isTelegram = gameState.meta.user?.type === 'telegram';
        const rawLink = isTelegram ? currentCta.tg : currentCta.wa;
        const finalLink = rawLink.replace('{{NAME}}', encodeURIComponent(userName));
        setActiveCta({
          label: currentCta.label,
          link: finalLink
        });
      } else {
        setActiveCta(null);
      }
      lastMessageRef.current = priorityMessage;
      if (soundEnabled) {
        if (isHighPriority) playAlert();
        else playNotification();
      }
    } else if (shouldUpdateIdle && !priorityMessage && !isTyping) {
      // Se não houver prioridade NOVA, mas for hora de atualizar, roda pensamentos IDLE
      const idlePool = AUDITOR_MESSAGES.IDLE_THOUGHTS;
      let nextIdle = lastMessageRef.current;
      while (nextIdle === lastMessageRef.current) {
        nextIdle = idlePool[Math.floor(Math.random() * idlePool.length)];
      }
      setFullText(nextIdle);
      setDisplayedText("");
      setActiveCta(null);
      lastMessageRef.current = nextIdle;
      lastIdleSwitchRef.current = now;
      if (soundEnabled) playNotification();
    }
  }, [
    gameState.meta.status,
    gameState.meta.is_crashed,
    gameState.meta.event_social_media_triggered,
    gameState.meta.event_traffic_loss_triggered,
    gameState.meta.event_support_backlog_triggered,
    gameState.meta.event_sdr_fatigue_triggered,
    gameState.meta.event_infra_downtime_triggered,
    gameState.inventory.length,
    gameState.resources.capital,
    userName,
    soundEnabled,
    // Removido gameState inteiro para evitar triggers de 1s, usando apenas o necessário
    gameState.resources.stress,
    gameState.meta.capital_total_gerado
  ]);
  useEffect(() => {
    if (displayedText.length < fullText.length) {
      setIsTyping(true);
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
        if (soundEnabled && displayedText.length % 2 === 0) playTyping();
      }, 15);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [displayedText, fullText, soundEnabled]);
  return (
    <div className="relative mx-1">
      <div className={`absolute -inset-0.5 rounded-[28px] blur-xl opacity-20 transition-all duration-1000 ${gameState.meta.is_crashed ? 'bg-red-600 animate-pulse' : 'bg-magenta/40'
        }`}></div>
      <div className={`relative bg-[#0d0714]/90 ios-blur border rounded-[28px] p-5 flex gap-4 items-center border-white/5 overflow-hidden`}>
        <div className="w-12 h-12 flex-shrink-0 relative">
          <img
            src={NEO_AVATAR.primary}
            alt="Neo"
            className={`w-full h-full object-cover rounded-xl grayscale-[0.5] ${gameState.meta.is_crashed ? 'hue-rotate-[300deg]' : ''}`}
            onError={(e) => { (e.target as HTMLImageElement).src = NEO_AVATAR.fallback; }}
          />
          <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-[#0d0714] ${gameState.meta.is_crashed ? 'bg-red-600' : 'bg-green-500'
            }`}></div>
        </div>
        <div className="flex-1 min-h-[40px]">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[8px] font-black text-magenta uppercase tracking-widest opacity-60">NEO
          </div>
          <p className="text-[12px] font-mono text-gray-200 leading-tight">
            <span className="text-magenta mr-1">$</span>
            {displayedText}
            <span className={`inline-block w-1.5 h-3 bg-magenta ml-1 align-middle ${isTyping ? 'opacity-100' : 'opacity-0'}`}></span>
          </p>
          {activeCta && !isTyping && (
            <div className="mt-3 animate-float-up">
              <button
                onClick={() => openExternalLink(activeCta.link)}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-magenta/20 border border-magenta/40 rounded-full text-[9px] font-black text-magenta uppercase tracking-widest hover:bg-magenta hover:text-white transition-all animate-pulse"
              >
                {activeCta.label}
                <div className="w-1 h-1 rounded-full bg-magenta animate-ping" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default memo(NeoTerminal);
````

## File: components/OfflineEarningsModal.tsx
````typescript
import React from 'react';
import { Clock, DollarSign, Terminal, X, ArrowRight } from 'lucide-react';
import { formatHours } from '../engine/gameLogic';
interface OfflineEarningsModalProps {
  pu: number;
  seconds: number;
  onClose: () => void;
}
const OfflineEarningsModal: React.FC<OfflineEarningsModalProps> = ({ pu, seconds, onClose }) => {
  return (
    <div id="modal-offline-earnings" className="fixed inset-0 z-[300] flex items-center justify-center p-6 animate-in fade-in duration-500">
      <div id="modal-offline-earnings-backdrop" className="absolute inset-0 bg-black/90 backdrop-blur-xl pointer-events-auto" onClick={onClose} />
      <div className="relative w-full max-w-sm bg-[#0d0714] border border-magenta/30 rounded-[32px] p-8 shadow-[0_0_80px_rgba(255,0,255,0.2)]">
        <header className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-magenta/10 rounded-2xl border border-magenta/20"><Terminal className="text-magenta" size={24} /></div>
            <div>
              <h2 className="text-[10px] font-black text-magenta uppercase tracking-[0.2em] mb-1">Relatório de Ausência</h2>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">Receita Gerada</h3>
            </div>
          </div>
          <button id="modal-offline-earnings-close" onClick={onClose} className="p-2 text-gray-600 hover:text-white"><X size={20} /></button>
        </header>
        <div className="space-y-6 relative z-10">
          <p className="text-sm text-gray-400 font-medium leading-relaxed italic opacity-80">"Seus agentes nunca dormem. A escala continua enquanto você descansa."</p>
          <div className="bg-magenta/5 p-6 rounded-[24px] border border-magenta/20 flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="text-magenta" size={20} strokeWidth={3} />
              <span className="text-xs font-black text-magenta uppercase tracking-widest">Capital Acumulado</span>
            </div>
            <p className="text-4xl font-black text-white font-mono tracking-tighter">+ $ {Math.floor(pu).toLocaleString()}</p>
          </div>
          <button onClick={onClose} className="w-full py-5 bg-magenta text-white rounded-[22px] font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all">
            Voltar ao Dashboard
            <ArrowRight size={16} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default OfflineEarningsModal;
````

## File: components/Operation.tsx
````typescript
import React, { useState, useMemo, useRef } from 'react';
import { ManualAction, GameState } from '../types';
import { isActionAutomated, formatHours, calculateManualGain, calculateValuation, calculateAgentCost } from '../engine/gameLogic';
import { CheckCircle2, Clock, RefreshCcw, TrendingUp, ShieldCheck, Sparkles, Bot, BadgeDollarSign, Radar, ChevronRight, Gem, Rocket } from 'lucide-react';
import NeoTerminal from './NeoTerminal';
import telegram from '../utils/telegramUtils';
import { STATUS_MILESTONES, TOKEN_TICKER, BASE_MAGENTA } from '../constants';
interface OperationProps {
  gameState: GameState;
  onAction: (action: ManualAction) => void;
  onWithdrawAttempt?: () => void;
  soundEnabled: boolean;
  onSocialReset?: () => void;
}
interface Particle {
  id: number;
  x: number;
  y: number;
  text: string;
  color: string;
}
const LOGO_URL = "/icon-512.webp";
const Operation: React.FC<OperationProps> = ({ gameState, onAction, onWithdrawAttempt, soundEnabled, onSocialReset }) => {
  const { manualActions, inventory, agents, resources, meta } = gameState;
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastParticleTime = useRef(0);
  const tokenEarned = calculateValuation(gameState).toFixed(2);
  const { progress } = useMemo(() => {
    const valuation = calculateValuation(gameState);
    const currentIdx = [...STATUS_MILESTONES].reverse().find(m => valuation >= m.pu);
    const actualIdx = STATUS_MILESTONES.findIndex(m => m.pu === currentIdx?.pu) || 0;
    const currentMilestone = STATUS_MILESTONES[actualIdx];
    const nextMilestone = STATUS_MILESTONES[actualIdx + 1];
    if (!nextMilestone) return { progress: 100 };
    const range = nextMilestone.pu - currentMilestone.pu;
    const currentProgress = valuation - currentMilestone.pu;
    return { progress: Math.min(100, (currentProgress / range) * 100) };
  }, [gameState]);
  const commercialMetrics = useMemo(() => {
    const valuation = calculateValuation(gameState);
    const automatedActions = manualActions.filter(action => isActionAutomated(action.id, inventory, agents)).length;
    const automationCoverage = manualActions.length ? (automatedActions / manualActions.length) * 100 : 100;
    const nextUnlockAgent = [...agents]
      .sort((a, b) => a.desbloqueia_em_capital_total - b.desbloqueia_em_capital_total)
      .find(agent => meta.capital_total_gerado < agent.desbloqueia_em_capital_total) || null;
    const unlockedAgents = agents
      .filter(agent => meta.capital_total_gerado >= agent.desbloqueia_em_capital_total)
      .map(agent => {
        const owned = inventory.find(item => item.id === agent.id)?.quantity || 0;
        const cost = calculateAgentCost(agent.custo_base, owned, meta.prestige_level || 0);
        return {
          agent,
          cost,
          paybackSeconds: agent.receita_passiva_segundo > 0 ? cost / agent.receita_passiva_segundo : Number.POSITIVE_INFINITY
        };
      })
      .sort((a, b) => a.paybackSeconds - b.paybackSeconds);
    const recommended = unlockedAgents[0] || null;
    const affordableAgents = unlockedAgents.filter(item => resources.capital >= item.cost).length;
    let stage = 'Prova de Oferta';
    if (valuation >= 30000) stage = 'Dominio Operacional';
    else if (valuation >= 5000) stage = 'Escala Validada';
    else if (valuation >= 500) stage = 'Motor Comercial';
    return {
      stage,
      valuation,
      automationCoverage,
      nextUnlockAgent,
      recommended,
      affordableAgents
    };
  }, [agents, gameState, inventory, manualActions, meta.active_regime, meta.capital_total_gerado, meta.prestige_level, resources.capital]);
  const openCommercialChannel = (eventName: string) => {
    window.dispatchEvent(new CustomEvent(eventName));
  };
  const handleTelegramShare = () => {
    openCommercialChannel('open-referral');
  };
  const handleInteraction = (e: React.MouseEvent | React.TouchEvent, action: ManualAction) => {
    if (meta.is_crashed) return;
    if (isActionAutomated(action.id, inventory, agents)) return;
    let clientX = 0, clientY = 0;
    if ('touches' in e) {
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else return;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }
    onAction(action);
    const now = Date.now();
    if (now - lastParticleTime.current > 50) {
      const scaledGain = calculateManualGain(
        action,
        meta.capital_total_gerado,
        meta.prestige_level || 0,
        meta.active_regime
      );
      const timestamp = now;
      const newParticles: Particle[] = [
        { id: timestamp, x: clientX - 20, y: clientY - 20, text: `+$${scaledGain}`, color: 'text-magenta' }
      ];
      setParticles(prev => [...prev.slice(-10), ...newParticles]);
      setTimeout(() => setParticles(prev => prev.filter(p => p.id !== timestamp)), 800);
      lastParticleTime.current = now;
    }
  };
  const crashTimeRemaining = Math.max(0, Math.ceil((meta.crash_end_time - Date.now()) / 1000));
  return (
    <div className="space-y-6 relative">
      <div className="fixed inset-0 pointer-events-none z-[200]">
        {particles.map(p => (
          <div key={p.id} className={`absolute font-mono font-black text-sm animate-float-up pointer-events-none whitespace-nowrap ${p.color}`} style={{ left: p.x, top: p.y }}>{p.text}</div>
        ))}
      </div>
      <NeoTerminal gameState={gameState} soundEnabled={soundEnabled} />
      <section className="relative overflow-hidden rounded-[28px] border border-magenta/20 bg-[#12081a]/80 ios-blur p-5 shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_100%_0%,rgba(255,0,142,0.2),transparent_55%)]" />
        <div className="relative">
          <header className="mb-4">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-magenta/80">Commercial Command Deck</p>
            <h3 className="text-xl font-black text-white uppercase tracking-tight">Sistema de Conversao em Escala</h3>
          </header>
          <div className="grid grid-cols-3 gap-2.5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <div className="mb-2 flex items-center gap-1.5 text-cyan-300">
                <Radar size={12} />
                <span className="text-[8px] font-black uppercase tracking-widest">Estagio</span>
              </div>
              <p className="text-[11px] font-black text-white leading-tight uppercase">{commercialMetrics.stage}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <div className="mb-2 flex items-center gap-1.5 text-green-300">
                <Bot size={12} />
                <span className="text-[8px] font-black uppercase tracking-widest">Automacao</span>
              </div>
              <p className="text-[13px] font-black text-white">{commercialMetrics.automationCoverage.toFixed(0)}%</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <div className="mb-2 flex items-center gap-1.5 text-yellow-300">
                <BadgeDollarSign size={12} />
                <span className="text-[8px] font-black uppercase tracking-widest">Agentes Viaveis</span>
              </div>
              <p className="text-[13px] font-black text-white">{commercialMetrics.affordableAgents}</p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-magenta/25 bg-magenta/10 p-3.5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-magenta/80">Proxima Alavanca</p>
                <p className="mt-1 text-sm font-black text-white uppercase">
                  {commercialMetrics.nextUnlockAgent
                    ? `${commercialMetrics.nextUnlockAgent.nome} em $${Math.max(0, commercialMetrics.nextUnlockAgent.desbloqueia_em_capital_total - meta.capital_total_gerado).toLocaleString()}`
                    : 'Todas as trilhas de escala liberadas'}
                </p>
                {commercialMetrics.recommended && (
                  <p className="mt-1 text-[10px] text-white/70">
                    Melhor ROI imediato: {commercialMetrics.recommended.agent.nome} com payback em {Math.max(1, Math.round(commercialMetrics.recommended.paybackSeconds))}s.
                  </p>
                )}
              </div>
              <Gem size={16} className="text-magenta shrink-0" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              id="cta-open-store"
              onClick={() => openCommercialChannel('open-store')}
              className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-yellow-200 active:scale-[0.98]"
            >
              Loja Premium
            </button>
            <button
              id="cta-open-mint"
              onClick={() => openCommercialChannel('open-mint')}
              className="rounded-xl border border-magenta/30 bg-magenta/10 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-magenta-200 active:scale-[0.98]"
            >
              Neo Mint
            </button>
            <button
              id="cta-open-leaderboard"
              onClick={() => openCommercialChannel('open-leaderboard')}
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-cyan-200 active:scale-[0.98]"
            >
              Ranking
            </button>
            <button
              id="cta-open-tasks"
              onClick={() => openCommercialChannel('open-tasks')}
              className="rounded-xl border border-green-400/30 bg-green-400/10 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-green-200 active:scale-[0.98]"
            >
              Missoes
            </button>
          </div>
          <button
            id="cta-share-telegram"
            onClick={handleTelegramShare}
            className="mt-3 flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-left"
          >
            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/85">
              <Rocket size={13} className="text-magenta" />
              Convide 1 parceiro estrategico
            </span>
            <ChevronRight size={14} className="text-white/60" />
          </button>
        </div>
      </section>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/5 ios-blur border border-white/5 p-4 rounded-[24px] shadow-lg flex flex-col justify-between h-28 transition-all">
          <div className="flex items-center gap-2 opacity-60">
            <TrendingUp size={12} className="text-magenta" />
            <span className="text-[9px] font-black uppercase tracking-widest">Nível de Maturidade</span>
          </div>
          <p className="text-[13px] font-black text-white uppercase leading-tight truncate">{meta.status}</p>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-magenta transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div id="open-withdraw-modal" className="ios-blur border p-4 rounded-[24px] shadow-lg flex flex-col justify-between h-28 relative overflow-hidden group transition-all active:scale-95 cursor-pointer" style={{ borderColor: `${BASE_MAGENTA}25`, backgroundColor: `${BASE_MAGENTA}10` }} onClick={() => onWithdrawAttempt?.()}>
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2" style={{ color: BASE_MAGENTA }}>
              <Sparkles size={12} />
              <span className="text-[9px] font-black uppercase tracking-widest">Valuation</span>
            </div>
          </div>
          <div className="space-y-0.5 relative z-10">
            <p className="text-[26px] font-black text-white font-mono leading-none tracking-tighter drop-shadow-[0_0_15px_rgba(130,71,229,0.8)]">{tokenEarned}</p>
            <div className="flex items-center gap-1">
              <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: BASE_MAGENTA }}>{TOKEN_TICKER}</p>
              <ShieldCheck size={10} style={{ color: BASE_MAGENTA }} className="opacity-60" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white/5 border border-white/5 p-4 rounded-[24px] flex justify-between items-center shadow-lg">
        <div className="flex-1 space-y-1">
          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Tempo Devolvido p/ Dia</span>
          <div className="flex items-center gap-2 text-green-400 font-mono text-xl font-black leading-none">
            <Clock size={16} strokeWidth={3} />
            <span>{formatHours(resources.horas_manuais_eliminadas * 3600)}</span>
          </div>
        </div>
        <div className="text-right flex flex-col items-end">
          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Receita/s</span>
          <span className="text-sm font-black text-white font-mono">${(resources.receita_passiva).toFixed(1)}/s</span>
        </div>
      </div>
      <div className="space-y-3 relative">
        <div className="flex gap-2">
          <button
            id="post-x-btn"
            onClick={() => {
              const valuation = calculateValuation(gameState).toFixed(0);
              const text = `Alcancei $${valuation}M de valuation no Agent Flow.\n\nPare de ser o gargalo da sua empresa.\n\n$NEOFLW\n\nhttps://t.me/AgenteFlow_Bot`;
              const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
              window.open(twitterUrl, '_blank');
            }}
            className="flex-1 bg-white/5 border border-white/5 p-3 rounded-[22px] flex items-center justify-center gap-2 active:scale-95 transition-all group hover:border-cyan-500/50"
          >
            <svg className="w-4 h-4 text-cyan-400 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Postar no X</span>
          </button>
          <button
            id="post-cast-btn"
            onClick={() => {
              const valuation = calculateValuation(gameState).toFixed(0);
              const text = `Alcancei $${valuation}M de valuation no Agent Flow.\n\nPare de ser o gargalo da sua empresa.\n\n$NEOFLW\n\nhttps://t.me/AgenteFlow_Bot`;
              const farcasterUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(text)}`;
              window.open(farcasterUrl, '_blank');
            }}
            className="flex-1 bg-white/5 border border-white/5 p-3 rounded-[22px] flex items-center justify-center gap-2 active:scale-95 transition-all group hover:border-purple-500/50"
          >
            <svg className="w-4 h-4 text-purple-400 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.2 12c0-1.5-.6-2.9-1.7-4L18 4.5c-.8-.8-1.8-1.2-2.9-1.2H8.9c-1.1 0-2.1.4-2.9 1.2L2.5 8C1.4 9.1.8 10.5.8 12s.6 2.9 1.7 4L6 19.5c.8.8 1.8 1.2 2.9 1.2h6.2c1.1 0 2.1-.4 2.9-1.2l3.5-3.5c1.1-1.1 1.7-2.5 1.7-4zm-11.2 5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
            </svg>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Fazer Cast</span>
          </button>
        </div>
        {meta.is_crashed && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0a050f]/90 backdrop-blur-xl rounded-[22px] border border-red-500/50 p-6 text-center animate-in fade-in zoom-in duration-300 shadow-[0_0_50px_rgba(255,0,0,0.2)]">
            <RefreshCcw size={32} className="text-red-500 animate-spin mb-3 shadow-[0_0_15px_rgba(255,0,0,0.5)]" />
            <h4 className="text-lg font-black text-red-500 uppercase italic tracking-tighter mb-1 red-glow">COLAPSO OPERACIONAL</h4>
            <p className="text-[10px] text-red-500/70 font-bold uppercase tracking-widest mb-6">Reiniciando Processos... {crashTimeRemaining}s</p>
            <div className="w-full space-y-2">
              <button
                onClick={() => {
                  const text = `Minha operacao colapsou por excesso de stress.\n\nPreciso de mais agentes no Agent Flow.\n\n$NEOFLW\n\nhttps://t.me/AgenteFlow_Bot`;
                  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
                  window.open(twitterUrl, '_blank');
                  onSocialReset();
                }}
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(6,182,212,0.4)] active:scale-95 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                RESETAR COM POST NO X
              </button>
              <button
                onClick={() => {
                  const text = `Minha operacao colapsou por excesso de stress.\n\nPreciso de mais agentes no Agent Flow.\n\n$NEOFLW\n\nhttps://t.me/AgenteFlow_Bot`;
                  const farcasterUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(text)}`;
                  window.open(farcasterUrl, '_blank');
                  onSocialReset();
                }}
                className="w-full bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(168,85,247,0.4)] active:scale-95 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.2 12c0-1.5-.6-2.9-1.7-4L18 4.5c-.8-.8-1.8-1.2-2.9-1.2H8.9c-1.1 0-2.1.4-2.9 1.2L2.5 8C1.4 9.1.8 10.5.8 12s.6 2.9 1.7 4L6 19.5c.8.8 1.8 1.2 2.9 1.2h6.2c1.1 0 2.1-.4 2.9-1.2l3.5-3.5c1.1-1.1 1.7-2.5 1.7-4zm-11.2 5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
                </svg>
                RESETAR COM CAST
              </button>
            </div>
          </div>
        )}
        <div className={`grid grid-cols-1 gap-3.5 transition-opacity duration-300 ${meta.is_crashed ? 'opacity-20 pointer-events-none' : ''}`}>
          {manualActions.map(action => {
            const automated = isActionAutomated(action.id, inventory, agents);
            const currentManualGain = calculateManualGain(
              action,
              meta.capital_total_gerado,
              meta.prestige_level || 0,
              meta.active_regime
            );
            return (
              <button
                key={action.id}
                id={`manual-action-${action.id}`}
                disabled={automated || meta.is_crashed}
                onClick={(e) => handleInteraction(e, action)}
                className={`group relative flex items-center justify-between p-5 rounded-[22px] transition-all duration-300 active:scale-[0.96] border
                  ${automated
                    ? 'bg-black/20 border-white/5 opacity-30'
                    : 'bg-magenta/[0.03] border-magenta/15 hover:border-magenta/30 shadow-[0_0_15px_rgba(255,0,255,0.02)]'
                  }`}
              >
                {!automated && (
                  <div className="absolute -inset-0.5 bg-magenta/20 rounded-[22px] blur opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                )}
                <div className="flex flex-col items-start text-left relative z-10">
                  <span className={`text-base font-bold tracking-tight ${automated ? 'text-gray-600' : 'text-white'}`}>{action.label}</span>
                  {!automated && (
                    <div className="flex gap-2.5 mt-1.5">
                      <div className="flex items-center gap-1 bg-magenta/10 px-2 py-0.5 rounded-lg border border-magenta/20">
                        <span className="text-[9px] font-black text-magenta uppercase tracking-tighter cursor-default">AÇÃO MANUAL</span>
                        <div className="w-1 h-1 rounded-full bg-magenta animate-ping" />
                      </div>
                      <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-lg">
                        <span className="text-[9px] font-bold text-gray-400">+$ {currentManualGain}</span>
                      </div>
                    </div>
                  )}
                </div>
                {automated ? (
                  <div className="flex items-center gap-1.5 text-green-500 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20 relative z-10 font-black italic">
                    <CheckCircle2 size={14} strokeWidth={3} />
                    <span className="text-[9px] uppercase tracking-tight">AUTO</span>
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-2xl bg-magenta/20 border border-magenta/40 flex items-center justify-center text-magenta group-active:bg-magenta group-active:text-white transition-all relative z-10 shadow-[0_0_15px_rgba(255,0,255,0.2)]">
                    <span className="text-xl font-light leading-none">+</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Operation;
````

## File: components/PrestigeModal.tsx
````typescript
import React from 'react';
import { Sparkles, TrendingUp, X, ArrowRight, Zap, Award } from 'lucide-react';
interface PrestigeModalProps {
  userName: string;
  valuation: number;
  prestigeLevel: number;
  onClose: () => void;
  onPrestige: () => void;
}
const PrestigeModal: React.FC<PrestigeModalProps> = ({ userName, valuation, prestigeLevel, onClose, onPrestige }) => {
  const prestigeMultiplier = 1 + (prestigeLevel * 0.1);
  const nextMultiplier = 1 + ((prestigeLevel + 1) * 0.1);
  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-6 animate-in fade-in duration-700">
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-2xl pointer-events-auto"
        onClick={onClose}
      />
      <div className="relative w-full max-w-sm bg-[#0d0714]/95 backdrop-blur-3xl border border-cyan-500/30 rounded-[40px] p-10 shadow-[0_0_80px_rgba(6,182,212,0.15)] overflow-hidden animate-in zoom-in-95 duration-500">
        {}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-magenta/10 blur-[100px] rounded-full" />
        <header className="text-center mb-8 relative z-10">
          <div className="inline-flex p-4 bg-cyan-500/10 rounded-3xl border border-cyan-500/20 mb-6">
            <Sparkles className="text-cyan-500" size={32} />
          </div>
          <h2 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em] mb-2 opacity-80">Sistema de Prestígio</h2>
          <h3 className="text-3xl font-black text-white uppercase italic tracking-tight">Nova Escala</h3>
        </header>
        <div className="space-y-6 relative z-10">
          <div className="bg-white/5 p-6 rounded-[28px] border border-white/5">
            <p className="text-sm text-gray-300 font-medium leading-relaxed text-center mb-4">
              Você atingiu o limite máximo de crescimento. Reinicie sua operação e ganhe <span className="text-cyan-400 font-black">bônus permanentes</span> para sua próxima jornada.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-cyan-500/5 border border-cyan-500/10 rounded-xl">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Valuation Atual</span>
                <span className="text-lg font-black text-white font-mono">{valuation.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-magenta/5 border border-magenta/10 rounded-xl">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Prestígio Atual</span>
                <span className="text-lg font-black text-magenta font-mono">+{((prestigeMultiplier - 1) * 100).toFixed(0)}%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-500/5 border border-green-500/10 rounded-xl">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Próximo Bônus</span>
                <span className="text-lg font-black text-green-400 font-mono">+{((nextMultiplier - 1) * 100).toFixed(0)}%</span>
              </div>
            </div>
          </div>
          <div className="bg-yellow-500/5 p-4 rounded-[20px] border border-yellow-500/10">
            <div className="flex items-start gap-3">
              <Award className="text-yellow-500 mt-0.5" size={16} />
              <div>
                <p className="text-[10px] font-black text-yellow-500 uppercase tracking-wide mb-1">Bônus Permanentes</p>
                <ul className="text-[9px] text-gray-400 space-y-1">
                  <li>• +10% em ganhos de capital</li>
                  <li>• +10% em receita passiva por segundo</li>
                  <li>• Custo de agentes reduzido</li>
                  <li>• Progresso mais rápido</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-2 space-y-3">
            <button
              onClick={onPrestige}
              className="w-full py-6 bg-cyan-500 hover:bg-cyan-400 text-black rounded-[24px] font-black uppercase tracking-[0.1em] text-sm flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(6,182,212,0.3)] active:scale-95 transition-all group"
            >
              <Zap size={20} />
              ATIVAR PRESTÍGIO
              <ArrowRight size={18} strokeWidth={3} />
            </button>
            <button
              onClick={onClose}
              className="w-full py-4 bg-white/5 border border-white/10 rounded-[20px] text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] hover:bg-white/10 hover:text-white transition-all"
            >
              CONTINUAR JOGANDO
            </button>
          </div>
          <p className="text-[8px] text-gray-500 text-center font-mono uppercase tracking-[0.3em] pt-2">
            Seu progresso será resetado, mas os bônus são permanentes
          </p>
        </div>
        {}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(6,182,212,0.02)_50%)] bg-[length:100%_8px] opacity-30" />
      </div>
    </div>
  );
};
export default PrestigeModal;
````

## File: components/ReferralModal.tsx
````typescript
import React, { useState } from 'react';
import { X, Share2, Copy, Check, Users, Gift, Rocket, ChevronRight } from 'lucide-react';
import telegram from '../utils/telegramUtils';
interface ReferralModalProps {
    isOpen: boolean;
    onClose: () => void;
    userId: string | number | undefined;
}
export const ReferralModal: React.FC<ReferralModalProps> = ({ isOpen, onClose, userId }) => {
    const [copied, setCopied] = useState(false);
    if (!isOpen) return null;
    const botUsername = 'AgenteFlow_Bot';
    const referralLink = `https://t.me/${botUsername}/app?startapp=${userId}`;
    const handleCopyLink = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        telegram.hapticFeedback.notification('success');
        setTimeout(() => setCopied(false), 2000);
    };
    const handleShare = () => {
        const shareText = encodeURIComponent(
            `🚀 Entre na minha frota de agentes IA no Agent Flow e ganhe $1.000 de capital inicial!\n\nLink do protocolo: ${referralLink}`
        );
        telegram.openTelegramLink(`https://t.me/share/url?url=${referralLink}&text=${shareText}`);
        telegram.hapticFeedback.impact('heavy');
    };
    return (
        <div id="modal-referral" className="fixed inset-0 z-[650] flex items-center justify-center animate-in fade-in duration-200">
            <div
                id="modal-referral-backdrop"
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />
            <div className="relative w-[90%] max-w-sm bg-[#1a1625] border border-magenta/20 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="bg-gradient-to-r from-magenta/40 to-magenta/10 p-4 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Users className="text-magenta" size={20} />
                        <h2 className="text-white font-bold text-lg uppercase tracking-tight">Crescimento de Frota</h2>
                    </div>
                    <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-5 space-y-6">
                    <div className="text-center space-y-2">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-magenta/20 text-magenta mb-2">
                            <Gift size={24} />
                        </div>
                        <h3 className="text-white font-black uppercase text-sm tracking-widest">Incentivo de Expansão</h3>
                        <p className="text-[10px] text-white/50 leading-relaxed">
                            Convide parceiros estratégicos para o protocolo. Ambos recebem <span className="text-magenta font-bold">$1.000</span> de bônus na operação.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-2">
                            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30 italic">Seu Link de Convite</p>
                            <div className="flex items-center gap-2">
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-[10px] text-magenta font-mono truncate">{referralLink}</p>
                                </div>
                                <button
                                    onClick={handleCopyLink}
                                    className="p-2 transition-colors text-white/40 hover:text-magenta"
                                >
                                    {copied ? <Check size={16} /> : <Copy size={16} />}
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={handleShare}
                            className="w-full bg-magenta hover:bg-magenta-hover text-white py-3.5 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(255,0,142,0.3)] active:scale-95 transition-all"
                        >
                            <Share2 size={14} />
                            Enviar no Telegram
                        </button>
                    </div>
                    <div className="pt-2 border-t border-white/5">
                        <div className="flex items-center justify-between text-[8px] text-white/30 uppercase font-black tracking-widest">
                            <span>Status da Rede</span>
                            <span className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Online
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
````

## File: components/SingularityCertificate.tsx
````typescript
import React from 'react';
import { Award, Sparkles, X, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { openExternalLink } from '../utils/navigation';
interface SingularityCertificateProps {
  userName: string;
  onClose: () => void;
  onReset: () => void;
}
const SingularityCertificate: React.FC<SingularityCertificateProps> = ({ userName, onClose, onReset }) => {
  const handleConsultancy = () => {
    const text = encodeURIComponent(`Olá Mellø, sou o ${userName}. Alcancei a Singularidade no game e quero transicionar minha infra para o mundo real.`);
    openExternalLink(`https://t.me/neomello?text=${text}`);
  };
  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 animate-in fade-in duration-700">
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-2xl pointer-events-auto"
        onClick={onClose}
      />
      <div className="relative w-full max-w-sm bg-[#0d0714]/95 backdrop-blur-3xl border border-yellow-500/30 rounded-[40px] p-10 shadow-[0_0_80px_rgba(234,179,8,0.15)] overflow-hidden animate-in zoom-in-95 duration-500">
        {}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-yellow-500/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-magenta/10 blur-[100px] rounded-full" />
        <header className="text-center mb-12 relative z-10">
          <div className="inline-flex p-4 bg-yellow-500/10 rounded-3xl border border-yellow-500/20 mb-6">
            <Award className="text-yellow-500" size={32} />
          </div>
          <h2 className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.4em] mb-2 opacity-80">Missão Concluída</h2>
          <h3 className="text-3xl font-black text-white uppercase italic tracking-tight">Singularidade</h3>
        </header>
        <div className="space-y-10 relative z-10 text-center">
          <div className="space-y-2">
            <p className="text-4xl font-black text-white uppercase tracking-tighter italic drop-shadow-2xl">{userName}</p>
            <div className="h-0.5 w-12 bg-yellow-500 mx-auto rounded-full" />
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] pt-2">Operação 100% Autônoma</p>
          </div>
          <p className="text-sm text-gray-300 font-medium leading-relaxed italic px-2 opacity-90 border-l-2 border-yellow-500/30 py-1 ml-4 text-left">
            "Você deixou de ser o gargalo para se tornar o arquiteto. O sistema agora trabalha para você, não o contrário."
          </p>
          <div className="pt-4 space-y-4">
            <button
              onClick={handleConsultancy}
              className="w-full py-6 bg-yellow-500 hover:bg-yellow-400 text-black rounded-[24px] font-black uppercase tracking-[0.1em] text-sm flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(234,179,8,0.3)] active:scale-95 transition-all group"
            >
              <Sparkles size={20} />
              MIGRAR PARA O MUNDO REAL
              <ArrowRight size={18} strokeWidth={3} />
            </button>
            <button
              onClick={onReset}
              className="w-full py-4 bg-white/5 border border-white/10 rounded-[20px] text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] hover:bg-magenta/10 hover:border-magenta/30 hover:text-magenta transition-all"
            >
              REINICIAR PARA NOVA ESCALA
            </button>
            <div className="flex flex-col items-center gap-1 opacity-40">
              <p className="text-[8px] font-mono uppercase tracking-[0.3em] font-bold text-white">
                Diagnóstico Estratégico Real
              </p>
              <Zap size={10} className="text-yellow-500" />
            </div>
          </div>
        </div>
        {}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(234,179,8,0.02)_50%)] bg-[length:100%_8px] opacity-30" />
      </div>
    </div>
  );
};
export default SingularityCertificate;
````

## File: components/SolutionsTerminal.tsx
````typescript
import React from 'react';
import {
  ExternalLink,
  Cpu,
  Target,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  Share2,
  TrendingUp,
  Server,
  MessageSquare,
  Network
} from 'lucide-react';
import { BASE_MAGENTA } from '../constants';
import { openExternalLink } from '../utils/navigation';
const SOLUTIONS = [
  {
    id: "agent_support",
    title: "NΞØ Customer Agent",
    game_effect: "Elimina cliques manuais de suporte.",
    real_world_tech: "Automação via LLM (GPT-4o) treinada na base de conhecimento da empresa. Atendimento resolutivo 24/7.",
    cta_link: "https://t.me/neomello",
    icon: <MessageSquare className="text-magenta" size={20} />
  },
  {
    id: "agent_social",
    title: "Social Autopilot",
    game_effect: "Escala alcance orgânico sem humanos.",
    real_world_tech: "Criação de pautas, artes e agendamento via IA. Distribuição multi-canal sincronizada.",
    cta_link: "https://t.me/neomello",
    icon: <Share2 className="text-magenta" size={20} />
  },
  {
    id: "agent_traffic",
    title: "Ads ROAS Optimizer",
    game_effect: "Previne queima de caixa em Ads.",
    real_world_tech: "Monitoramento de APIs de Facebook/Google Ads com scripts de pausa automática por performance.",
    cta_link: "https://t.me/neomello",
    icon: <TrendingUp className="text-magenta" size={20} />
  },
  {
    id: "agent_outbound",
    title: "Hunter SDR Protocol",
    game_effect: "Gera receita passiva agressiva.",
    real_world_tech: "Scraping inteligente, enriquecimento de leads e cadência de e-mails/LinkedIn via Agenteston.",
    cta_link: "https://t.me/neomello",
    icon: <Target className="text-magenta" size={20} />
  },
  {
    id: "agent_infra",
    title: "Zero-Ops Cloud",
    game_effect: "Sistemas resilientes e auto-curáveis.",
    real_world_tech: "Infraestrutura como código (IaC) com scripts de auto-recovery e monitoramento preditivo.",
    cta_link: "https://t.me/neomello",
    icon: <Server className="text-magenta" size={20} />
  },
  {
    id: "token_infrastructure",
    title: "Tokenization Engine",
    game_effect: "Multiplicador de Valuation e Equity.",
    real_world_tech: "Smart Contracts (ERC-20/721) na Base para distribuição de lucros e governança on-chain.",
    cta_link: "https://basescan.org/token/0x41F4ff3d45DED9C1332e4908F637B75fe83F5d6B",
    icon: <Network style={{ color: BASE_MAGENTA }} size={20} />
  }
];
interface SolutionsTerminalProps {
  userName?: string;
}
const SolutionsTerminal: React.FC<SolutionsTerminalProps> = ({ userName = 'CEO' }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700 pb-32">
      <header className="px-1 space-y-2">
        <div className="flex items-center gap-2 text-magenta opacity-80">
          <ShieldCheck size={14} />
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em]">Agente Flow Technical Manifesto</h2>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-white uppercase italic text-glow">Protocols</h1>
        <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-[95%]">
          A fronteira final entre o código e o lucro. Conheça as tecnologias que estamos usando para automatizar o mundo real.
        </p>
      </header>
      <div className="grid gap-4">
        {SOLUTIONS.map((sol) => (
          <div
            key={sol.id}
            className="group relative bg-[#130b1a]/60 ios-blur border border-white/5 rounded-[32px] overflow-hidden transition-all hover:border-magenta/30 active:scale-[0.98]"
          >
            <div className="p-6 space-y-5 flex flex-col h-full">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 group-hover:bg-magenta/10 group-hover:border-magenta/20 transition-all">
                    {sol.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">{sol.title}</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Zap size={10} className="text-magenta animate-pulse" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-[#a855f7]">Verified Protocol</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const text = encodeURIComponent(`Olá Mellø, sou o ${userName}. Vi o manifesto técnico e quero implementar o protocolo ${sol.title} no meu negócio.`);
                    openExternalLink(`https://t.me/neomello?text=${text}`);
                  }}
                  className="p-2 text-gray-600 hover:text-magenta transition-colors"
                >
                  <ExternalLink size={18} />
                </button>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-black/20 p-3 rounded-2xl border border-white/5">
                    <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-1">Game Impact</span>
                    <p className="text-[10px] text-magenta font-bold italic领先-tight">{sol.game_effect}</p>
                  </div>
                  <div className="bg-black/20 p-3 rounded-2xl border border-white/5">
                    <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-1">Status</span>
                    <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest">Active ⦿</p>
                  </div>
                </div>
                <div className="bg-black/40 p-4 rounded-2xl border border-white/5 relative overflow-hidden">
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/40 block mb-2">Technical Implementation</span>
                  <p className="text-[11px] text-gray-400 leading-relaxed relative z-10">
                    {sol.real_world_tech}
                  </p>
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <Cpu size={40} />
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  const text = encodeURIComponent(`Olá Mellø, sou o ${userName}. Vi o manifesto técnico e quero implementar o protocolo ${sol.title} no meu negócio.`);
                  openExternalLink(`https://t.me/neomello?text=${text}`);
                }}
                className="w-full py-4 bg-white/5 border border-white/10 rounded-[20px] flex items-center justify-center gap-2 text-[10px] font-black text-white uppercase tracking-[0.2em] transition-all group-hover:bg-magenta group-hover:border-magenta group-hover:shadow-[0_10px_30px_rgba(255,0,255,0.2)]"
              >
                Implementar Agora
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="relative mt-8 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-magenta to-purple-600 rounded-[35px] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div
          onClick={() => {
            const text = encodeURIComponent(`Olá Mellø, sou o ${userName}. Gostaria de agendar um diagnóstico de infraestrutura real para minha empresa.`);
            openExternalLink(`https://t.me/neomello?text=${text}`);
          }}
          className="relative bg-[#0d0714] border border-white/10 rounded-[35px] p-8 text-center cursor-pointer hover:border-magenta/50 transition-all shadow-2xl"
        >
          <Network className="mx-auto text-magenta mb-4 animate-spin-slow" size={32} />
          <h2 className="text-xl font-black text-white uppercase italic mb-2 tracking-tight">Escala Real On-Demand</h2>
          <p className="text-xs text-gray-500 leading-relaxed mb-6 max-w-xs mx-auto">
            O jogo é apenas o começo. Agende um diagnóstico de infraestrutura e traga os agentes para o seu negócio real.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-magenta text-white text-[11px] font-black uppercase tracking-widest rounded-full shadow-[0_5px_15px_rgba(255,0,255,0.4)] active:scale-95 transition-all">
            Falar com Mellø no Telegram
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
      <footer className="text-center pt-8">
        <p className="text-[9px] text-gray-700 font-mono uppercase tracking-[0.5em]">
          NEØ FlowOFF
        </p>
      </footer>
    </div>
  );
};
export default SolutionsTerminal;
````

## File: components/StoreModal.tsx
````typescript
import React, { useState } from 'react';
import { X, Star } from 'lucide-react';
import { STORE_ITEMS, StoreItem, paymentService } from '../utils/payments';
interface StoreModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPurchaseSuccess: (item: StoreItem) => void;
}
export const StoreModal: React.FC<StoreModalProps> = ({ isOpen, onClose, onPurchaseSuccess }) => {
    const [loadingItem, setLoadingItem] = useState<string | null>(null);
    if (!isOpen) return null;
    const handlePurchase = async (item: StoreItem) => {
        setLoadingItem(item.id);
        await paymentService.purchaseItem(
            item,
            () => {
                onPurchaseSuccess(item);
                setLoadingItem(null);
                onClose();
            },
            (errorMsg) => {
                console.error(errorMsg);
                alert(errorMsg);
                setLoadingItem(null);
            }
        );
    };
    return (
        <div id="modal-store" className="fixed inset-0 z-[650] flex items-center justify-center animate-in fade-in duration-200">
            <div
                id="modal-store-backdrop"
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />
            <div className="relative w-[90%] max-w-sm bg-[#1a1625] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="bg-gradient-to-r from-yellow-900/40 to-yellow-600/10 p-4 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Star className="text-yellow-400 fill-yellow-400" size={20} />
                        <h2 className="text-white font-bold text-lg">Loja Premium</h2>
                    </div>
                    <button id="modal-store-close" onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-4 space-y-3">
                    <p className="text-xs text-white/50 text-center mb-4">
                        Use **Telegram Stars** para acelerar sua jornada rumo ao IPO.
                    </p>
                    {STORE_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center gap-3 hover:bg-white/10 transition-all cursor-pointer group"
                            onClick={() => !loadingItem && handlePurchase(item)}
                        >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl bg-gradient-to-br ${item.effect_type === 'insurance' ? 'from-red-900/40 to-red-500/20' : 'from-green-900/40 to-green-500/20'
                                }`}>
                                {item.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-bold text-sm">{item.title}</h3>
                                <p className="text-[10px] text-white/60 leading-tight">{item.description}</p>
                            </div>
                            <button
                                disabled={loadingItem !== null}
                                className={`h-9 px-3 rounded-lg font-bold text-xs flex items-center gap-1 transition-all ${loadingItem === item.id
                                        ? 'bg-white/10 text-white/40'
                                        : 'bg-yellow-500 hover:bg-yellow-400 text-black shadow-[0_0_15px_rgba(234,179,8,0.3)]'
                                    }`}
                            >
                                {loadingItem === item.id ? (
                                    <span className="animate-spin">⏳</span>
                                ) : (
                                    <>
                                        <span>{item.price}</span>
                                        <Star size={10} className="fill-black" />
                                    </>
                                )}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="p-3 bg-black/20 text-[10px] text-white/30 text-center">
                    Pagamentos processados via Telegram Verify ✅
                </div>
            </div>
        </div>
    );
};
````

## File: components/TopBar.tsx
````typescript
import React, { useState, useRef, useCallback } from 'react';
import { Brain, Volume2, VolumeX, X, AlertCircle, TrendingUp, DollarSign, Target, Info, Star, Trophy, Zap } from 'lucide-react';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'appkit-button': any;
    }
  }
}
interface TopBarProps {
  pu: number;
  pps: number;
  stress: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  totalPuGenerated?: number;
  onWithdrawAttempt?: () => void;
}
type MetricType = 'capital' | 'pps' | 'burnout';
const TopBar: React.FC<TopBarProps> = ({ pu, pps, stress, soundEnabled, onToggleSound, totalPuGenerated = 0 }) => {
  const [activeMetric, setActiveMetric] = useState<MetricType | null>(null);
  const [pressingMetric, setPressingMetric] = useState<MetricType | null>(null);
  const timerRef = useRef<number | null>(null);
  const isStressed = stress > 70;
  const isCritical = stress > 85;
  const SINGULARITY_PPS_GOAL = 1500;
  const singularityProgress = Math.min(100, (pps / SINGULARITY_PPS_GOAL) * 100);
  const commercialReadiness = Math.min(
    100,
    (Math.min(1, pps / 120) * 58 + Math.min(1, totalPuGenerated / 20000) * 42) * 100
  );
  const readinessLabel = commercialReadiness >= 80
    ? 'Pronto para Expansao'
    : commercialReadiness >= 45
      ? 'Escala em Aceleracao'
      : 'Oferta em Validacao';
  const handleStart = (type: MetricType) => {
    setPressingMetric(type);
    timerRef.current = window.setTimeout(() => {
      setActiveMetric(type);
      setPressingMetric(null);
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(20);
      }
    }, 500);
  };
  const handleEnd = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setPressingMetric(null);
  };
  const renderMetricModal = () => {
    if (!activeMetric) return null;
    const content = {
      capital: {
        title: "Liquidez Operacional",
        icon: <DollarSign className="text-magenta" size={24} />,
        desc: "O Capital é o seu combustível de escala. Representa o caixa disponível para reinvestimento imediato em novos Agentes e Infraestrutura.",
        impact: "Sem capital, sua empresa estagna. Agentes geram capital passivo, liberando você da necessidade de 'vender horas'."
      },
      pps: {
        title: "Taxa de Receita (PPS)",
        icon: <TrendingUp className="text-cyan-400" size={24} />,
        desc: "Passive Profit per Second. É a métrica de autonomia da sua empresa.",
        impact: "Quanto maior o seu PPS, mais rápido seu Valuation cresce sem esforço manual. É a prova real de que o sistema está trabalhando para você."
      },
      burnout: {
        title: "Índice de Burnout",
        icon: <Brain className="text-orange-500" size={24} />,
        desc: "Métrica biológica de stress. Ações manuais aumentam o cortisol e aproximam o sistema do colapso.",
        impact: "Atingir 100% causa um 'Crash Operacional'. Automações (Agentes) reduzem o stress passivamente e eliminam a necessidade de cliques geradores de burnout."
      }
    }[activeMetric];
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 pointer-events-none">
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto animate-in fade-in duration-300"
          onClick={() => setActiveMetric(null)}
        />
        <div className="relative w-full max-w-xs bg-[#130b1a] border border-white/10 rounded-[32px] p-7 pointer-events-auto animate-in zoom-in-95 duration-300 shadow-[0_32px_64px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-magenta/20">
            <div className="h-full bg-magenta animate-progress" style={{ width: '100%' }} />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                {content.icon}
              </div>
              <h3 className="text-sm font-black text-white uppercase tracking-wider">{content.title}</h3>
            </div>
            <button onClick={() => setActiveMetric(null)} className="p-1.5 bg-white/5 rounded-full text-gray-500 active:scale-90"><X size={18} /></button>
          </div>
          <div className="space-y-5">
            <p className="text-sm text-gray-300 leading-relaxed font-medium">
              {content.desc}
            </p>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 italic">
              <p className="text-[11px] text-gray-400 leading-relaxed">
                <span className="text-magenta font-black uppercase tracking-widest block mb-1 text-[9px] not-italic">Impacto no ROI:</span>
                {content.impact}
              </p>
            </div>
          </div>
          <button onClick={() => setActiveMetric(null)} className="w-full mt-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">FECHAR AUDITORIA</button>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className={`sticky top-0 z-[60] ios-blur border-b pt-[calc(10px+env(safe-area-inset-top))] pb-3 px-5 transition-all duration-300 ${isCritical
        ? 'bg-red-950/40 border-red-500 shadow-[0_0_40px_rgba(255,0,0,0.3)]'
        : isStressed
          ? 'bg-red-900/10 border-red-600/50'
          : 'bg-transparent border-magenta/20'
        }`}>
        {}
        <div className="absolute top-[env(safe-area-inset-top)] right-5 flex items-center gap-2 px-2 py-1 bg-magenta/5 border border-magenta/10 rounded-full group hover:bg-magenta/10 transition-all cursor-help mt-1">
          <Target size={10} className="text-magenta opacity-60 group-hover:opacity-100" />
          <div className="w-12 h-1 bg-gray-900 rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-magenta transition-all duration-1000 shadow-[0_0_8px_#ff00ff]" style={{ width: `${singularityProgress}%` }} />
          </div>
          <span className="text-[7px] font-black text-magenta tracking-tighter opacity-60 group-hover:opacity-100">{singularityProgress.toFixed(0)}%</span>
        </div>
        {}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-magenta/20 shadow-lg shadow-magenta/5">
            <img src="/apple-icon.png" alt="Agent Flow Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-[8px] font-bold text-magenta uppercase tracking-[0.15em] opacity-80 leading-none mb-0.5">NEO Growth Engine v2.6</h2>
            <h1 className="text-sm font-black text-white uppercase italic tracking-tight">Commercial Scale Console</h1>
          </div>
        </div>
        <div className="mb-3 rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
          <div className="mb-1.5 flex items-center justify-between text-[8px] font-black uppercase tracking-widest">
            <span className="text-magenta/90">Go-To-Market Score</span>
            <span className="text-white/75">{commercialReadiness.toFixed(0)}% · {readinessLabel}</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/30">
            <div
              className="h-full bg-gradient-to-r from-magenta via-cyan-400 to-green-400 transition-all duration-700"
              style={{ width: `${commercialReadiness}%` }}
            />
          </div>
        </div>
        {}
        <div className="flex items-end justify-between gap-2">
          {}
          <div
            className={`flex flex-col items-start flex-1 cursor-pointer select-none transition-all duration-200 ${pressingMetric === 'capital' ? 'scale-90 brightness-150' : ''}`}
            onTouchStart={() => handleStart('capital')}
            onTouchEnd={handleEnd}
            onMouseDown={() => handleStart('capital')}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
          >
            <div className="flex items-center gap-1 text-magenta mb-0.5 opacity-90">
              <DollarSign size={10} strokeWidth={3} />
              <span className="text-[8px] font-black uppercase tracking-widest">Capital</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-base font-extrabold tracking-tight">${Math.floor(pu).toLocaleString()}</span>
              {pressingMetric === 'capital' && <Info size={10} className="text-magenta animate-pulse" />}
            </div>
          </div>
          {}
          <div
            className={`flex flex-col items-center flex-1 cursor-pointer select-none transition-all duration-200 ${pressingMetric === 'pps' ? 'scale-90 brightness-150' : ''}`}
            onTouchStart={() => handleStart('pps')}
            onTouchEnd={handleEnd}
            onMouseDown={() => handleStart('pps')}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
          >
            <div className="flex items-center gap-1 text-cyan-400 mb-0.5 opacity-90">
              <TrendingUp size={10} strokeWidth={3} />
              <span className="text-[8px] font-black uppercase tracking-widest">Profit/s</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-base font-extrabold tracking-tight text-white/90">
                ${pps.toFixed(1)}
              </span>
              {pressingMetric === 'pps' && <Info size={10} className="text-cyan-400 animate-pulse" />}
            </div>
          </div>
          {}
          <div
            className={`flex flex-col items-end flex-1 cursor-pointer select-none transition-all duration-200 ${pressingMetric === 'burnout' ? 'scale-90 brightness-150' : ''}`}
            onTouchStart={() => handleStart('burnout')}
            onTouchEnd={handleEnd}
            onMouseDown={() => handleStart('burnout')}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
          >
            <div className={`flex items-center gap-1.5 mb-0.5 transition-colors duration-300 ${isStressed ? 'text-red-500 animate-pulse' : 'text-orange-500'} opacity-90`}>
              {isCritical ? <AlertCircle size={10} className="animate-pulse" /> : <Brain size={10} className={isStressed ? 'animate-bounce' : ''} />}
              <span className={`text-[8px] font-black uppercase tracking-widest ${isStressed ? 'red-glow' : ''}`}>
                Burnout
              </span>
            </div>
            <div className="flex items-center gap-2">
              {pressingMetric === 'burnout' && <Info size={10} className="text-orange-500 animate-pulse" />}
              <div className={`w-16 h-1.5 bg-gray-900 rounded-full overflow-hidden relative shadow-inner border border-white/5 transition-colors ${isStressed ? 'border-red-500/40 shadow-[0_0_10px_rgba(255,0,0,0.2)]' : ''}`}>
                <div
                  className={`h-full transition-all duration-700 ${stress > 80
                    ? 'bg-red-500'
                    : stress > 70
                      ? 'bg-red-600'
                      : 'bg-orange-500'
                    } ${isStressed ? 'pulse-critical' : ''}`}
                  style={{ width: `${Math.min(100, stress)}%` }}
                />
              </div>
            </div>
          </div>
          <button
            id="sound-toggle"
            onClick={onToggleSound}
            className={`ml-1 p-2 bg-white/5 rounded-full transition-all active:scale-90 ${isStressed ? 'text-red-500 border border-red-500/20' : 'text-gray-500'}`}
          >
            {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
          </button>
          <button
            id="topbar-open-store"
            onClick={() => window.dispatchEvent(new CustomEvent('open-store'))}
            className="ml-1 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 hover:bg-yellow-500/20 transition-all active:scale-90"
          >
            <Star size={14} className="fill-yellow-500/20" />
          </button>
          <button
            id="topbar-open-mint"
            onClick={() => window.dispatchEvent(new CustomEvent('open-mint'))}
            className="ml-1 p-2 bg-magenta/10 border border-magenta/20 rounded-full text-magenta hover:bg-magenta/20 transition-all active:scale-90"
          >
            <Zap size={14} className="animate-pulse" />
          </button>
          <button
            id="topbar-open-tasks"
            onClick={() => window.dispatchEvent(new CustomEvent('open-tasks'))}
            className="ml-1 p-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 hover:bg-orange-500/20 transition-all active:scale-90 relative"
          >
            <Target size={14} />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <div className="hidden">
            <appkit-button />
          </div>
          <button
            id="topbar-open-leaderboard"
            onClick={() => window.dispatchEvent(new CustomEvent('open-leaderboard'))}
            className="ml-1 p-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-500 hover:bg-purple-500/20 transition-all active:scale-90"
          >
            <Trophy size={14} />
          </button>
        </div>
      </div>
      {renderMetricModal()}
    </>
  );
};
export default TopBar;
````

## File: components/WithdrawModal.tsx
````typescript
import React from 'react';
import { Wallet, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { openExternalLink } from '../utils/navigation';
interface WithdrawModalProps {
    valuation: string;
    userName: string;
    onClose: () => void;
}
const WithdrawModal: React.FC<WithdrawModalProps> = ({ valuation, userName, onClose }) => {
    const handleWithdraw = () => {
        const valueNum = parseFloat(valuation) || 0;
        let dynamicMsg = "";
        if (valueNum === 0) {
            dynamicMsg = `Olá Mellø, sou o ${userName}. Ainda estou no Zero-To-One, mas já entendi o jogo. Como transformo esse potencial em lucro real com a FlowOff?`;
        } else if (valueNum < 1000) {
            dynamicMsg = `Olá Mellø, sou o ${userName}. Já gerei $${valuation} de Equity Digital no Agent Flow. Quero validar minha frota de agentes e descobrir como sacar lucro real!`;
        } else {
            dynamicMsg = `ALERTA DE BALEIA: Olá Mellø, aqui é o ${userName}. Bati o topo do game com $${valuation}M de valuation. Estou pronto para protocolar meu Saque Real e escalar meu ecossistema.`;
        }
        const text = encodeURIComponent(dynamicMsg);
        openExternalLink(`https://t.me/neomello?text=${text}`);
    };
    return (
        <div id="modal-withdraw" className="fixed inset-0 z-[600] flex items-end justify-center">
            <div id="modal-withdraw-backdrop" className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in" onClick={onClose} />
            <div className="relative w-full max-w-lg bg-[#0a0510] border-t-2 border-magenta/30 rounded-t-[40px] p-8 pointer-events-auto animate-in slide-in-from-bottom duration-500 pb-[calc(40px+env(safe-area-inset-bottom))]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/10 rounded-full" />
                <header className="text-center mb-8">
                    <div className="inline-flex p-4 bg-magenta/10 rounded-2xl border border-magenta/20 mb-4">
                        <Wallet className="text-magenta" size={32} />
                    </div>
                    <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-tight">Liquidar Equity</h2>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Protocolo de Saque $NEOFLW</p>
                </header>
                <div className="space-y-4">
                    <div className="bg-white/5 p-6 rounded-[28px] border border-white/5 flex justify-between items-center bg-gradient-to-r from-magenta/5 to-transparent">
                        <div>
                            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Valor de Saque Estimado</span>
                            <p className="text-3xl font-black text-white font-mono leading-none mt-1">{valuation}</p>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-black text-magenta uppercase tracking-widest">$NEOFLW</span>
                        </div>
                    </div>
                    <div className="space-y-3 pt-2">
                        <div className="flex items-center gap-3 px-4 py-3 bg-green-500/5 border border-green-500/10 rounded-2xl">
                            <ShieldCheck className="text-green-500" size={16} />
                            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">Airdrop Qualificado por Performance</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl">
                            <Zap className="text-cyan-500" size={16} />
                            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">Smart Contract Ativado ⦿</span>
                        </div>
                    </div>
                    <div className="bg-magenta/5 p-5 rounded-[24px] border border-magenta/10 mt-4 relative overflow-hidden">
                        <p className="text-[11px] text-gray-400 leading-relaxed text-center italic relative z-10">
                            "Tokens virtuais provam sua habilidade como arquiteto. Para sacar lucro real no mundo dos negócios, você precisa da infraestrutura certa."
                        </p>
                        <div className="absolute top-0 right-0 p-2 opacity-5">
                            <TrendingUp size={40} />
                        </div>
                    </div>
                    <button
                        onClick={handleWithdraw}
                        className="w-full py-6 bg-magenta text-white rounded-[24px] font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(255,0,255,0.3)] active:scale-[0.96] transition-all mt-2 group"
                    >
                        PROTOCOLAR SAQUE REAL
                        <TrendingUp size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <button id="modal-withdraw-close" onClick={onClose} className="w-full py-4 text-[9px] font-black text-gray-600 uppercase tracking-[0.3em] hover:text-white transition-colors">
                        CANCELAR OPERAÇÃO
                    </button>
                </div>
            </div>
        </div>
    );
};
export default WithdrawModal;
````

## File: components/XRay.tsx
````typescript
import React from 'react';
import { GameState } from '../types';
import { formatHours, calculateValuation } from '../engine/gameLogic';
import { ClipboardCheck, Lock, Wallet, ExternalLink, Coins, Sparkles } from 'lucide-react';
import { TOKEN_TICKER, TOKEN_CONTRACT, SCAN_LINK, BASE_MAGENTA } from '../constants';
import { openExternalLink } from '../utils/navigation';
interface XRayProps {
  gameState: GameState;
  onCopySuccess: (msg: string) => void;
}
const LOGO_URL = "/icon-512.webp";
const XRay: React.FC<XRayProps> = ({ gameState, onCopySuccess }) => {
  const isUnlocked = gameState.meta.snapshot_unlocked;
  const userName = gameState.meta.user?.name || "Operador";
  const userHandle = gameState.meta.user?.username ? `@${gameState.meta.user.username}` : `#${gameState.meta.user?.id.toString().slice(-4) || 'XXXX'}`;
  const tokenEarned = calculateValuation(gameState).toFixed(2);
  const copyReport = async () => {
    const hoursStr = formatHours(gameState.resources.horas_manuais_eliminadas);
    const totalAgents = gameState.inventory.reduce((acc, item) => acc + item.quantity, 0);
    const status = gameState.meta.status;
    const report = `🚀 Diagnóstico de Escala: ${userName}\n⏳ Tempo Recuperado: ${hoursStr}/dia\n🤖 Frota Autônoma: ${totalAgents} agentes\n📈 Status Operacional: ${status}\n💎 Valuation: ${tokenEarned} ${TOKEN_TICKER}\n\nIA não é o futuro, é a margem de lucro do presente. @neomello @neoflwofficial #NEØFlowOFF #Scalability #ROI`;
    try {
      await navigator.clipboard.writeText(report);
      onCopySuccess("Dashboard Copiado!");
    } catch (err) { }
  };
  const shareToX = () => {
    const hoursStr = formatHours(gameState.resources.horas_manuais_eliminadas);
    const tokenValuation = calculateValuation(gameState).toFixed(0);
    const text = encodeURIComponent(`🚀 Escalei minha empresa para ${tokenValuation} $NEOFLW com frotas de IA autônomas.\n\n⏳ Recuperei ${hoursStr}/dia eliminando tarefas humanas.\n\nQuem não escala com agentes está pagando o imposto da ineficiência.\n\n@neomello @neoflwofficial #NEØFlowOFF #AI #SaaS`);
    openExternalLink(`https://x.com/intent/post?text=${text}`);
  };
  const shareToFarcaster = () => {
    const tokenValuation = calculateValuation(gameState).toFixed(0);
    const text = encodeURIComponent(`🚀 CEO Escalável: My company valuation reached ${tokenValuation} $NEOFLW using autonomous agent fleets.\n\nScaling with @neomello at @neoflwofficial. Protocol established. ⦿\n\n#NEØFlowOFF #Agents #Base`);
    openExternalLink(`https://warpcast.com/~/compose?text=${text}`);
  };
  if (!isUnlocked) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6 px-4">
        <div className="w-24 h-24 bg-[#130b1a] border-2 border-dashed border-[#1a1025] rounded-3xl flex items-center justify-center text-gray-700">
          <Lock size={40} className="opacity-20" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-black uppercase tracking-tight text-white">Raio-X de Valuation</h2>
          <p className="text-xs text-gray-500 max-w-[240px] mx-auto leading-relaxed">
            Diagnóstico bloqueado. Sua empresa precisa atingir <span className="text-magenta font-bold">250 {TOKEN_TICKER}</span> de Valuation para auditoria.
          </p>
        </div>
        <div className="w-full max-w-[200px] h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-magenta" style={{ width: `${Math.min(100, (calculateValuation(gameState) / 250) * 100)}%` }} />
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-6 animate-in fade-in duration-700 px-1 pb-24">
      <header className="space-y-1">
        <h2 className="text-xs font-mono text-magenta uppercase tracking-widest opacity-70">Auditoria de Escala</h2>
        <h1 className="text-2xl font-black tracking-tight text-white uppercase italic">Protocolo {userName}</h1>
      </header>
      <div className="bg-[#0a050f] border-2 border-magenta p-6 rounded-[32px] space-y-6 shadow-[0_0_50px_rgba(255,0,255,0.2)] active:scale-[0.99] transition-transform">
        <div className="flex justify-between items-start">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-magenta shadow-[0_0_15px_rgba(255,0,255,0.4)]">
              <img src={LOGO_URL} alt="FlowOff" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-[10px] font-black text-magenta uppercase tracking-[0.2em] animate-pulse">Dashboard Ativo</span>
              <h3 className="text-xl font-black uppercase text-white tracking-tighter leading-tight">{userName}</h3>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest block mb-1">Valuation Real</span>
            <p className="text-2xl font-black font-mono leading-none" style={{ color: BASE_MAGENTA }}>{calculateValuation(gameState).toFixed(0)} <span className="text-xs opacity-50">{TOKEN_TICKER}</span></p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#130b1a] p-4 rounded-2xl border border-white/5">
            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-2 block">Tempo Recuperado</span>
            <p className="text-2xl font-black text-green-400 font-mono leading-none">{formatHours(gameState.resources.horas_manuais_eliminadas)}</p>
            <span className="text-[8px] text-gray-700 uppercase mt-1 block tracking-widest font-black">por dia</span>
          </div>
          <div className="bg-[#130b1a] p-4 rounded-2xl border border-white/5">
            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-2 block">Carga Cognitiva</span>
            <p className="text-2xl font-black text-cyan-400 font-mono leading-none">${gameState.resources.receita_passiva.toFixed(0)}</p>
            <span className="text-[8px] text-gray-700 uppercase mt-1 block tracking-widest font-black">tokens/sec</span>
          </div>
        </div>
        <div className="bg-[#1a1025]/50 p-4 rounded-2xl border border-magenta/20 flex justify-between items-center overflow-hidden relative">
          <div className="flex items-center gap-2 relative z-10">
            <Sparkles size={14} style={{ color: BASE_MAGENTA }} />
            <span className="text-[9px] font-black text-white uppercase tracking-widest">Protocolo Established</span>
          </div>
          <code className="text-[9px] font-mono text-gray-600 relative z-10 italic truncate max-w-[80px]">0x{TOKEN_CONTRACT.slice(2, 10)}</code>
          <div className="absolute right-0 top-0 w-24 h-24 bg-magenta/5 blur-2xl rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button onClick={shareToX} className="bg-black border border-white/10 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-white/5 transition-all active:scale-95 shadow-xl">
          Share to X
        </button>
        <button onClick={shareToFarcaster} className="bg-[#472a91] text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#5a36b5] transition-all active:scale-95 shadow-xl">
          Warpcast
        </button>
      </div>
      <div className="space-y-4 pt-2 pb-10">
        <button onClick={copyReport} className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 active:scale-95 transition-all hover:bg-white/10">
          <ClipboardCheck size={18} className="text-magenta" />
          Copiar Relatório Full
        </button>
        <div className="flex flex-col items-center gap-2 pt-4 opacity-40">
          <p className="text-[8px] text-center text-gray-500 font-mono uppercase tracking-[0.3em] font-black">
            Snapshots liberados
          </p>
          <div className="flex gap-2">
            <div className="w-1 h-1 bg-magenta rounded-full animate-pulse" />
            <div className="w-1 h-1 bg-magenta rounded-full animate-pulse delay-75" />
            <div className="w-1 h-1 bg-magenta rounded-full animate-pulse delay-150" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default XRay;
````

## File: constants/abis/NeoTokenV2.json
````json
[
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "mintPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "mintAmount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "initialOwner",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "ECDSAInvalidSignature",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "length",
                "type": "uint256"
            }
        ],
        "name": "ECDSAInvalidSignatureLength",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "ECDSAInvalidSignatureS",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "allowance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientAllowance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientBalance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidApprover",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidReceiver",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSpender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "ERC2612ExpiredSignature",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "signer",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC2612InvalidSigner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "currentNonce",
                "type": "uint256"
            }
        ],
        "name": "InvalidAccountNonce",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidShortString",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "str",
                "type": "string"
            }
        ],
        "name": "StringTooLong",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "BridgeMinted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "newMinter",
                "type": "address"
            }
        ],
        "name": "BridgeMinterUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "EIP712DomainChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferStarted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bool",
                "name": "enabled",
                "type": "bool"
            }
        ],
        "name": "PublicMintStatusChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "minter",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "pricePaid",
                "type": "uint256"
            }
        ],
        "name": "PublicMinted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MAX_SUPPLY",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MINT_AMOUNT",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MINT_PRICE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PROTOCOL_FEE_BPS",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PROTOCOL_TREASURY",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "acceptOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "bridgeMint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "bridgeMinter",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "burnFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "eip712Domain",
        "outputs": [
            {
                "internalType": "bytes1",
                "name": "fields",
                "type": "bytes1"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "version",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "chainId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "verifyingContract",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            },
            {
                "internalType": "uint256[]",
                "name": "extensions",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getContractInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "currentSupply",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxSupply",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "mintPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "mintAmount",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "mintEnabled",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "bridge",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "hasPublicMinted",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "nonces",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pendingOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "v",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "r",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "permit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "publicMint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "publicMintEnabled",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "resetPublicMint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_newMinter",
                "type": "address"
            }
        ],
        "name": "setBridgeMinter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_enabled",
                "type": "bool"
            }
        ],
        "name": "setPublicMintStatus",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
````

## File: constants/auditorMessages.ts
````typescript
export const AUDITOR_MESSAGES = {
    SYSTEM: {
        INITIAL: (name: string) => `Cockpit pronto, ${name}. Diagnóstico: Gargalo Humano Severo.`,
        IDLE_INITIAL: "Iniciando auditoria de processos... Analisando gargalos.",
    },
    CRITICAL: {
        CRASH: (name: string) => `SISTEMA OFFLINE. Burnout nível 10. ${name}, sua infraestrutura biológica falhou. Reinicie ou peça ajuda à rede.`,
        BURNOUT_WARNING: "ALERTA: Seus níveis de cortisol estão fritando o sistema. Automatize ou colapse.",
        SOCIAL_VULNERABILITY: "VULNERABILIDADE: Você esqueceu das redes sociais. O algoritmo não perdoa hiatos humanos.",
        TRAFFIC_LOSS: "PREJUÍZO: O gestor esqueceu de pausar a campanha. Orçamento Ads estourado por erro de monitoramento.",
        SUPPORT_BACKLOG: "CHURN: Suporte manual ignorou tickets no final de semana. Clientes pediram reembolso.",
        SDR_FATIGUE: "PIPELINE SECO: Prospecção humana parou por fadiga operacional. Sem novos leads no funil.",
        INFRA_DOWNTIME: "SISTEMA FORA: Bug crítico na infraestrutura manual. Horas de faturamento perdidas.",
    },
    EASTER_EGG: {
        FAST_GROWTH: {
            text: "Você já entendeu o game, não é mesmo? Acabei de avisar o MELLØ (CEO da NEØFLW) que temos um player de elite por aqui.",
            cta: {
                label: "Falar com o MELLØ",
                tg: "https://t.me/neomello?text=Olá+Mellø,+sou+o+{{NAME}},+o+auditor+me+recomendou+falar+com+você+sobre+os+meus+resultados+no+jogo.",
                wa: "https://wa.me/5562983231110?text=Olá+Mellø,+sou+o+{{NAME}},+entendi+o+jogo+e+quero+levar+minha+empresa+para+o+próximo+nível."
            }
        },
        BURNOUT_PRO: {
            text: "Trabalhando até colapsar? Isso é muito 2023. O MELLØ prega escala, não sacrifício inútil. Automatize logo.",
            cta: {
                label: "Escalar sem Burnout",
                tg: "https://t.me/neomello?text=Olá+Mellø,+sou+o+{{NAME}}.+Estou+sofrendo+com+burnout+no+game+e+preciso+de+agentes+para+escalar.",
                wa: "https://wa.me/5562983231110?text=Olá+Mellø,+sou+o+{{NAME}}.+Estou+sofrendo+com+burnout+e+preciso+de+agentes+para+escalar."
            }
        },
        WHALE_VALUATION: {
            text: "Equity de respeito. Você parou de jogar e começou a construir um império. MELLØ adoraria te conhecer.",
            cta: {
                label: "Chame ele agora",
                tg: "https://t.me/neomello?text=Olá+Mellø,+sou+o+{{NAME}}.+Atingi+um+Valuation+de+elite+no+seu+DAPP+e+quero+conversar.",
                wa: "https://wa.me/5562983231110?text=Olá+Mellø,+sou+o+{{NAME}}.+Atingi+um+Valuation+de+elite+no+seu+DAPP+e+quero+conversar."
            }
        },
    },
    PROGRESS: {
        AGENT_INJECTED: "REDE EXPANDIDA: A dependência humana diminuiu. Seu Equity acaba de saltar.",
        STATUS_EVOLUTION: (status: string) => `EVOLUÇÃO: Você agora é '${status}'. O mercado teme sua escala.`,
    },
    ADVICE: {
        IDLE_CAPITAL: "Capital ocioso é pecado. Reinvista esse caixa agora.",
    },
    IDLE_THOUGHTS: [
        "Processos batem talento todas as vezes.",
        "Se você ainda clica, você não é o dono, é o gargalo.",
        "O ROI da automação é infinito.",
        "Escalabilidade é a arte de remover o humano do caminho.",
        "Agentes não fazem pausa para café. Isso é FlowOff.",
        "A margem de erro humana é o custo da sua ineficiência.",
        "Sistemas não dormem. Sistemas não reclamam. Sistemas escalam.",
        "Se não pode ser medido, não pode ser automatizado.",
        "O futuro pertence aos arquitetos, não aos operários.",
        "Seu Valuation é o reflexo da sua ausência processual.",
        "Escalar é transformar suor manual em equity digital.",
        "O mercado não compra seu tempo, compra seu sistema."
    ]
};
````

## File: docs/BUSINESS_PITCH.md
````markdown
# Pitch de Vendas: A Nova Era da Escala Operacional ⦿

## 1. O Problema: O Gargalo Humano
Empresas em fase de escala enfrentam um muro: para crescer 10x, elas acreditam que precisam de 10x mais pessoas. Isso gera:
- Custos fixos explosivos.
- Erros humanos inevitáveis.
- Queda brutal na margem de lucro.
- **Burnout do CEO**, que vira o suporte de luxo da própria empresa.

## 2. A Oportunidade: Ativos de Inteligência
Imagine trocar processos manuais por **Ativos de Software Inteligentes**. Não estamos falando de softwares passivos (como um CRM), mas de **Agentes Ativos** que:
- Não dormem.
- São treinados em minutos com a cultura do seu negócio.
- Custam uma fração de um head-count humano.

## 3. A Solução: Mini Apps IA-Powered
Nossa proposta é a criação de **Mini Apps Proprietários** integrados ao Telegram para controle de frotas de IA.
- **Interface Decisora:** Um console central onde o CEO orquestra o crescimento.
- **Desbloqueie o Equity:** Transforme o operacional da sua empresa de um "custo" em um "ativo" vendável (Valuation).
- **Velocidade de Deploy:** Enquanto um app tradicional leva 6 meses, um Mini App NEØFlowOFF entra em campo em semanas.

## 4. O Mercado (O Investimento)
Estamos na intersecção de três mercados massivos:
1.  **AI Agents:** O próximo passo após o ChatGPT (Agentes que FAZEM, não apenas falam).
2.  **Super Apps (Telegram):** +900 milhões de usuários ativos prontos para consumir Mini Apps.
3.  **Digital Equity:** A transformação de empresas de serviço em empresas de produto/plataforma.

## 5. O que apresentamos para Clientes/Investidores
Não apresentamos um "bot de chat". Apresentamos:
- **Redução de 80%** em carga operacional manual.
- **Escalabilidade Infinita:** O custo de processar 100 ou 1.000.000 de requisições por agentes é marginal.
- **Retorno sobre Inteligência (ROI):** O tempo liberado do CEO é direcionado para estratégia e M&A.

## 6. Call to Action
Você quer continuar clicando ou quer começar a projetar? 
**NEØFlowOFF: Construindo os Arquitetos do Futuro.**

---
*Confidencial - Material de Defesa de Tese NEØFlowOFF*
````

## File: docs/DEPLOYMENT_HISTORY.md
````markdown
# Deployment History - NΞØ SMART FACTORY

Este documento registra todos os deploys oficiais do ecossistema CEO Escalável.

---

## v0.5.3 — MULTICHAIN FOUNDATION

### 🚀 NEOFLW Token - Base Mainnet Deploy
**Date:** January 20, 2026  
**Status:** ✅ DEPLOYED & VERIFIED

#### Contract Information
- **Network:** Base Mainnet (Chain ID: 8453)
- **Contract:** NeoTokenV2
- **Address:** `0x41F4ff3d45DED9C1332e4908F637B75fe83F5d6B`
- **Explorer:** https://basescan.org/address/0x41F4ff3d45DED9C1332e4908F637B75fe83F5d6B
- **Verified Code:** https://basescan.org/address/0x41F4ff3d45DED9C1332e4908F637B75fe83F5d6B#code

#### Token Details
- **Name:** NEOFlowOFF
- **Symbol:** NEOFLW
- **Decimals:** 18
- **Max Supply:** 1,000,000,000 NEOFLW (1 billion)
- **Mint Price:** 0.1 ETH
- **Mint Amount:** 1,000 NEOFLW per mint

#### Features Deployed
- ✅ **ERC20Permit** - Gasless transactions via signatures
- ✅ **Bridge Minter Role** - Multichain ready for cross-chain minting
- ✅ **Anti-bot Protection** - 1 mint per wallet limit
- ✅ **Immutable Supply Cap** - Hard cap of 1B tokens
- ✅ **Ownable2Step** - Secure ownership transfer mechanism
- ✅ **ERC20Burnable** - Token holders can burn their tokens

#### Security Features
- ✅ Rate limiting on bridge mints (10,000 tokens per transaction)
- ✅ Cooldown period (1 hour) between bridge mints
- ✅ Emergency pause functionality
- ✅ Reentrancy protection on all critical functions
- ✅ Secure withdrawal mechanism using `call` instead of `transfer`

#### Integration Status
- **MiniApp:** Ready for integration
- **Bridge System:** Manual Bridge contracts ready for deployment
- **Wallet Connect:** Pending implementation
- **Airdrop Mechanism:** Pending implementation

---

## Next Deployments

### Planned: Manual Bridge System
- **ManualBridge.sol** - Multi-sig bridge for cross-chain transfers
- **BridgeValidator.sol** - Validator signatures for bridge security
- **Target Networks:** Base ↔ Polygon ↔ Ethereum

### Planned: MiniApp Integration
- Wallet Connect implementation
- Airdrop claim mechanism
- In-game token utility (agent purchases, speed boosts)

---

## Deployment Notes

### Base Mainnet Configuration
```env
NETWORK=base
RPC_URL=https://mainnet.base.org
CHAIN_ID=8453
EXPLORER=https://basescan.org
```

### Contract Owner
- Initial owner set during deployment
- Ownership can be transferred via 2-step process (Ownable2Step)
- Consider renouncing ownership or transferring to multisig for decentralization

### Verification
Contract source code verified on BaseScan, allowing users to:
- Read contract state directly
- Verify token parameters
- Audit security features
- Interact with contract functions

---

**Last Updated:** January 20, 2026  
**Maintained by:** NΞØ Development Team
````

## File: docs/GUIA_EMPRESA_MINIAPP.md
````markdown
# Guia da Empresa Miniapp

## Objetivo empresarial do produto
Transformar o miniapp em motor de aquisição, ativação, monetização e qualificação comercial para a operação da empresa.

## Leitura estratégica do fluxo atual
### 1. Aquisição
- Entrada principal via bot Telegram e compartilhamento social no app.
- `start_param` pode ser usado para rastrear origem de tráfego.

### 2. Ativação
- Usuário começa em `Receita`, entende loop rápido e recebe sensação de progresso.
- Agentes e score de maturidade reforçam narrativa de escala.

### 3. Monetização
- Receita direta: compra de itens premium com Telegram Stars.
- Receita indireta: geração de leads qualificados pelo fluxo de saque.
- Receita on-chain: mint de token quando ativo e com carteira conectada.

### 4. Retenção
- Missões diárias, ranking e progressão de automação.
- Fator de retorno: melhoria de métricas internas no jogo.

## O que a empresa deve comunicar sem ruído
- O jogo simula operação e maturidade de escala.
- Stars e mint são fluxos financeiros reais.
- Valuation interno não é dinheiro sacável automaticamente.
- Saque atual é ponte comercial para serviço e implementação.

## Modelo de operação recomendado
### Produto
- Manter loop de entrada em menos de 10 segundos.
- Expor claramente próxima alavanca de crescimento no topo da operação.
- Reduzir qualquer bloqueio de UX no primeiro acesso.

### Growth
- Instrumentar funil com eventos:
`open_app`, `first_action`, `first_agent`, `open_store`, `paid_stars`, `open_mint`, `mint_success`, `withdraw_contact`.
- Medir conversão por origem e por janela de tempo.

### Vendas
- Tratar contato de saque como lead quente.
- SLA de resposta curto para preservar intenção de compra.
- Classificar lead por estágio de maturidade no miniapp.

### Financeiro e risco
- Monitorar chargeback/comportamento suspeito em pagamentos.
- Registrar reconciliação entre eventos de compra e crédito de efeito no jogo.
- Manter logs de webhook e resposta da API do Telegram.

## O que ainda não existe no produto
- Saque automático para fiat.
- Conversão automática de valuation de jogo em token.
- Funil completo de referral com recompensa fechada.

## Backlog de alto impacto
1. Implementar referral rastreável com recompensa progressiva.
2. Criar CRM automático para leads vindos do fluxo de saque.
3. Adicionar painéis de cohort e LTV por origem de usuário.
4. Testar paywalls segmentados por estágio de maturidade.

## Definição de sucesso
- Conversão para Stars crescendo por cohort.
- Crescimento de `mint_success` sem aumento de suporte crítico.
- Aumento da taxa de contato comercial qualificado.
- Redução da distância entre aquisição e primeira monetização.
````

## File: docs/GUIA_USUARIO_MINIAPP.md
````markdown
# Guia do Usuário Miniapp

## O que é
O Agent Flow é um miniapp no Telegram para simular escala de operação com agentes autônomos. Você sai do modo manual e testa como aumentar produtividade, receita por segundo e valuation operacional.

## Navegação principal
### Receita
- Tela inicial de operação.
- Você executa ações manuais para gerar capital inicial.
- Aqui também estão os atalhos de Loja, Mint, Ranking, Missões e compartilhamento.

### Escala
- Tela de agentes.
- Você compra agentes para automatizar tarefas manuais.
- Quanto mais automação, menor dependência de clique e maior receita passiva.

### Playbook
- Conteúdo de apoio e lógica do protocolo.
- Serve para orientar progressão e entendimento estratégico.

### Board
- Visão de diagnóstico do estado atual da operação.
- Útil para leitura de maturidade e decisões de otimização.

## O que você pode fazer e como
### 1. Gerar capital
1. Acesse `Receita`.
2. Clique nas ações manuais disponíveis.
3. Use o capital para desbloquear próximos passos.

### 2. Comprar agentes
1. Acesse `Escala`.
2. Selecione um agente liberado.
3. Compre quando tiver capital suficiente.
4. Observe aumento de receita passiva e redução de carga manual.

### 3. Usar Loja Premium
1. Em `Receita`, abra `Loja Premium`.
2. Escolha o item.
3. Pague com Telegram Stars.
4. O efeito é aplicado na sessão do jogo.

### 4. Mint de token
1. Em `Receita`, abra `Neo Mint`.
2. Conecte a carteira.
3. Confirme rede Base e saldo para taxa/preço de mint.
4. Execute o mint quando disponível.

### 5. Ranking e tarefas
- `Ranking`: compara evolução com outros usuários.
- `Missões`: oferece metas e recompensas internas do jogo.

## Ganho real, token real e limites
### O que é real
- Compra via Telegram Stars envolve gasto real.
- Mint de `$NEOFLW` é transação real on-chain, sujeito ao contrato e à rede.

### O que é simulação
- Capital do jogo, valuation do jogo e progresso de operação são métricas de simulação.

### Sobre dinheiro real
- O botão de saque abre contato comercial.
- Não existe hoje saque automático para conta bancária dentro do miniapp.
- Conversão em receita de negócio depende de execução comercial fora do jogo.

## Boas práticas para usuário
- Não comprar itens antes de entender seu objetivo de progressão.
- Validar rede/carteira antes de mint.
- Tratar o jogo como simulador estratégico, não como promessa de retorno financeiro automático.
````

## File: docs/MARKETING_KIT.md
````markdown
# Estratégia Comercial & Marketing: Agente Flow ⦿

**Agente Flow** não é apenas um Mini App; é a vitrine interativa da **NEØFLW**. O objetivo é transformar a percepção de "IA como ferramenta" em "IA como força de trabalho autônoma".

## 1. Posicionamento de Marca
- **Tagline:** Pare de ser o gargalo. Torne-se o Arquiteto.
- **Narrativa:** O mercado mudou. Hoje, existem dois tipos de CEOs: os que clicam e os que escalam. O Agente Flow é o simulador de realidade para quem deseja operar no modo **Zero-Ops**.
- **Diferencial:** Ao contrário de cursos teóricos, o Agente Flow permite que o empresário sinta a dopamina da escala automatizada antes de investir um único centavo na implementação real.

## 2. Funil de Conversão (The Flow Path)
1. **Atração (Gamificação):** O player entra atraído pelo token `$NEOFLW` e pela curiosidade de "simular" sua empresa.
2. **Conscientização (Dores):** Durante o jogo, eventos de risco (Burnout, Downtime) mostram o perigo de depender de mãos humanas.
3. **Desejo (The Vault):** A aba de Protocolos mostra as soluções reais que a **NEØFLW** implementa.
4. **Fechamento (Lead Gen):** O "Saque do Equity" e o "Agendamento com Mellø" capturam o lead no momento de pico de consciência.

## 3. Arquétipo & Tom de Voz
- **Arquétipo:** O Visionário / O Arquiteto.
- **Voz:** Provocativa, técnica porem acessível, futurista e focada em resultados (ROI e Valuation).
- **Inimigo Comum:** A ineficiência operacional e a "Escravidão do Clique".

---

# Copys para Divulgação (Marketing Kit)

## Canal: X.com (Twitter) - Foco em Performance
**Opção 1 (O desafio):**
> Se você ainda é o responsável por responder tickets ou gerenciar tráfego manualmente, você não tem uma empresa, você tem um emprego de luxo. 
> 
> O Agente Flow acabou de ser liberado no Telegram. Simule sua escala, elimine seus gargalos e veja seu valuation em $NEOFLW decolar. 
> 
> Tente alcançar a Singularidade: https://t.me/AgenteFlow_Bot ⦿ #NEOFLW #AI #GlobalSystems

### Comandos Habilitados (BotFather)
- **/start** - Iniciar o Protocolo Agent Flow
- **/play** - Abrir o Console de Comando
- **/app** - Abrir o Console de Operação
- **/help** - Ver protocolos de suporte e ajuda

**Opção 2 (O resultado):**
> +40 horas recuperadas por dia. 0 funcionários humanos. 
> Escalei minha operação pro nível "Arquiteto de Sistemas" no Agente Flow. 
> 
> IA não é sobre chat. É sobre margem de lucro. 
> Veja meu Raio-X de Valuation: https://t.me/AgenteFlow_Bot ⦿

## Canal: Grupos de Empreendedorismo/Web3 (Telegram) - Foco em Ganância/Escala
> 🚀 **O fim do trabalho braçal chegou.**
> 
> Acabamos de liberar o **Agente Flow**, o simulador oficial da NEØFLW. 
> 
> 🤖 Monte sua frota de agentes autônomos.
> 💎 Gere valuation em $NEOFLW.
> ⚠️ Enfrente o Colapso Operacional.
> 
> Você consegue rodar uma empresa de 7 dígitos sem dar um único clique manual?
> 
> **Teste agora:** https://t.me/AgenteFlow_Bot

## Canal: WhatsApp (Direto para Clientes/Leads) - Foco em Consultoria
> Fala [Nome], beleza? Acabei de lançar o **Agente Flow**, um Mini App no Telegram que simula o que eu faço na NEØFLW: tirar o empresário do operacional e colocar a IA pra rodar a casa.
>
> Dá uma olhada lá, tenta chegar no nível de "CEO Escalável". Se você curtir a lógica, o app tem um botão pra gente agendar um diagnóstico da sua infra real. ⦿
>
> https://t.me/AgenteFlow_Bot

---

## 4. Próximos Passos de Marketing [ ]
- [ ] **Teaser Vídeo:** 15 segundos do terminal "Neo" iniciando com trilha techno/minimal.
- [ ] **Prova Social:** Prints de players que alcançaram a "Singularidade".
- [ ] **Airdrop Hunters:** Campanha focada em quem quer acumular $NEOFLW virtual para futuros benefícios reais.
````

## File: docs/NAVIGATION_QA_GATE.md
````markdown
# Navigation QA Gate

Objetivo: bloquear deploy com regressão de navegação, fechamento de modal e responsividade.

## Escopo coberto

- Navegação por abas:
  - `Receita`
  - `Escala`
  - `Playbook`
  - `Board`
- Modais críticos:
  - `Loja Premium`
  - `Daily Operations`
  - `Ranking Global`
  - `Neo Mint`
  - `Saque`
  - `Detalhes do Agente`
- Responsividade:
  - validação em `iPhone 12`, `Pixel 5` e `Desktop Chrome`
  - sem overflow horizontal
  - área mínima de toque no menu inferior

## Comandos

```bash
npm run qa:navigation
```

Para rodar toda a suíte E2E:

```bash
npm run test:e2e
```

## Critério de aprovação

- 100% dos testes passando em todos os projetos do Playwright.
- Falha em qualquer modal ou viewport bloqueia release.
````

## File: docs/PRIVACY_POLICY.md
````markdown
# Política de Privacidade - Agente Flow

**Última atualização:** Janeiro de 2026

## 1. Introdução

O **Agente Flow** (`@AgenteFlow_Bot`) é um Mini App do Telegram desenvolvido pela **NEØFLW**. Esta política descreve como coletamos e usamos suas informações.

## 2. Dados Coletados

Quando você utiliza o Agente Flow, podemos acessar as seguintes informações fornecidas pelo Telegram:

- **Nome de usuário** (para personalização da experiência)
- **ID do Telegram** (para salvar seu progresso no jogo)
- **Dados de progresso do jogo** (valuation, agentes adquiridos, status)

**Não coletamos:** Número de telefone, contatos, localização, fotos ou qualquer dado sensível.

## 3. Uso dos Dados

Os dados coletados são usados exclusivamente para:

- Salvar seu progresso no jogo
- Personalizar mensagens e CTAs
- Melhorar a experiência do usuário

## 4. Armazenamento

Os dados de progresso podem ser armazenados:

- Localmente no seu dispositivo (LocalStorage)
- No Telegram Cloud Storage (vinculado ao seu Telegram ID)

**Não utilizamos** servidores externos para armazenar dados pessoais.

## 5. Compartilhamento

Seus dados **não são vendidos ou compartilhados** com terceiros. 

Quando você clica em um CTA para falar com o Mellø (via Telegram ou WhatsApp), você está escolhendo ativamente iniciar essa comunicação.

## 6. Seus Direitos

Você pode:

- Apagar seus dados locais limpando o cache do navegador
- Parar de usar o app a qualquer momento
- Solicitar informações sobre seus dados via [@neomello](https://t.me/neomello)

## 7. Contato

Para dúvidas sobre esta política:

- **Telegram:** [@neomello](https://t.me/neomello)
- **Email:** neo@neoprotocol.space

---

*Esta política pode ser atualizada periodicamente. Recomendamos revisá-la ocasionalmente.*
````

## File: docs/README_SESSIONS.md
````markdown
# System Flow v2.5 - Resumo de Implementações & Próximos Passos

Este documento resume o estado atual do **CEO Escalável MiniApp** e mapeia o roadmap técnico e estratégico.

## ⦿ O que já foi implementado [x]

### Core Engine & UX
- [x] **Motor de Jogo v2.5:** Lógica de Valuation baseada em frotas autônomas e economia de tempo.
- [x] **NEO Auditor Pro:** Sistema de mensagens dinâmicas (Idle/Priority) com personalidade forte e easter eggs.
- [x] **Matriz de Riscos:** Eventos críticos (Burnout, Churn, Downtime) que forçam o jogador a automatizar.
- [x] **Intro Imersiva:** Overlay de terminal para onboard de novos players.

### Funis de Conversão (Lead Gen)
- [x] **Withdraw Modal:** Transformação do card de Valuation em um funil de liquidez real.
- [x] **The Vault (Docs):** Manifesto técnico com 6 soluções reais e CTAs diretos.
- [x] **Personalização de CTAs:** Injeção automática do nome do usuário em links de WhatsApp e Telegram.
- [x] **Roteamento Inteligente:** Detecção mobile/ios para evitar loops de redirecionamento no Telegram.

### Social & Viralidade
- [x] **Share to X / Warpcast:** Compartilhamento de resultados com texto dinâmico.
- [x] **X-Ray Dashboard:** Otimização visual para snapshots e prints de auditoria.

### Monetização (Telegram Stars)
- [x] **Loja Premium:** UI dedicada para compra de assets digitais.
- [x] **Integração de Pagamentos:** Backend serverless para processar invoices via Bot API.
- [x] **Produtos Digitais:** Venda de Capital e 'Seguro Burnout'.

---

## ⦿ O que seria ideal fazer [ ]

### Gameplay & Engajamento
- [ ] **Sistemas de Prestigio:** Resetar progresso em troca de multiplicadores permanentes (Venture Capital).
- [ ] **Leaderboard Global:** Ranking dos CEOs com maior valuation (uso de CloudStorage do Telegram).
- [ ] **Tasks Diárias:** Desafios operacionais rápidos para bônus de capital.

### Refinamento Técnico
- [ ] **Notificações Push (Bot):** Alertar o usuário sobre eventos críticos ou lucros offline via bot.
- [ ] **Dashboard de Métricas:** Painel interno para o Mellø trackear cliques nos CTAs de conversão.
- [ ] **Animações Lottie:** Substituir ícones simples por micro-animações premium de alta fidelidade.
- [ ] **Multi-Language:** Suporte nativo para Inglês/Espanhol (Expansão Global).

---

## ⦿ Estratégia de Transição
O objetivo é que cada clique no jogo alimente a autoridade da **NEØFLW** e gere leads qualificados que já entendem o valor da automação.
````

## File: docs/RESET_USER_DATA.md
````markdown
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

### Reset Global por Migração (sem lista de IDs)
O projeto suporta reset forçado no carregamento com versionamento:

- Variável: `VITE_FORCE_RESET_VERSION`
- Campo salvo no estado: `meta.state_version`

Regra:
- Se `meta.state_version < VITE_FORCE_RESET_VERSION`, o usuário recebe estado limpo automaticamente ao abrir o app.

Fluxo recomendado:
1. Incrementar `VITE_FORCE_RESET_VERSION` no ambiente.
2. Fazer deploy.
3. Usuários antigos são resetados no próximo acesso.

## 🔐 Segurança

- Apenas o próprio usuário pode resetar seus dados via console
- Comandos administrativos devem ser protegidos com autenticação
- Sempre confirme ações destrutivas antes de executar
````

## File: docs/ROADMAP_WEB3.md
````markdown
# Roadmap Web3 - Lançamento $NEOFLW

Planejamento estratégico para a expansão multichain do ecossistema e listagem oficial.

## Fase 1: Smart Contract & Segurança [✅ CONCLUÍDA]
- [✅] **Deploy Base Mainnet:** Token NEOFLW deployado com sucesso na Base Mainnet
- [✅] **Verificação On-Chain:** Código-fonte verificado no BaseScan (`0x41F4ff3d45DED9C1332e4908F637B75fe83F5d6B`)
- [✅] **Auditoria de Contrato:** Implementadas proteções de segurança (rate limiting, cooldown, reentrancy guard)
- [x] **Renúncia de Propriedade (Opcional):** Decidir sobre o lock de funções administrativas para aumentar a confiança dos holders [ PARA ESTE NÃO MAS SEI DA IMPORTANCIA E BENEFÍCIOS ]

## Fase 2: Presença & Social [ ]
- [✅] **Identidade Visual:** Criar assets da marca (Logo, Banners) seguindo a estética dark/magenta do app.
- [✅] **Redes Sociais Oficiais:**
    *   **X (Twitter):** Perfil focado em métricas de escala e anúncios de parcerias.
    *   **Telegram Group:** Comunidade de "Arquitetos de Sistemas" e holders.
- [] **Perfil na BaseScan:** Atualizar metadados do token (site, redes, descrição) no explorador de blocos.

## Fase 3: Liquidez & Mercado [ ]
- [ ] **Criação de Pool (DEX):** Implementar liquidez inicial na Uniswap V3 (Base) ou Aerodrome (Par $NEOFLW/ETH ou $NEOFLW/USDC).
- [ ] **Locked Liquidity:** Bloquear os tokens da pool (LP Tokens) via serviço de locker (ex: Unicrypt, Team Finance) para evitar Rug Pull.
- [ ] **Listagem em Rastreadores:** Submeter token para CoinGecko e CoinMarketCap.

## Fase 4: Integração com MiniApp [ ]
- [ ] **Wallet Connect:** Permitir que o usuário conecte sua carteira real ao jogo.
- [ ] **Mint de Airdrop:** Mecanismo para o usuário "sacar" seus ganhos virtuais para tokens reais na carteira (conforme regras de vesting).
- [ ] **Utility Rewards:** Uso do token para comprar agentes exclusivos ou boost de velocidade.

## Fase 5: Expansão de Pagamentos [ ]
- [ ] **Integração de Provider Token:** Configurar `PAYMENT_PROVIDER_TOKEN` no backend para habilitar pagamentos via Stripe/Smart Glocal (caso passemos a vender bens físicos ou assinaturas fora do ecossistema Stars).

---

**Nota:** Este roadmap é focado na infraestrutura pública para garantir que o projeto seja aprovado pela comunidade e exchanges.
````

## File: docs/TECH_OVERVIEW.md
````markdown
# Ecossistema Tecnológico: DApps & Mini Apps ⦿

Este documento detalha as tecnologias fundamentais que sustentam o **Agent Flow** e como a **NEØFlowOFF** utiliza estas ferramentas para revolucionar a escala operacional.

## 1. O que é um Mini App (Telegram)?
Mini Apps são aplicações web (HTML/JS) que rodam diretamente dentro da interface do Telegram. Eles eliminam a barreira de instalação de aplicativos tradicionais.
- **Fricção Zero:** O usuário não precisa baixar nada da App Store/Play Store.
- **Identidade Integrada:** Acesso imediato ao nome, ID e dados do usuário do Telegram (com permissão).
- **UX Nativa:** Botões, pagamentos e notificações integrados ao sistema do Telegram.

## 2. O que é um DApp (Decentralized App)?
Aplicações descentralizadas que utilizam infraestrutura de blockchain para garantir transparência, imutabilidade e prova de propriedade.
- **Equity Digital:** Tokens e ativos que pertencem ao usuário, não à plataforma.
- **Smart Contracts:** Regras de negócio que executam sozinhas sem necessidade de intermediários.
- **Transparência:** No Agent Flow, o $NEOFLW simula a base para um ecossistema de liquidez real.

## 3. A Metodologia NEØFlowOFF
Como agência, a **NEØFlowOFF** utiliza a união de **IA + Mini Apps + Web3** para criar o que chamamos de **"Infraestrutura de Escala Invisível"**.

### Como funciona na prática:
1.  **Interface (Mini App):** Onde o empresário monitora seu "dashboard de guerra" com zero complexidade.
2.  **Cérebro (Agentes IA):** Camada de processamento que executa tarefas que antes seriam manuais (SDR, Suporte, Tráfego, Infra).
3.  **Segurança e Valor (DApp/Web3):** Garantia de que os dados e a inteligência gerada são ativos de equity da empresa.

## 4. O Diferencial Estratégico
Diferente das automações de chatbot chatas e limitadas, nossa abordagem cria **ecossistemas autônomos**. Enquanto um bot responde perguntas, um Agente IA toma decisões e executa processos complexos dentro de um Mini App elegante e rápido.

---
*Documento de Referência Técnica v1.0 - NEØFlowOFF*
````

## File: docs/TELEGRAM_LAUNCH_GUIDE.md
````markdown
# Guia de Lançamento Final: Agente Flow (TMA)

Este guia consolida todas as configurações técnicas, burocráticas e implementações do ecossistema **Telegram Mini App (TMA)** para o Agente Flow.

---

## 🛠️ 1. Configuração Técnica (BotFather)

O [@BotFather](https://t.me/botfather) é o portal administrativo. Siga estes passos na ordem:

### A. Criação e Branding
1.  **`/newbot`**: 
    *   **Nome:** `Agente Flow`
    *   **Username:** `@AgenteFlow_Bot` (ou similar terminando em `bot`)
2.  **`/setuserpic`**: Envie o arquivo `/public/icon-512.webp`.
3.  **`/setdescription`**: Texto de boas-vindas: *"Simule sua frota de agentes IA. Automatize, escale e veja seu valuation em $NEOFLW. ⦿"*
4.  **`/setabouttext`**: Texto do perfil: *"O console de comando oficial da NEØFLW para CEOs escaláveis. Pare de ser o gargalo da sua empresa. Monte sua operação com agentes autônomos e alcance a Singularidade Operacional."*

### B. Ativação do Mini App Principal (Main Mini App)
O **Main Mini App** é o que garante o botão "Launch app" no perfil e destaque na loja.
1.  **`/newapp`** → Selecione `@AgenteFlow_Bot`.
2.  **Short Name:** `game`
3.  **URL:** `https://agenteflow.vercel.app/`
4.  **`/setinline`**: Ative para permitir compartilhamento via `@AgenteFlow_Bot`.

### C. Botão de Menu do Chat
1.  **`/setmenubutton`** → `@AgenteFlow_Bot`.
2.  **Texto:** `Jogar Agora ⦿`
3.  **URL:** `https://agenteflow.vercel.app/`

---

## 💎 2. Implementações de Elite (SDK Integration)

O Agente Flow utiliza o módulo `utils/telegramUtils.ts` para integrar recursos nativos.

### 🔴 Cloud Storage (Sync Total)
Diferente do `localStorage` comum, usamos a **Cloud Storage** do Telegram.
- **Vantagem:** O usuário pode começar a jogar no celular, fechar e continuar no Desktop/Web com o mesmo progresso.
- **Capacidade:** 1024 itens por usuário.

### 🟡 Navegação Nativa (BackButton)
- O app detecta quando você sai da "Operação" (Dashboard) para outras abas.
- O botão **Voltar** nativo do Telegram aparece automaticamente.
- Toque no botão voltar = Retorno imediato à operação.

### 🔵 Menu de Contexto (SettingsButton)
- No canto superior direito do app (dentro dos três pontos), implementamos um botão de **Settings**.
- Ele abre um menu de suporte direto com a NEØFLW e informações da versão.

---

## 🚀 3. Recursos de Crescimento e Viralização

### 🤳 Share to Story
Implementado nos botões de **"Resetar Sistema"** e **"Compartilhar Progresso"**.
- Ao clicar, o app chama o editor de Stories nativo do Telegram.
- Já inclui imagem oficial e legenda personalizada com o valuation do usuário.
- Inclui um link interativo direto para o bot.

### 🔗 Formatos de Link Inteligentes
Use estes links para marketing:
- **Full Screen:** `https://t.me/AgenteFlow_Bot?startapp`
- **Compacto (Meia-tela):** `https://t.me/AgenteFlow_Bot?startapp&mode=compact`
- **Com Tracking (Ref):** `https://t.me/AgenteFlow_Bot?startapp=campanha01`

---

## 📱 4. Performance e UX

### Detecção de Dispositivos (Low-end)
O app detecta automaticamente dispositivos Android de baixo desempenho.
- Desativa animações de "Shake" e filtros pesados para manter a fluidez de 60fps exigida pelo Telegram.

### Temas Dinâmicos
O app herda as cores do tema do usuário no Telegram:
- `--tg-theme-bg-color` (Fundo)
- `--tg-theme-text-color` (Corpo do texto)
- `--tg-theme-button-color` (Cores de destaque)

---

## 🏁 5. Checklist para Destaque na Mini App Store

Para aumentar as chances de ser listado no **Trending Apps**:
1. [x] **Main Mini App:** Configurado.
2. [x] **Mídia de Alta Qualidade:** Subir Screenshots e GIFs no BotFather.
3. [x] **Privacy Policy:** Configurada em `/public/privacy.html`.
4. [ ] **Telegram Stars:** Integrar pagamentos nativos (Próxima Fase).
5. [x] **Snappy Design:** Design mobile-first e fluido.

---

## 🔗 Links Oficiais

| Recurso | URL |
| :--- | :--- |
| **Bot Oficial** | [https://t.me/AgenteFlow_Bot](https://t.me/AgenteFlow_Bot) |
| **Console Web** | [https://agenteflow.vercel.app](https://agenteflow.vercel.app) |
| **Políticas** | [https://agenteflow.vercel.app/privacy.html](https://agenteflow.vercel.app/privacy.html) |

---
*Agente Flow v2.5 - Protocolo de Lançamento NEØFLW.*
````

## File: engine/gameLogic.ts
````typescript
import { GameState, AgentOwnership, Agent, ManualAction } from '../types';
import {
  COST_SCALING_FACTOR,
  STATUS_MILESTONES,
  MAX_VALUATION,
  VALUATION_DECELERATION_START,
  PRESTIGE_THRESHOLD,
  PRESTIGE_MULTIPLIER_BASE
} from '../constants';
import { DEFAULT_REGIME_ID, getRegimeConfig } from './regimes';
export const calculateAgentCost = (baseCost: number, quantity: number, prestigeLevel: number = 0): number => {
  const baseCostWithPrestige = baseCost / (1 + (prestigeLevel * (PRESTIGE_MULTIPLIER_BASE - 1) * 0.5));
  return Math.floor(baseCostWithPrestige * Math.pow(COST_SCALING_FACTOR, quantity));
};
export const calculateSynergyMultiplier = (inventory: AgentOwnership[], totalAgentsAvailable: number): number => {
  const uniqueAgents = inventory.length;
  if (uniqueAgents === 0) return 1;
  const baseSynergy = 1 + (uniqueAgents * 0.05);
  return uniqueAgents === totalAgentsAvailable ? baseSynergy * 1.5 : baseSynergy;
};
export const calculateTotalPPS = (
  agents: Agent[],
  inventory: AgentOwnership[],
  prestigeLevel: number = 0,
  activeRegime?: string
): number => {
  const basePPS = inventory.reduce((total, item) => {
    const agentData = agents.find(a => a.id === item.id);
    return total + (agentData ? agentData.receita_passiva_segundo * item.quantity : 0);
  }, 0);
  const synergyMultiplier = calculateSynergyMultiplier(inventory, agents.length);
  const prestigeMultiplier = 1 + (prestigeLevel * (PRESTIGE_MULTIPLIER_BASE - 1));
  const regime = getRegimeConfig(activeRegime ?? DEFAULT_REGIME_ID);
  const regimePpsMultiplier = regime.multipliers?.pps ?? 1;
  return basePPS * synergyMultiplier * prestigeMultiplier * regimePpsMultiplier;
};
export const calculateManualGain = (
  action: ManualAction,
  totalCapitalGenerated: number,
  prestigeLevel: number = 0,
  activeRegime?: string
): number => {
  const statusMultiplier = 1 + Math.log10(Math.max(1, totalCapitalGenerated / 500));
  const prestigeMultiplier = 1 + (prestigeLevel * (PRESTIGE_MULTIPLIER_BASE - 1));
  const regime = getRegimeConfig(activeRegime ?? DEFAULT_REGIME_ID);
  const manualMultiplier = regime.multipliers?.manualGain ?? 1;
  return Math.floor(action.capital_gain * statusMultiplier * prestigeMultiplier * manualMultiplier);
};
export const updateStatus = (valuation: number): string => {
  const milestone = [...STATUS_MILESTONES].reverse().find(m => valuation >= m.pu);
  return milestone ? milestone.label : "Iniciante";
};
export const formatHours = (seconds: number): string => {
  const hours = seconds / 3600;
  if (hours < 0.1) return `${(seconds / 60).toFixed(1)}m`;
  return `${hours.toFixed(1)}h`;
};
export const isActionAutomated = (actionId: string, inventory: AgentOwnership[], agents: Agent[]): boolean => {
  return inventory.some(item => {
    const agent = agents.find(a => a.id === item.id);
    return agent?.reduz_cliques.includes(actionId);
  });
};
export const areAllActionsAutomated = (manualActions: ManualAction[], inventory: AgentOwnership[], agents: Agent[]): boolean => {
  return manualActions.every(action => isActionAutomated(action.id, inventory, agents));
};
export const checkSingularity = (gameState: GameState): boolean => {
  const pps = calculateTotalPPS(
    gameState.agents,
    gameState.inventory,
    gameState.meta.prestige_level || 0,
    gameState.meta.active_regime
  );
  const allAutomated = areAllActionsAutomated(gameState.manualActions, gameState.inventory, gameState.agents);
  return allAutomated && pps >= 150;
};
export const calculateValuation = (gameState: GameState): number => {
  const prestigeLevel = gameState.meta.prestige_level || 0;
  const pps = calculateTotalPPS(gameState.agents, gameState.inventory, prestigeLevel, gameState.meta.active_regime);
  const totalCap = gameState.meta.capital_total_gerado;
  const hoursSaved = gameState.resources.horas_manuais_eliminadas;
  const ppsMktMultiple = pps * 15;
  const efficiencyBonus = hoursSaved * 12;
  const equityBase = totalCap / 1000;
  let rawValuation = ppsMktMultiple + efficiencyBonus + equityBase;
  const regime = getRegimeConfig(gameState.meta.active_regime ?? DEFAULT_REGIME_ID);
  const decelerationStart = regime.deceleration?.start ?? VALUATION_DECELERATION_START;
  const decelerationMax = regime.deceleration?.max ?? MAX_VALUATION;
  const decelerationIntensity = regime.deceleration?.intensity ?? 0.9;
  if (rawValuation > decelerationStart) {
    const excess = rawValuation - decelerationStart;
    const decelerationFactor = Math.max(0.1, 1 - (excess / decelerationMax) * decelerationIntensity);
    rawValuation = decelerationStart + (excess * decelerationFactor);
  }
  return Math.min(rawValuation, decelerationMax);
};
export const checkFinalVictory = (gameState: GameState): boolean => {
  const singularityReached = checkSingularity(gameState);
  const valuation = calculateValuation(gameState);
  return singularityReached && valuation >= PRESTIGE_THRESHOLD;
};
export const canPrestige = (gameState: GameState): boolean => {
  const valuation = calculateValuation(gameState);
  return valuation >= PRESTIGE_THRESHOLD || checkFinalVictory(gameState);
};
````

## File: engine/regimes.ts
````typescript
import { GameState, RegimeConfig } from '../types';
export const DEFAULT_REGIME_ID = 'economy.scale';
export const REGIME_PRESETS: RegimeConfig[] = [
  {
    id: 'economy.scale',
    description: 'Economia de escala agressiva com incentivo à automação global e inflação controlada.',
    multipliers: {
      pps: 1.15,
      manualGain: 0.9,
      stressRelief: 1
    },
    constraints: {
      automation_cap: 0.95
    },
    incentives: {
      collective_efficiency: 1.1
    },
    thresholds: {
      capital_total: 0,
      automation_requirement: 0
    },
    deceleration: {
      start: 120000,
      max: 1200000,
      curve: 'logarithmic',
      intensity: 0.9
    },
    allowedActions: ['switch_regime', 'adjust_multiplier_range'],
    victoryConditions: {
      requires: ['singularity'],
      minDurationCycles: 3
    }
  },
  {
    id: 'economy.enterprise',
    description: 'Regime corporativo com foco em governança, capital protegido e curvas suaves de crescimento.',
    multipliers: {
      pps: 1.05,
      manualGain: 1,
      stressRelief: 1.1
    },
    constraints: {
      automation_cap: 0.9
    },
    incentives: {
      collective_efficiency: 1.2
    },
    thresholds: {
      capital_total: 3000,
      automation_requirement: 0.6
    },
    deceleration: {
      start: 110000,
      max: 900000,
      curve: 'linear',
      intensity: 0.85
    },
    allowedActions: ['issue_warning', 'switch_regime']
  },
  {
    id: 'economy.dao',
    description: 'Governança coletiva descentralizada e maior tolerância a experimentos.',
    multipliers: {
      pps: 1.08,
      manualGain: 1.05,
      stressRelief: 1.2
    },
    constraints: {
      centralization_penalty: true,
      automation_cap: 0.85
    },
    incentives: {
      collective_efficiency: 1.25
    },
    thresholds: {
      capital_total: 6000,
      automation_requirement: 0.75
    },
    deceleration: {
      start: 100000,
      max: 950000,
      curve: 'logarithmic',
      intensity: 0.8
    },
    allowedActions: ['adjust_multiplier_range', 'issue_warning']
  },
  {
    id: 'economy.hyperautomation',
    description: 'Automação extrema com controle rígido de recursos e análise preditiva.',
    multipliers: {
      pps: 1.2,
      manualGain: 0.8,
      stressRelief: 0.95
    },
    constraints: {
      automation_cap: 0.99
    },
    incentives: {
      collective_efficiency: 1.4
    },
    thresholds: {
      capital_total: 9000,
      automation_requirement: 0.9
    },
    deceleration: {
      start: 130000,
      max: 1100000,
      curve: 'logarithmic',
      intensity: 0.95
    },
    allowedActions: ['switch_regime']
  },
  {
    id: 'economy.collapse',
    description: 'Modo de crise: estabilidade provisória, corte de custos e retrocesso automático.',
    multipliers: {
      pps: 0.75,
      manualGain: 0.7,
      stressRelief: 0.5
    },
    constraints: {
      automation_cap: 0.65
    },
    incentives: {
      collective_efficiency: 0.9
    },
    thresholds: {
      capital_total: 12000,
      automation_requirement: 0.5
    },
    deceleration: {
      start: 80000,
      max: 500000,
      curve: 'linear',
      intensity: 0.95
    },
    allowedActions: ['issue_warning']
  }
];
const automationCoverage = (state: GameState): number => {
  const manualActions = state.manualActions.length;
  if (!manualActions) return 1;
  const automated = state.manualActions.reduce((count, action) => {
    const automatedByAgent = state.inventory.some((item) => {
      const agent = state.agents.find((a) => a.id === item.id);
      return agent?.reduz_cliques.includes(action.id);
    });
    return count + (automatedByAgent ? 1 : 0);
  }, 0);
  return automated / manualActions;
};
const applyStressOverride = (state: GameState): string | null => {
  if (state.resources.stress >= 85) {
    return 'economy.collapse';
  }
  return null;
};
export const getRegimeConfig = (id?: string): RegimeConfig => {
  return REGIME_PRESETS.find((regime) => regime.id === id) ?? REGIME_PRESETS[0];
};
export const evaluateMetaGovernor = (state: GameState): string | null => {
  const override = applyStressOverride(state);
  const current = state.meta.active_regime ?? DEFAULT_REGIME_ID;
  if (override && current !== override) {
    return override;
  }
  const coverage = automationCoverage(state);
  const sorted = [...REGIME_PRESETS].sort(
    (a, b) => (a.thresholds?.capital_total ?? 0) - (b.thresholds?.capital_total ?? 0)
  );
  let candidate = DEFAULT_REGIME_ID;
  for (const regime of sorted) {
    const capitalThreshold = regime.thresholds?.capital_total ?? 0;
    const automationThreshold = regime.thresholds?.automation_requirement ?? 0;
    if (state.meta.capital_total_gerado >= capitalThreshold && coverage >= automationThreshold) {
      candidate = regime.id;
    }
  }
  return candidate === current ? null : candidate;
};
````

## File: engine/soundEffects.ts
````typescript
let audioCtx: AudioContext | null = null;
const getCtx = (): AudioContext | null => {
  if (!audioCtx) return null;
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => { });
  }
  return audioCtx;
};
const initAudioContext = () => {
  if (audioCtx) return;
  try {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => { });
    }
  } catch (e) {
  }
};
if (typeof document !== 'undefined') {
  const events = ['click', 'touchstart', 'keydown'];
  const handler = () => {
    initAudioContext();
    events.forEach(e => document.removeEventListener(e, handler));
  };
  events.forEach(e => document.addEventListener(e, handler, { passive: true }));
}
export const playTyping = () => {
  const ctx = getCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.02, ctx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < noiseBuffer.length; i++) {
    output[i] = Math.random() * 2 - 1;
  }
  const source = ctx.createBufferSource();
  source.buffer = noiseBuffer;
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1200, now);
  filter.Q.setValueAtTime(1, now);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.008, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  source.start(now);
};
export const playNotification = () => {
  const ctx = getCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const playTone = (freq: number, delay: number, vol: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + delay);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, now + delay);
    gain.gain.setValueAtTime(0, now + delay);
    gain.gain.linearRampToValueAtTime(vol, now + delay + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 0.3);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + delay);
    osc.stop(now + delay + 0.4);
  };
  playTone(880, 0, 0.04);
  playTone(1318.51, 0.04, 0.02);
};
export const playAlert = () => {
  const ctx = getCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(120, now);
  osc.frequency.exponentialRampToValueAtTime(40, now + 0.5);
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(400, now);
  gain.gain.setValueAtTime(0.08, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.6);
};
export const playDeploy = () => {
  const ctx = getCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const sub = ctx.createOscillator();
  const subGain = ctx.createGain();
  sub.type = 'sine';
  sub.frequency.setValueAtTime(80, now);
  sub.frequency.exponentialRampToValueAtTime(20, now + 0.4);
  subGain.gain.setValueAtTime(0.15, now);
  subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
  sub.connect(subGain);
  subGain.connect(ctx.destination);
  sub.start(now);
  sub.stop(now + 0.5);
  const meta = ctx.createOscillator();
  const metaFilter = ctx.createBiquadFilter();
  const metaGain = ctx.createGain();
  meta.type = 'triangle';
  meta.frequency.setValueAtTime(1200, now);
  metaFilter.type = 'highpass';
  metaFilter.frequency.setValueAtTime(1000, now);
  metaGain.gain.setValueAtTime(0.03, now);
  metaGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
  meta.connect(metaFilter);
  metaFilter.connect(metaGain);
  metaGain.connect(ctx.destination);
  meta.start(now);
  meta.stop(now + 0.2);
};
````

## File: hooks/useAuth.ts
````typescript
import { useState, useEffect } from 'react';
import { UserProfile, GameState } from '../types';
import telegram from '../utils/telegramUtils';
import { FORCE_RESET_VERSION } from '../constants';
import { createFreshGameState, saveFreshState } from '../utils/resetUserData';
export const useAuth = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState<Partial<GameState> | null>(null);
  useEffect(() => {
    const parseState = (value: string): Partial<GameState> | null => {
      try {
        return JSON.parse(value);
      } catch (error) {
        console.error('Erro ao dar parse no estado salvo:', error);
        return null;
      }
    };
    const shouldForceReset = (state: Partial<GameState> | null): boolean => {
      if (!state) return false;
      const version = Number((state as GameState).meta?.state_version ?? 0);
      return version < FORCE_RESET_VERSION;
    };
    const loadState = async (profile: UserProfile) => {
      const userId = profile.id;
      const cloudKey = `ceo_state_${userId}`;
      try {
        const value = await telegram.cloudStorage.getItem(cloudKey);
        let parsed: Partial<GameState> | null = null;
        if (value) {
          parsed = parseState(value);
        } else {
          const localSaved = localStorage.getItem(cloudKey);
          if (localSaved) parsed = parseState(localSaved);
        }
        if (shouldForceReset(parsed)) {
          console.warn(`[StateMigration] Reset forçado aplicado para ${userId}. versão alvo=${FORCE_RESET_VERSION}`);
          const freshState = createFreshGameState(profile);
          setInitialData(freshState);
          await saveFreshState(userId, profile);
        } else if (parsed) {
          setInitialData(parsed);
        } else {
          const freshState = createFreshGameState(profile);
          setInitialData(freshState);
          await saveFreshState(userId, profile);
        }
      } catch (e) {
        console.warn('CloudStorage não disponível, tentando LocalStorage:', e);
        const localSaved = localStorage.getItem(cloudKey);
        const parsed = localSaved ? parseState(localSaved) : null;
        if (shouldForceReset(parsed)) {
          const freshState = createFreshGameState(profile);
          setInitialData(freshState);
          await saveFreshState(userId, profile);
        } else if (parsed) {
          setInitialData(parsed);
        } else {
          const freshState = createFreshGameState(profile);
          setInitialData(freshState);
          await saveFreshState(userId, profile);
        }
      } finally {
        setLoading(false);
      }
    };
    const tgUser = telegram.getUser();
    if (tgUser) {
      const profile: UserProfile = {
        id: tgUser.id,
        name: tgUser.first_name || 'Operador',
        username: tgUser.username,
        type: 'telegram'
      };
      setUser(profile);
      telegram.expand();
      telegram.ready();
      telegram.enableClosingConfirmation();
      loadState(profile);
    } else {
      const savedId = localStorage.getItem('ceo_visitor_id') || `v_${Math.random().toString(36).substring(2, 9)}`;
      const savedName = localStorage.getItem('ceo_visitor_name') || `Visitante #${Math.floor(Math.random() * 9000) + 1000}`;
      localStorage.setItem('ceo_visitor_id', savedId);
      localStorage.setItem('ceo_visitor_name', savedName);
      const profile: UserProfile = { id: savedId, name: savedName, type: 'visitor' };
      setUser(profile);
      loadState(profile);
    }
  }, []);
  return { user, loading, initialData };
};
````

## File: hooks/useNeoToken.ts
````typescript
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { formatEther, BaseError } from 'viem'
import NeoTokenABI from '../constants/abis/NeoTokenV2.json'
export const NEO_TOKEN_ADDRESS = '0x41F4ff3d45DED9C1332e4908F637B75fe83F5d6B'
export function useNeoToken() {
    const { address, isConnected } = useAccount()
    const { writeContract, data: hash, isPending: isMinting, error: writeError } = useWriteContract()
    const { data: balance, refetch: refetchBalance } = useReadContract({
        address: NEO_TOKEN_ADDRESS,
        abi: NeoTokenABI as any,
        functionName: 'balanceOf',
        args: address ? [address] : undefined,
        query: {
            enabled: !!address,
        }
    })
    const { data: contractInfo, isLoading: isLoadingInfo, refetch: refetchInfo } = useReadContract({
        address: NEO_TOKEN_ADDRESS,
        abi: NeoTokenABI as any,
        functionName: 'getContractInfo',
    })
    const { data: maxSupply } = useReadContract({
        address: NEO_TOKEN_ADDRESS,
        abi: NeoTokenABI as any,
        functionName: 'MAX_SUPPLY',
    })
    const { data: totalSupply } = useReadContract({
        address: NEO_TOKEN_ADDRESS,
        abi: NeoTokenABI as any,
        functionName: 'totalSupply',
    })
    const mint = async () => {
        if (!isConnected) throw new Error('Wallet not connected')
        if (!contractInfo) throw new Error('Contract info not loaded')
        const info = contractInfo as any
        const mintEnabled = info[4]
        const mintPrice = info[2]
        if (!mintEnabled) throw new Error('Public mint is not active')
        return writeContract({
            address: NEO_TOKEN_ADDRESS,
            abi: NeoTokenABI as any,
            functionName: 'publicMint',
            value: mintPrice,
        } as any)
    }
    const {
        isLoading: isWaitingTransaction,
        isSuccess: mintSuccess,
        error: transactionError
    } = useWaitForTransactionReceipt({
        hash,
    })
    const getErrorMessage = (err: any) => {
        if (!err) return null
        if (err instanceof BaseError) {
            if (err.message.includes('insufficient funds')) return 'Saldo insuficiente de ETH na carteira.'
            if (err.message.includes('User rejected')) return 'Transação recusada pelo usuário.'
            if (err.message.includes('hasPublicMinted')) return 'Esta carteira já realizou o mint gratuito.'
        }
        return err.message || 'Ocorreu um erro na transação.'
    }
    return {
        address,
        isConnected,
        balance: balance ? formatEther(balance as bigint) : '0',
        stats: contractInfo ? {
            currentSupply: formatEther((contractInfo as any)[0]),
            maxSupply: formatEther((contractInfo as any)[1]),
            mintPrice: formatEther((contractInfo as any)[2]),
            mintAmount: formatEther((contractInfo as any)[3]),
            mintEnabled: (contractInfo as any)[4],
        } : null,
        mint,
        isPending: isMinting || isWaitingTransaction,
        isMinting,
        isWaitingTransaction,
        mintSuccess,
        error: getErrorMessage(writeError || transactionError),
        refetch: () => {
            refetchBalance()
            refetchInfo()
        }
    }
}
````

## File: public/icon-512.xmp
````
<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        ">
 <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
  <rdf:Description rdf:about=""
    xmlns:exif="http://ns.adobe.com/exif/1.0/"
    xmlns:tiff="http://ns.adobe.com/tiff/1.0/"
    xmlns:xmpMM="http://ns.adobe.com/xap/1.0/mm/"
    xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:xmp="http://ns.adobe.com/xap/1.0/"
    xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/"
    xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/"
   exif:ExifVersion="0231"
   tiff:Orientation="1"
   xmpMM:DocumentID="764E2D386191B987F55A88B52DEBC66A"
   xmpMM:OriginalDocumentID="764E2D386191B987F55A88B52DEBC66A"
   xmpMM:InstanceID="xmp.iid:f3199c60-0aa4-44a2-946f-2799b7092f5c"
   dc:format="image/webp"
   xmp:MetadataDate="2026-02-23T21:23:12-03:00"
   crs:Version="18.2"
   crs:ProcessVersion="15.4"
   crs:WhiteBalance="As Shot"
   crs:IncrementalTemperature="0"
   crs:IncrementalTint="0"
   crs:Exposure2012="0.00"
   crs:Contrast2012="0"
   crs:Highlights2012="0"
   crs:Shadows2012="0"
   crs:Whites2012="0"
   crs:Blacks2012="0"
   crs:Texture="0"
   crs:Clarity2012="0"
   crs:Dehaze="0"
   crs:Vibrance="0"
   crs:Saturation="0"
   crs:ParametricShadows="0"
   crs:ParametricDarks="0"
   crs:ParametricLights="0"
   crs:ParametricHighlights="0"
   crs:ParametricShadowSplit="25"
   crs:ParametricMidtoneSplit="50"
   crs:ParametricHighlightSplit="75"
   crs:Sharpness="0"
   crs:LuminanceSmoothing="0"
   crs:ColorNoiseReduction="0"
   crs:HueAdjustmentRed="0"
   crs:HueAdjustmentOrange="0"
   crs:HueAdjustmentYellow="0"
   crs:HueAdjustmentGreen="0"
   crs:HueAdjustmentAqua="0"
   crs:HueAdjustmentBlue="0"
   crs:HueAdjustmentPurple="0"
   crs:HueAdjustmentMagenta="0"
   crs:SaturationAdjustmentRed="0"
   crs:SaturationAdjustmentOrange="0"
   crs:SaturationAdjustmentYellow="0"
   crs:SaturationAdjustmentGreen="0"
   crs:SaturationAdjustmentAqua="0"
   crs:SaturationAdjustmentBlue="0"
   crs:SaturationAdjustmentPurple="0"
   crs:SaturationAdjustmentMagenta="0"
   crs:LuminanceAdjustmentRed="0"
   crs:LuminanceAdjustmentOrange="0"
   crs:LuminanceAdjustmentYellow="0"
   crs:LuminanceAdjustmentGreen="0"
   crs:LuminanceAdjustmentAqua="0"
   crs:LuminanceAdjustmentBlue="0"
   crs:LuminanceAdjustmentPurple="0"
   crs:LuminanceAdjustmentMagenta="0"
   crs:SplitToningShadowHue="0"
   crs:SplitToningShadowSaturation="0"
   crs:SplitToningHighlightHue="0"
   crs:SplitToningHighlightSaturation="0"
   crs:SplitToningBalance="0"
   crs:ColorGradeMidtoneHue="0"
   crs:ColorGradeMidtoneSat="0"
   crs:ColorGradeShadowLum="0"
   crs:ColorGradeMidtoneLum="0"
   crs:ColorGradeHighlightLum="0"
   crs:ColorGradeBlending="50"
   crs:ColorGradeGlobalHue="0"
   crs:ColorGradeGlobalSat="0"
   crs:ColorGradeGlobalLum="0"
   crs:AutoLateralCA="0"
   crs:LensProfileEnable="0"
   crs:LensManualDistortionAmount="0"
   crs:VignetteAmount="0"
   crs:DefringePurpleAmount="0"
   crs:DefringePurpleHueLo="30"
   crs:DefringePurpleHueHi="70"
   crs:DefringeGreenAmount="0"
   crs:DefringeGreenHueLo="40"
   crs:DefringeGreenHueHi="60"
   crs:PerspectiveUpright="0"
   crs:PerspectiveVertical="0"
   crs:PerspectiveHorizontal="0"
   crs:PerspectiveRotate="0.0"
   crs:PerspectiveAspect="0"
   crs:PerspectiveScale="100"
   crs:PerspectiveX="0.00"
   crs:PerspectiveY="0.00"
   crs:GrainAmount="0"
   crs:PostCropVignetteAmount="0"
   crs:ShadowTint="0"
   crs:RedHue="0"
   crs:RedSaturation="0"
   crs:GreenHue="0"
   crs:GreenSaturation="0"
   crs:BlueHue="0"
   crs:BlueSaturation="0"
   crs:HDREditMode="0"
   crs:ConvertToGrayscale="False"
   crs:OverrideLookVignette="False"
   crs:ToneCurveName2012="Linear"
   crs:CameraProfile="Embedded"
   crs:CameraProfileDigest="54650A341B5B5CCAE8442D0B43A92BCE"
   crs:HasSettings="True"
   crs:HasCrop="False"
   crs:AlreadyApplied="False"
   photoshop:SidecarForExtension="WEBP"
   photoshop:EmbeddedXMPDigest="00000000000000000000000000000000">
   <xmpMM:History>
    <rdf:Seq>
     <rdf:li
      stEvt:action="saved"
      stEvt:instanceID="xmp.iid:83bfc970-ec9a-4f60-bf97-e23adae96f64"
      stEvt:when="2026-02-23T20:33:33-03:00"
      stEvt:softwareAgent="Adobe Photoshop Camera Raw 18.2 (Macintosh)"
      stEvt:changed="/metadata"/>
     <rdf:li
      stEvt:action="saved"
      stEvt:instanceID="xmp.iid:f3199c60-0aa4-44a2-946f-2799b7092f5c"
      stEvt:when="2026-02-23T21:23:12-03:00"
      stEvt:softwareAgent="Adobe Photoshop Camera Raw 18.2 (Macintosh)"
      stEvt:changed="/metadata"/>
    </rdf:Seq>
   </xmpMM:History>
   <crs:ToneCurvePV2012>
    <rdf:Seq>
     <rdf:li>0, 0</rdf:li>
     <rdf:li>255, 255</rdf:li>
    </rdf:Seq>
   </crs:ToneCurvePV2012>
   <crs:ToneCurvePV2012Red>
    <rdf:Seq>
     <rdf:li>0, 0</rdf:li>
     <rdf:li>255, 255</rdf:li>
    </rdf:Seq>
   </crs:ToneCurvePV2012Red>
   <crs:ToneCurvePV2012Green>
    <rdf:Seq>
     <rdf:li>0, 0</rdf:li>
     <rdf:li>255, 255</rdf:li>
    </rdf:Seq>
   </crs:ToneCurvePV2012Green>
   <crs:ToneCurvePV2012Blue>
    <rdf:Seq>
     <rdf:li>0, 0</rdf:li>
     <rdf:li>255, 255</rdf:li>
    </rdf:Seq>
   </crs:ToneCurvePV2012Blue>
   <crs:PointColors>
    <rdf:Seq>
     <rdf:li>-1.000000, -1.000000, -1.000000, -1.000000, -1.000000, -1.000000, -1.000000, -1.000000, -1.000000, -1.000000, -1.000000, -1.000000, -1.000000, -1.000000, -1.000000, -1.000000, -1.000000, -1.000000, -1.000000</rdf:li>
    </rdf:Seq>
   </crs:PointColors>
   <crs:ColorVariance>
    <rdf:Seq>
     <rdf:li>-50.000000</rdf:li>
    </rdf:Seq>
   </crs:ColorVariance>
  </rdf:Description>
 </rdf:RDF>
</x:xmpmeta>
````

## File: public/logo.svg
````xml
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M120 150C120 138.954 128.954 130 140 130H372C383.046 130 392 138.954 392 150V180C392 191.046 383.046 200 372 200H140C128.954 200 120 191.046 120 180V150ZM120 241C120 229.954 128.954 221 140 221H320C331.046 221 340 229.954 340 241V271C340 282.046 331.046 291 320 291H140C128.954 291 120 282.046 120 271V241ZM120 332C120 320.954 128.954 312 140 312H372C383.046 312 392 320.954 392 332V362C392 373.046 383.046 382 372 382H140C128.954 382 120 373.046 120 362V332Z" fill="white"/>
</svg>
````

## File: public/manifest.json
````json
{
    "name": "Agente Flow",
    "short_name": "AgenteFlow",
    "icons": [
        {
            "src": "/android-icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icon-512.webp",
            "sizes": "512x512",
            "type": "image/webp"
        }
    ],
    "start_url": "/",
    "display": "standalone",
    "theme_color": "#0a050f",
    "background_color": "#0a050f"
}
````

## File: public/privacy.html
````html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Política de Privacidade - Agente Flow</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #0a050f;
            color: #e2e8f0;
            padding: 40px 20px;
            line-height: 1.7;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
        }
        h1 {
            color: #ff00ff;
            font-size: 24px;
            margin-bottom: 8px;
        }
        h2 {
            color: #ff00ff;
            font-size: 16px;
            margin: 32px 0 12px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }
        p {
            margin-bottom: 16px;
            font-size: 14px;
            color: #a0aec0;
        }
        ul {
            margin: 16px 0;
            padding-left: 20px;
        }
        li {
            margin-bottom: 8px;
            font-size: 14px;
            color: #a0aec0;
        }
        a {
            color: #ff00ff;
            text-decoration: none;
        }
        .date {
            font-size: 12px;
            color: #666;
            margin-bottom: 32px;
        }
        .footer {
            margin-top: 48px;
            padding-top: 24px;
            border-top: 1px solid #222;
            font-size: 12px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Política de Privacidade</h1>
        <p class="date">Última atualização: Janeiro de 2026</p>
        <h2>1. Introdução</h2>
        <p>O <strong>Agente Flow</strong> (@AgenteFlow_Bot) é um Mini App do Telegram desenvolvido pela NEØFLW. Esta
            política descreve como coletamos e usamos suas informações.</p>
        <h2>2. Dados Coletados</h2>
        <p>Quando você utiliza o Agente Flow, podemos acessar:</p>
        <ul>
            <li>Nome de usuário (para personalização)</li>
            <li>ID do Telegram (para salvar progresso)</li>
            <li>Dados de progresso do jogo</li>
        </ul>
        <p><strong>Não coletamos:</strong> Número de telefone, contatos, localização ou dados sensíveis.</p>
        <h2>3. Uso dos Dados</h2>
        <p>Os dados são usados exclusivamente para salvar seu progresso, personalizar a experiência e melhorar o app.
        </p>
        <h2>4. Armazenamento</h2>
        <p>Dados são armazenados localmente no seu dispositivo (LocalStorage) ou no Telegram Cloud Storage. Não
            utilizamos servidores externos.</p>
        <h2>5. Compartilhamento</h2>
        <p>Seus dados <strong>não são vendidos ou compartilhados</strong> com terceiros.</p>
        <h2>6. Seus Direitos</h2>
        <p>Você pode apagar dados limpando o cache do navegador ou solicitar informações via <a
                href="https://t.me/neomello">@neomello</a>.</p>
        <h2>7. Contato</h2>
        <p>
            Telegram: <a href="https://t.me/neomello">@neomello</a><br>
            Email: neo@neoprotocol.space
        </p>
        <div class="footer">
            <p>Esta política pode ser atualizada periodicamente. ⦿ NEØFLW</p>
        </div>
    </div>
</body>
</html>
````

## File: tests/e2e/navigation.spec.ts
````typescript
import { expect, test } from '@playwright/test';
import type { Page } from '@playwright/test';
const NAV_BUTTON_IDS = ['#nav-operacao', '#nav-agentes', '#nav-protocols', '#nav-raiox'];
const openApp = async ({ page }: { page: Page }) => {
  await page.goto('/');
  await expect(page.getByText('Commercial Scale Console')).toBeVisible();
  const offlineModal = page.locator('#modal-offline-earnings');
  if (await offlineModal.isVisible()) {
    await page.click('#modal-offline-earnings-close');
    await expect(offlineModal).toBeHidden();
  }
};
test.describe('Navigation QA Gate', () => {
  test('tabs navegam sem quebrar contexto', async ({ page }) => {
    await openApp({ page });
    await page.click('#nav-operacao');
    await expect(page.getByText('Sistema de Conversao em Escala')).toBeVisible();
    await page.click('#nav-agentes');
    await expect(page.getByText('Mercado de Automação')).toBeVisible();
    await page.click('#nav-protocols');
    await expect(page.getByText('Agente Flow Technical Manifesto')).toBeVisible();
    await page.click('#nav-raiox');
    await expect(page.getByText('Raio-X de Valuation')).toBeVisible();
  });
  test('modais críticos fecham via X e backdrop', async ({ page }) => {
    await openApp({ page });
    await page.click('#cta-open-store');
    await expect(page.locator('#modal-store')).toBeVisible();
    await page.click('#modal-store-close');
    await expect(page.locator('#modal-store')).toBeHidden();
    await page.click('#cta-open-tasks');
    await expect(page.locator('#modal-daily-tasks')).toBeVisible();
    await page.click('#modal-daily-tasks-backdrop', { position: { x: 8, y: 8 } });
    await expect(page.locator('#modal-daily-tasks')).toBeHidden();
    await page.click('#cta-open-leaderboard');
    await expect(page.locator('#modal-leaderboard')).toBeVisible();
    await page.click('#modal-leaderboard-close');
    await expect(page.locator('#modal-leaderboard')).toBeHidden();
    await page.click('#cta-open-mint');
    await expect(page.locator('#modal-neomint')).toBeVisible();
    await page.click('#modal-neomint-close');
    await expect(page.locator('#modal-neomint')).toBeHidden();
    await page.click('#open-withdraw-modal');
    await expect(page.locator('#modal-withdraw')).toBeVisible();
    await page.click('#modal-withdraw-backdrop', { position: { x: 8, y: 8 } });
    await expect(page.locator('#modal-withdraw')).toBeHidden();
    await page.click('#nav-agentes');
    await page.click('#agent-card-agent_support_v1');
    await expect(page.locator('#modal-agent-details')).toBeVisible();
    await page.click('#modal-agent-details-close');
    await expect(page.locator('#modal-agent-details')).toBeHidden();
  });
  test('responsividade sem overflow horizontal e com alvos tocáveis', async ({ page }) => {
    await openApp({ page });
    const bounds = await page.evaluate(() => ({
      viewport: window.innerWidth,
      bodyWidth: document.body.scrollWidth,
      documentWidth: document.documentElement.scrollWidth
    }));
    expect(bounds.bodyWidth).toBeLessThanOrEqual(bounds.viewport + 1);
    expect(bounds.documentWidth).toBeLessThanOrEqual(bounds.viewport + 1);
    for (const navId of NAV_BUTTON_IDS) {
      const locator = page.locator(navId);
      await expect(locator).toBeVisible();
      const box = await locator.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.height).toBeGreaterThanOrEqual(36);
      expect(box!.width).toBeGreaterThanOrEqual(40);
    }
  });
});
````

## File: utils/cloudSave.ts
````typescript
import { GameState } from '../types';
const SYNC_INTERVAL_MS = 60 * 1000;
interface CloudData {
    gameState: GameState;
    last_updated: number;
}
export const CloudSaveService = {
    async save(userId: string, gameState: GameState): Promise<boolean> {
        try {
            await fetch(`/api/sync?userId=${userId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    gameState,
                    timestamp: Date.now()
                })
            });
            console.log('[CloudSave] Saved successfully');
            return true;
        } catch (e) {
            console.warn('[CloudSave] Save failed', e);
            return false;
        }
    },
    async load(userId: string): Promise<CloudData | null> {
        try {
            const res = await fetch(`/api/sync?userId=${userId}`);
            if (!res.ok) return null;
            const data = await res.json();
            return data;
        } catch (e) {
            console.warn('[CloudSave] Load failed', e);
            return null;
        }
    },
    shouldSync(lastSyncTime: number): boolean {
        return Date.now() - lastSyncTime > SYNC_INTERVAL_MS;
    }
};
````

## File: utils/dailyTasks.ts
````typescript
export interface DailyTask {
    id: string;
    description: string;
    reward: string;
    completed: boolean;
    target: number;
    current: number;
    type: 'click' | 'buy' | 'login';
}
export interface DayStreak {
    current: number;
    lastLoginDate: number;
}
export const DAILY_TASKS: DailyTask[] = [
    {
        id: 'task_login',
        description: 'Login Diário',
        reward: '+10% Capital',
        completed: false,
        target: 1,
        current: 0,
        type: 'login'
    },
    {
        id: 'task_clicks',
        description: '50 Ações Manuais',
        reward: '-20 Stress',
        completed: false,
        target: 50,
        current: 0,
        type: 'click'
    },
    {
        id: 'task_agent',
        description: 'Contratar 1 Agente',
        reward: '+500 Capital',
        completed: false,
        target: 1,
        current: 0,
        type: 'buy'
    }
];
export const calculateStreak = (lastLogin: number): number => {
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    const diff = now - lastLogin;
    if (diff < oneDay) return 0;
    if (diff < 2 * oneDay) return 1;
    return -1;
};
export const getStreakBonus = (streak: number): string => {
    if (streak >= 7) return "MULTIPLIER x2.0";
    if (streak >= 3) return "MULTIPLIER x1.5";
    return "MULTIPLIER x1.0";
};
````

## File: utils/navigation.ts
````typescript
export const openExternalLink = (url: string) => {
    const tg = (window as any).Telegram?.WebApp;
    if (tg?.openLink) {
        tg.openLink(url);
    } else {
        const win = window.open(url, '_blank');
        if (win) win.focus();
    }
};
````

## File: utils/payments.ts
````typescript
import telegram, { webApp } from './telegramUtils';
export interface StoreItem {
    id: string;
    title: string;
    description: string;
    price: number;
    icon: string;
    effect_type: 'capital' | 'insurance' | 'time_warp';
    effect_value: number;
}
type PaymentTelemetryEvent = 'invoice_created' | 'invoice_paid' | 'invoice_failed';
export const STORE_ITEMS: StoreItem[] = [
    {
        id: 'capital_injection_small',
        title: 'Capital Seed',
        description: 'Injeção imediata de caixa para sua operação.',
        price: 50,
        icon: '💰',
        effect_type: 'capital',
        effect_value: 50000
    },
    {
        id: 'capital_injection_medium',
        title: 'Series A Funding',
        description: 'Rodada de investimento para escalar agressivamente.',
        price: 250,
        icon: '💵',
        effect_type: 'capital',
        effect_value: 500000
    },
    {
        id: 'crash_insurance',
        title: 'Burnout Therapy',
        description: 'Remove 100% do stress acumulado e recupera crash.',
        price: 100,
        icon: '💊',
        effect_type: 'insurance',
        effect_value: 100
    }
];
class PaymentService {
    private async trackTelemetry(
        eventType: PaymentTelemetryEvent,
        item: StoreItem,
        extra: Record<string, unknown> = {}
    ): Promise<void> {
        try {
            const tgUser = telegram.getUser();
            const payload = {
                eventType,
                itemId: item.id,
                itemTitle: item.title,
                itemPrice: item.price,
                userId: tgUser?.id ? String(tgUser.id) : 'anonymous',
                username: tgUser?.username || tgUser?.first_name || 'anonymous',
                source: tgUser ? 'telegram' : 'visitor',
                appVersion: import.meta.env.VITE_APP_VERSION || 'unknown',
                timestamp: Date.now(),
                ...extra
            };
            await fetch('/api/payment-telemetry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        } catch (error) {
            console.warn('[PaymentTelemetry] Event not persisted', eventType, error);
        }
    }
    async createInvoice(item: StoreItem): Promise<{ invoiceLink: string | null; errorMessage?: string; details?: unknown }> {
        try {
            const initData = webApp?.initData;
            const headers: Record<string, string> = { 'Content-Type': 'application/json' };
            if (initData) {
                headers['x-telegram-init-data'] = initData;
            }
            const response = await fetch('/api/create-invoice', {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    title: item.title,
                    description: item.description,
                    payload: item.id,
                    price: item.price,
                    initData: initData || undefined
                })
            });
            const data = await response.json();
            if (data.ok && data.invoiceLink) {
                return { invoiceLink: data.invoiceLink };
            }
            console.error('Falha ao criar invoice:', data);
            return {
                invoiceLink: null,
                errorMessage: data?.details?.description || data?.error || 'Falha ao criar invoice',
                details: data
            };
        } catch (error) {
            console.error('Erro de rede ao criar invoice:', error);
            return {
                invoiceLink: null,
                errorMessage: 'Erro de rede ao criar invoice',
                details: error
            };
        }
    }
    async purchaseItem(item: StoreItem, onSuccess: () => void, onError: (msg: string) => void) {
        if (!webApp) {
            void this.trackTelemetry('invoice_failed', item, {
                failureStage: 'open_invoice',
                invoiceStatus: 'webapp_missing',
                errorMessage: 'Telegram WebApp não detectado'
            });
            onError("Telegram WebApp não detectado.");
            return;
        }
        const invoiceResult = await this.createInvoice(item);
        const invoiceLink = invoiceResult.invoiceLink;
        if (!invoiceLink) {
            void this.trackTelemetry('invoice_failed', item, {
                failureStage: 'create_invoice',
                invoiceStatus: 'invoice_not_created',
                errorMessage: invoiceResult.errorMessage || 'Erro ao gerar link de pagamento'
            });
            onError("Erro ao gerar link de pagamento.");
            return;
        }
        void this.trackTelemetry('invoice_created', item, {
            invoiceStatus: 'created'
        });
        webApp.openInvoice(invoiceLink, (status: string) => {
            if (status === 'paid') {
                void this.trackTelemetry('invoice_paid', item, {
                    invoiceStatus: status
                });
                onSuccess();
            } else if (status === 'cancelled') {
                void this.trackTelemetry('invoice_failed', item, {
                    failureStage: 'checkout',
                    invoiceStatus: status,
                    errorMessage: 'Pagamento cancelado pelo usuário'
                });
                console.log('Pagamento cancelado pelo usuário');
            } else if (status === 'failed') {
                void this.trackTelemetry('invoice_failed', item, {
                    failureStage: 'checkout',
                    invoiceStatus: status,
                    errorMessage: 'Pagamento falhou'
                });
                onError("Pagamento falhou.");
            } else {
                void this.trackTelemetry('invoice_failed', item, {
                    failureStage: 'checkout',
                    invoiceStatus: status,
                    errorMessage: `Status inesperado: ${status}`
                });
                console.log('Status do pagamento:', status);
            }
        });
    }
}
export const paymentService = new PaymentService();
````

## File: utils/resetUserData.ts
````typescript
import telegram from './telegramUtils';
import { INITIAL_GAME_STATE } from '../constants';
import { GameState } from '../types';
export const resetUserData = async (userId: string | number): Promise<boolean> => {
  try {
    const key = `ceo_state_${userId}`;
    try {
      await telegram.cloudStorage.removeItem(key);
    } catch (e) {
      console.warn('Erro ao limpar CloudStorage:', e);
    }
    try {
      localStorage.removeItem(key);
      localStorage.removeItem('ceo_game_state');
      localStorage.removeItem('ceo_streak');
      localStorage.removeItem('ceo_daily_tasks');
      localStorage.removeItem('ceo_task_date');
    } catch (e) {
      console.warn('Erro ao limpar LocalStorage:', e);
    }
    return true;
  } catch (error) {
    console.error('Erro ao resetar dados do usuário:', error);
    return false;
  }
};
export const createFreshGameState = (user?: { id: string | number; name?: string; username?: string; type?: 'telegram' | 'visitor' }): GameState => {
  return {
    ...INITIAL_GAME_STATE,
    meta: {
      ...INITIAL_GAME_STATE.meta,
      user: user ? {
        id: user.id,
        name: user.name || 'Operador',
        username: user.username,
        type: user.type || 'telegram'
      } : undefined,
      start_time: Date.now()
    }
  };
};
export const saveFreshState = async (userId: string | number, user?: { id: string | number; name?: string; username?: string; type?: 'telegram' | 'visitor' }): Promise<boolean> => {
  try {
    const freshState = createFreshGameState(user);
    const key = `ceo_state_${userId}`;
    const data = JSON.stringify(freshState);
    try {
      await telegram.cloudStorage.setItem(key, data);
    } catch (e) {
      console.warn('Erro ao salvar no CloudStorage:', e);
    }
    try {
      localStorage.setItem(key, data);
      localStorage.setItem('ceo_game_state', data);
    } catch (e) {
      console.warn('Erro ao salvar no LocalStorage:', e);
    }
    return true;
  } catch (error) {
    console.error('Erro ao salvar estado limpo:', error);
    return false;
  }
};
````

## File: utils/telegramUtils.ts
````typescript
declare global {
    interface Window {
        Telegram?: {
            WebApp: {
                initData: string;
                initDataUnsafe: {
                    user?: {
                        id: number;
                        first_name: string;
                        last_name?: string;
                        username?: string;
                        language_code?: string;
                    };
                    start_param?: string;
                };
                version: string;
                platform: string;
                colorScheme: 'light' | 'dark';
                themeParams: Record<string, string>;
                isExpanded: boolean;
                viewportHeight: number;
                viewportStableHeight: number;
                headerColor: string;
                backgroundColor: string;
                isClosingConfirmationEnabled: boolean;
                BackButton: {
                    isVisible: boolean;
                    show: () => void;
                    hide: () => void;
                    onClick: (callback: () => void) => void;
                    offClick: (callback: () => void) => void;
                };
                MainButton: {
                    text: string;
                    color: string;
                    textColor: string;
                    isVisible: boolean;
                    isActive: boolean;
                    isProgressVisible: boolean;
                    setText: (text: string) => void;
                    show: () => void;
                    hide: () => void;
                    enable: () => void;
                    disable: () => void;
                    showProgress: (leaveActive?: boolean) => void;
                    hideProgress: () => void;
                    onClick: (callback: () => void) => void;
                    offClick: (callback: () => void) => void;
                };
                SettingsButton: {
                    isVisible: boolean;
                    show: () => void;
                    hide: () => void;
                    onClick: (callback: () => void) => void;
                    offClick: (callback: () => void) => void;
                };
                HapticFeedback: {
                    impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
                    notificationOccurred: (type: 'error' | 'success' | 'warning') => void;
                    selectionChanged: () => void;
                };
                CloudStorage: {
                    setItem: (key: string, value: string, callback?: (error: Error | null, stored: boolean) => void) => void;
                    getItem: (key: string, callback: (error: Error | null, value: string) => void) => void;
                    getItems: (keys: string[], callback: (error: Error | null, values: Record<string, string>) => void) => void;
                    removeItem: (key: string, callback?: (error: Error | null, removed: boolean) => void) => void;
                    removeItems: (keys: string[], callback?: (error: Error | null, removed: boolean) => void) => void;
                    getKeys: (callback: (error: Error | null, keys: string[]) => void) => void;
                };
                ready: () => void;
                expand: () => void;
                close: () => void;
                enableClosingConfirmation: () => void;
                disableClosingConfirmation: () => void;
                setHeaderColor: (color: string) => void;
                setBackgroundColor: (color: string) => void;
                setBottomBarColor: (color: string) => void;
                openLink: (url: string, options?: { try_instant_view?: boolean }) => void;
                openTelegramLink: (url: string) => void;
                shareToStory: (mediaUrl: string, params?: { text?: string; widget_link?: { url: string; name?: string } }) => void;
                showPopup: (params: { title?: string; message: string; buttons?: Array<{ id?: string; type?: string; text?: string }> }, callback?: (buttonId: string) => void) => void;
                showAlert: (message: string, callback?: () => void) => void;
                showConfirm: (message: string, callback?: (confirmed: boolean) => void) => void;
                requestContact: (callback: (shared: boolean) => void) => void;
                onEvent: (eventType: string, callback: () => void) => void;
                offEvent: (eventType: string, callback: () => void) => void;
                sendData: (data: string) => void;
                openInvoice: (url: string, callback?: (status: string) => void) => void;
            };
        };
    }
}
export const webApp = typeof window !== 'undefined' ? window.Telegram?.WebApp : null;
const parseVersion = (version: string): number[] => {
    return version
        .split('.')
        .map(part => Number.parseInt(part, 10))
        .map(part => (Number.isNaN(part) ? 0 : part));
};
const isVersionAtLeast = (currentVersion: string, requiredVersion: string): boolean => {
    const current = parseVersion(currentVersion);
    const required = parseVersion(requiredVersion);
    const maxLength = Math.max(current.length, required.length);
    for (let index = 0; index < maxLength; index += 1) {
        const currentPart = current[index] ?? 0;
        const requiredPart = required[index] ?? 0;
        if (currentPart > requiredPart) return true;
        if (currentPart < requiredPart) return false;
    }
    return true;
};
const supportsCloudStorage = (): boolean => {
    if (!webApp?.CloudStorage) return false;
    const currentVersion = webApp.version || '0.0';
    return isVersionAtLeast(currentVersion, '6.9');
};
export const cloudStorage = {
    setItem: (key: string, value: string): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            if (!supportsCloudStorage()) {
                try {
                    localStorage.setItem(key, value);
                    resolve(true);
                } catch (e) {
                    reject(e);
                }
                return;
            }
            try {
                webApp.CloudStorage.setItem(key, value, (error, stored) => {
                    if (error) {
                        try {
                            localStorage.setItem(key, value);
                            resolve(true);
                        } catch (e) {
                            reject(error);
                        }
                    } else {
                        resolve(stored);
                    }
                });
            } catch (error) {
                try {
                    localStorage.setItem(key, value);
                    resolve(true);
                } catch (fallbackError) {
                    reject(error ?? fallbackError);
                }
            }
        });
    },
    getItem: (key: string): Promise<string | null> => {
        return new Promise((resolve, reject) => {
            if (!supportsCloudStorage()) {
                resolve(localStorage.getItem(key));
                return;
            }
            try {
                webApp.CloudStorage.getItem(key, (error, value) => {
                    if (error) {
                        resolve(localStorage.getItem(key));
                    } else {
                        resolve(value || null);
                    }
                });
            } catch (error) {
                resolve(localStorage.getItem(key));
            }
        });
    },
    removeItem: (key: string): Promise<boolean> => {
        return new Promise((resolve) => {
            if (!supportsCloudStorage()) {
                localStorage.removeItem(key);
                resolve(true);
                return;
            }
            try {
                webApp.CloudStorage.removeItem(key, (error, removed) => {
                    if (error) {
                        localStorage.removeItem(key);
                    }
                    resolve(removed ?? true);
                });
            } catch (error) {
                localStorage.removeItem(key);
                resolve(true);
            }
        });
    }
};
export const backButton = {
    show: () => {
        webApp?.BackButton?.show();
    },
    hide: () => {
        webApp?.BackButton?.hide();
    },
    onClick: (callback: () => void) => {
        webApp?.BackButton?.onClick(callback);
    },
    offClick: (callback: () => void) => {
        webApp?.BackButton?.offClick(callback);
    },
    isVisible: () => webApp?.BackButton?.isVisible ?? false
};
export const settingsButton = {
    show: () => {
        webApp?.SettingsButton?.show();
    },
    hide: () => {
        webApp?.SettingsButton?.hide();
    },
    onClick: (callback: () => void) => {
        webApp?.SettingsButton?.onClick(callback);
    },
    offClick: (callback: () => void) => {
        webApp?.SettingsButton?.offClick(callback);
    }
};
export const shareToStory = (mediaUrl: string, text?: string, widgetLink?: { url: string; name?: string }) => {
    if (!webApp?.shareToStory) {
        console.warn('Story sharing not available');
        return false;
    }
    webApp.shareToStory(mediaUrl, {
        text,
        widget_link: widgetLink
    });
    return true;
};
export const hapticFeedback = {
    impact: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft' = 'medium') => {
        webApp?.HapticFeedback?.impactOccurred(style);
    },
    notification: (type: 'error' | 'success' | 'warning') => {
        webApp?.HapticFeedback?.notificationOccurred(type);
    },
    selection: () => {
        webApp?.HapticFeedback?.selectionChanged();
    }
};
export const showPopup = (params: {
    title?: string;
    message: string;
    buttons?: Array<{ id?: string; type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive'; text?: string }>;
}): Promise<string> => {
    return new Promise((resolve) => {
        if (!webApp?.showPopup) {
            alert(params.message);
            resolve('ok');
            return;
        }
        webApp.showPopup(params, (buttonId) => {
            resolve(buttonId);
        });
    });
};
export const showAlert = (message: string): Promise<void> => {
    return new Promise((resolve) => {
        if (!webApp?.showAlert) {
            alert(message);
            resolve();
            return;
        }
        webApp.showAlert(message, () => {
            resolve();
        });
    });
};
export const showConfirm = (message: string): Promise<boolean> => {
    return new Promise((resolve) => {
        if (!webApp?.showConfirm) {
            resolve(confirm(message));
            return;
        }
        webApp.showConfirm(message, (confirmed) => {
            resolve(confirmed);
        });
    });
};
export const openLink = (url: string, tryInstantView = false) => {
    if (webApp?.openLink) {
        webApp.openLink(url, { try_instant_view: tryInstantView });
    } else {
        window.open(url, '_blank');
    }
};
export const openTelegramLink = (url: string) => {
    if (webApp?.openTelegramLink) {
        webApp.openTelegramLink(url);
    } else {
        window.open(url, '_blank');
    }
};
export const getThemeParams = () => webApp?.themeParams ?? {};
export const getColorScheme = () => webApp?.colorScheme ?? 'dark';
export const isLowPerformanceDevice = (): boolean => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('android')) {
        const match = userAgent.match(/android (\d+)/);
        if (match && parseInt(match[1]) < 10) {
            return true;
        }
    }
    return false;
};
export const expand = () => {
    webApp?.expand();
};
export const close = () => {
    webApp?.close();
};
export const enableClosingConfirmation = () => {
    webApp?.enableClosingConfirmation();
};
export const disableClosingConfirmation = () => {
    webApp?.disableClosingConfirmation();
};
export const ready = () => {
    webApp?.ready();
};
export const getUser = () => webApp?.initDataUnsafe?.user ?? null;
export const getStartParam = () => webApp?.initDataUnsafe?.start_param ?? null;
export const getPlatform = () => webApp?.platform ?? 'unknown';
export const getVersion = () => webApp?.version ?? '0.0';
export const mainButton = {
    setText: (text: string) => {
        if (webApp?.MainButton) {
            webApp.MainButton.setText(text);
        }
    },
    show: () => {
        webApp?.MainButton?.show();
    },
    hide: () => {
        webApp?.MainButton?.hide();
    },
    enable: () => {
        webApp?.MainButton?.enable();
    },
    disable: () => {
        webApp?.MainButton?.disable();
    },
    showProgress: (leaveActive = false) => {
        webApp?.MainButton?.showProgress(leaveActive);
    },
    hideProgress: () => {
        webApp?.MainButton?.hideProgress();
    },
    onClick: (callback: () => void) => {
        webApp?.MainButton?.onClick(callback);
    },
    offClick: (callback: () => void) => {
        webApp?.MainButton?.offClick(callback);
    }
};
export default {
    cloudStorage,
    backButton,
    settingsButton,
    hapticFeedback,
    mainButton,
    shareToStory,
    showPopup,
    showAlert,
    showConfirm,
    openLink,
    openTelegramLink,
    getThemeParams,
    getColorScheme,
    isLowPerformanceDevice,
    expand,
    close,
    ready,
    getUser,
    getStartParam,
    getPlatform,
    getVersion,
    enableClosingConfirmation,
    disableClosingConfirmation
};
````

## File: utils/tracing.ts
````typescript
import { trace, Span } from '@opentelemetry/api';
const tracer = trace.getTracer('ceo-escalavel-tracer');
export async function withSpan<T>(
    name: string,
    operation: (span: Span) => Promise<T>,
    attributes?: Record<string, string | number | boolean>
): Promise<T> {
    const span = tracer.startSpan(name);
    if (attributes) {
        span.setAttributes(attributes);
    }
    try {
        return await operation(span);
    } catch (error) {
        span.recordException(error as Error);
        throw error;
    } finally {
        span.end();
    }
}
export function withSpanSync<T>(
    name: string,
    operation: (span: Span) => T,
    attributes?: Record<string, string | number | boolean>
): T {
    const span = tracer.startSpan(name);
    if (attributes) {
        span.setAttributes(attributes);
    }
    try {
        return operation(span);
    } catch (error) {
        span.recordException(error as Error);
        throw error;
    } finally {
        span.end();
    }
}
````

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local
.env

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
output/
package-lock.json
````

## File: App.tsx
````typescript
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { GameState, View, Agent, ManualAction } from './types';
import { INITIAL_GAME_STATE, STATUS_MILESTONES } from './constants';
import {
  calculateTotalPPS,
  calculateAgentCost,
  updateStatus,
  isActionAutomated,
  formatHours,
  checkSingularity,
  calculateManualGain,
  calculateValuation,
  checkFinalVictory,
  canPrestige
} from './engine/gameLogic';
import { DEFAULT_REGIME_ID, evaluateMetaGovernor, getRegimeConfig } from './engine/regimes';
import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import Operation from './components/Operation';
import AgentStore from './components/AgentStore';
import XRay from './components/XRay';
import SolutionsTerminal from './components/SolutionsTerminal';
import OfflineEarningsModal from './components/OfflineEarningsModal';
import SingularityCertificate from './components/SingularityCertificate';
import IntroOverlay from './components/IntroOverlay';
import AgentDetailsModal from './components/AgentDetailsModal';
import WithdrawModal from './components/WithdrawModal';
import PrestigeModal from './components/PrestigeModal';
import { StoreModal } from './components/StoreModal';
import { DailyTasksModal } from './components/DailyTasksModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { ReferralModal } from './components/ReferralModal';
import NeoMintModal from './components/NeoMintModal';
import { playAlert, playNotification } from './engine/soundEffects';
import { useAuth } from './hooks/useAuth';
import telegram from './utils/telegramUtils';
import { DailyTask, DayStreak, DAILY_TASKS, calculateStreak } from './utils/dailyTasks';
import { CloudSaveService } from './utils/cloudSave';
import { resetUserData, saveFreshState } from './utils/resetUserData';
const CRASH_DURATION_MS = 12000;
const CLICK_THRESHOLD_MS = 100;
const App: React.FC = () => {
  const { user, loading: authLoading, initialData } = useAuth();
  const [offlineData, setOfflineData] = useState<{ capital: number; seconds: number } | null>(null);
  const [showSingularity, setShowSingularity] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showStore, setShowStore] = useState(false);
  const [showDailyTasks, setShowDailyTasks] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showNeoMint, setShowNeoMint] = useState(false);
  const [showPrestige, setShowPrestige] = useState(false);
  const [showReferral, setShowReferral] = useState(false);
  const [dailyTasks, setDailyTasks] = useState<DailyTask[]>(DAILY_TASKS);
  const [streak, setStreak] = useState<DayStreak>({ current: 0, lastLoginDate: 0 });
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);
  const [showIntro, setShowIntro] = useState(false);
  const lastClickTime = useRef<number>(0);
  const lastSaveTime = useRef<number>(0);
  const [gameState, setGameState] = useState<GameState>(INITIAL_GAME_STATE);
  const [currentView, setCurrentView] = useState<View>('operacao');
  const [toast, setToast] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);
  const gameStateRef = useRef(gameState);
  const viewRef = useRef(currentView);
  const introRef = useRef(showIntro);
  const modalRef = useRef({
    showStore,
    showNeoMint,
    showDailyTasks,
    showLeaderboard,
    showWithdraw,
    showPrestige,
    showSingularity,
    showReferral
  });
  useEffect(() => {
    if (currentView !== 'operacao') {
      telegram.backButton.show();
      const handleBack = () => setCurrentView('operacao');
      telegram.backButton.onClick(handleBack);
      return () => {
        telegram.backButton.offClick(handleBack);
      };
    } else {
      telegram.backButton.hide();
    }
  }, [currentView]);
  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);
  useEffect(() => {
    viewRef.current = currentView;
  }, [currentView]);
  useEffect(() => {
    introRef.current = showIntro;
  }, [showIntro]);
  useEffect(() => {
    modalRef.current = {
      showStore,
      showNeoMint,
      showDailyTasks,
      showLeaderboard,
      showWithdraw,
      showPrestige,
      showSingularity,
      showReferral
    };
  }, [showDailyTasks, showLeaderboard, showNeoMint, showPrestige, showSingularity, showStore, showWithdraw, showReferral]);
  useEffect(() => {
    telegram.settingsButton.show();
    const handleSettings = () => {
      telegram.showPopup({
        title: "Protocolo Agente Flow",
        message: `Versão ${import.meta.env.VITE_APP_VERSION || '2.5'}. Para suporte ou diagnóstico da sua infraestrutura real, fale com a NEØFLW.`,
        buttons: [
          { id: "consult", type: "default", text: "Diagnóstico Real" },
          { id: "close", type: "close", text: "Voltar ao Console" }
        ]
      }).then((buttonId) => {
        if (buttonId === "consult") {
          telegram.openTelegramLink("https://t.me/neomello");
        }
      });
    };
    telegram.settingsButton.onClick(handleSettings);
    return () => telegram.settingsButton.offClick(handleSettings);
  }, []);
  useEffect(() => {
    const handleOpenMint = () => setShowNeoMint(true);
    const handleOpenTasks = () => setShowDailyTasks(true);
    const handleOpenLeaderboard = () => setShowLeaderboard(true);
    const handleOpenReferral = () => setShowReferral(true);
    window.addEventListener('open-mint', handleOpenMint);
    window.addEventListener('open-tasks', handleOpenTasks);
    window.addEventListener('open-leaderboard', handleOpenLeaderboard);
    window.addEventListener('open-referral', handleOpenReferral);
    return () => {
      window.removeEventListener('open-mint', handleOpenMint);
      window.removeEventListener('open-tasks', handleOpenTasks);
      window.removeEventListener('open-leaderboard', handleOpenLeaderboard);
      window.removeEventListener('open-referral', handleOpenReferral);
    };
  }, []);
  useEffect(() => {
    const savedStreakStr = localStorage.getItem('ceo_streak');
    const savedTasksStr = localStorage.getItem('ceo_daily_tasks');
    const lastLogin = savedStreakStr ? JSON.parse(savedStreakStr).lastLoginDate : 0;
    const newStreakValue = calculateStreak(lastLogin);
    let currentStreak = savedStreakStr ? JSON.parse(savedStreakStr) : { current: 1, lastLoginDate: Date.now() };
    if (newStreakValue === 1) {
      currentStreak = { current: currentStreak.current + 1, lastLoginDate: Date.now() };
      showToast(`STREAK AUMENTOU! ${currentStreak.current} DIAS 🔥`);
    } else if (newStreakValue === -1) {
      currentStreak = { current: 1, lastLoginDate: Date.now() };
      showToast(`STREAK PERDIDA! REINICIANDO...`);
    } else {
      currentStreak.lastLoginDate = Date.now();
    }
    setStreak(currentStreak);
    localStorage.setItem('ceo_streak', JSON.stringify(currentStreak));
    const today = new Date().toDateString();
    const lastTaskDate = localStorage.getItem('ceo_task_date');
    if (lastTaskDate !== today) {
      setDailyTasks(DAILY_TASKS.map(t => ({ ...t, current: 0, completed: false })));
      localStorage.setItem('ceo_task_date', today);
    } else if (savedTasksStr) {
      setDailyTasks(JSON.parse(savedTasksStr));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('ceo_daily_tasks', JSON.stringify(dailyTasks));
  }, [dailyTasks]);
  useEffect(() => {
    if (!gameState.meta.user?.id) return;
    const syncInterval = setInterval(async () => {
      await CloudSaveService.save(gameState.meta.user!.id.toString(), gameState);
    }, 60000);
    return () => clearInterval(syncInterval);
  }, [gameState.meta.user?.id, gameState]);
  useEffect(() => {
    localStorage.setItem('ceo_game_state', JSON.stringify(gameState));
  }, [gameState]);
  useEffect(() => {
    const handleOpenStore = () => setShowStore(true);
    window.addEventListener('open-store', handleOpenStore);
    return () => window.removeEventListener('open-store', handleOpenStore);
  }, []);
  const showToast = useCallback((message: string, duration = 5000) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast(message);
    toastTimerRef.current = window.setTimeout(() => {
      setToast(null);
      toastTimerRef.current = null;
    }, duration);
  }, []);
  const [visualAlert, setVisualAlert] = useState(false);
  const triggerVisualAlert = useCallback(() => {
    setVisualAlert(true);
    setTimeout(() => setVisualAlert(false), 800);
  }, []);
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('sound_enabled');
    return saved === null ? true : saved === 'true';
  });
  useEffect(() => {
    if (initialData) {
      setGameState(prev => ({ ...prev, ...initialData }));
      const startParam = telegram.getStartParam();
      const referralProcessed = localStorage.getItem('referral_processed');
      if (startParam && !referralProcessed) {
        setGameState(prev => ({
          ...prev,
          resources: {
            ...prev.resources,
            capital: prev.resources.capital + 1000
          },
          meta: {
            ...prev.meta,
            capital_total_gerado: prev.meta.capital_total_gerado + 1000
          }
        }));
        localStorage.setItem('referral_processed', 'true');
        showToast("CONVITE ACEITO: +$1.000 de capital seed! 🚀");
        telegram.hapticFeedback.notification('success');
      }
    }
  }, [initialData, showToast]);
  const persistState = useCallback((state: GameState) => {
    const now = Date.now();
    if (now - lastSaveTime.current < 5000) return;
    lastSaveTime.current = now;
    import('./utils/tracing').then(({ withSpanSync }) => {
      withSpanSync('game.persist_state', (span) => {
        const data = JSON.stringify(state);
        telegram.cloudStorage.setItem(`ceo_state_${user?.id}`, data);
        span.setAttributes({
          'user.id': user?.id || 'anonymous',
          'game.valuation': calculateValuation(state).toFixed(2),
          'payload.size': data.length
        });
      });
    });
  }, [user?.id]);
  const triggerHaptic = useCallback((type: 'impact' | 'error' | 'success') => {
    if (type === 'impact') telegram.hapticFeedback.impact('medium');
    else if (type === 'error') telegram.hapticFeedback.notification('error');
    else if (type === 'success') telegram.hapticFeedback.notification('success');
  }, []);
  useEffect(() => {
    if (user) {
      setGameState(prev => ({ ...prev, meta: { ...prev.meta, user } }));
    }
  }, [user]);
  useEffect(() => {
    if (authLoading) return;
    const interval = setInterval(() => {
      setGameState(prev => {
        const now = Date.now();
        let {
          is_crashed,
          crash_end_time,
          singularity_reached,
          event_social_media_triggered,
          event_traffic_loss_triggered,
          event_support_backlog_triggered,
          event_sdr_fatigue_triggered,
          event_infra_downtime_triggered
        } = prev.meta;
        let stress = prev.resources.stress;
        let capital = prev.resources.capital;
        const pps = calculateTotalPPS(
          prev.agents,
          prev.inventory,
          prev.meta.prestige_level || 0,
          prev.meta.active_regime
        );
        const newCapital = capital + pps;
        const newTotalCapital = prev.meta.capital_total_gerado + pps;
        if (!event_social_media_triggered && newTotalCapital >= 150) {
          event_social_media_triggered = true;
          capital = Math.max(0, capital - 50);
          stress = Math.min(100, stress + 25);
          triggerHaptic('error');
          triggerVisualAlert();
          showToast("VULNERABILIDADE: Social Media em hiato. -$50.", 8000);
        }
        if (!event_support_backlog_triggered && newTotalCapital >= 800) {
          const hasSupport = prev.inventory.some(i => i.id === 'agent_support_v1');
          if (!hasSupport) {
            event_support_backlog_triggered = true;
            capital = Math.max(0, capital - 150);
            stress = Math.min(100, stress + 30);
            triggerHaptic('error');
            triggerVisualAlert();
            showToast("BACKLOG: Suporte manual colapsou. -$150.", 8000);
          }
        }
        if (!event_sdr_fatigue_triggered && newTotalCapital >= 1500) {
          const hasSDR = prev.inventory.some(i => i.id === 'agent_sdr_v1');
          if (!hasSDR) {
            event_sdr_fatigue_triggered = true;
            capital = Math.max(0, capital - 400);
            triggerHaptic('error');
            triggerVisualAlert();
            showToast("FATIGA: Prospecção manual parou. -$400.", 8000);
          }
        }
        if (!event_traffic_loss_triggered && newTotalCapital >= 3000) {
          const hasTraffic = prev.inventory.some(i => i.id === 'agent_traffic_v1');
          if (!hasTraffic) {
            event_traffic_loss_triggered = true;
            capital = Math.max(0, capital - 1000);
            triggerHaptic('error');
            triggerVisualAlert();
            showToast("PREJUÍZO: Ads sem gestão. Verba drenada. -$1000.", 9000);
          }
        }
        if (!event_infra_downtime_triggered && newTotalCapital >= 5000) {
          const hasInfra = prev.inventory.some(i => i.id === 'agent_engineer_v1');
          if (!hasInfra) {
            event_infra_downtime_triggered = true;
            capital = Math.max(0, capital - 2500);
            triggerHaptic('error');
            triggerVisualAlert();
            showToast("DOWNTIME: Bug crítico na infra manual. -$2500.", 10000);
          }
        }
        if (is_crashed && now >= crash_end_time) {
          is_crashed = false;
          stress = 20;
          triggerHaptic('success');
        }
        const statusMultiplier = (STATUS_MILESTONES.findIndex(m => m.label === prev.meta.status) + 1) * 0.12;
        const agentRelief = prev.inventory.reduce((acc, item) => acc + (item.quantity * 0.1), 0.4 + statusMultiplier);
        stress = Math.max(0, stress - agentRelief);
        if (!is_crashed && stress >= 100) {
          is_crashed = true;
          crash_end_time = now + CRASH_DURATION_MS;
          triggerHaptic('error');
          triggerVisualAlert();
          if (soundEnabled) playAlert();
        }
        const currentValuation = calculateValuation({
          ...prev,
          resources: { ...prev.resources, capital: newCapital, receita_passiva: pps },
          meta: { ...prev.meta, capital_total_gerado: newTotalCapital }
        });
        if (!singularity_reached && checkSingularity(prev)) {
          singularity_reached = true;
          setShowSingularity(true);
        }
        const currentStateForCheck = {
          ...prev,
          resources: { ...prev.resources, capital: newCapital, receita_passiva: pps },
          meta: { ...prev.meta, capital_total_gerado: newTotalCapital }
        };
        const finalVictory = checkFinalVictory(currentStateForCheck);
        if (finalVictory && !prev.meta.final_victory_reached) {
          singularity_reached = true;
        }
        if (canPrestige(currentStateForCheck) && currentValuation >= 500000 && !prev.meta.final_victory_reached) {
          setTimeout(() => {
            setShowPrestige(true);
          }, 2000);
        }
        const finalStress = Math.min(100, stress);
        const currentRegime = prev.meta.active_regime || DEFAULT_REGIME_ID;
        const proposedRegime = evaluateMetaGovernor(currentStateForCheck);
        const nextRegime = proposedRegime ?? currentRegime;
        let governanceHistory = prev.meta.governance_history ? [...prev.meta.governance_history] : [currentRegime];
        if (proposedRegime) {
          governanceHistory = [...governanceHistory, proposedRegime].slice(-10);
          const regimeInfo = getRegimeConfig(proposedRegime);
          showToast(`Governança: ${regimeInfo.id} · ${regimeInfo.description}`, 7000);
          if (soundEnabled) playNotification();
        }
        const stressFlag = finalStress >= 85 ? 'stress:critical' : 'stress:stable';
        const normalizedFlags = (prev.meta.regime_flags ?? []).filter(flag => !flag.startsWith('stress:') && !flag.startsWith('regime:'));
        const regimeBadge = `regime:${nextRegime}`;
        const regimeFlags = [...normalizedFlags, stressFlag, regimeBadge].slice(-5);
        const newState = {
          ...prev,
          resources: {
            ...prev.resources,
            capital: capital + pps,
            receita_passiva: pps,
            stress: finalStress
          },
          meta: {
            ...prev.meta,
            capital_total_gerado: newTotalCapital,
            status: updateStatus(currentValuation),
            snapshot_unlocked: currentValuation >= 250,
            is_crashed,
            crash_end_time,
            singularity_reached,
            final_victory_reached: finalVictory || prev.meta.final_victory_reached,
            event_social_media_triggered,
            event_traffic_loss_triggered,
            event_support_backlog_triggered,
            event_sdr_fatigue_triggered,
            event_infra_downtime_triggered,
            active_regime: nextRegime,
            governance_history: governanceHistory,
            regime_flags: regimeFlags
          },
          lastTick: now
        };
        persistState(newState);
        return newState;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [authLoading, soundEnabled, triggerHaptic, persistState, showToast]);
  const buyAgent = useCallback((agent: Agent) => {
    const currentOwned = gameState.inventory.find(i => i.id === agent.id)?.quantity || 0;
    const cost = calculateAgentCost(agent.custo_base, currentOwned, gameState.meta.prestige_level || 0);
    if (gameState.resources.capital >= cost) {
      import('./utils/tracing').then(({ withSpanSync }) => {
        withSpanSync('game.buy_agent', (span) => {
          span.setAttributes({
            'agent.id': agent.id,
            'agent.cost': cost,
            'agent.new_quantity': currentOwned + 1
          });
          setGameState(prev => {
            const newInventory = [...prev.inventory];
            const index = newInventory.findIndex(i => i.id === agent.id);
            if (index >= 0) newInventory[index].quantity += 1;
            else newInventory.push({ id: agent.id, quantity: 1 });
            return {
              ...prev,
              resources: {
                ...prev.resources,
                capital: prev.resources.capital - cost,
                horas_manuais_eliminadas: prev.resources.horas_manuais_eliminadas + (agent.economia_diaria_minutos / 60)
              },
              inventory: newInventory
            };
          });
        });
      });
      triggerHaptic('success');
      showToast(`ROI: +${agent.economia_diaria_minutos}min/dia recuperados.`);
      return true;
    }
    return false;
  }, [gameState.resources.capital, gameState.inventory, triggerHaptic, showToast]);
  useEffect(() => {
    if (selectedAgentId && currentView === 'agentes') {
      const agent = gameState.agents.find(a => a.id === selectedAgentId);
      if (agent) {
        const owned = gameState.inventory.find(i => i.id === agent.id)?.quantity || 0;
        const cost = calculateAgentCost(agent.custo_base, owned, gameState.meta.prestige_level || 0);
        const canAfford = gameState.resources.capital >= cost;
        telegram.mainButton.setText(canAfford ? `INVESTIR $${cost.toLocaleString()}` : `CAPITAL INSUFICIENTE ($${cost.toLocaleString()})`);
        const handleMainClick = () => {
          if (buyAgent(agent)) {
            setSelectedAgentId(null);
            setDailyTasks(prev => prev.map(t =>
              t.id === 'task_agent' && !t.completed
                ? { ...t, current: Math.min(t.target, t.current + 1) }
                : t
            ));
          }
        };
        telegram.mainButton.show();
        telegram.mainButton.onClick(handleMainClick);
        return () => {
          telegram.mainButton.offClick(handleMainClick);
          telegram.mainButton.hide();
        };
      }
    } else {
      telegram.mainButton.hide();
    }
  }, [selectedAgentId, currentView, gameState.resources.capital, gameState.agents, gameState.inventory, buyAgent]);
  const handleManualAction = (action: ManualAction) => {
    if (gameState.meta.is_crashed) return;
    const now = Date.now();
    if (now - lastClickTime.current < CLICK_THRESHOLD_MS) return;
    lastClickTime.current = now;
    setDailyTasks(prev => prev.map(t =>
      t.id === 'task_clicks' && !t.completed
        ? { ...t, current: Math.min(t.target, t.current + 1) }
        : t
    ));
    import('./utils/tracing').then(({ withSpanSync }) => {
      withSpanSync('game.manual_action', (span) => {
        const scaledGain = calculateManualGain(
          action,
          gameState.meta.capital_total_gerado,
          gameState.meta.prestige_level || 0,
          gameState.meta.active_regime
        );
        span.setAttributes({
          'action.id': action.id,
          'action.gain': scaledGain,
          'action.stress': action.stress_gain
        });
        triggerHaptic('impact');
        setGameState(prev => ({
          ...prev,
          resources: {
            ...prev.resources,
            capital: prev.resources.capital + scaledGain,
            stress: prev.resources.stress + action.stress_gain
          },
          meta: { ...prev.meta, capital_total_gerado: prev.meta.capital_total_gerado + scaledGain }
        }));
      });
    });
  };
  const resetGame = useCallback(async () => {
    const confirmed = await telegram.showConfirm("Você deseja reiniciar sua operação? Você manterá seu nome e conquistas, mas o capital e agentes serão resetados para uma nova escala.");
    if (confirmed) {
      const freshState = {
        ...INITIAL_GAME_STATE,
        meta: {
          ...INITIAL_GAME_STATE.meta,
          user: gameState.meta.user,
          start_time: Date.now()
        }
      };
      setGameState(freshState);
      setShowSingularity(false);
      if (user?.id) {
        await resetUserData(user.id);
        await saveFreshState(user.id, gameState.meta.user);
      }
      showToast("SISTEMA RESETADO. INICIANDO NOVA ESCALA...");
    }
  }, [gameState.meta.user, user?.id, showToast]);
  const handlePrestige = useCallback(async () => {
    const currentPrestige = gameState.meta.prestige_level || 0;
    const confirmed = await telegram.showConfirm(`Ativar Prestígio? Você resetará seu progresso mas ganhará +${((currentPrestige + 1) * 10).toFixed(0)}% de bônus permanente em todas as próximas jornadas.`);
    if (confirmed) {
      const freshState = {
        ...INITIAL_GAME_STATE,
        meta: {
          ...INITIAL_GAME_STATE.meta,
          user: gameState.meta.user,
          start_time: Date.now(),
          prestige_level: currentPrestige + 1,
          final_victory_reached: gameState.meta.final_victory_reached || false
        }
      };
      setGameState(freshState);
      setShowPrestige(false);
      if (user?.id) {
        await saveFreshState(user.id, gameState.meta.user);
      }
      showToast(`PRESTÍGIO ATIVADO! Bônus permanente: +${((currentPrestige + 1) * 10).toFixed(0)}%`);
    }
  }, [gameState.meta.user, gameState.meta.prestige_level, gameState.meta.final_victory_reached, user?.id, showToast]);
  useEffect(() => {
    (window as any).resetAgentFlow = async () => {
      if (!user?.id) {
        console.error('Usuário não identificado');
        return;
      }
      const confirmed = confirm('⚠️ ATENÇÃO: Isso vai ZERAR TODOS os seus dados do jogo. Deseja continuar?');
      if (!confirmed) return;
      try {
        await resetUserData(user.id);
        await saveFreshState(user.id, gameState.meta.user);
        const freshState = {
          ...INITIAL_GAME_STATE,
          meta: {
            ...INITIAL_GAME_STATE.meta,
            user: gameState.meta.user,
            start_time: Date.now()
          }
        };
        setGameState(freshState);
        showToast("DADOS RESETADOS COMPLETAMENTE. RECARREGUE A PÁGINA.");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (error) {
        console.error('Erro ao resetar:', error);
        showToast("ERRO AO RESETAR. TENTE NOVAMENTE.");
      }
    };
    console.log('%c🔄 Reset disponível:', 'color: #ff00ff; font-weight: bold;', 'Digite resetAgentFlow() no console para resetar seus dados');
  }, [user?.id, gameState.meta.user, showToast]);
  useEffect(() => {
    const appWindow = window as any;
    appWindow.render_game_to_text = () => {
      const snapshot = gameStateRef.current;
      const currentViewSnapshot = viewRef.current;
      const automatedActions = snapshot.manualActions.filter(action => isActionAutomated(action.id, snapshot.inventory, snapshot.agents)).length;
      const nextUnlock = [...snapshot.agents]
        .sort((a, b) => a.desbloqueia_em_capital_total - b.desbloqueia_em_capital_total)
        .find(agent => snapshot.meta.capital_total_gerado < agent.desbloqueia_em_capital_total);
      const topUnlocked = snapshot.agents
        .filter(agent => snapshot.meta.capital_total_gerado >= agent.desbloqueia_em_capital_total)
        .slice(0, 3)
        .map(agent => {
          const owned = snapshot.inventory.find(item => item.id === agent.id)?.quantity || 0;
          return {
            id: agent.id,
            name: agent.nome,
            owned,
            nextCost: calculateAgentCost(agent.custo_base, owned, snapshot.meta.prestige_level || 0)
          };
        });
      return JSON.stringify({
        coordinateSystem: 'UI grid. Origin top-left, x grows right, y grows down.',
        mode: currentViewSnapshot,
        introVisible: introRef.current,
        resources: {
          capital: Number(snapshot.resources.capital.toFixed(2)),
          pps: Number(snapshot.resources.receita_passiva.toFixed(2)),
          stress: Number(snapshot.resources.stress.toFixed(2))
        },
        progression: {
          status: snapshot.meta.status,
          valuation: Number(calculateValuation(snapshot).toFixed(2)),
          totalCapital: Number(snapshot.meta.capital_total_gerado.toFixed(2)),
          automationCoverage: snapshot.manualActions.length ? Number(((automatedActions / snapshot.manualActions.length) * 100).toFixed(1)) : 100
        },
        nextUnlock: nextUnlock ? {
          id: nextUnlock.id,
          name: nextUnlock.nome,
          missingCapital: Math.max(0, nextUnlock.desbloqueia_em_capital_total - snapshot.meta.capital_total_gerado)
        } : null,
        topUnlocked,
        modalState: modalRef.current
      });
    };
    appWindow.advanceTime = (ms: number) => new Promise<void>((resolve) => {
      const seconds = Math.max(1, Math.round(ms / 1000));
      setGameState(prev => {
        let nextState = prev;
        for (let index = 0; index < seconds; index += 1) {
          const pps = calculateTotalPPS(
            nextState.agents,
            nextState.inventory,
            nextState.meta.prestige_level || 0,
            nextState.meta.active_regime
          );
          const nextCapital = nextState.resources.capital + pps;
          const nextTotalCapital = nextState.meta.capital_total_gerado + pps;
          const statusMultiplier = (STATUS_MILESTONES.findIndex(m => m.label === nextState.meta.status) + 1) * 0.12;
          const stressRelief = nextState.inventory.reduce((acc, item) => acc + (item.quantity * 0.1), 0.4 + statusMultiplier);
          const nextStress = Math.max(0, nextState.resources.stress - stressRelief);
          const nextSnapshot = {
            ...nextState,
            resources: {
              ...nextState.resources,
              capital: nextCapital,
              receita_passiva: pps,
              stress: nextStress
            },
            meta: {
              ...nextState.meta,
              capital_total_gerado: nextTotalCapital
            }
          };
          nextState = {
            ...nextSnapshot,
            meta: {
              ...nextSnapshot.meta,
              status: updateStatus(calculateValuation(nextSnapshot))
            },
            lastTick: Date.now()
          };
        }
        return nextState;
      });
      window.setTimeout(() => resolve(), 0);
    });
    return () => {
      delete appWindow.render_game_to_text;
      delete appWindow.advanceTime;
    };
  }, []);
  const isLowPerf = useMemo(() => telegram.isLowPerformanceDevice(), []);
  if (authLoading) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center bg-[#0a050f] text-magenta">
        <div className="w-10 h-10 border-2 border-magenta border-t-transparent rounded-full animate-spin mb-4" />
        <p className="font-mono text-[8px] font-black uppercase tracking-[0.4em] opacity-50">Handshaking System...</p>
      </div>
    );
  }
  return (
    <div className={`flex flex-col h-full w-full max-w-lg mx-auto bg-transparent relative overflow-hidden transition-transform duration-100 ${(visualAlert || gameState.meta.is_crashed) && !isLowPerf ? 'animate-shake' : ''}`}>
      {}
      <div className={`fixed inset-0 z-[2000] pointer-events-none transition-opacity duration-300 bg-red-600/20 ${visualAlert ? 'opacity-100' : 'opacity-0'}`} />
      {showIntro && (
        <IntroOverlay onComplete={() => {
          setShowIntro(false);
          localStorage.setItem('ceo_intro_seen', 'true');
        }} />
      )}
      {offlineData && <OfflineEarningsModal pu={offlineData.capital} seconds={offlineData.seconds} onClose={() => setOfflineData(null)} />}
      {showSingularity && (
        <SingularityCertificate
          userName={gameState.meta.user?.name || 'CEO'}
          onClose={() => setShowSingularity(false)}
          onReset={resetGame}
        />
      )}
      {showWithdraw && (
        <WithdrawModal
          valuation={calculateValuation(gameState).toFixed(0)}
          userName={gameState.meta.user?.name || 'CEO'}
          onClose={() => setShowWithdraw(false)}
        />
      )}
      {showPrestige && (
        <PrestigeModal
          userName={gameState.meta.user?.name || 'CEO'}
          valuation={calculateValuation(gameState)}
          prestigeLevel={gameState.meta.prestige_level || 0}
          onClose={() => setShowPrestige(false)}
          onPrestige={handlePrestige}
        />
      )}
      <StoreModal
        isOpen={showStore}
        onClose={() => setShowStore(false)}
        onPurchaseSuccess={(item) => {
          showToast(`COMPRA REALIZADA: ${item.title}`);
          triggerHaptic('success');
          setGameState(prev => {
            let newResources = { ...prev.resources };
            let newMeta = { ...prev.meta };
            if (item.effect_type === 'capital') {
              newResources.capital += item.effect_value;
              newMeta.capital_total_gerado += item.effect_value;
            } else if (item.effect_type === 'insurance') {
              newResources.stress = 0;
              newMeta.is_crashed = false;
              newMeta.crash_end_time = 0;
            }
            return {
              ...prev,
              resources: newResources,
              meta: newMeta
            };
          });
        }}
      />
      <DailyTasksModal
        isOpen={showDailyTasks}
        onClose={() => setShowDailyTasks(false)}
        streak={streak}
        tasks={dailyTasks}
        onClaim={(taskId) => {
          const task = dailyTasks.find(t => t.id === taskId);
          if (!task || task.completed) return;
          triggerHaptic('success');
          showToast(`RECOMPENSA RESGATADA: ${task.reward}`);
          setGameState(prev => {
            let r = { ...prev.resources };
            if (taskId === 'task_login') r.capital += (r.capital * 0.10);
            if (taskId === 'task_clicks') r.stress = Math.max(0, r.stress - 20);
            if (taskId === 'task_agent') r.capital += 500;
            return { ...prev, resources: r };
          });
          setDailyTasks(prev => prev.map(t => t.id === taskId ? { ...t, completed: true } : t));
        }}
      />
      <LeaderboardModal
        isOpen={showLeaderboard}
        onClose={() => setShowLeaderboard(false)}
        currentValuation={calculateValuation(gameState)}
        userName={gameState.meta.user?.name || 'CEO'}
        userId={gameState.meta.user?.id || 0}
      />
      {showNeoMint && (
        <NeoMintModal onClose={() => setShowNeoMint(false)} />
      )}
      <ReferralModal
        isOpen={showReferral}
        onClose={() => setShowReferral(false)}
        userId={user?.id}
      />
      {selectedAgentId && currentView === 'agentes' && (
        (() => {
          const agent = gameState.agents.find(a => a.id === selectedAgentId);
          return agent ? (
            <AgentDetailsModal
              agent={agent}
              inventory={gameState.inventory}
              capital={gameState.resources.capital}
              onBuy={buyAgent}
              onClose={() => setSelectedAgentId(null)}
            />
          ) : null;
        })()
      )}
      <div className={`fixed bottom-28 left-1/2 -translate-x-1/2 z-[1000] transition-all duration-500 transform ${toast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="bg-[#130b1a]/90 ios-blur text-white px-5 py-2.5 rounded-full font-bold text-[9px] uppercase shadow-[0_10px_30px_rgba(0,0,0,0.5)] tracking-widest border border-white/5 flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-magenta animate-pulse" />
          {toast}
        </div>
      </div>
      <TopBar
        pu={gameState.resources.capital}
        pps={gameState.resources.receita_passiva}
        stress={gameState.resources.stress}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        totalPuGenerated={gameState.meta.capital_total_gerado}
      />
      <main className="flex-1 scrollable px-5 pt-6 pb-24">
        {currentView === 'operacao' && (
          <Operation
            gameState={gameState}
            onAction={handleManualAction}
            soundEnabled={soundEnabled}
            onWithdrawAttempt={() => setShowWithdraw(true)}
            onSocialReset={() => {
              setGameState(prev => ({
                ...prev,
                meta: { ...prev.meta, is_crashed: false, crash_end_time: 0 }
              }));
              showToast("SISTEMA REINICIADO VIA SHARE");
            }}
          />
        )}
        {currentView === 'agentes' && (
          <AgentStore
            agents={gameState.agents}
            inventory={gameState.inventory}
            pu={gameState.resources.capital}
            totalPu={gameState.meta.capital_total_gerado}
            onBuy={buyAgent}
            selectedId={selectedAgentId}
            onSelect={setSelectedAgentId}
          />
        )}
        {currentView === 'protocols' && <SolutionsTerminal userName={gameState.meta.user?.name || 'CEO'} />}
        {currentView === 'raiox' && <XRay gameState={gameState} onCopySuccess={showToast} />}
      </main>
      <Navigation active={currentView} onChange={setCurrentView} />
      <SpeedInsights />
    </div>
  );
};
export default App;
````

## File: constants.ts
````typescript
import { Agent, ManualAction, GameState } from './types';
import { DEFAULT_REGIME_ID } from './engine/regimes';
export const TOKEN_TICKER = "$NEOFLW";
export const TOKEN_CONTRACT = "0x41F4ff3d45DED9C1332e4908F637B75fe83F5d6B";
export const SCAN_LINK = "https://basescan.org/token/0x41F4ff3d45DED9C1332e4908F637B75fe83F5d6B";
export const BASE_MAGENTA = "#ff008e";
const DEFAULT_FORCE_RESET_VERSION = 20260222;
const parsedForceResetVersion = Number.parseInt(import.meta.env.VITE_FORCE_RESET_VERSION || `${DEFAULT_FORCE_RESET_VERSION}`, 10);
export const FORCE_RESET_VERSION = Number.isNaN(parsedForceResetVersion) ? DEFAULT_FORCE_RESET_VERSION : parsedForceResetVersion;
export const updateStatus = (valuation: number): string => {
  const milestone = [...STATUS_MILESTONES].reverse().find(m => valuation >= m.pu);
  return milestone ? milestone.label : "Iniciante";
};
export const INITIAL_MANUAL_ACTIONS: ManualAction[] = [
  {
    id: "acao_responder_cliente",
    label: "Atendimento Manual",
    capital_gain: 3,
    stress_gain: 1,
    seconds_wasted: 12,
    disabled_by_agent_id: "agent_support_v1"
  },
  {
    id: "acao_gerenciar_redes",
    label: "Gerenciamento de Redes",
    capital_gain: 5,
    stress_gain: 2,
    seconds_wasted: 30,
    disabled_by_agent_id: "agent_social_media_v1"
  },
  {
    id: "acao_enviar_proposta",
    label: "Prospecção Manual",
    capital_gain: 10,
    stress_gain: 3,
    seconds_wasted: 45,
    disabled_by_agent_id: "agent_sdr_v1"
  },
  {
    id: "acao_resolver_ticket",
    label: "Operação Manual",
    capital_gain: 25,
    stress_gain: 8,
    seconds_wasted: 120,
    disabled_by_agent_id: "agent_engineer_v1"
  }
];
export const INITIAL_AGENTS: Agent[] = [
  {
    id: "agent_support_v1",
    nome: "Suporte Autônomo",
    custo_base: 100,
    receita_passiva_segundo: 1.5,
    reduz_cliques: ["acao_responder_cliente"],
    economia_diaria_minutos: 45,
    descricao_curta: "A IA atende. Você foca na estratégia.",
    desbloqueia_em_capital_total: 0
  },
  {
    id: "agent_social_media_v1",
    nome: "Social Media Specialist V1",
    custo_base: 150,
    receita_passiva_segundo: 3.0,
    reduz_cliques: ["acao_gerenciar_redes"],
    economia_diaria_minutos: 60,
    descricao_curta: "Transforma cliques em alcance viral.",
    desbloqueia_em_capital_total: 1000
  },
  {
    id: "agent_sdr_v1",
    nome: "Agente de Vendas (SDR)",
    custo_base: 850,
    receita_passiva_segundo: 8.0,
    reduz_cliques: ["acao_enviar_proposta"],
    economia_diaria_minutos: 120,
    descricao_curta: "Pipeline infinito sem um único salário.",
    desbloqueia_em_capital_total: 500
  },
  {
    id: "agent_engineer_v1",
    nome: "Infra Autônomo",
    custo_base: 4500,
    receita_passiva_segundo: 25.0,
    reduz_cliques: ["acao_resolver_ticket"],
    economia_diaria_minutos: 180,
    descricao_curta: "Sistemas que se curam. Zero downtime.",
    desbloqueia_em_capital_total: 2500
  },
  {
    id: "agent_traffic_v1",
    nome: "Gestor de Tráfego IA",
    custo_base: 2200,
    receita_passiva_segundo: 12.0,
    reduz_cliques: [],
    economia_diaria_minutos: 90,
    descricao_curta: "Monitoramento de ROAS 24/7. Zero desperdício em Ads.",
    desbloqueia_em_capital_total: 1200
  },
  {
    id: "agent_blockchain_node",
    nome: "Auditor On-Chain",
    custo_base: 15000,
    receita_passiva_segundo: 120.0,
    reduz_cliques: [],
    economia_diaria_minutos: 60,
    descricao_curta: "Transparência total. Prova de reserva automática.",
    desbloqueia_em_capital_total: 10000
  }
];
export const COST_SCALING_FACTOR = 1.15;
export const INITIAL_GAME_STATE: GameState = {
  resources: {
    capital: 0,
    horas_manuais_eliminadas: 0,
    stress: 0,
    receita_passiva: 0
  },
  manualActions: INITIAL_MANUAL_ACTIONS,
  agents: INITIAL_AGENTS,
  inventory: [],
  meta: {
    state_version: FORCE_RESET_VERSION,
    capital_total_gerado: 0,
    status: "GARGALO HUMANO",
    snapshot_unlocked: false,
    airdrop_qualificado: false,
    is_crashed: false,
    crash_end_time: 0,
    singularity_reached: false,
    event_social_media_triggered: false,
    event_traffic_loss_triggered: false,
    event_support_backlog_triggered: false,
    event_sdr_fatigue_triggered: false,
    event_infra_downtime_triggered: false,
    start_time: Date.now(),
    prestige_level: 0,
    final_victory_reached: false,
    active_regime: DEFAULT_REGIME_ID,
    governance_history: [DEFAULT_REGIME_ID],
    regime_flags: []
  },
  lastTick: Date.now()
};
export const STATUS_MILESTONES = [
  { pu: 0, label: "GARGALO HUMANO" },
  { pu: 100, label: "Operador Solitário" },
  { pu: 500, label: "Gestor de Agentes" },
  { pu: 2500, label: "CEO Escalável" },
  { pu: 10000, label: "Arquiteto de Sistemas" },
  { pu: 50000, label: "Empresa Autônoma" }
];
export const MAX_VALUATION = 1000000;
export const PRESTIGE_THRESHOLD = 500000;
export const VALUATION_DECELERATION_START = 100000;
export const PRESTIGE_MULTIPLIER_BASE = 1.1;
````

## File: index.css
````css
:root {
  --magenta: #ff00ff;
  --bg-dark: var(--tg-theme-bg-color, #070916);
  --text-main: var(--tg-theme-text-color, #e2e8f0);
  --button-color: var(--tg-theme-button-color, #ff00ff);
  --button-text: var(--tg-theme-button-text-color, #ffffff);
  --safe-area-inset-top: env(safe-area-inset-top);
  --safe-area-inset-bottom: env(safe-area-inset-bottom);
  --app-bg-gradient:
    radial-gradient(130% 90% at 100% 0%, rgba(255, 0, 166, 0.34) 0%, rgba(255, 0, 166, 0) 52%),
    radial-gradient(90% 70% at 0% 100%, rgba(0, 116, 255, 0.26) 0%, rgba(0, 116, 255, 0) 65%),
    linear-gradient(160deg, #060814 0%, #0d1030 48%, #2a0b34 100%);
  --surface-border: rgba(255, 0, 190, 0.18);
  --surface-border-strong: rgba(255, 0, 190, 0.3);
  --surface-glass: rgba(18, 10, 33, 0.58);
  --surface-glass-strong: rgba(16, 8, 29, 0.74);
}
@layer base {
  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    isolation: isolate;
    background: var(--app-bg-gradient);
  }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--app-bg-gradient);
    color: #e2e8f0;
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }
  #root::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background:
      radial-gradient(45% 36% at 85% 8%, rgba(255, 0, 170, 0.2), rgba(255, 0, 170, 0)),
      radial-gradient(38% 30% at 12% 84%, rgba(0, 180, 255, 0.14), rgba(0, 180, 255, 0));
  }
}
@layer utilities {
  .ios-blur {
    background-color: var(--surface-glass);
    backdrop-filter: blur(24px) saturate(170%);
    -webkit-backdrop-filter: blur(24px) saturate(170%);
    border-color: var(--surface-border) !important;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 18px 42px rgba(6, 8, 20, 0.46);
  }
  .magenta-glow {
    text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
  }
  .red-glow {
    text-shadow: 0 0 12px rgba(255, 0, 0, 0.8);
  }
  .text-glow {
    text-shadow: 0 0 8px rgba(255, 0, 255, 0.4);
  }
  .font-mono {
    font-family: 'JetBrains Mono', monospace;
  }
  .btn-active:active {
    transform: scale(0.96);
    opacity: 0.8;
  }
  .scrollable {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: calc(80px + env(safe-area-inset-bottom));
  }
  .bg-magenta {
    background-color: var(--magenta);
  }
  .text-magenta {
    color: var(--magenta);
  }
  .border-magenta {
    border-color: var(--magenta);
  }
  .bg-dark {
    background-color: var(--bg-dark);
  }
}
[class*="border-white/"] {
  border-color: var(--surface-border) !important;
}
[class*="bg-white/"] {
  background-color: var(--surface-glass) !important;
  backdrop-filter: blur(18px) saturate(155%);
  -webkit-backdrop-filter: blur(18px) saturate(155%);
}
[class*="hover:border-white/"] {
  border-color: var(--surface-border-strong) !important;
}
@keyframes glitch-jitter {
  0% {
    transform: translate(0);
  }
  2% {
    transform: translate(-2px, 2px);
    filter: hue-rotate(90deg);
  }
  4% {
    transform: translate(-2px, -2px);
  }
  6% {
    transform: translate(2px, 2px);
    filter: hue-rotate(-90deg);
  }
  8% {
    transform: translate(2px, -2px);
  }
  10% {
    transform: translate(0);
  }
  100% {
    transform: translate(0);
  }
}
.burnout-glitch {
  animation: glitch-jitter 3s infinite;
  filter: saturate(1.2) contrast(1.1);
}
.burnout-glitch::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 0, 0, 0.03);
  pointer-events: none;
  z-index: 1000;
  animation: pulse-warning 2s infinite;
}
@keyframes pulse-warning {
  0%,
  100% {
    opacity: 0.3;
    filter: brightness(1);
  }
  50% {
    opacity: 0.8;
    filter: brightness(1.5);
  }
}
.pulse-critical {
  animation: pulse-warning 0.6s infinite !important;
}
@keyframes progress-load {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
.animate-progress {
  animation: progress-load 0.3s ease-out forwards;
}
@keyframes float-up-fade {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-80px);
  }
}
.animate-float-up {
  animation: float-up-fade 0.8s ease-out forwards;
}
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-4px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(4px);
  }
}
.animate-shake {
  animation: shake 0.5s cubic-bezier(.36, .07, .19, .97) both;
}
@keyframes pulse-subtle {
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 0, 255, 0); }
  50% { transform: scale(1.005); box-shadow: 0 0 20px 0 rgba(255, 0, 255, 0.1); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 0, 255, 0); }
}
.animate-pulse-subtle {
  animation: pulse-subtle 3s ease-in-out infinite;
}
````

## File: index.html
````html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <title>Agent Flow - Simulação de Escala</title>
  <script src="https://telegram.org/js/telegram-web-app.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/manifest.json">
  <meta name="theme-color" content="#0a050f">
  <meta name="description"
    content="Pare de ser o gargalo. Simule sua frota de agentes autônomos e gere valuation em $NEOFLW.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://agenteflow.vercel.app/">
  <meta property="og:title" content="Agent Flow - Simulação de Escala">
  <meta property="og:description"
    content="Pare de ser o gargalo. Automatize processos com multiagentes IA e veja o poder do seu equity digital.">
  <meta property="og:image" content="https://res.cloudinary.com/dqhheouq9/image/upload/v1768812998/ASDFAS_t4tdzx.png">
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://agenteflow.vercel.app/">
  <meta property="twitter:title" content="Agent Flow - Simulação de Escala">
  <meta property="twitter:description"
    content="Pare de ser o gargalo. Automatize processos com multiagentes IA e veja o poder do seu equity digital.">
  <meta property="twitter:image"
    content="https://res.cloudinary.com/dqhheouq9/image/upload/v1768812998/ASDFAS_t4tdzx.png">
  <link
    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;500;600;700;800&display=swap"
    rel="stylesheet">
  <script type="application/ld+json">
    [
      {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Agent Flow - Simulação de Escala",
        "alternateName": "CEO Escalável",
        "description": "Pare de ser o gargalo. Simule sua frota de agentes autônomos e gere valuation em $NEOFLW.",
        "url": "https://agenteflow.vercel.app/",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "all",
        "author": {
          "@type": "Organization",
          "name": "NEØFLW",
          "url": "https://neoflow.space"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "ratingCount": "120"
        },
        "image": "https://res.cloudinary.com/dqhheouq9/image/upload/v1768812998/ASDFAS_t4tdzx.png"
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Agent Flow - Simulação de Escala",
        "url": "https://agenteflow.vercel.app/",
        "publisher": {
          "@type": "Organization",
          "name": "NEØFLW"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NEØFLW",
        "url": "https://neoflow.space",
        "logo": "https://res.cloudinary.com/dqhheouq9/image/upload/v1768812998/ASDFAS_t4tdzx.png"
      }
    ]
    </script>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/index.tsx"></script>
</body>
</html>
````

## File: index.tsx
````typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Web3Provider } from './blockchain/Web3Provider';
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Web3Provider>
      <App />
    </Web3Provider>
  </React.StrictMode>
);
````

## File: Makefile
````makefile
# NEØ FlowOFF - Operation Makefile
# Protocol: B2B-Cyber-Scalability

.PHONY: install dev build preview clean help protocol-push

# Default: Show help
help:
	@echo "=========================================================="
	@echo "     N E Ø   F L O W O F F   -   O P S   M A K E F I L E     "
	@echo "=========================================================="
	@echo "Comandos disponíveis:"
	@echo "  make install       - Instala dependências do projeto"
	@echo "  make dev           - Inicia o servidor de desenvolvimento"
	@echo "  make build         - Executa o build de produção"
	@echo "  make preview       - Visualiza o build localmente"
	@echo "  make clean         - Remove pastas de build e dependências"
	@echo "  make push MESSAGE=\"sua mensagem\" - Executa o NΞØ Protocol (Audit, Build, Commit, Push)"
	@echo "=========================================================="

install:
	pnpm install

dev:
	pnpm dev

build:
	pnpm build

preview:
	pnpm preview

clean:
	rm -rf dist
	rm -rf node_modules
	@echo "Dist and Node Modules removed. System clean."

push:
	@echo "Iniciando NΞØ Protocol: Secure Commit & Push..."
	@echo "1. Security Audit..."
	pnpm audit
	@echo "2. Building for Production..."
	pnpm build
	@echo "3. Staging changes..."
	git add .
	@echo "4. Committing with Conventional Commits..."
	@if [ "$(MESSAGE)" = "" ]; then \
		echo "ERRO: Informe uma mensagem. Ex: make push MESSAGE='feat: descricao'"; \
		exit 1; \
	fi
	git commit -m "$(MESSAGE)"
	@echo "5. Pushing to Remote..."
	git push origin main
	@echo "Protocolo finalizado com sucesso."

# --- TUNNEL OPERATIONS -------------------------------------------------------

TUNNEL_DIR := /Users/nettomello/neomello/NEO-PROTOCOL/neo-tunnel

tunnel-neo-agent: ## Start tunnel for neo-agent
	@cd $(TUNNEL_DIR) && $(MAKE) client-neo-agent

tunnel-flowpay: ## Start tunnel for flowpay
	@cd $(TUNNEL_DIR) && $(MAKE) client-flowpay

tunnel-nexus: ## Start tunnel for nexus
	@cd $(TUNNEL_DIR) && $(MAKE) client-nexus

tunnel-neobot: ## Start tunnel for neobot
	@cd $(TUNNEL_DIR) && $(MAKE) client-neobot

tunnel-status: ## Check tunnel server status
	@cd $(TUNNEL_DIR) && $(MAKE) status
````

## File: metadata.json
````json
{
  "name": "CEO Escalável",
  "description": "Um simulador idle B2B para Telegram onde você escala de freelancer exausto a um negócio autônomo usando IA.",
  "requestFramePermissions": []
}
````

## File: package.json
````json
{
  "name": "ceo-escalável",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "packageManager": "pnpm@10.7.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test:e2e": "playwright test",
    "qa:navigation": "playwright test tests/e2e/navigation.spec.ts"
  },
  "dependencies": {
    "@opentelemetry/api": "^1.9.0",
    "@reown/appkit": "^1.8.17",
    "@reown/appkit-adapter-wagmi": "^1.8.17",
    "@tanstack/react-query": "^5.90.19",
    "@vercel/kv": "^3.0.0",
    "@vercel/otel": "^2.1.0",
    "@vercel/speed-insights": "^1.3.1",
    "lucide-react": "^0.562.0",
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "viem": "^2.44.4",
    "wagmi": "^3.3.4"
  },
  "devDependencies": {
    "@playwright/test": "^1.58.2",
    "@types/node": "^22.14.0",
    "@vitejs/plugin-react": "^5.0.0",
    "autoprefixer": "^10.4.23",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.18",
    "typescript": "~5.8.2",
    "vite": "^6.2.0"
  }
}
````

## File: playwright.config.ts
````typescript
import { defineConfig, devices } from '@playwright/test';
const baseURL = process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:4173';
export default defineConfig({
  testDir: './tests/e2e',
  timeout: 90_000,
  expect: {
    timeout: 8_000
  },
  fullyParallel: false,
  workers: 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL,
    trace: 'off',
    screenshot: 'only-on-failure',
    video: 'off'
  },
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: 'npm run dev -- --host 127.0.0.1 --port 4173',
        url: baseURL,
        reuseExistingServer: true,
        timeout: 120_000
      },
  projects: [
    {
      name: 'mobile-pixel-5',
      use: { ...devices['Pixel 5'] }
    },
    {
      name: 'mobile-compact',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 360, height: 740 },
        isMobile: true,
        hasTouch: true
      }
    },
    {
      name: 'desktop-chrome',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 900 }
      }
    }
  ]
});
````

## File: pnpm-workspace.yaml
````yaml
onlyBuiltDependencies:
  - '@reown/appkit'
  - bufferutil
  - esbuild
  - utf-8-validate
````

## File: progress.md
````markdown
Original prompt: Aplicar a skill de desenvolvimento de jogos para evoluir o NEØ Miniapp com arquitetura declarativa de sistemas, regimes econômicos e governança meta descrita no markdown enviado.

## Progress
- 2026-02-05: Criado arquivo de progresso e registrado a visão norteadora para esta sessão.
- 2026-02-05: Implemented declarative regime presets, meta-governor evaluations, and history tracking so the engine can switch active experiment policies and surface descriptive alerts.
- 2026-02-22: Reposicionei a UX para tom comercial com foco Telegram-first. Inclui Command Deck de conversao na Operacao, CTAs de monetizacao/retencao, labels de navegacao orientadas a negocio e onboarding com menor friccao.
- 2026-02-22: Expostos hooks de teste `window.render_game_to_text` e `window.advanceTime(ms)` para validacao deterministica com cliente Playwright do skill.
- 2026-02-22: Corrigido fluxo de testes do miniapp com Playwright do skill. Intro padrão desativado (sem bloqueio de conversão), botão manual estabilizado para clique automatizado e cenários validados: ação manual, navegação para Agentes e abertura da Loja.
- 2026-02-22: Eliminados erros de console no teste automatizado com fallback robusto de CloudStorage e guard para não inicializar Reown AppKit quando `VITE_REOWN_PROJECT_ID` não estiver configurado.

## TODOs e sugestões para próxima iteração
- Definir `VITE_REOWN_PROJECT_ID` válido no ambiente para reativar o AppKit em produção.
- Ajustar copy da Loja Premium para remover markdown literal (`**Telegram Stars**`) e aumentar clareza comercial.
- Criar funil de aquisição com tracking de origem (`start_param`) e reward de referral dentro do miniapp.
- 2026-02-22: README atualizado para refletir setup atual (Reown + Telegram) e removido contexto Gemini. Criados os guias `docs/GUIA_USUARIO_MINIAPP.md` e `docs/GUIA_EMPRESA_MINIAPP.md` com documentação de navegação, capacidades, monetização real e operação empresarial.
- 2026-02-22: Implementada migração forçada global no load via `VITE_FORCE_RESET_VERSION` + `meta.state_version`. Estados antigos agora resetam automaticamente no primeiro acesso após deploy com versão maior.
- 2026-02-22: Implementada telemetria mínima de pagamentos com endpoint `/api/payment-telemetry` (KV timeline + contadores) e eventos client-side em `utils/payments.ts`: `invoice_created`, `invoice_paid`, `invoice_failed`.
- 2026-02-22: Hardening aplicado em webhook e invoices. `api/webhook` agora suporta verificação por `TELEGRAM_WEBHOOK_SECRET`, ignora chats não privados e restringe comandos conhecidos. `api/create-invoice` ganhou validação forte de payload, allowlist de origem e suporte a verificação de `initData` (`TELEGRAM_INITDATA_ENFORCE`).
- 2026-02-22: Visual atualizado para glassmorphism iOS-like com gradiente dark navy -> pink aplicado globalmente. Bordas brancas perceptíveis foram substituídas por bordas magenta translúcidas.
- 2026-02-22: Criado Navigation QA Gate com Playwright (`playwright.config.ts` + `tests/e2e/navigation.spec.ts`) cobrindo tabs, fechamento de modais por `X`/backdrop e responsividade em `iPhone 12`, `Pixel 5` e desktop.
````

## File: README.md
````markdown
<!-- markdownlint-disable MD003 MD007 MD011 MD013 MD022 MD023 MD025 MD029 MD032 MD033 MD034 -->

# NEØ FlowOFF Miniapp Console

Miniapp de simulação de escala operacional para Telegram, com camadas de monetização via Telegram Stars e integração on-chain para mint de $NEOFLW.

## Stack
- Engine: React 19 + Vite
- Interface: Tailwind + CSS customizado
- Runtime: Telegram Mini App SDK
- Web3: Wagmi + Reown AppKit + Base Mainnet

## Setup
### Pré-requisitos
- Node.js 18+
- `VITE_REOWN_PROJECT_ID` (necessário para wallet connect e mint)
- `TELEGRAM_BOT_TOKEN` (necessário para `api/webhook` e `api/create-invoice`)

### Executar local
1. Instalar dependências:
```bash
npm install
```
2. Configurar ambiente (`.env.local` recomendado):
```env
VITE_REOWN_PROJECT_ID=seu_project_id_reown
TELEGRAM_BOT_TOKEN=seu_bot_token
VITE_FORCE_RESET_VERSION=20260222
TELEGRAM_WEBHOOK_SECRET=seu_secret_do_setWebhook
WEB_APP_URL=https://agenteflow.vercel.app/
APP_ORIGIN_ALLOWLIST=https://agenteflow.vercel.app
TELEGRAM_INITDATA_ENFORCE=true
```
3. Rodar:
```bash
npm run dev
```

### Gate de navegação e responsividade
- Rodar o gate de UI antes de cada deploy:
```bash
npm run qa:navigation
```
- Detalhes dos critérios em: [docs/NAVIGATION_QA_GATE.md](./docs/NAVIGATION_QA_GATE.md)

### Reset global de usuários (migração forçada)
- O app compara `meta.state_version` salvo com `VITE_FORCE_RESET_VERSION`.
- Se o salvo for menor, o estado do usuário é resetado automaticamente no carregamento.
- Para forçar um novo reset geral, aumente `VITE_FORCE_RESET_VERSION` e faça deploy.

### Hardening recomendado em produção
- Configure `TELEGRAM_WEBHOOK_SECRET` e aplique o mesmo valor no `setWebhook` do Bot API.
- Ative `TELEGRAM_INITDATA_ENFORCE=true` para bloquear criação de invoice fora do contexto Telegram WebApp válido.
- Defina `APP_ORIGIN_ALLOWLIST` com os domínios autorizados do miniapp.

## Contexto de Produto
- Simulação: valuation e progresso de operação dentro do jogo.
- Monetização real: compra de itens via Telegram Stars.
- Ativo real: mint on-chain de $NEOFLW (quando mint está ativo no contrato).
- Saque real: fluxo atual abre contato comercial, não existe saque automático para fiat no app.

## Documentação
- Guia do usuário final: [docs/GUIA_USUARIO_MINIAPP.md](./docs/GUIA_USUARIO_MINIAPP.md)
- Guia interno da empresa: [docs/GUIA_EMPRESA_MINIAPP.md](./docs/GUIA_EMPRESA_MINIAPP.md)
- Deployment History: [docs/DEPLOYMENT_HISTORY.md](./docs/DEPLOYMENT_HISTORY.md)
- Roadmap Web3: [docs/ROADMAP_WEB3.md](./docs/ROADMAP_WEB3.md)
- QA Gate de Navegação: [docs/NAVIGATION_QA_GATE.md](./docs/NAVIGATION_QA_GATE.md)

## Contrato
- Network: Base Mainnet (8453)
- Token: $NEOFLW
- Contract: `0x41F4ff3d45DED9C1332e4908F637B75fe83F5d6B`
- Explorer: [BaseScan](https://basescan.org/address/0x41F4ff3d45DED9C1332e4908F637B75fe83F5d6B)

## Contato
- [neo@neoprotocol.space](mailto:neo@neoprotocol.space)
- [Telegram](https://t.me/neomello)

────────────────────────────────────────

▓▓▓ NΞØ MELLØ
────────────────────────────────────────
Core Architect · NΞØ Protocol
neo@neoprotocol.space

"Code is law. Expand until
silence becomes structure."
────────────────────────────────────────
```
 █████ █         
██╔═══██╗       
██║ █ ██║  
██ █  ██║      
╚██████╔╝   
█ ╚═══╝     

```
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2022",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ],
    "skipLibCheck": true,
    "types": [
      "node",
      "vite/client"
    ],
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": [
        "./*"
      ]
    },
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
}
````

## File: types.ts
````typescript
export interface UserProfile {
  id: string | number;
  name: string;
  username?: string;
  type: 'telegram' | 'visitor';
}
export interface ResourceState {
  capital: number;
  horas_manuais_eliminadas: number;
  stress: number;
  receita_passiva: number;
}
export interface ManualAction {
  id: string;
  label: string;
  capital_gain: number;
  stress_gain: number;
  seconds_wasted: number;
  disabled_by_agent_id: string;
}
export interface Agent {
  id: string;
  nome: string;
  custo_base: number;
  receita_passiva_segundo: number;
  reduz_cliques: string[];
  economia_diaria_minutos: number;
  descricao_curta: string;
  desbloqueia_em_capital_total: number;
  real_solution_link?: string;
}
export interface AgentOwnership {
  id: string;
  quantity: number;
}
export interface RegimeMultipliers {
  pps?: number;
  manualGain?: number;
  stressRelief?: number;
}
export interface RegimeThresholds {
  capital_total?: number;
  automation_requirement?: number;
}
export interface RegimeDeceleration {
  start: number;
  max: number;
  curve: 'linear' | 'logarithmic';
  intensity: number;
}
export interface RegimeConfig {
  id: string;
  description: string;
  multipliers?: RegimeMultipliers;
  constraints?: {
    centralization_penalty?: boolean;
    automation_cap?: number;
  };
  incentives?: {
    collective_efficiency?: number;
  };
  thresholds?: RegimeThresholds;
  deceleration?: RegimeDeceleration;
  allowedActions?: string[];
  victoryConditions?: {
    requires?: string[];
    minDurationCycles?: number;
  };
}
export interface GameMeta {
  state_version?: number;
  capital_total_gerado: number;
  status: string;
  snapshot_unlocked: boolean;
  airdrop_qualificado: boolean;
  is_crashed: boolean;
  crash_end_time: number;
  singularity_reached: boolean;
  event_social_media_triggered: boolean;
  event_traffic_loss_triggered: boolean;
  event_support_backlog_triggered: boolean;
  event_sdr_fatigue_triggered: boolean;
  event_infra_downtime_triggered: boolean;
  start_time: number;
  user?: UserProfile;
  prestige_level?: number;
  final_victory_reached?: boolean;
  active_regime?: string;
  governance_history?: string[];
  regime_flags?: string[];
}
export interface GameState {
  resources: ResourceState;
  manualActions: ManualAction[];
  agents: Agent[];
  inventory: AgentOwnership[];
  meta: GameMeta;
  lastTick: number;
}
export type View = 'operacao' | 'agentes' | 'raiox' | 'protocols';
````

## File: vercel.json
````json
{
    "$schema": "https://openapi.vercel.sh/vercel.json",
    "framework": "vite",
    "buildCommand": "npm run build",
    "outputDirectory": "dist",
    "headers": [
        {
            "source": "/assets/(.*)",
            "headers": [
                {
                    "key": "Cache-Control",
                    "value": "public, max-age=31536000, immutable"
                }
            ]
        },
        {
            "source": "/(.*).png",
            "headers": [
                {
                    "key": "Cache-Control",
                    "value": "public, max-age=86400"
                }
            ]
        },
        {
            "source": "/(.*).webp",
            "headers": [
                {
                    "key": "Cache-Control",
                    "value": "public, max-age=86400"
                }
            ]
        },
        {
            "source": "/(.*)",
            "headers": [
                {
                    "key": "X-Content-Type-Options",
                    "value": "nosniff"
                },
                {
                    "key": "X-Frame-Options",
                    "value": "ALLOWALL"
                },
                {
                    "key": "Referrer-Policy",
                    "value": "strict-origin-when-cross-origin"
                }
            ]
        }
    ],
    "rewrites": [
        {
            "source": "/((?!assets|api).*)",
            "destination": "/index.html"
        }
    ]
}
````

## File: vite.config.ts
````typescript
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(() => {
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'import.meta.env.VITE_APP_VERSION': JSON.stringify(process.env.npm_package_version)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'lucide-icons': ['lucide-react']
          }
        }
      },
      chunkSizeWarningLimit: 1000
    }
  };
});
````
