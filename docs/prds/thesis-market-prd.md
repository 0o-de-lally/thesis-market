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

Thesis-Market is a curated, multi-horizon prediction market that converts forecasting accuracy into a visible, portable reputation signal. It serves as a talent discovery and validation platform for high-signal thinkers who can demonstrate foresight across megatrends, ultimately supporting Open Libra's strategy to identify qualified stewards for donor-voice endowments.

**Primary User Problem:** There is no purpose-built venue for deep thinkers and researchers to participate in long-term megatrend forecasting while building a credible, portable track record of their judgment quality.

**Secondary Problem:** Open Libra needs a Schelling point to attract and identify high-signal contributors who can "see around corners" for eventual roles in donor-voice endowment stewardship.

## 2. Success Metrics

### Primary Metrics:
- **1,000 screening participants** within 6 months of launch
- **50 high-signal forecasters** identified across multiple domains within 6 months
- **70% retention rate** over 3 months for invite-only cohort participants

### Secondary Metrics:
- **Cross-domain calibration stability:** Top performers maintain above-median Brier scores across ≥3 thematic clusters
- **Reasoning quality improvement:** ≥20% improvement in peer-reviewed reasoning scores compared to immediate-payout control group
- **Shadow mandate simulation performance:** Top 10 performers achieve Information Ratio ≥0.5 in simulated portfolio management
- **Liquidity maintenance:** ≤15% degradation in market depth when delayed payouts are implemented

### Long-term Success Indicators:
- **Manager funnel conversion:** 5-10 forecasters qualified for donor-voice endowment manager evaluation annually
- **Reputation portability:** Thesis-Market track records accepted as credible signals by external parties
- **Platform sustainability:** Community wallet bounties and prizes amplify participant retention and discovery

## 3. User Stories

### Primary Users: Forecasters & Researchers
- **As a researcher,** I want to declare and test my long-term theses about technological and societal trends so that I can build a credible track record of my foresight.
- **As a forecaster,** I want to participate in carefully curated megatrend markets so that I can demonstrate my judgment quality without noise from trivial or short-term speculation.
- **As an analyst,** I want my forecasting performance to be scored transparently with industry-standard metrics so that my reputation is portable and verifiable.
- **As a deep thinker,** I want to access invitation-only long-horizon markets so that I can engage with serious intellectual challenges alongside other high-caliber participants.

### Secondary Users: Donor-Voice Endowment Stakeholders
- **As a donor,** I want to identify potential endowment managers through their demonstrated forecasting ability so that I can make informed decisions about capital stewardship.
- **As an endowment evaluator,** I want access to transparent, timestamped forecast histories with reasoning so that I can assess candidate managers' judgment quality over time.

### Platform Operators
- **As a platform operator,** I want to maintain high signal-to-noise ratios through curation so that serious thinkers remain engaged and extractive behavior is minimized.
- **As a compliance officer,** I want robust geo-fencing and attestation systems so that regulatory risk is minimized while maintaining global transparency.

## 4. Functional Requirements

### Core Forecasting Functionality
- **REQ-001:** Users must be able to submit probability forecasts on binary and scaled questions with mandatory reasoning commentary
- **REQ-002:** System must support three distinct forecast horizons: Fast Calibration (1-30 days), Milestone Markets (3-18 months), and Megatrend Theses (5-10 years)
- **REQ-003:** All forecasts must be timestamped and cryptographically signed to ensure integrity and prevent retroactive manipulation
- **REQ-004:** Users must be able to update their forecasts with new reasoning while maintaining full historical audit trail

### Multi-Horizon Portfolio Architecture
- **REQ-005:** Users must be able to declare explicit long-term theses that serve as umbrella frameworks for their forecasting activity
- **REQ-006:** System must link short and medium-horizon forecasts to parent long-term theses for coherence tracking
- **REQ-007:** Platform must calculate and display coherence scores based on consistency between linked forecasts and declared theses
- **REQ-008:** Users must be able to view their complete "portfolio of beliefs" showing all linked forecasts organized by thesis

