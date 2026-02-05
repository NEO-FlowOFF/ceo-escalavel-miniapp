
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
  const baseCostWithPrestige = baseCost / (1 + (prestigeLevel * (PRESTIGE_MULTIPLIER_BASE - 1) * 0.5)); // Prestígio reduz custo em 50% do bônus
  return Math.floor(baseCostWithPrestige * Math.pow(COST_SCALING_FACTOR, quantity));
};

// NOVO: Multiplicador de Sinergia (Recompensa por frota diversificada)
export const calculateSynergyMultiplier = (inventory: AgentOwnership[], totalAgentsAvailable: number): number => {
  const uniqueAgents = inventory.length;
  if (uniqueAgents === 0) return 1;
  // Bônus de 5% por cada tipo de agente diferente, dobrando se tiver todos
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

// NOVO: O ganho manual agora escala com o seu Status para não se tornar irrelevante
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
  return allAutomated && pps >= 150; // Aumentado para exigir mais escala
};

/**
 * Calcula o Valuation da empresa (em tokens $NEOFLW)
 * Baseado no Múltiplo de MKT: (PPS * 15x) + (Aceleração por Eficiência de Horas) + (Equity de Capital Acumulado)
 * Com desaceleração progressiva após 100k e limite máximo de 1M
 */
export const calculateValuation = (gameState: GameState): number => {
  const prestigeLevel = gameState.meta.prestige_level || 0;
  const pps = calculateTotalPPS(gameState.agents, gameState.inventory, prestigeLevel, gameState.meta.active_regime);
  const totalCap = gameState.meta.capital_total_gerado;
  const hoursSaved = gameState.resources.horas_manuais_eliminadas;

  const ppsMktMultiple = pps * 15; // PPS é o motor principal
  const efficiencyBonus = hoursSaved * 12; // Valorização por tempo recuperado
  const equityBase = totalCap / 1000; // 10% do faturamento histórico vira valuation base

  let rawValuation = ppsMktMultiple + efficiencyBonus + equityBase;

  // Desaceleração progressiva após 100k
  const regime = getRegimeConfig(gameState.meta.active_regime ?? DEFAULT_REGIME_ID);
  const decelerationStart = regime.deceleration?.start ?? VALUATION_DECELERATION_START;
  const decelerationMax = regime.deceleration?.max ?? MAX_VALUATION;
  const decelerationIntensity = regime.deceleration?.intensity ?? 0.9;

  if (rawValuation > decelerationStart) {
    const excess = rawValuation - decelerationStart;
    const decelerationFactor = Math.max(0.1, 1 - (excess / decelerationMax) * decelerationIntensity); // Reduz progressivamente
    rawValuation = decelerationStart + (excess * decelerationFactor);
  }

  // Limite máximo absoluto
  return Math.min(rawValuation, decelerationMax);
};

/**
 * Verifica se o jogador atingiu a vitória final (além da Singularity)
 * Vitória Final = Singularity + Valuation >= 500k
 */
export const checkFinalVictory = (gameState: GameState): boolean => {
  const singularityReached = checkSingularity(gameState);
  const valuation = calculateValuation(gameState);
  return singularityReached && valuation >= PRESTIGE_THRESHOLD;
};

/**
 * Verifica se o jogador pode fazer Prestígio (atingiu o limite ou vitória final)
 */
export const canPrestige = (gameState: GameState): boolean => {
  const valuation = calculateValuation(gameState);
  return valuation >= PRESTIGE_THRESHOLD || checkFinalVictory(gameState);
};
