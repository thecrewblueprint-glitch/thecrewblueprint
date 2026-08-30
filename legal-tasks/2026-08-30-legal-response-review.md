# Legal Response Review and Task Backlog

**Recorded:** August 30, 2026  
**Operator:** Deadhang Labor LLC  
**Brand:** The Crew Blueprint  
**Reviewed live acknowledgment version:** `2026-08-30.2`  
**Status:** Discussion and attorney-review backlog; no live legal change authorized by this record

## Legal-service limitation

The free legal service that produced the reviewed responses does not allow the owner to submit follow-up questions. Do not treat any question in this record as awaiting another response from that provider. Keep the questions as a checklist for a future licensed attorney or another service that supports document-specific follow-up.

Until then, separate owner-controlled business and product decisions from legal conclusions. The owner can decide operational preferences, but the repository must not describe those decisions as attorney-approved or as guaranteed enforceability.

## Current baseline

The live course gate uses two initially unchecked acknowledgments and keeps the agreement button disabled until the learner selects both. The first acknowledgment links the Terms and Conditions and Limitation of Liability and expressly identifies the assumption-of-risk and release provisions. The second states that the course provides general education and does not qualify, certify, authorize, or supervise physical work. The gate warns about serious injury, death, and property damage and offers a leave-course option.

Acceptance is versioned and timestamped in the learner's browser under `cbCourseConsent.v1`. Deadhang Labor LLC does not presently receive or retain the learner's identity, IP address, or acceptance event.

## Confirmed corrections to the received legal-service responses

1. **Arizona trade-name registration is optional.** The Arizona Secretary of State states that a trade-name filing is not legally required. The response incorrectly described it as generally required when transacting under the brand.
2. **IP-address logging is not anonymous acceptance logging.** An IP address or persistent identifier can constitute personal information and does not conclusively identify the person who clicked the agreement.
3. **A physical parental signature is not automatically required merely because the agreement concerns a minor.** The harder question is whether the minor or parent can bind the minor to the release under the applicable state's law, not whether the signature uses paper or an electronic process.
4. **A California Civil Code section 1542 waiver is not an automatic addition.** It commonly concerns unknown existing claims in general releases and settlements. Do not add it to this prospective educational-use agreement without counsel identifying the exact need.
5. **No response can guarantee nationwide enforceability.** State law varies materially for pre-injury releases, personal injury, death, minors, public policy, and consumer rights.

## Current provisions that remain reasonable pending counsel review

- Keep the two separate, unchecked acknowledgments and explicit agreement button.
- Keep direct links to both legal documents at the point of assent.
- Keep explicit reference to assumption of risk and release in the first acknowledgment.
- Keep acknowledgment versioning and require fresh acceptance after material revisions.
- Keep the gross-negligence, recklessness, intentional-misconduct, and non-waivable-rights carve-outs.
- Keep the current savings and narrow-reformation language.
- Keep the copyright complaint procedure without claiming a registered DMCA agent or Section 512 safe-harbor status.
- Keep the current Arizona-court provision unless the owner later chooses an attorney-drafted arbitration system.
- Keep the $100-or-fees-paid cap provisionally, but do not treat it as dependable protection for catastrophic physical injury or death.

## Owner decisions required

### 1. Minor access — decided August 30, 2026

Public-facing information remains open. Every course, lesson, quiz, training module, and other job-related course route is restricted to users who are at least 18 and have reached the age of legal majority where they live. The shared course gate applies this restriction to all 57 top-level course routes.

### 2. Consent-record architecture

Choose whether the current free static site needs an operator-held acceptance trail. The present browser record enforces the gate but Deadhang Labor LLC cannot independently produce a learner-specific acceptance record.

Do not add a backend merely because a generic response called it preferable. Without authenticated accounts, IP address and user-agent data provide limited identity attribution while creating privacy, security, retention, and deletion obligations.

### 3. Brand protection

Decide separately whether to pursue:

- an optional Arizona trade name for public business-name registration; and/or
- federal trademark clearance and a possible USPTO application for broader brand protection.

Continue identifying The Crew Blueprint as an educational brand operated by Deadhang Labor LLC unless counsel directs otherwise.

### 4. Arbitration

Decide whether the present risk and user volume justify mandatory individual arbitration. Do not deploy arbitration from template language. Adoption would require administrator selection, consumer-rule compliance, fee planning, opt-out handling, informal-resolution procedures, small-claims treatment, hearing-location rules, class-action treatment, severability, mass-arbitration procedures, privacy updates, a material terms-version change, and fresh assent.

