# Product Requirements Document: Thesis-Market

---
**Document Status:** Draft
**Version:** 1.0
**Last Updated:** 2025-08-13
**Owner:** @product_strategy_agent
**Template Version:** 1.0
**Required Fields:** ["problem_statement", "success_metrics", "user_stories", "acceptance_criteria", "technical_requirements"]
**Validation Criteria:** ["must_include_measurable_success_metrics", "acceptance_criteria_must_be_testable", "technical_requirements_reviewed_by_architect"]
**Agent Instructions:** "Ensure requirements are specific, measurable, and testable. Cross-reference with strategy brief for alignment. Include both functional and non-functional requirements."
---

## 1. Objective

Thesis-Market is a curated, multi-horizon prediction market that converts forecasting accuracy into a visible, portable reputation signal through team-based thesis validation. Users progress from individual short-term challenges to forming or joining thesis teams around specific worldviews (e.g., "AI doomer," "biotech revolution"), enabling collaborative forecasting and copy-trading opportunities. The platform serves as a talent discovery and validation platform for high-signal thinkers who can demonstrate foresight across megatrends, ultimately supporting Open Libra's strategy to identify qualified stewards for donor-voice endowments.

**Primary User Problem:** There is no purpose-built venue for deep thinkers and researchers to participate in long-term megatrend forecasting while building a credible, portable track record through team-based thesis validation and copy-trading mechanisms.

**Secondary Problem:** Open Libra needs a Schelling point to attract and identify high-signal contributors who can "see around corners" for eventual roles in donor-voice endowment stewardship, while providing mechanisms for broader participation through copy-trading successful thesis teams.

**Tertiary Problem:** Individual forecasters lack pathways to scale their insights through team formation and collaborative thesis development, limiting the network effects of high-quality forecasting.

## 2. Success Metrics

### Primary Metrics:
- **1,000 screening participants** within 6 months of launch completing daily/weekly short-term market challenges
- **50 high-signal forecasters** progressing to thesis team formation across multiple domains within 6 months
- **20 active thesis teams** with sustained forecasting activity and member engagement
- **70% retention rate** over 3 months for thesis team members

### Team and Copy-Trading Metrics:
- **500 copy-trading relationships** established between end users and thesis teams within 9 months
- **Average team size of 5-8 members** per active thesis with balanced contribution patterns
- **15% monthly growth** in copy-trading volume following successful thesis team milestones
- **Community sweetener pool utilization rate** of 80% with milestone rewards driving engagement

### Secondary Metrics:
- **Cross-domain calibration stability:** Top performing thesis teams maintain above-median Brier scores across ≥3 thematic clusters
- **Reasoning quality improvement:** ≥20% improvement in peer-reviewed reasoning scores compared to individual-only control group
- **Shadow mandate simulation performance:** Top 10 thesis teams achieve Information Ratio ≥0.5 in simulated portfolio management
- **Liquidity maintenance:** ≤15% degradation in market depth when delayed payouts are implemented

### Long-term Success Indicators:
- **Manager funnel conversion:** 5-10 thesis team leaders qualified for donor-voice endowment manager evaluation annually
- **Reputation portability:** Thesis-Market track records accepted as credible signals by external parties
- **Platform sustainability:** Community wallet bounties and sweetener rewards amplify participant retention and discovery
- **Thesis diversity:** 30+ distinct thesis categories with active teams representing diverse worldview clusters

## 3. User Stories

### Primary Users: Individual Forecasters Progressing Through Challenges
- **As a new user,** I want to complete daily and weekly short-term forecasting challenges so that I can build a winning streak and unlock access to thesis team formation.
- **As a forecaster,** I want to declare and test my long-term theses about technological and societal trends through team formation so that I can build a credible track record with collaborative validation.
- **As a successful short-term forecaster,** I want to create a thesis team around my worldview (e.g., "AI doomer") so that I can attract like-minded forecasters and scale my insights.
- **As a researcher,** I want to join multiple thesis teams that align with my expertise areas so that I can contribute to diverse collaborative forecasting efforts.
- **As a team member,** I want my individual forecasting performance to contribute to our team's reputation score so that collective intelligence amplifies individual contributions.

