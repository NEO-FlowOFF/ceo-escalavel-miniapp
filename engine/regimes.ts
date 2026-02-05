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
