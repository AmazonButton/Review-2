# Report2 — Review 2 proposed input

FA26SE124 | GFA26SE25 | 30 October 2026. Contact emails/phones redacted in this public repository view; full editable originals are in the team Drive. No business requirement or source rule is redacted.


![Embedded Report2 diagram](assets/Report2-7247f62de38a9c.png)








CAPSTONE PROJECT REPORT

Report 2 – Project Management Plan










– Ho Chi Minh, 2026 –

Table of Contents


## I. Record of Changes


| Date | A*<br/>M, D | In charge | Change Description |
| --- | --- | --- | --- |
| 20/09/2026 | M | Nguyen Van Thanh | Complete Section II: WBS Scope & Effort Estimation, Project Objectives, Risk Mitigation Matrix, Agile-IoT Management Process, Quality Management & Testing Framework, Training Schedule, Master Deliverables Timeline, RACI Responsibility Matrix, Communication Plan, and Configuration Management |
| 20/09/2026 | M | Nguyen Van Thanh | Architectural alignment of Section II with current SmartSupply platform: expanded WBS with Household RBAC, Behavior Designer (4 gestures), Statistical Gauss Prediction Engine, Shared Shopping List & Order Batching, Service Hub & Urgent Alerts, Flutter 5-Tab Architecture, Device Health Score (0–100), calibrated effort to 276 man-days, updated risks RS-08 to RS-10, enhanced RACI matrix and monorepo structure |
| 20/09/2026 | M | Nguyen Van Thanh | Scope calibration of Section 1.1 WBS to 24 core work packages; calibrated total effort to 206 man-days; harmonized quality defect model (112 defects), lifecycle phase allocation, risk mitigation matrix, Agile sprints, RACI matrix, and monorepo structure |
| 30/10/2026 | M | Project team (review pending) | Supersedes active SmartSupply/household/batching/Gaussian/emergency/5-tab/60s plan with SRS-aligned SmartOrderButton scope, financial completion statements and common 120s rule. Replaces unvalidated effort/defect forecasts with pending estimates and evidence status; revises WBS, risks, deliverables, proposed ownership and Vercel/Render/Supabase declaration. Historical rows retained; approval pending. |

*A - Added M - Modified D - Deleted



Project FA26SE124 | Group GFA26SE25 | Review 2: 05 November 2026 | Revision: 30 October 2026 | No separate official submission deadline supplied.

## II. Project Management Plan

### 1. Overview

#### 1.1 Scope & Estimation

SmartOrderButton — Smart IoT Ordering Button for Apartment Residents — combines an ESP32 hardware target, NestJS/Prisma Backend, React/Vite Web and Flutter Mobile. The operational database is PostgreSQL, hosted on Supabase in the team-declared staging setup. This plan aligns to SRS FR01–FR38 and the current Review 2 source snapshot.

Review 2 revision draft | 30 October 2026. This revision reflects the team-confirmed scope and deployment choices; supervisor approval of Registration/BM03, official submission template, final reviewed commitments and test commitments remains pending. SOB-IOT is the working abbreviation. Implementation completion, executed test evidence and final acceptance are recorded separately.

The plan covers five delivery areas:

Secure device lifecycle: hardware research/prototype development, provisioning/claiming, product mapping, request authentication and telemetry. Iteration 1 hardware deliverables are research and drawings only.

Resident ordering: account/session and identity controls, addresses, store/product browsing, COD checkout, order history and customer cancellation under the common 120-second rule.

Store fulfillment: catalog/inventory, store staff, authorized order processing, delivery claim/proof/failure, driver shifts and customer status updates.

Financial lifecycle: PayOS collection, store-bank ownership verification, wallet/ledger and withdrawals. The team reports these implemented; execution evidence and acceptance remain separate from completion statements.

Platform operations: device rentals, store subscriptions, store approval, users/plans, fleet templates/security, analytics, media and background processing as specified in SRS.

Work Breakdown Structure (WBS) — revised planning packages. Effort is to be re-estimated by package; prior 206/276 man-day figures remain historical and are not current approved commitments.