### Copy-Trading Users: End Users Following Thesis Teams
- **As an end user,** I want to copy-trade the forecasting decisions of successful thesis teams so that I can benefit from their expertise without developing my own forecasting skills.
- **As a copy-trader,** I want to see transparent performance metrics for different thesis teams so that I can make informed decisions about which teams to follow.
- **As a casual participant,** I want to diversify my copy-trading across multiple thesis teams with different worldviews so that I can hedge my exposure to any single perspective.

### Thesis Team Leaders and Contributors
- **As a thesis team leader,** I want to set clear criteria for team membership and contribution expectations so that we maintain high-quality collaborative forecasting.
- **As a team contributor,** I want to see how my individual scores impact our collective team performance so that I can optimize my contributions to team success.
- **As a team member,** I want access to milestone rewards from the community sweetener pool when our team achieves significant forecasting successes.

### Secondary Users: Donor-Voice Endowment Stakeholders
- **As a donor,** I want to identify potential endowment managers through their demonstrated thesis team leadership and forecasting ability so that I can make informed decisions about capital stewardship.
- **As an endowment evaluator,** I want access to transparent, timestamped forecast histories with reasoning from both individuals and thesis teams so that I can assess candidate managers' judgment quality and collaborative leadership over time.

### Platform Operators
- **As a platform operator,** I want to maintain high signal-to-noise ratios through curation so that serious thinkers remain engaged and extractive behavior is minimized.
- **As a compliance officer,** I want robust geo-fencing and attestation systems so that regulatory risk is minimized while maintaining global transparency.

## 4. Functional Requirements

### Challenge-Based Progression System
- **REQ-001:** New users must complete daily and weekly short-term forecasting challenges to establish initial calibration and unlock team formation privileges
- **REQ-002:** System must track winning streaks on short-term markets (closing daily or weekly) as qualification criteria for thesis team access
- **REQ-003:** Users must achieve minimum performance thresholds on challenge markets before gaining rights to create or join thesis teams
- **REQ-004:** Challenge system must provide clear progression feedback showing users their advancement toward team formation eligibility

### Core Forecasting Functionality
- **REQ-005:** Users must be able to submit probability forecasts on binary and scaled questions with mandatory reasoning commentary
- **REQ-006:** System must support three distinct forecast horizons: Fast Calibration (1-30 days), Milestone Markets (3-18 months), and Megatrend Theses (5-10 years)
- **REQ-007:** All forecasts must be timestamped and cryptographically signed to ensure integrity and prevent retroactive manipulation
- **REQ-008:** Users must be able to update their forecasts with new reasoning while maintaining full historical audit trail

### Thesis Team Formation and Management
- **REQ-009:** Qualified users must be able to create thesis teams with descriptive phrases (e.g., "AI doomer," "biotech revolution," "energy transition skeptic")
- **REQ-010:** Users must be able to join multiple thesis teams simultaneously without restriction on team count
- **REQ-011:** Thesis team creators must be able to set team description, membership criteria, and contribution expectations
- **REQ-012:** System must support team invitation systems where leaders can recruit specific forecasters based on their track records
- **REQ-013:** Teams must have governance mechanisms for removing inactive or disruptive members through consensus voting

### Team Score Propagation and Aggregation
- **REQ-014:** Individual user forecasting scores must automatically propagate to all thesis teams they belong to using weighted contribution algorithms
- **REQ-015:** Team scores must aggregate individual member performance using reputation-weighted averages with decay factors for inactive members
- **REQ-016:** System must calculate and display team-level Brier scores, calibration metrics, and reasoning quality scores
- **REQ-017:** Team performance metrics must be updated in real-time as individual member forecasts are submitted and resolved

