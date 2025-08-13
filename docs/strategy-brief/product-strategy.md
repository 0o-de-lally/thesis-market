# Thesis-Market Product Strategy

for people with vision

---
**Document Status:** Draft
**Version:** 1.0
**Last Updated:** 2025-08-12
**Owner:** @product_strategy_agent
**Required Fields:** ["problem_statement"]
**Validation Criteria:** ["concise_under_1000_words", "explicit_assumptions_called_out", "append_only_changelog_entry"]
**Agent Instructions:** "Keep the problem framing primary. Separate assumptions from facts. Add clear guardrails and near-term stage gates. Handoff to Market Intelligence and Technical Architect for evidence and feasibility."
---

## Open Libra Strategic Philosophy

Open Libra is a different kind of blockchain. We prioritize the long game. The blockchain exists for the asset $LBR and to make it a valuable asset into perpetuity. As such we don't plan to fight the typical L1 battle, to become a world computer. Instead we include apps and features and games which improve the probability of $LBR compounding into perpetuity.

## Thesis-Market: A Curated Prediction Market for Megatrends

**TLDR:** Thesis-Market is a prediction market application on Open Libra, curated to include markets for megatrends in business and society.

Over time, prediction markets help surface private information and reveal experts. Open Libra can create markets for long-term themes such as:
- Economic progress
- AI adoption
- Medical advances
- Other impactful societal trends

This product is useful for anyone who wants to participate in broad and impactful themes, when there are no assets that perfectly capture those themes. For Open Libra, it creates a venue which could attract deep thinking researchers.

## Problem Statement

**Blockchain Ecosystem Problem:**
The current blockchain landscape is dominated by general-purpose L1s competing to become "world computers," leading to:
- Diluted focus and resources across infinite use cases
- Short-term speculation rather than long-term value creation
- Unsustainable tokenomics that don't prioritize asset appreciation over time
- Ecosystems that prioritize transaction volume over asset quality and longevity

**Recruitment & Incentives Problem (OL and industry-wide):**
- Free mining in OL attracted opportunistic participants who casually ran simple software for outsized gains, with low conversion into active, useful contributors.
- Steady-state validator rewards tend to recruit mercenary operators. OL intentionally prefers low rewards to network operators, further reducing this mercenary attractant.
- Net effect: there is no strong attractant for deep-thinking people engaged with forward-looking themes to join and stay active in the ecosystem.

**Prediction Market Problem:**
Existing prediction markets lack curation and focus on short-term events rather than long-term megatrends. There's no venue for deep thinkers and researchers to participate in markets about society's most important long-term themes.

**Implication:**
Without a Schelling point and purpose-built incentive design for high-signal contributors, OL will under-recruit the human capital needed to compound $LBR value over long horizons.

**Solution:** Thesis-Market on Open Libra creates a curated prediction market focused on megatrends, attracting thoughtful participants while contributing to $LBR's long-term value through meaningful economic activity and expert knowledge aggregation. With purpose-built rewards and incentives, Thesis-Market can become OL's Schelling point for people who can "see around corners."

### Market Validation & Differentiation (Aug 2025)
External platforms validate sustained demand for prediction markets and structured forecasting:
* Polymarket shows broad retail appetite for event driven real money markets (volume growth and continuous question turnover) while surfacing UX and regulatory trade off lessons.
* Kalshi operates within a regulated CFTC framework, signaling maturing compliance pathways for certain event contracts.
* Good Judgment Project (superforecaster cohorts) demonstrates that screening, feedback, and aggregation can raise accuracy relative to baselines.
* Metaculus illustrates the value of curated reasoning culture and transparent resolution history for community retention and signal extraction.
Differentiation: Thesis-Market combines a multi horizon megatrend focus (daily calibration to multi year theses), explicit talent funnel for endowment stewardship, and community wallet bounty amplification, rather than optimizing purely for breadth of short term events or generic tournament ranking.

### Multi Horizon Forecast Ladder
Purpose: Accelerate talent discovery while building credible long horizon track records.
Layers:
1. Fast Calibration: Daily or weekly binary or scaled prompts aligned with underlying megatrend drivers (1 to 30 day resolution) to quickly measure baseline calibration and update discipline.
2. Mid Horizon Milestones: Thematic questions (3 to 18 months) that decompose multi year theses into observable checkpoints (adoption metrics, regulatory milestones, scientific trial phases).
3. Long Horizon Theses: Structured multi year markets (5 to 10 year resolution definitions) requiring scenario trees and reasoning artifacts.
Mechanics:
* Promotion thresholds tie short and mid horizon performance and reasoning quality rubrics to long horizon access invites.
* Cross horizon linkage: Mid horizon milestones automatically reference the parent long horizon thesis ID for traceability.
* Data model implication: Forecast table needs horizon_type enum and parent_thesis_id foreign key for milestone linkage.
Intended Outcomes:
* Faster signal on forecaster discipline without waiting years.
* Higher quality reasoning corpus feeding manager screening.
* Reduced noise by filtering long horizon access to proven calibrated participants.