| # | WBS Item | Complexity | Est. Effort (man-days) |
| --- | --- | --- | --- |
| 1 | Hardware and device lifecycle | Planning area | TBD |
| 1.1 | Hardware research, circuit/enclosure drawings; physical prototype and firmware planned separately | Medium | TBD |
| 1.2 | Provision/claim/configure device, mapping and authenticated request/telemetry integration | Complex | TBD |
| 2 | Backend and operational data | Planning area | TBD |
| 2.1 | NestJS modules, Prisma PostgreSQL schema, migrations and synthetic seeds | Medium | TBD |
| 2.2 | Account/session, identity and own-address authorization | Medium | TBD |
| 2.3 | Products/categories/discounts, inventory and store/staff boundaries | Medium | TBD |
| 2.4 | Order creation, COD and server-authoritative cancellation under 120 seconds | Complex | TBD |
| 2.5 | Store processing, delivery claim/proof/failure and driver shifts | Complex | TBD |
| 2.6 | PayOS collection and signed, idempotent provider event handling | Complex | TBD |
| 2.7 | Store-bank verification, wallet/ledger and authorized withdrawals/compensation | Complex | TBD |
| 2.8 | Rentals/subscriptions, store approval, users/plans, fleet, analytics and background operations | Complex | TBD |
| 3 | Web application | Planning area | TBD |
| 3.1 | Customer browsing, checkout, addresses and order tracking/cancellation | Medium | TBD |
| 3.2 | Store catalog/inventory, order/delivery and staff workflows | Complex | TBD |
| 3.3 | Financial, fleet and platform administration screens | Complex | TBD |
| 4 | Flutter Mobile | Planning area | TBD |
| 4.1 | Home and Account: onboarding/session, profile, addresses and access controls | Medium | TBD |
| 4.2 | Devices: provisioning, ownership, configuration and status | Complex | TBD |
| 4.3 | Orders: browsing/checkout integration, timeline and cancellation countdown | Medium | TBD |
| 4.4 | Notifications, reconnect behavior, role-specific paths and supported-device verification | Medium | TBD |
| 5 | Verification, deployment and documentation | Planning area | TBD |
| 5.1 | Requirement/workflow/state-transition test inventory and automated checks | Complex | TBD |
| 5.2 | Security, concurrency, payment-failure and NFR verification | Complex | TBD |
| 5.3 | Vercel/Render/Supabase staging, configuration, synthetic seed and rollback rehearsal | Medium | TBD |
| 5.4 | Registration/BM03, Reports 1–5, Tracking, BM01/BM02 and review/demo rehearsal | Medium | TBD |
| Total | Re-estimate in Tracking; no approved total asserted | Pending | TBD |

#### 1.2 Project Objectives

The objective is a demonstrable SmartOrderButton product supporting resident ordering, secure IoT integration, store fulfillment and accountable payment/banking operations. Review 2 freezes the proposed final scope and individual commitments; it does not establish production readiness or completed hardware acceptance.

The following are proposed acceptance targets to be finalized at Review 2. They are not measured results or fabricated defect forecasts; evidence belongs in Report 5 and Project Tracking.


| # | Testing Stage | Test Coverage | Measured defects | Evidence status | Quality Acceptance Criteria |
| --- | --- | --- | --- | --- | --- |
| 1 | Peer review | Review changed code/docs | Not aggregated | Record actual reviews | Proposed policy; no blanket review claim |
| 2 | Unit/component | Mandatory-feature principal cases pass | See Report 5 | Partial automation evidence | Expand beyond selected cancellation suite |
| 3 | Integration | Every principal workflow end-to-end | See Report 5 | Full workflow runs pending | Include transaction, provider and authorization exceptions |
| 4 | System/NFR | Measure agreed BM01 targets | Not measured here | No synthetic pass rate | Reconcile all committed SRS NFRs |
| 5 | Defense acceptance targets | 100% main demos; >=80% exception demos | Not measured here | Targets, not results | >=90% cases pass; 100% mandatory principal cases; >=50% automated; no open Critical/High |