### Copy-Trading Infrastructure
- **REQ-018:** End users must be able to follow and automatically copy the forecasting decisions of individual thesis teams
- **REQ-019:** Copy-trading system must support portfolio allocation where users can distribute their following across multiple thesis teams
- **REQ-020:** Platform must provide transparent performance dashboards for all thesis teams to inform copy-trading decisions
- **REQ-021:** Copy-traders must be able to set risk limits and automatic stop-loss triggers based on team performance degradation
- **REQ-022:** System must track and display copy-trading volume and follower counts for each thesis team

### Milestone Rewards and Sweetener Pool
- **REQ-023:** Platform must maintain a community-funded "sweetener" rewards pool that any users can contribute to
- **REQ-024:** System must define and track milestone achievements for thesis teams (e.g., calibration thresholds, winning streaks, accuracy targets)
- **REQ-025:** Automated reward distribution must trigger when thesis teams achieve predefined milestones, drawing from the sweetener pool
- **REQ-026:** Community wallet contributions to the sweetener pool must be transparent with donor recognition and allocation tracking
- **REQ-027:** Milestone reward amounts must scale based on achievement difficulty and available sweetener pool balance

### Multi-Horizon Portfolio Architecture
- **REQ-028:** Users must be able to declare explicit long-term theses that serve as umbrella frameworks for their forecasting activity
- **REQ-029:** System must link short and medium-horizon forecasts to parent long-term theses for coherence tracking
- **REQ-030:** Platform must calculate and display coherence scores based on consistency between linked forecasts and declared theses
- **REQ-031:** Users must be able to view their complete "portfolio of beliefs" showing all linked forecasts organized by thesis

### Reputation and Scoring System
- **REQ-032:** System must calculate and display Brier scores and logarithmic scores for all resolved markets at both individual and team levels
- **REQ-033:** Platform must maintain lifetime calibration metrics for each user and thesis team across different question types and time horizons
- **REQ-034:** Reputation scores must incorporate accuracy, coherence, reasoning quality, team contribution, and update discipline components
- **REQ-035:** System must support reputation staking where users can bond reputation tokens that are slashable for misconduct

### Access Control and Promotion System
- **REQ-036:** Platform must implement a tiered access system: Challenge Layer → Team Formation → Advanced Markets → Shadow Mandate Simulation
- **REQ-037:** System must automatically promote users between tiers based on objective performance thresholds and minimum participation requirements
- **REQ-038:** Advanced long-horizon markets must be accessible only to thesis team members who have demonstrated consistent calibration

### Market Curation and Resolution
- **REQ-016:** Platform must support only carefully curated megatrend markets focused on AI adoption, biotechnology progress, energy transitions, economic development, and other high-impact themes
- **REQ-017:** All markets must have precise, unambiguous resolution criteria defined before opening
- **REQ-018:** System must support independent, trusted data sources for market resolution with transparent adjudication processes
- **REQ-019:** Platform must implement staged resolution for long-horizon markets with interim calibration checkpoints

### Economic Incentives and Payouts
- **REQ-020:** System must support delayed, reputation-weighted payouts to discourage short-term mercenary behavior
- **REQ-021:** Platform must implement community wallet bounty systems where donors can sponsor themed market prizes
- **REQ-022:** Payout calculations must account for position timing, hold duration, and forecast update patterns to reward commitment
- **REQ-023:** System must support both direct forecast winnings and reputation-based multipliers

### Shadow Mandate Simulation
- **REQ-024:** Platform must provide a simulated portfolio management interface where users can allocate virtual capital based on their forecast distributions
- **REQ-025:** Shadow mandate performance must be tracked using risk-adjusted return metrics comparable to traditional investment management benchmarks
- **REQ-026:** System must generate periodic reports on shadow mandate performance for potential endowment manager evaluation

## 5. Non-Functional Requirements

### Performance Requirements
- **NFR-001 (Latency):** Forecast submission and updates must complete within 2 seconds under normal load
- **NFR-002 (Throughput):** System must support 10,000 concurrent users with <5% degradation in response times
- **NFR-003 (Availability):** Platform must maintain 99.5% uptime excluding scheduled maintenance windows

