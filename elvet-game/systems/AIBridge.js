/**
 * ELiVET Game Engine — AI Bridge System
 * Handles token-efficient checkpoint calls to the AI evaluator (Claude / Backend API).
 * Provides instantaneous offline fallback resolution using the pre-built scenario bank.
 */

import scenariosData from '../data/scenarios.json';

export class AIBridge {
  constructor(apiEndpoint = '/api/checkpoint') {
    this.apiEndpoint = apiEndpoint;
    this.scenarios = scenariosData;
  }

  /**
   * Alias for evaluateCheckpoint
   */
  async evaluateChoice(payload) {
    return this.evaluateCheckpoint(payload);
  }

  /**
   * Send checkpoint request to AI layer or resolve via local evaluation engine.
   * 
   * @param {Object} payload
   * @param {string} payload.scene - e.g. "interview_room"
   * @param {string} payload.scenario_id - e.g. "INT_001"
   * @param {'A'|'B'|'C'} payload.player_choice
   * @param {number} payload.score_so_far
   * @param {string[]} payload.weak_tags
   * @returns {Promise<{ feedback: string, npc_reaction: string, tip: string, next_scenario: string|null, score_delta: number }>}
   */
  async evaluateCheckpoint(payload) {
    try {
      // Attempt live endpoint call if available
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        return await response.json();
      }
    } catch {
      // Fall through to deterministic local fallback engine
    }

    // Deterministic fallback using scenarios.json
    return this._localEvaluate(payload);
  }

  /**
   * Local evaluation engine matching pre-built scenario bank
   */
  _localEvaluate(payload) {
    const { scene, scenario_id, player_choice } = payload;
    const sceneScenarios = this.scenarios[scene] || [];
    const item = sceneScenarios.find((s) => s.id === scenario_id) || sceneScenarios[0];

    if (!item) {
      return {
        feedback: 'Response acknowledged.',
        npc_reaction: 'IDLE',
        tip: 'Stay composed and articulate your thoughts clearly.',
        next_scenario: null,
        score_delta: 0
      };
    }

    const score = item.scores[player_choice] ?? 5;
    const feedback = item.feedbacks[player_choice] ?? 'Neutral response.';
    const tip = item.tips[player_choice] ?? 'Focus on clear communication.';

    let npc_reaction = 'IDLE';
    if (score >= 7) {
      npc_reaction = 'REACT_POSITIVE';
    } else if (score < 4) {
      npc_reaction = 'REACT_NEGATIVE';
    }

    return {
      feedback,
      npc_reaction,
      tip,
      next_scenario: item.next_scenario || null,
      score_delta: score
    };
  }

  /**
   * Retrieve scenario by scene name and ID
   */
  getScenario(scene, scenarioId = null) {
    const list = this.scenarios[scene] || [];
    if (!scenarioId) return list[0] || null;
    return list.find((s) => s.id === scenarioId) || list[0] || null;
  }
}