## OL Meta-Endowment Structure (Donor-Voice Accounts)

OL operates "donor-voice-accounts" as perpetual endowments that donors can monitor over time. In the medium term, OL must identify and onboard qualified investment managers for these endowments so that, in the long run, the collective capital is allocated to sensible, forward-looking, high-impact opportunities aligned with OL themes and $LBR value.

Implications:
- The business strategy is simple, but today’s primary constraint is recruiting: we historically attracted casual infrastructure "miners," not visionary thinkers and disciplined managers.
- Thesis-Market can serve as a discovery funnel for high-signal contributors whose demonstrated foresight (over megatrend markets) can inform manager recruitment and mandate design.

## Talent Attraction & Sub-DAO Manager Funnel

Purpose: Convert high-signal, lateral-thinking forecasters into candidates to steward donor-voice endowment sub-DAOs.

Why a curated prediction market attracts them:
- Cognitive Challenge Density: Carefully scoped, high-ambiguity, cross-domain megatrend markets create an intellectual arena that rewards synthesis over rote pattern chasing.
- Reputation as Portable Capital: A transparent, cryptographically timestamped forecast + reasoning trail acts as a public performance dossier more credible than self-reported credentials.
- Non-Commodity Incentives: Delayed, reputation-weighted payouts plus access to invitation-only long-horizon markets appeal to intrinsically motivated, status-sensitive thinkers rather than extractive mercenaries.
- Narrative Surface Area: Commentary threads and thesis articulation allow unconventional frameworks (second-order effects, systems thinking) to be surfaced and evaluated.
- Anti-Noise Curation: By excluding trivial/short-horizon hype markets, signal density stays high—this reduces opportunity cost for serious thinkers.

Signals that map to sub-DAO manager potential:
- Cross-Domain Correlation: Consistent above-median calibration across at least 3 distinct thematic clusters (e.g., AI, macro, bio).
- Thesis Quality Metrics: Peer-reviewed reasoning notes scoring high on clarity, falsifiability, and alternative scenario enumeration.
- Adversarial Robustness: Low degradation of forecast accuracy when confronted with stress-test prompts or counter-theses.
- Time-to-Revision Discipline: Timely Bayesian updates following new public information; penalize anchoring inertia.
- Portfolio Construction Proxy: Simulated capital allocation game (shadow portfolio) fed by their probability distributions vs realized outcomes.

Funnel Stages:
1. Open Screening Layer: Broad megatrend micro-questions (1–6 month horizon) to collect baseline calibration & reasoning samples.
2. Performance Triage: Automated scoring (Brier/log), variance normalization, cluster analysis to identify multi-domain strength.
3. Invite Cohort (Long-Horizon Track): Access to 5–10 year structured markets with mandatory thesis write-ups & scenario trees.
4. Shadow Mandate Simulation: Candidates manage a paper endowment allocation informed by their forecasts; tracked on risk-adjusted return proxies (information ratio analog using forecast deltas → simulated positions).
5. Governance Evaluation: Lightweight interviews + peer review of risk management memos and steward principles.
6. Sub-DAO Nomination: Top performers graduate to on-chain signaling vote for provisional manager roles with staged capital unlock.

Incentive & Safeguard Design:
- Reputation Staking: Managers bond a portion of accrued reputation tokens, slashable for misconduct (misreporting, manipulation attempts).
- Dual Layer Rewards: (a) Forecast accuracy & reasoning quality, (b) Shadow mandate performance alignment with declared risk policy.
- Collusion Resistance: Market curation + anomaly detection on correlated improbable forecast shifts; mandatory disclosure of external conflicts.
- Community Wallet Bounties & Prizes: Community-controlled wallets (e.g., donor-voice aligned pools) can sponsor themed market bounties and seasonal prize allocations, amplifying returns for consistently high calibration forecasters and accelerating talent discovery.
- Profit Expectation: Forecasters are economically motivated; accurate positions can yield profit subject to jurisdictional constraints. Reputation weighting and delayed components temper pure short term speculation.
 - Multi Horizon Integrity: Prevent horizon gaming (inflating short term performance without meaningful long term participation) by requiring minimum active long horizon thesis commitments and penalizing abandonment rates in reputation scoring.

Key Metrics (Manager Funnel):
- High-signal forecasters discovered per quarter (target v1: 50; manager-track candidates: 5–10).
- Cross-domain calibration stability (std dev of Brier across clusters).
- Shadow mandate tracking error vs benchmark thematic indices.
- Conversion rate: Invite Cohort → Manager Nomination.
- Bounty Amplification Efficiency: Additional high-signal forecasters discovered per bounty dollar vs baseline discovery rate.

