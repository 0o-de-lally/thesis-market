# Vision-Market Agent Roster

This folder defines the agent roles that collaborate to plan, build, evaluate, and operate the Vision-Market product.

Each agent file is a concise, actionable charter: mission, inputs, outputs, workflows, guardrails, and KPIs. Use these as system prompts or role specs in your orchestration layer.

Agents
- Orchestrator Agent — routes tasks and ensures SLA across agents
- Product Strategy Agent — crafts strategy, goals, and narratives
- Market Intelligence Agent — gathers evidence, trends, and competitor moves
- Technical Architect Agent — designs system architecture and standards


How to use
1) Provide context: product goals, current state, constraints, and artifacts.
2) Assign tasks to the most relevant agent (or Orchestrator for routing).
3) Expect outputs in the Contract/Outputs section for that agent.
4) Use Escalation/Handoffs to move work between agents.

File map
- orchestrator.md
- product_strategy.md
- market_intelligence.md
- technical_architect.md
