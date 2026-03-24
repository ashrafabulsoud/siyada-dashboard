# SiyadaTech Executive Dashboard — Dashboard Specification & Data

## Layout Overview

The dashboard is a single-page scrollable layout with a fixed top header. It is divided into the following sections rendered in order:

1. Header Bar (fixed)
2. Company Snapshot (hero section)
3. Phase Tracker
4. Three Engine Status
5. 90-Day Sprint Progress
6. Revenue Projection
7. KPI Tracking
8. Risk Register
9. Immediate Needs
10. Team Overview

---

## Section 1: Header Bar (Fixed)

| Element | Value |
|---|---|
| Logo | SiyadaTech wordmark (text-based if SVG not available) |
| Tagline | "Three Engines. One Path to IPO." |
| Last Updated | Dynamic — show current date |
| Document Label | "CONFIDENTIAL — BOARD VIEW" |
| Logout Button | Top right corner |

---

## Section 2: Company Snapshot (Hero)

Four metric cards in a horizontal row at the top of the dashboard. These are the first numbers the board sees.

| Metric | Value | Status | Placeholder? |
|---|---|---|---|
| Current Phase | Validation (entering) | 🟡 In Progress | No |
| Phase Completion | 85% | 🟢 On Track | No |
| Q1 Revenue Target | SAR 400K – 700K | 🟡 In Progress | No |
| Revenue to Date | SAR — | 🔴 Awaiting Update | YES — needs actual figure |
| Active Partnerships | 1 (Floaino closing) | 🟡 In Progress | No |
| Runway | — months | 🔴 Awaiting Update | YES — needs burn rate from Dali |

---

## Section 3: Phase Tracker

A horizontal timeline showing SiyadaTech's compressed lifecycle vs. standard SaaS path.

### Phases (SiyadaTech Compressed Path)

| Phase | Duration | Status | Key Exit Criteria |
|---|---|---|---|
| Foundation | 9 months | ✅ 85% Complete | MVP launched, first users, first contract |
| Validation | 9 months | 🟡 Entering | PMF proven, 1,000 users, LTV > 3x CAC |
| Early Traction | 12 months | ⬜ Upcoming | $1M–$3M ARR, repeatable GTM |
| Growth | 12 months | ⬜ Upcoming | $10M+ ARR, Series B |
| Expansion | 12 months | ⬜ Upcoming | $50M+ ARR, Rule of 40 |
| Maturity / IPO | 6 months | ⬜ Upcoming | $100M+ ARR, Tadawul listing |

**Current position marker:** Place "YOU ARE HERE" indicator at 85% of Foundation bar.

---

## Section 4: Three Engine Status Cards

Three side-by-side cards. Each card has: engine name, tagline, status badge, 3 key metrics, and a list of active tasks with completion indicators.

---

### Engine 1: Lenci
**Tagline:** Product-Led Growth

| Field | Value | Placeholder? |
|---|---|---|
| Status | 🟡 Launch Imminent | No |
| Track A Target | 50 e-commerce early adopters | No |
| Track B Target | 500 freemium users (90 days) | No |
| Magic Page Status | In finalization | No |
| Launch Date | — | YES — needs confirmed date |
| Signups to Date | 0 | YES — update post-launch |
| Paid Conversions | 0 | YES — update post-launch |
| Agency Outreach | — of 50 contacted | YES — update after outreach begins |

**Active Tasks:**
- [ ] Finalize Magic Page & Ads
- [ ] Agency outreach (50 owners)
- [ ] Lenci Launch Day
- [ ] 50 paid users (Month 2–3)
- [ ] 500 freemium users (Month 2–3)

---

### Engine 2: AI Services
**Tagline:** Cash Flow & Enterprise Trust