## Future attorney-review questions

1. Does acknowledgment version `2026-08-30.2` create sufficiently conspicuous notice and unambiguous affirmative assent in its complete live visual presentation?
2. Does the release adequately address alleged ordinary negligence in preparing, presenting, or providing educational content, rather than operating the learner's activity or jobsite?
3. How does Arizona Constitution article 18, section 5 and the Arizona Supreme Court's treatment of express assumption of risk affect the likely role of a jury?
4. Should bodily injury, death, tangible property damage, and statutory consumer claims be excluded from or treated separately under the aggregate liability cap?
5. Should the separate page be renamed **Assumption of Risk, Release, and Limitation of Liability** and expressly identified as an addendum to the Terms?
6. Does the Arizona governing-law and exclusive-forum clause need additional consumer-law qualifications for nationwide users?
7. Should agreement-gated physical-skills courses exclude minors? If minors remain eligible, what parent/guardian process works in each material jurisdiction?
8. Is there any present advantage to arbitration sufficient to outweigh consumer-arbitration fees, administrator compliance, opt-out administration, and mass-filing exposure?
9. If authenticated acceptance records are introduced, which limitations periods control retention and what deletion exceptions or legal holds apply?
10. When would the site's submission features make a registered DMCA agent operationally worthwhile?

## Deferred implementation tasks

Do not begin these tasks until the corresponding owner decision and required legal review occur.

- [x] Resolve the minor-access policy: public information remains open; all job-related course content is adult-only.
- [ ] Obtain Arizona counsel review of the exact live clickwrap presentation and negligence release.
- [ ] Obtain counsel review of the aggregate cap's treatment of bodily injury, death, property damage, and consumer claims.
- [x] Rename the page to Assumption of Risk, Release, and Limitation of Liability and preserve its incorporation into the Terms.
- [ ] Decide whether operator-held consent logging is proportionate.
- [ ] If logging is approved, design data minimization, disclosures, access controls, encryption, retention, deletion, incident response, and legal holds before collection starts.
- [ ] If accounts or payments launch, tie acceptance to an authenticated account or transaction rather than relying only on IP and user-agent data.
- [ ] Perform trademark clearance before any state or federal brand filing.
- [ ] Reassess DMCA-agent registration before enabling stored or public user uploads, comments, assignments, or community submissions.
- [ ] Reassess arbitration only with current administrator rules, fee schedules, clause review, and an operational opt-out process.
- [x] Bump the acknowledgment version to `2026-08-30.3` for the adult-only eligibility change and renamed incorporated document.

## Evidence preservation tasks

- [x] Preserve reconstructable source commits and SHA-256 hashes for every recorded legal bundle.
- [x] Preserve the exact checkbox, warning, link, and agreement-button wording associated with each version.
- [x] Preserve deployment/source-control mapping showing which version was active.
- [x] Preserve tests showing that every required unchecked confirmation blocks course entry and that a material version change triggers fresh assent.
- [ ] Do not describe browser-local storage as an operator-held acceptance record.

## Sources used for issue spotting

- Arizona Secretary of State, trade names and trademarks: <https://azsos.gov/business/tntm>
- Arizona Supreme Court, *Phelps v. Firebird Raceway, Inc.* (2005): <https://law.justia.com/cases/arizona/supreme-court/2005/cv040114pr-1.html>
- Arizona Supreme Court, *1800 Ocotillo, LLC v. The WLB Group, Inc.* (2008): <https://law.justia.com/cases/arizona/supreme-court/2008/cv080057pr-1.html>
- Ninth Circuit, *Berman v. Freedom Financial Network, LLC* (2022): <https://cdn.ca9.uscourts.gov/datastore/opinions/2022/04/05/20-16900.pdf>
- U.S. Copyright Office, Section 512 resources: <https://www.copyright.gov/512/>
- Federal Trade Commission, COPPA guidance: <https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions>
- American Arbitration Association, consumer arbitration: <https://www.adr.org/industries/consumer/>
- American Arbitration Association, mass-arbitration rules and fees: <https://www.adr.org/rules-forms-and-fees/mass-arbitration/>

## Record boundary

This backlog records issue spotting and implementation questions. It does not replace advice from a licensed attorney, state that any provision is enforceable in every jurisdiction, or authorize a claim that an attorney approved The Crew Blueprint's legal documents.
