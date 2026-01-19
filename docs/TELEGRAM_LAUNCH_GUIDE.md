# Guia de Lançamento: Telegram Mini App (TMA)

Este guia cobre o processo técnico e burocrático para transformar seu código React/Vite em um Mini App oficial dentro do Telegram.

## 1. Configuração no BotFather [ ]

O coração do seu Mini App é um bot. Siga estes passos no [@BotFather](https://t.me/botfather):

1.  **Criar o Bot:** Use `/newbot` e siga a sequência:
    *   **Passo A (Nome):** Escolha o nome de exibição: **Agente Flow**. Este é o nome que os usuários verão no topo do chat.
    *   **Passo B (Username):** Escolha o ID público do bot. **Atenção:** Ele deve ser único e terminar obrigatoriamente em `bot`. Exemplos: `AgenteFlowBot`, `AgenteFlow_bot`.
    *   **Resultado:** Você receberá um **HTTP API Token**. Guarde-o.

2.  **Configurar o Web App:**
    *   Use o comando `/newapp`. (Nota: O comando `/setwebapp` é para bots que já possuem apps, `/newapp` guia você na criação de um novo).
    *   Siga as instruções para vincular o Bot ao seu App (escolha o bot criado, defina o nome do app e envie a URL).
    *   **URL de Produção:** `https://agenteflow.vercel.app/`
    *   *Nota: O Telegram exige HTTPS.*
3.  **Botão de Menu:**
    *   Use `/setmenubutton`.
    *   Configure o texto do botão como: **Jogar Agora ⦿**
4.  **Configurações de Design (Essencial):**
    *   `/setuserpic`: Suba o ícone oficial (ex: `apple-icon-180x180.png`).
    *   `/setdescription`: Sugestão: *"Pare de ser o gargalo. Torne-se o Arquiteto. Simule sua frota de agentes autônomos e gere valuation em $NEOFLW."*
    *   `/setabouttext`: Sugestão: *"Agente Flow: O console de comando oficial da NEØFLW para CEOs escaláveis."*

## 2. Requisitos de Hospedagem [ ]

O Telegram não hospeda seu código. Ele apenas abre sua URL dentro de uma Webview segura.

*   **Vercel / Netlify:** Recomendados para Mini Apps React.
*   **SSL (HTTPS):** Obrigatório. Sem ele, o Telegram bloqueia a abertura.
*   **Performance:** Mini Apps lentos são penalizados na experiência do usuário. Otimize o carregamento inicial.

## 3. Main Mini App (Obrigatório para Destaque) [ ]

O **Main Mini App** desbloqueia recursos importantes:

### Como Configurar:
1.  No [@BotFather](https://t.me/botfather), use `/newapp`
2.  Selecione `@AgenteFlow_Bot`
3.  Configure a URL: `https://agenteflow.vercel.app/`
4.  Defina um **short name** (ex: `game`)

### Benefícios:
*   **Botão "Launch app"** no perfil do bot
*   **Aparece na aba Apps** da busca para usuários que já jogaram
*   **Media Previews** (vídeos/screenshots) com suporte a múltiplos idiomas
*   **Link direto:** `https://t.me/AgenteFlow_Bot?startapp`

### Formatos de Link:
```
https://t.me/AgenteFlow_Bot?startapp           # Abre full-screen
https://t.me/AgenteFlow_Bot?startapp=ref123    # Com parâmetro (tracking)
https://t.me/AgenteFlow_Bot?startapp&mode=compact  # Abre em meia-tela
```

### Telegram Mini App Store:
Para ser **destacado na loja oficial**:
- [ ] Configure o Main Mini App
- [ ] Faça upload de mídia de alta qualidade (screenshots/vídeos)
- [ ] Aceite pagamentos em **Telegram Stars**
- [ ] Siga as [Design Guidelines](https://core.telegram.org/bots/webapps#design-guidelines)

---

## 4. Obrigações e Modos de Lançamento [ ]

### Tipos de Abertura
1.  **Menu Button:** O usuário abre o bot e clica no botão fixo.
2.  **Inline Mode:** Compartilhe em qualquer chat digitando `@AgenteFlow_Bot`.
3.  **Direct Link:** `https://t.me/AgenteFlow_Bot?startapp`
4.  **Launch Button:** Botão no perfil do bot (requer Main Mini App).

### Obrigações do Telegram
*   **Privacy Policy:** Obrigatório. Configurado em: `https://agenteflow.vercel.app/privacy.html`
*   **Bot Verification:** Bots com alto volume podem solicitar selo azul via `@BotSupport`.
*   **Telegram Ads:** Anúncios externos (Google Adsense) não são permitidos sem autorização.

## 5. Como funciona o "Lançamento"

Diferente de uma Apple Store, o Telegram não revisa seu código manualmente.

1.  **Update Silencioso:** `git push` para Vercel → app atualiza instantaneamente.
2.  **Mini App Store:** Para aparecer na busca oficial, submeta via `@BotSupport`.
3.  **Telegram Stars:** Integrar pagamentos aumenta chances de destaque.

---

## Links Oficiais do Agente Flow

| Tipo | URL |
|------|-----|
| **Bot** | https://t.me/AgenteFlow_Bot |
| **Direct Launch** | https://t.me/AgenteFlow_Bot?startapp |
| **Web App** | https://agenteflow.vercel.app |
| **Privacy Policy** | https://agenteflow.vercel.app/privacy.html |

---

**DICA DE OURO:** Ative o `Inline Mode` (`/setinline`). Isso permite que jogadores compartilhem o app digitando `@AgenteFlow_Bot`, gerando crescimento orgânico.