| Field | Value | Placeholder? |
|---|---|---|
| Status | 🟢 Live | No |
| Channel Partner | Al Nafidha | No |
| Al Nafidha Clients Available | 7,000+ | No |
| Partnership Status | Agreement Signed | No |
| Active Projects | — | YES — number of active engagements |
| First Project Value (SAR) | — | YES — contracted value of first project |
| First Project Status | — | YES — kickoff status |
| Pipeline Value (SAR) | — | YES — estimated pipeline |

**Active Tasks:**
- [x] Agreement with Al Nafidha signed
- [ ] Confirm AI Services scope
- [ ] Kickoff first AI project
- [ ] Deliver first AI project (Q1)
- [ ] 3+ active clients (Validation phase)

**Strategic Note:** Every service engagement is a Trojan Horse for Jawabid & Lenci Enterprise.

---

### Engine 3: Partnerships (Floaino)
**Tagline:** Scale & Recurring Revenue

| Field | Value | Placeholder? |
|---|---|---|
| Status | 🟡 Closing | No |
| First Deal | Floaino | No |
| License Volume | 1,000 | No |
| Agreement Status | Closing | No |
| PDPL Compliance | Done / In Progress | No |
| Al Nafidha Containers | Building | No |
| Arabic Localization | Ongoing | No |
| Formal Signing Date | — | YES — awaiting confirmation |
| First Revenue Date | — | YES — awaiting deployment timeline |
| Additional Pipelines | — | YES — any other partnerships in discussion |

**The Repeatable Playbook (progress tracker):**
1. ✅ Identify Vendor (Floaino — global tech, no Saudi presence)
2. 🟡 Sign Reseller Deal (closing)
3. 🟡 Localize & Comply (PDPL in progress, Arabic ongoing)
4. ⬜ Deploy via Al Nafidha
5. ⬜ Collect Margin

---

## Section 5: 90-Day Sprint Progress

A three-column task board showing Week 1, Week 2–3, and Month 2–3.

### Week 1: Prep
| Task | Status |
|---|---|
| Finalize Lenci Magic Page & Ads | 🟡 In Progress |
| Finalize Floaino Terms | 🟡 In Progress |
| Confirm AI Services Scope | 🟡 In Progress |
| Submit Grant Applications | 🟡 In Progress |

### Week 2–3: Launch
| Task | Status |
|---|---|
| Lenci Launch Day | ⬜ Upcoming |
| Agency Outreach (50 Owners) | ⬜ Upcoming |
| Sign Floaino Agreement | 🟡 In Progress |
| Kickoff First AI Project | ⬜ Upcoming |

### Month 2–3: Scale
| Task | Status |
|---|---|
| 50 Paid Lenci Users | ⬜ Target |
| Deploy 100 Floaino Licenses | ⬜ Target |
| Deliver First AI Project | ⬜ Target |
| Jawabid MVP Architecture | ⬜ Target |

**Q1 Revenue Target Bar:** Visual progress bar from SAR 0 to SAR 700,000. Current value is a placeholder.

---

## Section 6: Revenue Projection Chart

A stacked bar chart (Recharts) showing the 5-year revenue model.

| Revenue Stream | Y1 | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|---|
| Services | 7M | 16M | 20M | 18M | 15M |
| Partnerships | 3M | 12M | 20M | 28M | 25M |
| Lenci SaaS | 4M | 24M | 50M | 77M | 100M |
| Jawabid SaaS | 1.5M | 20M | 80M | 157M | 235M |
| Qudurat SaaS | — | 8M | 30M | 70M | 125M |
| **Total** | **15.5M** | **80M** | **200M** | **350M** | **500M** |

All values in SAR Million.

**Chart colors:**
- Services: #4A6FA5 (slate blue)
- Partnerships: #8B9DB5 (muted slate)
- Lenci: #D4A853 (gold)
- Jawabid: #E8C070 (light gold)
- Qudurat: #F5DFA0 (pale gold)

**Note below chart:** "Revenue composition shifts from services-led in Y1 to 92% SaaS at IPO."

---