### Security and Compliance Requirements
- **NFR-004 (Geo-fencing):** Client applications must implement IP-based geo-fencing to restrict interactive functionality from prohibited jurisdictions while maintaining read-only access
- **NFR-005 (Data Integrity):** All forecast data must be cryptographically signed and tamper-evident with full audit trails
- **NFR-006 (Privacy):** User data must be minimized and anonymized where possible while maintaining reputation portability
- **NFR-007 (Attestation):** Users must complete mandatory jurisdiction and eligibility attestations at account creation and every 180 days

### Scalability and Reliability
- **NFR-008 (Data Retention):** System must permanently retain all forecast data, reasoning commentary, and reputation calculations for audit purposes
- **NFR-009 (Backup and Recovery):** Complete system state must be recoverable within 4 hours of any failure scenario
- **NFR-010 (Cross-Platform):** Platform must provide consistent functionality across web, desktop, and mobile interfaces

### User Experience Requirements
- **NFR-011 (Accessibility):** Platform must comply with WCAG 2.1 AA accessibility standards
- **NFR-012 (Transparency):** All scoring algorithms, reputation calculations, and market resolution processes must be publicly documented and auditable
- **NFR-013 (Internationalization):** Core platform functionality must support multiple languages and timezone preferences

### Anti-Gaming and Fraud Prevention
- **NFR-014 (Sybil Resistance):** System must implement anomaly detection for correlated forecast patterns and suspicious account behavior
- **NFR-015 (Market Manipulation):** Platform must monitor for coordinated manipulation attempts and implement automatic flagging systems
- **NFR-016 (VPN Detection):** Geo-fencing system must detect and flag high-risk patterns like frequent VPN switching or timezone inconsistencies

## 6. Out of Scope

### Excluded for Initial Release
- **General-purpose prediction markets:** Only curated megatrend markets will be supported; no user-generated or trivial event markets
- **Real-time trading interfaces:** Focus on deliberate forecasting rather than high-frequency trading mechanics
- **Advanced social features beyond team formation:** No general messaging, friend systems, or gamification elements unrelated to forecast quality
- **Cross-platform copy-trading:** Copy-trading limited to thesis teams within platform; no external platform integration
- **Automated team formation:** Teams must be manually created and joined; no algorithmic team matching

### Future Considerations (Post-MVP)
- **Direct donor-voice endowment integration:** Actual capital allocation authority pending compliance review and governance development
- **Advanced copy-trading features:** Stop-loss automation, rebalancing algorithms, and sophisticated risk management tools
- **Cross-platform reputation import:** Integration with existing forecasting platform track records
- **Advanced governance features:** Voting systems for platform decisions and formal manager selection processes
- **Team competition leagues:** Structured tournaments and head-to-head team competitions with prizes

### Explicitly Excluded
- **Short-term event speculation:** Sports, entertainment, or other low-signal high-noise markets
- **Cryptocurrency price prediction:** Focus on fundamental trends rather than asset price movements
- **Real-money copy-trading:** Copy-trading limited to reputation and platform rewards; no real-money investment products
- **Automated market making:** Initial markets will use community-provided liquidity rather than algorithmic market makers
- **Team chat and communication:** Teams coordinate through structured forecasting commentary rather than general messaging

## 7. Acceptance Criteria

### Challenge Progression and Team Formation
- **AC-001:** New user can complete daily/weekly challenges and track winning streak progress toward team formation eligibility
- **AC-002:** User achieving minimum performance threshold can successfully create thesis team with descriptive name and criteria
- **AC-003:** Qualified user can join multiple thesis teams simultaneously and see combined team affiliations in profile
- **AC-004:** Team leader can invite specific users, set membership criteria, and manage team composition through governance tools

### Core Platform Functionality
- **AC-005:** User can successfully create account, complete attestation, and submit first forecast within 5 minutes
- **AC-006:** All forecast submissions include mandatory reasoning commentary of minimum 100 words
- **AC-007:** System accurately calculates and displays individual and team-level Brier scores within 24 hours of market resolution
- **AC-008:** Users can view complete audit trail of their forecast history including all updates and timestamps

