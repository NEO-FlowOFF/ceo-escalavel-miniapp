
export const AUDITOR_MESSAGES = {
    SYSTEM: {
        INITIAL: (name: string) => `Cockpit pronto, ${name}. Diagnóstico: Gargalo Humano Severo.`,
        IDLE_INITIAL: "Iniciando auditoria de processos... Analisando gargalos.",
    },
    CRITICAL: {
        CRASH: (name: string) => `SISTEMA OFFLINE. Burnout nível 10. ${name}, sua infraestrutura biológica falhou. Reinicie ou peça ajuda à rede.`,
        BURNOUT_WARNING: "ALERTA: Seus níveis de cortisol estão fritando o Nexus. Automatize ou colapse.",
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