Milestone Timeliness:

Proposed schedule control: track planned and actual dates per WBS item in Project Tracking; report milestone slippage and recovery actions. The previous 95% timeliness figure is not a measured achievement.

A critical-path delay or external-provider/hardware blocker triggers a team review, an accountable repair owner and a revised plan. Supervisor/course milestones take precedence over provisional sprint dates.

Effort allocation — re-estimation pending. The previous total of 206 man-days and phase percentages are historical estimates, not a validated current budget.

| Project Phase / Activity | Allocated Effort (%) | Allocated Effort (man-days) | Primary Focus |
| --- | --- | --- | --- |
| Requirements and change control | TBD | TBD | SRS FR01–FR38, Registration/BM03 and scope reconciliation |
| Architecture and UI/hardware design | TBD | TBD | ERD, activity/state sources, four-area mobile and prototype drawings |
| Implementation and integration | TBD | TBD | Backend/Web/Mobile/physical-device integration |
| Verification and testing | TBD | TBD | Functional, financial, authorization, concurrency, NFR and hardware evidence |
| Deployment and management | TBD | TBD | Staging, rollback, tracking and review documents |
| Total | Pending | Pending | Re-estimate remaining effort from actual progress; team approval required |

#### 1.3 Project Risks

Risks cover physical hardware, wireless provisioning, concurrent order transactions, payment/provider dependencies, authorization and staging availability. Mitigations below are planned controls and require implementation/test evidence.


| # | Risk Description | Impact | Possibility | Response Plans (Mitigation & Contingency) |
| --- | --- | --- | --- | --- |
| RS-01 | Prototype power or hardware reliability | High | Medium | Measure on chosen circuit; document setup and results. Maintain spare components and disclose simulation limits. |
| RS-02 | Wi-Fi loss and provisioning delay | High | Medium | Test reconnect/retry and visible failure. Record exact provisioning/recovery behavior instead of assuming an unimplemented fallback. |
| RS-03 | BLE/device compatibility | High | Medium | Define a supported phone/OS/device matrix and verify claim/provision flow on physical equipment. |
| RS-04 | Repeated device/order events or concurrent cancellation | High | Medium | Validate authenticated identities, server deadline after row lock, idempotency and single stock release; test repeated/concurrent requests. |
| RS-05 | Forged/replayed requests or authorization bypass | High | Medium | Verify signatures, freshness and ownership/role boundaries; keep secrets out of source/logs and retain negative-case evidence. |
| RS-06 | Scope drift and document mismatch | High | High | Baseline SRS FR01–FR38 and review Registration/BM03. Exclude household/shared lists/batching/Gaussian prediction/emergency alerts unless approved through change control. |
| RS-07 | Hardware delay or failure | High | Medium | Iteration 1 uses research/drawings; track remaining physical prototype and firmware separately. Simulation does not meet final hardware acceptance. |
| RS-08 | Duplicate payment/withdrawal effects or provider failure | High | Medium | Test signed callbacks, retries, wallet balance and one compensation path; declare provider mode and controlled fixtures. |
| RS-09 | Cross-store/customer data or banking privilege escalation | High | Medium | Test identity, role and resource ownership; reject unauthorized access/mutations and retain audit evidence. |
| RS-10 | Staging cold start, quota or configuration drift | High | Medium | Record Vercel/Render/Supabase URLs/revisions; rehearse availability, synthetic seeds and rollback before review. |


### 2. Management Approach

Use iterative planning with requirement/design review, implementation, automated checks, demo and retrospective. Iteration 1 is the agreed eight-item scope; later sprint timing is to be reconciled with actual progress and the course calendar. The former six-sprint timetable is superseded by this revision, not a record of completed work.

#### 2.1 Project Process

Iteration 1: login/basic roles, stores/products, addresses, COD checkout, store processing, customer tracking, hardware research/drawings and customer cancellation under 120 seconds (I1-01–I1-08).

Subsequent increment planning: complete/reconcile account, identity, catalog, stock, order and delivery requirements against SRS FR01–FR38 and test evidence.

