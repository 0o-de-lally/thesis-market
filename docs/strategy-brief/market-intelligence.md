
# Vision-Market — Market Intelligence Evidence Pack

**Topic:** Historical case studies on long-horizon forecasting, forecaster recruitment, and implications for a curated megatrend prediction market.
**Prepared for:** Market Intelligence handoff (Vision-Market / Open Libra)
**Date:** 2025-08-12

---

## Executive summary (TL;DR)

* Carefully designed forecasting tournaments and platforms such as the Good Judgment Project (GJP) and Metaculus consistently show that *screening, training, and aggregation* produce forecasters who outperform baselines and many domain experts. ([Good Judgment][1], [Metaculus][2])
* Long-horizon forecasting (multi-year) is **harder**, less studied, and requires precise resolution definitions and benchmarks because predictive power decays with horizon. New research (e.g., HoTPP) highlights methodological gaps and evaluation pitfalls. ([arXiv][3])
* Recruitment funnels that combine open questions, objective scoring (Brier/log), and targeted training reliably surface high-signal participants (“superforecasters”); platform features — reputation, commentary, calibration feedback — materially increase signal retention. ([Stanford University][4], [Good Judgment][5])

---

## Selected high-value quotes (short)

* “These elite Superforecasters exceeded the many forecasting accuracy targets set by IARPA, and notably were over 30% more accurate than US intelligence analysts.” ([Good Judgment][1])
* “Metaculus … an aggregation engine working to improve human reasoning and coordination on topics of global importance.” ([Metaculus][2])
* “HoTPP … the first benchmark designed explicitly for evaluating long-horizon MTPP predictions.” ([arXiv][3])

---

## Case studies & what they show

### Good Judgment Project / Good Judgment Open (GJP / GJO)

* What: IARPA’s ACE program incubated the Good Judgment Project; subsequent GJO operations and commercial services formalize recruitment, training (FAST-style), and scoring. ([iarpa.gov][6], [Good Judgment][5])
* Core findings: Small, well-trained teams of high-calibration individuals (superforecasters) consistently outperform naive baselines and many domain experts across multiple event types. Performance is measured and improved with Brier/log scoring and iterative feedback. ([Good Judgment][1], [Stanford University][4])
* Recruiting mechanics that worked: open public questions → objective scoring → invite top performers into elite cohorts + training → deeper engagement & higher accuracy. ([Good Judgment Open][7], [Good Judgment][8])

### Metaculus

* What: A public, large-scale forecasting platform with transparent resolution history, community discussion, and benchmarks (notably in AI and bio risk domains). ([Metaculus][2])
* Core findings: Aggregation improves outcomes; participation scale helps; community features (explain-your-forecast) increase signal discovery; “pro” or highly active forecasters often outperform baselines on complex questions. ([arXiv][9], [Metaculus][10])

### Academic & methodological literature (limits & gaps)

* Replication and critique work shows that superforecasting advantages vary by question type and sample size — infer cautiously and avoid assuming uniform outperformance across all domains. ([PMC][11], [arXiv][9])
* Long-horizon forecasting has unique evaluation challenges (false positives/negatives, event timing fuzziness). HoTPP (2024) introduces T-mAP and stresses that strong next-event models may fail at true long-horizon tasks; specialized benchmarks and metrics are required. ([arXiv][3])

---

## Implications for Vision-Market (design takeaways)

1. **Use an open → invite pipeline.**
   Run frequent, shorter public questions to recruit and score participants; promote top performers to invite-only long-horizon cohorts (mirrors GJP funnel mechanics). ([Good Judgment Open][7])

2. **Invest in screening & training.**
   Implement FAST-style micro-training, calibration feedback, and participation thresholds (e.g., minimum N forecasts) to reliably surface calibrated forecasters. ([Stanford University][4])

3. **Build robust reputation & scoring primitives.**
   Anchor scoring on Brier/log scores, show lifetime calibration, and make reputation portable/visible for endowment evaluation. Reputation should influence payout weighting for long-horizon markets. ([Good Judgment][1])

4. **Design payout & anti-mercenary guardrails.**
   Options: delayed payouts until resolution, reputation-weighted returns, donor bounties, and streak/collective accuracy multipliers. Expect tradeoffs — tighter guardrails reduce liquidity but increase signal quality. ([Good Judgment][8])

5. **Treat long-horizon markets as research products.**
   Use precise resolution criteria, independent data sources for adjudication, and staged horizons (e.g., interim calibration checkpoints) to manage horizon decay risk. Leverage HoTPP insights on metrics and benchmarks. ([arXiv][3])

6. **Leverage public commentary as discovery content.**
   Encourage reasoning posts linked to forecasts — these produce intellectual artifacts useful for donor trust, manager recruitment, and qualitative signals beyond raw accuracy. ([Metaculus][10])

---

## Recommended 6-month pilot (operational sketch)

**Goal:** Validate recruitment funnel and surface 50+ high-signal forecasters for invite-only cohorts; evaluate feasibility of reputation-weighted payouts.

**Pilot components**

1. **Question sets (parallel):**

   * 12 short/higher-frequency screening questions (1–6 month horizons) — open to public.
   * 6 curated long-horizon megatrend markets (5–10 year resolution windows) — open initially; top respondents eligible for invite cohorts.