### Reputation and Scoring System
- **REQ-009:** System must calculate and display Brier scores and logarithmic scores for all resolved markets
- **REQ-010:** Platform must maintain lifetime calibration metrics for each user across different question types and time horizons
- **REQ-011:** Reputation scores must incorporate accuracy, coherence, reasoning quality, and update discipline components
- **REQ-012:** System must support reputation staking where users can bond reputation tokens that are slashable for misconduct

### Access Control and Promotion System
- **REQ-013:** Platform must implement a tiered access system: Open Screening Layer → Performance Triage → Invite Cohort → Shadow Mandate Simulation
- **REQ-014:** System must automatically promote users between tiers based on objective performance thresholds and minimum participation requirements
- **REQ-015:** Invitation-only long-horizon markets must be accessible only to users who have demonstrated consistent calibration across multiple domains

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
- **Social features beyond reasoning commentary:** No general messaging, friend systems, or gamification elements unrelated to forecast quality
- **Integration with external trading platforms:** Shadow mandate simulation will be self-contained without live market connectivity

### Future Considerations (Post-MVP)
- **Direct donor-voice endowment integration:** Actual capital allocation authority pending compliance review and governance development
- **Automated market making:** Initial markets will use community-provided liquidity rather than algorithmic market makers
- **Cross-platform reputation import:** Integration with existing forecasting platform track records
- **Advanced governance features:** Voting systems and formal manager selection processes

### Explicitly Excluded
- **Short-term event speculation:** Sports, entertainment, or other low-signal high-noise markets
- **Cryptocurrency price prediction:** Focus on fundamental trends rather than asset price movements
- **User-generated content moderation:** Reasoning quality will be peer-reviewed rather than algorithmically moderated
- **Customer support chat systems:** Users will access support through structured channels rather than real-time chat

## 7. Acceptance Criteria

### Core Platform Functionality
- **AC-001:** User can successfully create account, complete attestation, and submit first forecast within 5 minutes
- **AC-002:** All forecast submissions include mandatory reasoning commentary of minimum 100 words
- **AC-003:** System accurately calculates and displays Brier scores within 24 hours of market resolution
- **AC-004:** Users can view complete audit trail of their forecast history including all updates and timestamps

### Multi-Horizon Integration
- **AC-005:** Users can successfully link short-term forecasts to declared long-term theses with coherence scores updating automatically
- **AC-006:** System promotes users from screening layer to invite cohort based on achieving >median calibration across ≥3 domains
- **AC-007:** Shadow mandate simulation accurately reflects user forecast distributions in simulated portfolio performance

### Quality and Curation
- **AC-008:** Market resolution follows documented criteria with independent data source verification and <5% dispute rate
- **AC-009:** Reputation staking system successfully deters manipulation attempts with <1% false positive penalty rate
- **AC-010:** Community bounty system enables donors to sponsor markets and distribute prizes transparently

### Compliance and Security
- **AC-011:** Geo-fencing system blocks interactive access from prohibited jurisdictions while maintaining read-only transparency
- **AC-012:** Anomaly detection system flags suspicious forecast patterns with manual review completing within 48 hours
- **AC-013:** All user data can be exported in standard format for reputation portability verification

## 8. Technical Requirements Summary

### Data Architecture
- Forecast database with cryptographic signatures and immutable audit trails
- Multi-dimensional reputation scoring engine with real-time calculation capabilities
- Shadow portfolio simulation engine with traditional finance metric calculations
- Market resolution framework with multiple data source integration

### Integration Points
- Geo-location services for compliance enforcement
- Community wallet systems for bounty distribution
- External data feeds for market resolution
- Notification systems for forecast updates and market events

### Security Infrastructure
- Public key cryptography for forecast signing
- Anomaly detection algorithms for anti-gaming
- Comprehensive logging and audit trail systems
- Privacy-preserving reputation calculation methods

This PRD establishes the foundation for building Thesis-Market as a purpose-built talent discovery and validation platform that serves Open Libra's strategic objectives while creating genuine value for serious forecasters and researchers.