Financial integration review: PayOS collection, bank verification and withdrawals are team-reported complete. Rehearse callbacks, authorization, wallet consistency and failure/compensation with a declared provider mode.

Hardware increment planning: finalize source drawings; build and verify the physical prototype, provisioning, authenticated ordering and recoverable connection failure. Drawings/simulation cannot pass the final physical demo.

Cross-client integration: Web and Mobile synchronization, four customer navigation areas, authorized store/driver workflows and background processing.

Pre-Defense stabilization: close or disclose defects, measure agreed NFRs, run owned end-to-end workflows, record staging revision/seed/rollback and complete final test/report evidence. Dates and owners are finalized in Tracking/BM04.

#### 2.2 Quality Management

Defect prevention: review TypeScript/Dart checks, API contracts, schema/migrations, role/ownership controls and idempotency around order and financial mutations.

Peer review policy: propose at least one peer review for code/document changes; record actual review evidence. This document does not assert that repository branch protection is configured.

Automated testing: use the actual repository commands for Backend, Web, Mobile and PostgreSQL policy checks. The selected Review 2 CI is narrower than the full legacy suite; hardware tests are planned until a physical/firmware test artifact exists.

Integration testing: verify REST/realtime contracts, stock/order transactions, delivery transitions, PayOS signatures/retries, bank ownership, wallet/withdrawal effects and provisioning paths. Customer cancellation applies to orders from all ordering channels while the order is PENDING or CONFIRMED and server-measured elapsed time since creation is strictly less than 120 seconds. At exactly 120 seconds or later, cancellation is rejected. Ownership and status are checked on the server; the deadline is checked again after acquiring the order row lock. A client countdown is advisory.

System/acceptance: execute each owned workflow with principal and exception scenarios on the declared staging setup, record expected/actual evidence, and measure approved NFRs. No emergency-siren feature or unmeasured latency/power result is claimed.

#### 2.3 Training Plan


| Training Area | Participants | When, Duration | Waiver Criteria |
| --- | --- | --- | --- |
| Hardware research, ESP32 and provisioning | Truong Quang Tan Tai; integration support as agreed | To schedule | Document demonstrated prior skills or complete practical exercise |
| NestJS, Prisma/PostgreSQL and provider events | Tran Tan Phat; other members for integration | To schedule | Demonstrate transaction, authorization and failure handling |
| Flutter and four-area customer navigation | Nguyen Van Thanh | To schedule | Demonstrate maintained app flow and device/build checks |
| React/Vite customer/store/admin workflows | Le Ho Gia Bao | To schedule | Demonstrate authorized order/financial screens and tests |
| IoT and financial security / cancellation concurrency | All members | To schedule | Execute assigned negative cases and explain evidence |
| Git/CI, staging and rollback | All members | To schedule | Reproduce checks and explain deployment/recovery responsibilities |


### 3. Project Deliverables



| # | Deliverable Name | Timing / status | Acceptance Criteria / Notes |
| --- | --- | --- | --- |
| DEL-01 | Registration and BM03 | Before Review 2 submission | Proposed final scope, change record and supervisor review; approval pending |
| DEL-02 | Report 1 – Project Introduction | Review 2 revision draft | Aligned product identity, features, exclusions and iteration boundary |
| DEL-03 | Report 2 – Project Management Plan | Review 2 revision draft | Revised WBS/risks; effort, dates and final assignments require confirmation |
| DEL-04 | Report 3 – SRS and Project Tracking | Review 2 baseline reconciliation | FR01–FR38, 120-second policy, owners, issues and actual progress |
| DEL-05 | Report 4 – SDD | Before Self-Review/final submission | Architecture/ERD, activity and state source diagrams, contracts and deployment declaration |
| DEL-06 | Iteration 1 snapshot | Frozen source tag available | Eight agreed items; hardware research/drawings; selected CI evidence distinguished from full-suite results |
| DEL-07 | Financial implementation and evidence | Team reports implementation complete | PayOS, bank verification and withdrawals; retain separate failure/retry and provider evidence |
| DEL-08 | Flutter Mobile | Dates in Tracking to confirm | Home, Devices, Orders, Account; role-specific flows and supported-build evidence |
| DEL-09 | Web and Backend staging | Declared platforms; live revision unverified | Vercel/Render/Supabase URLs, revision, provider modes, seeds and rollback |
| DEL-10 | Physical IoT prototype and firmware | Final-product target; schedule pending | Owned/configured physical device places one valid order; verify exceptions and provisioning |
| DEL-11 | Report 5 and BM01/BM02 | Before Review 2 submission | Traceable actual tests; proposed commitments; original Self-Review plus team responses |
| DEL-12 | BM04 and final defense package | After Review 2 / official course schedule | Record actual review commitments; final demo/test/report evidence and approved ownership |