2. **Scoring & thresholds:**

   * Score all participants with Brier and log scores; require participation in ≥6 screening questions to qualify for cohort review.
   * After 3 months, invite top 5–10% into a closed cohort for deeper long-horizon markets and commentary tasks.
3. **Incentives:**

   * Small immediate token rewards for screening questions (on-chain micro-payouts).
   * Long-horizon payouts delayed until resolution; reputation multiplier applied at distribution.
   * Donor bounties on 1–2 pilot markets to test donor-linked incentives.
4. **Metrics / KPIs (by month 6):**

   * Number of active forecasters (target: 1,000 screening participants).
   * Calibration & Brier score distribution; mean Brier improvement vs. baseline.
   * Cohort retention (3-month retention for invitees) and commentary volume (avg words/forecast).
   * Cost per high-signal forecaster discovered (Ops + payouts / confirmed invitee).
5. **Technical & governance:**

   * Define market resolution rules and trusted data sources up front.
   * Put reputation ledger drafts to Technical Architect for feasibility (on-chain vs off-chain hybrid).

---

## Risks & mitigations

* **Risk:** Long-horizon questions have weak signal / slow feedback → *Mitigate:* Use staged horizons and interim calibration checkpoints; run proxy short/medium-horizon questions alongside. ([arXiv][3])
* **Risk:** Mercenary behavior / gaming → *Mitigate:* Delayed payouts, reputation weighting, required commentary, and donor-funded bounties aimed at quality, not volume. ([Good Judgment][8])
* **Risk:** Overreliance on forecast performance for hiring investment managers → *Mitigate:* Treat track record as one signal among many; require separate due diligence and performance verification. ([Good Judgment][1])

---

## Concrete next steps for Market Intelligence (handoff checklist)

1. Pull 5–8 canonical papers/reports (GJP IARPA ACE materials, superforecasters PDF, HoTPP, Metaculus benchmarking paper, 1–2 replication/critique papers). (I’ve linked a starter set below.) ([iarpa.gov][6], [Good Judgment][1], [arXiv][3])
2. Conduct 8–12 expert interviews (AI, biotech, macroeconomics) to test whether curated megatrend questions would attract them (script + incentive plan ready). ([Metaculus][10])
3. Deliver a short gap analysis memo mapping Vision-Market design choices to long-horizon evaluation pitfalls (use HoTPP metrics as basis). ([arXiv][3])

---

## Sources (starter list / clickable)

* Good Judgment — Superforecasters overview & track record. ([Good Judgment][1])
* Good Judgment / Good Judgment Open (platform & services). ([Good Judgment][5], [Good Judgment Open][7])
* Metaculus (platform overview; notebooks & community materials). ([Metaculus][2])
* HoTPP Benchmark: Are We Good at the Long Horizon Events Forecasting? (arXiv / 2024). ([arXiv][3])
* Replication / critical review: “Superforecasting reality check” (PMC / 2019). ([PMC][11])
* IARPA ACE program overview (context / origin of GJP). ([iarpa.gov][6])
* Research on LLM assistance improving forecasting accuracy (context on human+AI synergy). ([arXiv][12])

---


[1]: https://goodjudgment.com/wp-content/uploads/2021/10/Superforecasters-A-Decade-of-Stochastic-Dominance.pdf?utm_source=chatgpt.com "[PDF] Superforecasters: A Decade of Stochastic Dominance"
[2]: https://www.metaculus.com/?utm_source=chatgpt.com "Metaculus"
[3]: https://arxiv.org/abs/2406.14341?utm_source=chatgpt.com "HoTPP Benchmark: Are We Good at the Long Horizon Events Forecasting?"
[4]: https://web.stanford.edu/~knutson/jdm/mellers15.pdf?utm_source=chatgpt.com "[PDF] Identifying and Cultivating Superforecasters as a Method of ..."
[5]: https://goodjudgment.com/services/good-judgment-open/?utm_source=chatgpt.com "Practice forecasting and train your team at Good Judgment Open"
[6]: https://www.iarpa.gov/research-programs/ace?utm_source=chatgpt.com "ACE - IARPA"
[7]: https://www.gjopen.com/?utm_source=chatgpt.com "Good Judgment® Open"
[8]: https://goodjudgment.com/resources/the-superforecasters-track-record/?utm_source=chatgpt.com "The Superforecasters' Track Record - Good Judgment"
[9]: https://arxiv.org/html/2312.09081v1/?utm_source=chatgpt.com "Forecasting skill of a crowd-prediction platform: A comparison ... - arXiv"
[10]: https://www.metaculus.com/notebooks/28701/why-forecasting-an-introduction-for-first-timers/?utm_source=chatgpt.com "Why Forecasting? An Introduction for First-Timers - Metaculus"
[11]: https://pmc.ncbi.nlm.nih.gov/articles/PMC7333631/?utm_source=chatgpt.com "Superforecasting reality check: Evidence from a small pool of ..."
[12]: https://arxiv.org/pdf/2402.07862?utm_source=chatgpt.com "[PDF] LLM Assistants Improve Human Forecasting Accuracy - arXiv"
