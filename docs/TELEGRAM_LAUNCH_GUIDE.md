# Guia de Lançamento: Telegram Mini App (TMA)

Este guia cobre o processo técnico e burocrático para transformar seu código React/Vite em um Mini App oficial dentro do Telegram.

## 1. Configuração no BotFather [ ]

O coração do seu Mini App é um bot. Se você já tem o bot, pule para o passo "Configuring Web App".

1.  **Criar o Bot:** Vá ao [@BotFather](https://t.me/botfather) e use `/newbot`.
2.  **Configurar o Web App:**
    *   Use o comando `/setwebapp`.
    *   Selecione seu bot.
    *   O BotFather pedirá a **URL de Produção** (ex: `https://seu-dapp.vercel.app`). *Nota: Deve ser obrigatoriamente HTTPS.*
3.  **Botão de Menu:**
    *   Use `/setmenubutton`.
    *   Isso fará com que um botão apareça ao lado do campo de digitação do chat, abrindo seu app instantaneamente.
4.  **Configurações de Design:**
    *   `/setuserpic`: Foto de perfil do bot.
    *   `/setdescription`: Texto que aparece antes do usuário clicar no botão Start.
    *   `/setabouttext`: Texto que aparece no perfil do bot.

## 2. Requisitos de Hospedagem [ ]

O Telegram não hospeda seu código. Ele apenas abre sua URL dentro de uma Webview segura.

*   **Vercel / Netlify:** Recomendados para Mini Apps React.
*   **SSL (HTTPS):** Obrigatório. Sem ele, o Telegram bloqueia a abertura.
*   **Performance:** Mini Apps lentos são penalizados na experiência do usuário. Otimize o carregamento inicial.

## 3. Obrigações e Modos de Lançamento [ ]

### Tipos de Abertura
1.  **Menu Button:** O usuário abre o bot e clica no botão fixo.
2.  **Inline Mode:** Você pode configurar para que o app seja compartilhado em qualquer chat (ex: `@seubot` em um grupo).
3.  **Direct Link:** Você pode enviar um link tipo `t.me/seubot/appname` que abre o app direto.

### Obrigações do Telegram
*   **Privacy Policy:** É obrigatório ter um link de política de privacidade acessível no bot se você for coletar dados do usuário ou usar o `initDataUnsafe`.
*   **Bot Verification:** Bots que movimentam muito volume podem solicitar o selo azul de verificado, mas requer documentos da empresa.
*   **Telegram Ads:** Você não pode exibir anúncios externos (Google Adsense) dentro do Mini App sem autorização. Use apenas anúncios do próprio ecossistema ou parcerias diretas.

## 4. Como funciona o "Lançamento"

Diferente de uma Apple Store, o Telegram não revisa seu código manualmente toda vez que você atualiza.

1.  **Update Silencioso:** Você faz o `git push` para sua hospedagem (Vercel), e o app atualiza para todos os usuários instantaneamente.
2.  **Aprovação no Fragment/Bot Store:** Se você quiser que o app apareça na aba de busca oficial do Telegram (Trending Apps), você precisa submeter o bot para análise via `@BotSupport` ou diretórios da comunidade.
3.  **Liquidez e Tokens:** Se o seu token `$NEOFLW` for listado na Polygon, o Telegram não interfere, desde que você use carteiras externas (WalletConnect) ou a TON Space.

---

**DICA DE OURO:** No BotFather, ative o `Inline Mode` (`/setinline`). Isso permite que os jogadores compartilhem o app com amigos e grupos digitando `@nome_do_seu_bot`, o que gera o crescimento orgânico que você precisa.