### 4. Responsibility Assignments

D: primary delivery owner; R: reviewer; S: contributor; I: informed. The revised matrix is a proposal based on the team’s component responsibilities. Each row has one D; each member’s final workflow ownership requires team confirmation, as in BM01.


| Major Project Activity / Deliverable | Nguyen Van Thanh (Leader) | Le Ho Gia Bao (Member) | Truong Quang Tan Tai (Member) | Tran Tan Phat (Member) |
| --- | --- | --- | --- | --- |
| Project management / Tracking | D | R | S | S |
| Report 1 and Registration/BM03 coordination | D | R | S | S |
| Report 2 and plan reconciliation | D | R | S | S |
| SRS / customer-store requirements | R | D | S | S |
| SDD / Backend and database contracts | R | S | S | D |
| Hardware drawings/prototype/firmware | S | I | D | R |
| Device provisioning/security integration | S | I | D | R |
| Backend data/order/delivery services | R | S | S | D |
| PayOS / bank verification / wallet / withdrawals | R | S | I | D |
| Web customer/store/admin application | R | D | I | S |
| Flutter Mobile application | D | S | R | S |
| WF01 Resident account/profile (proposed) | D | R | I | S |
| WF02 Storefront order to fulfillment/cancel (proposed) | R | D | I | S |
| WF03 Verified collection / store finance (proposed) | R | S | I | D |
| WF04 Provisioning to physical ordering (proposed) | S | I | D | R |
| Cross-component integration/test evidence coordination | D | S | S | R |
| Web staging | R | D | I | S |
| Backend/database staging and recovery | R | S | I | D |
| BM01/BM02 coordination / review preparation | D | R | S | S |
| Final document/demo integration | D | R | S | S |


### 5. Project Communications


| Communication Item | Who/ Target | Purpose | When, Frequency | Type, Tool, Method(s) |
| --- | --- | --- | --- | --- |
| Team coordination | All members | Progress, blockers and next actions | Cadence to confirm | Existing team channel; decisions recorded in Tracking |
| Supervisor consultation | Team and Truong Long | Scope, risks and review commitments | By agreed appointment | Meeting plus documented decisions |
| Iteration planning/review | All members; supervisor as available | WBS, owners, acceptance and demo | At each iteration boundary | Tracking, repository and repeatable demo |
| Defect/blocker triage | Assigned owner and affected members | Reproduce, prioritize and repair | When a blocker is raised | Issue/evidence and accountable owner |
| Code/document review | Author and designated reviewer | Review correctness and consistency | Before proposed baseline | GitHub/Drive; record review outcome |


### 6. Configuration Management

#### 6.1 Document Management

Working documents are maintained on Google Drive. The source snapshot is the Review-2 repository. Approved document versions and their checksums/links must be added through a reviewed follow-up; their presence in the frozen tag is not assumed.

Submission naming: SWP490_<OfficialProjectCode>_R2_Registration.pdf, ..._Report<n>.pdf, ..._SelfReview.pdf and ..._DesignBrief.pdf. Confirm the official code before final export; SOB-IOT is a working abbreviation.

Versioning: v0.x draft; v1.0 only after the team/supervisor approval is recorded; later amendments retain a Record of Changes. Existing historical decisions are retained and superseded explicitly where needed.

