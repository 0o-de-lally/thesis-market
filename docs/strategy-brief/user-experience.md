# User Experience
## portfolio-of-beliefs

At a high level, we'd like a user to declare a "thesis" for how they see the world playing out. And then bets placed in markets of different timelines that would validate that thesis.

# Structure

1. **The thesis** = the coherent worldview or strategic outlook a user publicly commits to.
2. **The bets** = individual market positions (short or long horizon) that are logically consistent with that thesis.
3. **The score/reputation** = based not just on raw accuracy, but on *coherence over time* and *follow-through*.

Here’s how you could tie short-term markets and long-term forecasts into that framework.

---

## **High-Level Architecture**

* **Layer 1: Thesis Layer**

  * Users declare a long-term thesis (e.g., "AI capability growth will double every \~18 months until 2030").
  * Theses can have an explicit expiration date (e.g., 5 years) and linked thematic tags.
  * Theses are public, creating skin in the game for credibility.

* **Layer 2: Market Participation Layer**

  * Each trade, whether short-term or long-term, is linked to one or more theses the user has declared.
  * Markets can be daily/weekly fun micro-markets *or* serious long-horizon forecasts.
  * Short-term markets become “evidence points” that incrementally validate or falsify parts of the thesis.

* **Layer 3: Scoring & Aggregation Layer**

  * A **coherence score**: how consistently trades align with the thesis over time.
  * An **accuracy score**: Brier score / log score for resolved markets.
  * A **commitment score**: rewards locking in positions early & holding through volatility.
  * A **thesis lifetime score**: a long-running measure of whether the thesis predictions played out.

---

## **Scoring / Reputation Design**

1. **Base Accuracy**

   * Use standard forecast scoring (Brier, log) for resolved markets.
   * Apply higher weight to markets closer to the thesis' core premise.

2. **Commitment Bonus**

   * Reward users who place positions **early** in the market life and hold them without frequent changes.
   * Decay the commitment bonus if the user changes their forecast too often without strong rationale.
   * Could be implemented via:

     * **Time-weighted scoring** (score × % of market lifetime held).
     * **Position integrity** metric: % of total stake that was held consistently from X% of market lifetime until close.

3. **Coherence Score**

   * Track whether short-term market results are consistent with the thesis trajectory.
   * Penalize contradictory positions across markets (unless thesis is updated).
   * Could be computed as:

     ```
     Coherence = (# of markets aligned with thesis outcome) / (total linked markets)
     ```

4. **Portfolio Score**

   * Aggregate all linked markets into a *thesis performance portfolio*.
   * Score is weighted more heavily toward long-term outcomes but informed by short-term evidence.
   * Think of it like fantasy sports: each “player” in your roster is a forecast, and their stats roll up into the team (thesis) performance.

5. **Reputation Tiers**

   * Combine all scores into public **reputation tiers** (Novice → Analyst → Oracle).
   * Higher tiers could give multipliers on winnings, early access to high-profile markets, or governance rights.

---

## **Why This Works for Short + Long-Term Integration**

* **Short-term markets** provide rapid feedback loops & user engagement.
* **Long-term markets** anchor users in their declared worldview.
* Scoring rewards *both* tactical skill (short-term wins) and *strategic consistency* (sticking to a thesis).
* Over time, the platform builds leaderboards not just for “best traders” but “most prescient thinkers.”
