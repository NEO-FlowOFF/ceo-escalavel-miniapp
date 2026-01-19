
import { GameState, AgentOwnership, Agent, ManualAction } from '../types';
import { COST_SCALING_FACTOR, STATUS_MILESTONES } from '../constants';

export const calculateAgentCost = (baseCost: number, quantity: number): number => {
  return Math.floor(baseCost * Math.pow(COST_SCALING_FACTOR, quantity));
};

// NOVO: Multiplicador de Sinergia (Recompensa por frota diversificada)
export const calculateSynergyMultiplier = (inventory: AgentOwnership[], totalAgentsAvailable: number): number => {
  const uniqueAgents = inventory.length;
  if (uniqueAgents === 0) return 1;
  // Bônus de 5% por cada tipo de agente diferente, dobrando se tiver todos
  const baseSynergy = 1 + (uniqueAgents * 0.05);
  return uniqueAgents === totalAgentsAvailable ? baseSynergy * 1.5 : baseSynergy;
};

export const calculateTotalPPS = (agents: Agent[], inventory: AgentOwnership[]): number => {
  const basePPS = inventory.reduce((total, item) => {
    const agentData = agents.find(a => a.id === item.id);
    return total + (agentData ? agentData.receita_passiva_segundo * item.quantity : 0);
  }, 0);

  return basePPS * calculateSynergyMultiplier(inventory, agents.length);
};

// NOVO: O ganho manual agora escala com o seu Status para não se tornar irrelevante
export const calculateManualGain = (action: ManualAction, totalCapitalGenerated: number): number => {
  const multiplier = 1 + Math.log10(Math.max(1, totalCapitalGenerated / 500));
  return Math.floor(action.capital_gain * multiplier);
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
  const pps = calculateTotalPPS(gameState.agents, gameState.inventory);
  const allAutomated = areAllActionsAutomated(gameState.manualActions, gameState.inventory, gameState.agents);
  return allAutomated && pps >= 150; // Aumentado para exigir mais escala
};

/**
 * Calcula o Valuation da empresa (em tokens $NEOFLW)
 * Baseado no Múltiplo de MKT: (PPS * 15x) + (Aceleração por Eficiência de Horas) + (Equity de Capital Acumulado)
 */
export const calculateValuation = (gameState: GameState): number => {
  const pps = calculateTotalPPS(gameState.agents, gameState.inventory);
  const totalCap = gameState.meta.capital_total_gerado;
  const hoursSaved = gameState.resources.horas_manuais_eliminadas;

  const ppsMktMultiple = pps * 15; // PPS é o motor principal
  const efficiencyBonus = hoursSaved * 12; // Valorização por tempo recuperado
  const equityBase = totalCap / 1000; // 10% do faturamento histórico vira valuation base

  return (ppsMktMultiple + efficiencyBonus + equityBase);
};