#### 6.2 Source Code Management

Review 2 source snapshot: https://github.com/AmazonButton/Review-2/tree/review-2; commit 9e7ff50dc6f0c60392b5fe96dd76779d9396c6d1. The tag is a frozen source baseline; do not silently move it when revising documents or source.

/backend: NestJS API, Prisma/PostgreSQL migrations and seed, realtime, order/delivery, PayOS and banking/wallet/withdrawal modules; actual test commands are in package.json.

/frontend: React/Vite Web for customer, store, delivery and platform workflows, including the common cancellation policy.

/mobile: Flutter application; customer Home, Devices, Orders and Account navigation. Role-specific screens are defined by SRS/SDD and implementation, not an obsolete five-tab plan.

/hardware: Iteration 1 research/drawing artifacts. Firmware/prototype acceptance is a later deliverable requiring its own source and evidence.

/docs: Iteration 1 scope and evidence; /.github/workflows: CI; /scripts and compose.yml: supporting local/database checks. Vercel/Render/Supabase deployment is declared separately; no /docker folder or automated production deployment is assumed.

#### 6.3 Tools & Infrastructures


| Category | Specific Tool / Infrastructure | Purpose & Scope |
| --- | --- | --- |
| Backend | NestJS 10 / Prisma 5 / TypeScript | Version ranges from tagged package.json; lockfiles/CI determine resolved versions |
| Web | React 18 / Vite 6 / Tailwind | Customer/store/driver/admin workflows; Vercel declared hosting |
| Mobile | Flutter / Dart | Home, Devices, Orders, Account; SDK/build evidence recorded separately; Flutter is not a hosting service |
| Hardware | ESP32 / BLE / Wi-Fi | Research/drawings in Iteration 1; physical firmware/prototype acceptance planned |
| Database | PostgreSQL / Prisma migrations; Supabase | Operational data and declared staging DB; SQLite is not the current database baseline |
| Background/realtime | Redis, Socket.IO and configured workers | Queue/cache/realtime dependencies; staging provider and quotas to document |
| External services | PayOS; configured identity, notification and media providers | Document actual modes, data shared and test evidence in SDD; do not infer approval/live transfers |
| CI/source | GitHub / GitHub Actions | Selected tag checks; workflow commands are authoritative; do not claim all legacy tests passed |
| Staging | Vercel Web / Render Backend / Supabase PostgreSQL | Team-declared setup; exact URLs, deployed revision and rollback evidence pending |
| Design/documentation | Figma, Mermaid/PlantUML or Draw.io, Word/Drive | Preserve editable diagram sources and record approved versions |
| AI-assisted revision | Codex; exact model identifier not exposed in this session | 30 Oct 2026 document alignment; team validates content. Official BM02 prompt execution remains pending |


#### 6.4 Review 2 Evidence and Commitment Boundaries

Tagged source: https://github.com/AmazonButton/Review-2/tree/review-2; commit 9e7ff50dc6f0c60392b5fe96dd76779d9396c6d1. The selected CI run https://github.com/AmazonButton/Review-2/actions/runs/40885061978 passed its four jobs. That result does not establish full legacy-suite, staging, hardware, financial-provider or NFR acceptance.

The test-count formula is 3F + W + T + N. BM01 currently proposes F=38, W=4 and N=6; 16 declared order edges alone do not complete T. The 140-case subtotal is a lower bound, not an approved fixed commitment. Inventory all principal-entity and required invalid transitions, assign each case/repair to one owner and reconcile totals before BM04.

Keep Report 5 case-level results and open defects authoritative. Team-reported financial completion does not close earlier bank/DLQ findings without their own rerun evidence. Not Run/Blocked cases remain so until executed; proposed NFRs remain unmeasured.

Review 2 submission requires Registration/BM03, aligned Reports 1–5 and Tracking, BM01 with Appendix A, and BM02 produced using the unchanged course prompt. BM04 records the actual post-review commitments under the official deadline. The group must confirm remaining effort, provider evidence and reviewed commitments and provider/deployment evidence.