### Team Score Propagation and Performance
- **AC-009:** Individual user scores automatically update team performance metrics using weighted contribution algorithms
- **AC-010:** Team performance dashboards display real-time aggregated metrics for accuracy, calibration, and reasoning quality
- **AC-011:** Users can view their individual contribution impact on each thesis team they belong to
- **AC-012:** Team rankings update automatically and reflect changes in member performance and participation

### Copy-Trading Functionality
- **AC-013:** End user can successfully follow thesis team and automatically copy their forecasting decisions
- **AC-014:** Copy-trading portfolio allows allocation across multiple teams with adjustable weighting and risk limits
- **AC-015:** Performance tracking shows copy-trading returns compared to following individual teams vs. manual forecasting
- **AC-016:** Copy-traders can set stop-loss triggers that automatically cease following underperforming teams

### Milestone Rewards and Sweetener Pool
- **AC-017:** Community members can contribute to sweetener pool with transparent tracking of donations and current balance
- **AC-018:** Milestone achievements automatically trigger reward distribution to qualifying thesis teams from available pool
- **AC-019:** Reward amounts scale appropriately based on achievement difficulty and pool balance with clear calculation methodology
- **AC-020:** Team milestone notifications inform members of rewards earned and individual share allocations

### Multi-Horizon Integration
- **AC-021:** Users can successfully link short-term forecasts to declared long-term theses with coherence scores updating automatically
- **AC-022:** System promotes users from challenge layer to team formation based on achieving performance thresholds across domains
- **AC-023:** Shadow mandate simulation accurately reflects team-level forecast distributions in simulated portfolio performance

### Quality and Curation
- **AC-024:** Market resolution follows documented criteria with independent data source verification and <5% dispute rate
- **AC-025:** Reputation staking system successfully deters manipulation attempts with <1% false positive penalty rate
- **AC-026:** Community bounty system enables donors to sponsor markets and distribute prizes transparently to winning teams

### Compliance and Security
- **AC-027:** Geo-fencing system blocks interactive access from prohibited jurisdictions while maintaining read-only transparency
- **AC-028:** Anomaly detection system flags suspicious forecast patterns and coordinated team behavior with manual review completing within 48 hours
- **AC-029:** All user and team data can be exported in standard format for reputation portability verification

## 8. Technical Requirements Summary

### Data Architecture
- Forecast database with cryptographic signatures and immutable audit trails
- Multi-dimensional reputation scoring engine with real-time calculation capabilities for individuals and teams
- Team management system with membership tracking, governance voting, and score propagation algorithms
- Copy-trading engine with portfolio allocation, risk management, and performance tracking
- Milestone tracking system with automated reward distribution from sweetener pool
- Shadow portfolio simulation engine with traditional finance metric calculations
- Market resolution framework with multiple data source integration

### Integration Points
- Geo-location services for compliance enforcement
- Community wallet systems for sweetener pool contributions and reward distribution
- External data feeds for market resolution
- Notification systems for forecast updates, team activities, milestone achievements, and market events
- Copy-trading API for automated forecast replication and portfolio management

### Security Infrastructure
- Public key cryptography for forecast signing and team governance decisions
- Anomaly detection algorithms for anti-gaming, coordinated manipulation, and sybil resistance
- Team-level fraud detection for coordinated forecasting patterns and vote manipulation
- Comprehensive logging and audit trail systems for individual and team activities
- Privacy-preserving reputation calculation methods with selective disclosure controls

### Team and Copy-Trading Infrastructure
- Team formation and membership management system with invitation and governance controls
- Real-time score aggregation engine computing team performance from individual member contributions
- Copy-trading matching system with automated forecast replication and risk management
- Milestone achievement tracking with configurable criteria and automated reward triggers
- Community sweetener pool management with transparent contribution tracking and distribution

This PRD establishes the foundation for building Thesis-Market as a purpose-built talent discovery and validation platform that serves Open Libra's strategic objectives while creating genuine value for serious forecasters through team-based thesis validation, copy-trading opportunities, and milestone-based community rewards.
