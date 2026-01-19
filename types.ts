
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
  real_solution_link?: string; // Link para venda real/pagamento
}

export interface AgentOwnership {
  id: string;
  quantity: number;
}

export interface GameMeta {
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