## Section 7: KPI Tracking Table

| KPI | Engine | Target | Current | Status | Placeholder? |
|---|---|---|---|---|---|
| Q1 Revenue | All | SAR 400K–700K | — | 🔴 | YES |
| Lenci Early Adopters | Lenci | 50 | 0 | ⬜ | Pending launch |
| Lenci Freemium Users | Lenci | 500 (90 days) | 0 | ⬜ | Pending launch |
| Lenci Paid Conversions | Lenci | First conversions | 0 | ⬜ | Pending launch |
| Active AI Service Clients | AI Services | 1 (Q1), 3+ (Validation) | — | 🔴 | YES |
| AI Services Pipeline (SAR) | AI Services | — | — | 🔴 | YES |
| Floaino Licenses Deployed | Partnerships | 100 (Month 2–3) | 0 | 🟡 | Pending signing |
| Floaino Agreement Signed | Partnerships | March 2026 | Closing | 🟡 | No |
| Growth Marketer Hired | Team | Q1 | Not started | 🔴 | No |
| Grant/Accelerator Accepted | Funding | Q1 | In progress | 🟡 | No |

---

## Section 8: Risk Register (RAID)

| Risk | Severity | Mitigation | Status |
|---|---|---|---|
| Lenci Launch Underperforms | 🟡 High | Two parallel channels (Agency + PLG). Magic Page optimization is key lever. | Monitored |
| AI Services Delivery Failure | 🔴 Critical | CTO personally oversees first engagement. Tunisia team on standby for surge. | Monitored |
| Floaino Deployment Delays | 🟡 High | Daily comms with Al Nafidha tech team. Fallback deployment plan ready. | Monitored |
| Key Person Dependency (CEO) | 🔴 Critical | Dr. Wajdi and Amina own BD/Sales. CTO owns all technical delivery. | Mitigating |
| Marketing SPOF (Single Owner) | 🟡 High | Growth Marketer is #1 immediate hire. Agency support for launch content. | Action Required |

---

## Section 9: Immediate Needs

Five priority action items shown as numbered cards.

| Priority | Action | Owner | Deadline | Status |
|---|---|---|---|---|
| 01 | Execute Lenci Launch | CEO + Marketing | 10 days | 🟡 In Progress |
| 02 | Close Floaino Deal | BD (Dr. Wajdi) | March 2026 | 🟡 In Progress |
| 03 | Deliver First AI Project | CTO | Q1 2026 | ⬜ Pending Kickoff |
| 04 | Hire Growth Marketer | CEO | Q1 2026 | 🔴 Not Started |
| 05 | Secure Funding (Grant/Accelerator) | CEO | Q1 2026 | 🟡 In Progress |

---

## Section 10: Team Overview

| Name | Role | Unit | Focus |
|---|---|---|---|
| Dali | CEO / Strategy | Command | Overall execution and strategy |
| CTO | Blockchain + Agentic AI | Command | All technical delivery |
| Dr. Wajdi | Business Development | Business Unit | Enterprise pipeline and partnerships |
| Amina | Sales | Business Unit | Al Nafidha channel sales |
| Hassan | Marketing | Business Unit | Jeddah market, Lenci launch |
| 6 AI Engineers | Core Development | Engineering Core | Product and service delivery |
| 1 Data Engineer | Data Infrastructure | Engineering Core | Data pipelines |
| 1 Product Manager | Product Delivery | Engineering Core | Roadmap execution |
| Tunisia Team | Surge Capacity | On-Demand | Full-stack outsourced deployment |

---

## Placeholder Visual Convention

All placeholder fields must render with:
- A dashed amber border (`border-dashed border-gold-500`)
- A small badge reading "⚠ Needs Update" in amber
- The displayed value shown as "—" or "0" with muted styling
- A tooltip or small text note explaining what data is needed

This makes the dashboard immediately usable for the Dali review meeting, while clearly communicating which fields are pending real data.
