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
