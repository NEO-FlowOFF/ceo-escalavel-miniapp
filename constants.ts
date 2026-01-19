
import { Agent, ManualAction, GameState } from './types';

export const TOKEN_TICKER = "$NEOFLW";
export const TOKEN_CONTRACT = "0x59aa4EaE743d608FBDd4205ebA59b38DCA755Dd2";
export const SCAN_LINK = "https://polygonscan.com/token/0x59aa4EaE743d608FBDd4205ebA59b38DCA755Dd2";
export const POLYGON_PURPLE = "#8247E5";

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
    desbloqueia_em_capital_total: 1000,
    real_solution_link: "https://www.flowoff.xyz/solutions/social-media" // Substitua pelo seu link real
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
    capital_total_gerado: 0,
    status: "GARGALO HUMANO",
    snapshot_unlocked: false,
    airdrop_qualificado: false,
    is_crashed: false,
    crash_end_time: 0,
    singularity_reached: false,
    event_social_media_triggered: false
  },
  lastTick: Date.now()
};

export const STATUS_MILESTONES = [
  { pu: 0, label: "GARGALO HUMANO" },
  { pu: 1000, label: "Operador Solitário" },
  { pu: 10000, label: "Gestor de Agentes" },
  { pu: 50000, label: "CEO Escalável" },
  { pu: 250000, label: "Arquiteto de Sistemas" },
  { pu: 1000000, label: "Empresa Autônoma" }
];
