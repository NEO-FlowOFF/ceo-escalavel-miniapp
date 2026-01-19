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