Next Actions (Handoffs):
- Market Intelligence: Define thematic cluster taxonomy & baseline benchmarks for cross-domain calibration analysis.
- Technical Architect: Specify data model for forecast → shadow portfolio transformation & reputation staking mechanism.
- Product Strategy: Draft manager qualification rubric & publish evaluation transparency guidelines.

## Assumptions & Evidence Status
- Prediction markets can reliably surface private information and identify expert forecasters over long horizons. [Assumption → Market Intelligence to validate]
- Curated, theme-based markets will attract deep-thinking researchers more than open, short-term event markets. [Assumption → Market Intelligence to test with interviews/history]
- Purpose-built incentives (e.g., long-horizon payouts, reputation staking) will attract and retain high-signal contributors without creating mercenary behavior. [Assumption → Design + MI to prototype/test]
- Prediction-market track records can be a useful proxy signal for evaluating potential investment managers for donor-voice endowments. [Assumption → Market Intelligence to review literature/precedents]

## Strategic Guardrails (for agents)
- Do not optimize for generalized L1 adoption; prioritize $LBR value alignment and curated markets.
- Avoid incentive designs that reward pure volume or short-term activity; prefer long-horizon accuracy and calibration.
- Maintain high signal-to-noise: strict market curation around megatrends; resist event-churn.
- Keep operator rewards modest; channel surplus incentives to forecasters/researchers who add durable signal.

## Stage Gates (next 2 checkpoints)
1) Problem validation brief approved (Market Intelligence): evidence pack on curated megatrends markets, user ICP, historical efficacy of long-horizon prediction markets. Acceptance: 5+ citations, interview notes, risk assessment.
2) Incentive design v0 (Product/Tech): draft mechanisms and economic model (payout curves, reputation, anti-gaming). Acceptance: feasibility note from Technical Architect; basic cost-to-serve estimate.

## Handoffs
- To Market Intelligence: develop evidence pack for assumptions above; propose initial megatrend categories and example markets.
- To Technical Architect: outline minimal architecture for curated markets, reputation ledger, payout scheduling, and anti-Sybil controls; note constraints from low validator rewards.
- To Market Intelligence (endowments): scan for qualified impact/forward-looking investment managers and define evaluation criteria; assess whether prediction-market performance correlates with investment decision quality.
- To Product Strategy (bounties): design governance-lite process for community wallet bounty proposals, escrow, and transparent post-resolution distribution audit.

## Regulatory & Geo-Fencing Requirements
Purpose: Reduce regulatory exposure in jurisdictions where curated prediction markets could be interpreted as unregistered event-based derivatives or contract markets.

Policy (v0):
- Client software (web, desktop, mobile) MUST implement geo-fencing to restrict interactive functionality (account creation, order placement, payout claims) from IPs & verified residency in restricted jurisdictions (list to be maintained: e.g., US, CA, UK, EU member states, or any locale with explicit prohibition until licensed / exempt).
- Read-only market data access MAY remain globally available (unless advised otherwise) to preserve transparency while blocking economic participation.
- Mandatory affirmative attestation (jurisdiction & eligibility) at account creation and periodically (every 180 days) or upon detected location change.
- Evasion Safeguards: Detect and flag high-risk patterns (frequent VPN ASN switching, inconsistent timezone vs claimed jurisdiction) → trigger enhanced KYC or suspend trading.
- No encouragement or documentation of circumvention (explicit user messaging on blocked access reasoning).
- Logging: Retain (hashed/anonymized where possible) geo decision events for audit; avoid storing raw IP longer than necessary for compliance risk analysis.

Technical Implications:
- Middleware service to resolve geo (primary + fallback provider) with deterministic caching & signed decision object (jurisdiction_code, risk_flags, timestamp, ttl).
- Policy config file (on-chain reference hash optional) to allow agents / auditors to verify consistent enforcement across clients.
- Feature gating at API boundary (server side) plus defensive UI gating (client) to mitigate tampering.

Open Questions (refer to research backlog if elevated):
- Which jurisdictions allow limited-scope “play” or research markets under safe harbor frameworks?
- Cost/benefit of pursuing no-action relief vs. full licensing in top blocked markets.
- Threshold at which market depth / volume could reclassify activity under local regulatory definitions.

Next Actions:
- Legal/Compliance consultation to confirm initial restricted list & attestation wording.
- Technical Architect to draft geo service interface spec.
- Market Intelligence to benchmark competitor geo policies (Metaculus, Polymarket, Kalshi) for best practices.

## Truth sources & verification
- Claims requiring verification and citation:
	- OL prioritizes $LBR value over competing as a general-purpose L1. [Status: unverified]
	- Validator reward policy favors low operator rewards. [Status: unverified]
	- History of free mining and its recruitment effects. [Status: unverified]
	- Existence and design of donor-voice accounts (perpetual endowments). [Status: unverified]
	- Plan to onboard qualified investment managers for endowments. [Status: unverified]
- Market Intelligence: upon doc import, validate each claim with citations and timestamps; update this section with links and verification status.
