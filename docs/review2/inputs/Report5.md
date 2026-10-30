# Report5 — Review 2 proposed input

FA26SE124 | GFA26SE25 | 30 October 2026. Contact emails/phones redacted in this public repository view; full editable originals are in the team Drive. No business requirement or source rule is redacted.


![Embedded Report5 diagram](assets/Report5-f213d7a0c14006.png)








Capstone Project Report

Report 5 – Software Test Documentation



Smartorderbutton







– Ho Chi Minh City, October 2026 –


## I. Record of Changes

| Date | A*<br/>M, D | In charge | Change Description |
| --- | --- | --- | --- |
| 27/10/2026 | A | Project team | Initial test documentation: scope, strategy, plan, test cases and verified CI evidence for Smartorderbutton. |
| 29/10/2026 | M | Draft preparation; team review pending | Add observed Review-2 selected CI/local evidence; update cancellation boundary to 120 seconds; preserve historical full-run failure and original report-case statuses. |
| 30/10/2026 | M | Team confirmation | Financial implementation reported complete; declared deployment: Vercel Web, Render Backend, Supabase PostgreSQL, Flutter Mobile. Registration approval and runtime acceptance remain separate. |
| 30/10/2026 | M | Project team (review pending) | Complete 38-FR design traceability, 4 workflow principal/exception demos, 6 BM01 NFR plans, distinct-ID statistics, proposed owners, declared URLs and targeted defect-retest requirements. Record current 9 Backend/4 Web PASS reruns, no-result Mobile attempt; preserve historical failures and all unexecuted/blocked statuses. |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

*A - Added M - Modified D - Deleted


Project FA26SE124 | Group GFA26SE25 | Review 2: 05 November 2026 | Revision: 30 October 2026 | No separate official submission deadline supplied.

## II. Testing Documentation

WORKING DRAFT — REVIEW 2 SYNCHRONIZATION — TEAM REVIEW REQUIRED

30 October 2026 revision. Draft for team/supervisor review; Registration/BM03, final ownership and fixed test commitments remain pending. Financial implementation is team-reported complete. Actual execution is limited to the identified CI and local runs; this report does not assert live acceptance.

This report specifies verification of SmartOrderButton Web, Backend, Flutter Mobile and final physical-device integration against SRS FR01–FR38, SDD and BM01. It separates test design, observed execution, team-reported implementation completion and acceptance. Hardware remains research/drawings in Iteration 1 and a physical final-product target.

The Review-2 tag workflow completed successfully for all four selected jobs: Backend build and cancellation regressions, isolated PostgreSQL/API integration, Web build/tests and Flutter analysis/tests. The historical 26 October Backend full-run result (38/40 suites) remains below for traceability. The new selected run is not a full-suite retest or final product acceptance.

### 1. Scope of Testing

#### 1.1 Test Baseline

The active review software baseline is https://github.com/AmazonButton/Review-2/tree/review-2, commit 9e7ff50dc6f0c60392b5fe96dd76779d9396c6d1. Updated Reports 3/4 are working drafts against this snapshot. The old repository revisions and full-run failure are historical records. Newly designed report case IDs remain Not Run until individually mapped to execution evidence.

| Component | Repository revision |
| --- | --- |
| Frontend | Review-2/frontend: 9e7ff50dc6f0c60392b5fe96dd76779d9396c6d1 |
| Backend | Review-2/backend: 9e7ff50dc6f0c60392b5fe96dd76779d9396c6d1 |
| Mobile | Review-2/mobile: 9e7ff50dc6f0c60392b5fe96dd76779d9396c6d1 |
| Hardware | ac82792daebf01b47e4c8489435308a27c793688 |


#### 1.2 Features Included

| Requirement | Area | Coverage |
| --- | --- | --- |
| FR01–FR04 | Account and session | Registration, login, verification, refresh, logout, password recovery, role-based routes and protected requests. |
| FR05–FR08, FR33–FR37 | Commerce and store data | Store profile, staff/customer relationships, categories, products, price history, discounts, inventory and customer addresses. |
| FR09–FR13, FR18 | Order lifecycle | Physical-button and storefront orders, minimum value, snapshots, stock reservation, cancellation, status history and idempotency. |
| FR14–FR17, FR31–FR32 | Device management | Provisioning, ownership, product mapping, templates, fleet actions, signed events and configuration responses. |
| FR19–FR22 | Delivery | Driver assignment, delivery evidence, COD/electronic payment constraints, failure, shifts and handover. |
| FR23–FR28 | Payments and services | PayOS links/callbacks, wallet ledger, bank verification, withdrawals, rental contracts and subscriptions. |
| FR29–FR30, FR34–FR35, FR38 | Administration and operations | Authorized administration, identity verification, notifications, reporting, queues and health probes. |
| Cross-cutting | Clients and firmware | Four Mobile tabs, Web role screens, responsive layout, errors, reconnect behavior, BLE/Wi-Fi and physical feedback when hardware is available. |


#### 1.3 Exclusions and Constraints

Household membership, household shopping lists and consumption prediction remain outside the committed baseline. Mass production certification, measured long-term battery life, universal device compatibility, continuous live GPS tracking and production penetration-test certification are not claimed. Hardware bench cases are designed here but cannot be marked complete while the prototype is unfinished.

Customers may cancel their own orders from any channel only while PENDING or CONFIRMED, with elapsed server time >= 0 and < 120 seconds from order creation. At exactly 120 seconds or later, reject with CANCEL_WINDOW_EXPIRED. Authenticate and check ownership before an idempotent response; a retry of an already CANCELLED order by its owner does not repeat stock effects. Privileged operational cancellation remains a separate permission-controlled path. For Iteration 1, physical hardware is research/drawings; no bench acceptance is claimed.

External payment, banking, identity, email, FCM and image providers require controlled test accounts and configured credentials. CI mock/provider flags demonstrate internal behavior only. They do not prove actual bank settlement, real identity verification or successful push delivery to a physical phone. Use synthetic accounts and isolated data for destructive and concurrency tests.

#### 1.4 Test Levels and Acceptance Gates

| Level | Owner and input | Focus and completion gate |
| --- | --- | --- |
| Unit | Developer; changed module, fixtures and expected values at each change. | Validate deterministic rules and mappings. All applicable assertions pass; unexpected branches have a documented regression case. |
| Integration | Developer and peer reviewer; migrated isolated DB, API build and provider substitutes after unit checks. | Validate API/service/DB and event contracts. No duplicate financial/stock effect; all release-critical integration suites pass. |
| System | Peer tester; integrated Web/Mobile build and controlled services after integration. | Validate real role journeys, errors, compatibility and deployment configuration. No open critical/high defect in included journeys. |
| Acceptance | Team leader and representative users; stable candidate and reviewed system results. | Confirm business outcomes and scope. Required acceptance scenarios pass and remaining lower-priority issues receive explicit disposition. |


### 2. Test Strategy

Use risk-based testing: authentication, tenant isolation, stock safety, payment settlement and wallet integrity are the first release gates. Apply equivalence classes, boundary values, state-transition testing, negative requests and controlled races. UI changes trigger a client smoke run plus affected flow regressions. Changes to shared DTOs, migrations or authorization trigger the related Backend and both client checks.

#### 2.1 Testing Types

| Type | Objective and technique | Completion criteria |
| --- | --- | --- |
| Functional | Exercise valid, invalid, empty and boundary data through the documented roles and state graph. | Expected response, database state and visible client result agree for all P0/P1 cases. |
| Security and isolation | Send missing/expired tokens, wrong roles/store IDs, forged/replayed signed events and callbacks. | Unauthorized operations are rejected without sensitive leakage or unauthorized state change. |
| Data and concurrency | Run parallel stock claims, cancellation, withdrawal and repeated callbacks; inspect ledger/history. | Committed quantities and balances reconcile; one logical action has one business effect. |
| Interface and provider | Verify request/response contracts and signed webhook handling using deterministic substitutes, then approved provider tests. | Client and server agree on IDs, Decimal/BigInt representations and states; live-provider evidence is recorded separately. |
| Usability and compatibility | Review role screens, four Mobile tabs, responsive widths, errors and keyboard interaction. | Main journeys remain usable without clipped controls, misleading success or inaccessible critical actions. |
| Reliability and recovery | Interrupt requests, expire sessions, disconnect sockets, retry jobs and restart/drain services. | Recovery preserves committed data and avoids duplicate actions; blocked services return explicit errors. |
| Performance | Run controlled API/list/checkout workloads and record latency, errors and resource use. | Proposed BM01 N1: p95 <=2 seconds for ordinary list/detail APIs at 50 concurrent users, 10 stores and 10,000 orders; record duration/error count and exclude provider latency explicitly. Not measured; reconcile all committed SRS NFRs. |
| Regression | Re-run affected automated suites and critical end-to-end journeys after changes. | Previously accepted critical scenarios remain valid on the candidate revision; new evidence supersedes old evidence only for the same scope. |


#### 2.2 Test Levels

X marks a planned application of the test type at that level. It is not an execution result. A Mobile file named integration_test may still use mocks; classification follows the dependencies exercised, not the filename.

| Type of Tests | Unit | Integration | System | Acceptance |
| --- | --- | --- | --- | --- |
| Functional | X | X | X | X |
| Security and isolation | X | X | X |  |
| Data and concurrency | X | X | X |  |
| Interface and provider | X | X | X | X |
| Usability and compatibility |  |  | X | X |
| Reliability and recovery | X | X | X |  |
| Performance |  | X | X |  |
| Regression | X | X | X | X |


#### 2.3 Supporting Tools

| Purpose | Tool | Vendor/In-house | Version |
| --- | --- | --- | --- |
| Backend scripts and assertions | tsx, TypeScript and repository scripts | Open source / project team | tsx ^4.19.2; TS ^5.7.2 |
| API and persistence | Node.js, Prisma Client, PostgreSQL | Open source | CI Node 20; Prisma 5.22.0; PostgreSQL 15 |
| Mobile unit/widget tests | flutter_test, MockClient and fixtures | Flutter / project team | Flutter SDK package; Dart ^3.11.5 constraint |
| Web compile verification | TypeScript and Vite | Open source | TS ^5.7.2; Vite ^6.0.3 |
| Repeatable CI environment | GitHub Actions and service containers | GitHub / open source | checkout v4; setup-node v4; Redis 7 |
| Browser/manual API inspection | Edge/Chrome DevTools and API request client | Browser vendors / selected client | Record installed version at execution |
| Firmware build and bench | PlatformIO, Arduino framework and serial monitor | Open source / board vendor | espressif32 environment; record resolved versions |
| Load measurement | k6 or an equivalent agreed load runner | Proposed supporting tool | Select and pin before performance run |
| Web policy test runner | node --experimental-strip-types --test tests/*.test.ts | Node.js / project team | Web CI Node 24; local rerun Node v24.18.0 |


Frontend package.json declares npm test using the Node test runner with TypeScript stripping; the Web CI job selects Node 24. Backend test:review2 uses tsx --test, and its CI job selects Node 20; test:all is a separate legacy script runner. Mobile CI selects Flutter 3.47.7. Manifest ranges/CI settings do not establish deployed runtime versions. Current local rerun used Node v24.18.0/npm 10.9.9; retain exact commands, logs and exit codes.

### 3. Test Plan

#### 3.1 Human Resources

Team identities are carried forward from the project reports. The assignments below are proposed testing responsibilities for this report and do not assert that a named person has already executed or approved a run. The feature author prepares fixtures and another member reviews critical results.

| Worker/Doer | Role | Specific Responsibilities/Comments |
| --- | --- | --- |
| Nguyen Van Thanh<br/>SE193632 | Team leader | Proposed Mobile/WF01 responsibility; coordinate test readiness, execute own-account/address cases and peer-review other results. Acceptance approval must be recorded separately. |
| Le Ho Gia Bao<br/>SE184518 | Test executor | Proposed Web/WF02 responsibility; customer/store/driver browser journeys, fulfillment/cancellation and cross-client reconciliation. |
| Truong Quang Tan Tai<br/>SE182652 | Test executor | Proposed hardware/WF04 responsibility; source drawings, physical provisioning/ordering and board/phone/network evidence when ready. |
| Tran Tan Phat<br/>SE183281 | Test executor | Proposed Backend/WF03 responsibility; API/DB, PayOS, bank verification, wallet/withdrawals, queue and concurrency evidence. |
| All team members | Peer reviewer | Review cases against Reports 3–4, reproduce assigned defects, execute regression checks outside their own feature and review findings. |


#### 3.2 Test Environment

| Purpose | Tool | Provider | Version |
| --- | --- | --- | --- |
| Isolated CI Backend | Linux runner and Node.js | GitHub Actions | Observed runner Ubuntu 26.04.1; Node 20 workflow |
| Persistence and queue | PostgreSQL and Redis containers | Open source | postgres:15-alpine; redis:7-alpine |
| Local API regression | Backend with migrations and seed | Project team | Pinned Backend revision; set BASE_URL explicitly |
| Web system testing | Vercel candidate or local preview | Vercel / project team | Pinned Frontend build; Edge and Chrome versions recorded per run |
| Mobile component testing | Flutter SDK and test runner | Flutter | Dart constraint ^3.11.5; resolved SDK recorded per run |
| Mobile device testing | Android phone/emulator and BLE-capable phone | Team / device vendor | Record OS, model, API level, app build and permissions |
| Provider integration | PayOS, bank verification, Didit, FCM and mail | External providers | Controlled test configuration; record mock/live mode |
| Hardware bench | ESP32-S3 prototype, power and serial link | Team / board vendor | esp32-s3-devkitc-1 configuration; physical validation pending |


Environment preparation: install locked dependencies, generate the Prisma client, apply migrations and seed only the isolated test database. Verify /healthz and /readyz before HTTP cases. CI uses PORT=3000 and BASE_URL=http://localhost:3000/api/v1, while normal Backend startup defaults to port 5000. Align every test URL with its running service; do not infer the target port from a script default.

Create two stores, two customers, an administrator, an allowed store manager, a specialized delivery user, owned and foreign devices, product stock fixtures and wallet/bank fixtures. Use an order value of 1,999 VND for rejection and 2,000 VND for the minimum-value boundary. Record exact price, discount, stock and role assignments in the run record. Keep provider callbacks deterministic and remove only records created by the test.

#### 3.3 Test Milestones

The dates below are proposed, relative to T0: the date when the team confirms a runnable release candidate and isolated environment. They are a plan, not a claim of completed historical work. Hardware acceptance has its own readiness dependency.

| Milestone Task | Start Date | End Date |
| --- | --- | --- |
| M1 Baseline review, fixture setup and case review | T0 | T0 + 1 day |
| M2 Resolve the two observed CI failures and rerun Backend gates | T0 + 1 day | T0 + 3 days |
| M3 Execute Mobile tests and Web/Mobile critical journeys | T0 + 2 days | T0 + 4 days |
| M4 Provider validation, security, concurrency and performance runs | T0 + 4 days | T0 + 6 days |
| M5 Regression review and software acceptance | T0 + 6 days | T0 + 7 days |
| M6 Physical-device integration and hardware acceptance | Prototype ready | Readiness + 3 days |


#### 3.4 Entry Exit and Defect Management

Entry requires a fixed revision, installable builds, an isolated migrated database, reviewed role fixtures and reachable dependencies or declared substitutes. Suspend affected testing if the target environment is wrong, fixture isolation fails or financial/stock reconciliation cannot be observed. Resume after the environment is corrected and a smoke run passes.

Review 2 readiness requires an honest traceable catalogue, reproducible selected evidence, documented gaps and proposed individual commitments. It does not assert final Defense acceptance. Final acceptance requires the approved mandatory principal cases and main workflows to pass, agreed fixed test totals and NFRs to be measured, required exception/automation thresholds, no open Critical/High defects, and the historical bank/DLQ findings resolved through their targeted reruns. Physical hardware cannot be silently excluded from final scope.

Record a defect with ID, revision, environment, prerequisite data, exact steps, expected/actual behavior, evidence, severity and owner. Critical severity covers unauthorized financial/data access or corrupted balances; high severity covers blocked core journeys or broken stock/payment transitions; medium covers recoverable secondary failures; low covers cosmetic defects. Triage, assign, fix, retest the reproducer and run affected regression cases before closure.

### 4. Test Cases

The editable Test Report and Unit Test workbooks are available and linked in Section 6. The original 60 IDs are retained. The master Execution_Register now includes 208 distinct IDs: original 60, recorded automation 20, 114 new feature designs, eight workflow demos and six NFR measurements. Repeated IDs in workbook views are not extra cases. New designs are not executed results; transition-inventory rows are excluded from case totals.

P0 identifies security, financial integrity and stock safety; P1 identifies a core business journey; P2 identifies secondary behavior or presentation. Unless a row states otherwise, use the isolated environment and fixtures in Section 3.2, start from a clean session, and restore only test-owned records afterward. An HTTP success alone is insufficient for transaction cases: inspect the committed database and resulting client state.

#### 4.1 Unit and Component Test Cases

| ID | Requirement and objective | Prerequisites and actions | Expected result |
| --- | --- | --- | --- |
| UT-01 | FR01–FR04<br/>P1<br/>Credential validation | Use empty, malformed and valid email/phone/password values in Mobile validators. Include a valid 10-digit phone number beginning with 0. | Invalid values produce validation errors; supported valid values are accepted without a server request. |
| UT-02 | FR01–FR04<br/>P0<br/>Token persistence | Use mocked SharedPreferences. Save access/refresh tokens, create/read client state, then clear tokens. | Stored and in-memory values agree; clearing removes both; no dummy authenticated identity is created. |
| UT-03 | FR01–FR04<br/>P0<br/>Refresh and replay | Mock an initial protected response 401, a successful refresh and one successful retry. Repeat with a revoked refresh token. | One refresh/replay path succeeds; revoked refresh clears tokens and reports an error without an infinite retry loop. |
| UT-04 | FR09–FR13<br/>P1<br/>Order and payment models | Parse pending/paid orders, numeric IDs encoded as strings, missing optional fields and malformed IDs. | Order/payment states retain their meaning; valid IDs remain usable; malformed responses do not fabricate payable orders. |
| UT-05 | FR23<br/>P0<br/>PayOS order identity | Mock creation returning data.order.id different from orderNumber. Request a payment link, then repeat with a local-only ID. | The API ID is sent to PayOS initiation; local/display-only IDs are rejected before a provider request. |
| UT-06 | FR09–FR13<br/>P0<br/>Client stock guard | Use stock available equal to quantity, one below quantity, missing data and reserved stock. Trigger quick order. | Exact valid quantity may submit; insufficient/unknown availability blocks the request and shows an actionable error. |
| UT-07 | FR09–FR13<br/>P0<br/>Repeated client taps | Delay the mock order response and invoke two concurrent quick-order actions. | Only one in-flight order request and one success callback occur; the UI does not create a duplicate local order. |
| UT-08 | FR23<br/>P0<br/>Payment view state | Parse payment link/QR data. Apply a verified confirmation event to the order provider. | QR/link data maps to the correct order and amount; only the supported confirmation path updates the visible payment state. |
| UT-09 | FR09–FR13<br/>P1<br/>Order provider errors | Mock a successful list, empty list, network error and successful refresh. | Active/history lists are consistent; error and empty states differ; retry replaces stale error state. |
| UT-10 | FR01–FR04<br/>P0<br/>Logout cleanup | Mock logout API success and local profile/token stores. Invoke logout from Home and Profile. | Backend logout is requested, cached identity/tokens are cleared and protected screens cannot remain authenticated. |
| UT-11 | FR34<br/>P1<br/>Notification handling | Inject order-created and status-change events for one order into the notification/provider layer. | The intended item/count changes once; payload identifies the target order; malformed data does not crash the client. |
| UT-12 | FR38<br/>P1<br/>Health and draining | Use AppController with mocked DB/queue readiness, then set the draining flag. | Liveness remains distinct from readiness; unavailable dependencies or draining reject readiness according to the controller contract. |


#### 4.2 Integration Test Cases

| ID | Requirement and objective | Prerequisites and actions | Expected result |
| --- | --- | --- | --- |
| IT-01 | FR01–FR04<br/>P0<br/>Registration and login | Create a synthetic account, inspect verification state, complete the supported verification flow, then log in. | No premature authenticated session is leaked; verified credentials yield the expected authorized session. |
| IT-02 | FR01–FR04<br/>P0<br/>Revoked session | Log in, revoke/logout the session and repeat a protected request using the old credential. | The revoked credential is rejected; valid unrelated sessions remain unaffected. |
| IT-03 | FR05–FR08<br/>P0<br/>Tenant isolation | Authenticate to Store A and use Store B product, order and device identifiers in read/write requests. | Cross-store data or changes are denied; Store B records remain unchanged. |
| IT-04 | FR14–FR17<br/>P0<br/>One-time pairing | Create an eligible provisioning session and submit two concurrent confirmations for the same credential. | At most one claim succeeds; device ownership and mappings remain consistent; used credentials cannot be reused. |
| IT-05 | FR14–FR17<br/>P0<br/>Signed event rejection | Submit a valid signed device event, then alter the signature, reuse a consumed nonce and send an invalid timestamp. | Valid request is processed; forged/replayed/out-of-window requests are rejected without an extra order. |
| IT-06 | FR14–FR17<br/>P1<br/>Device product mapping | Bind a device to its allowed store/customer/product and quantity, then submit a signed order event. | Server resolves the configured mapping, price and ownership; a foreign or inactive mapping cannot order. |
| IT-07 | FR31–FR32<br/>P0<br/>Template deployment scope | Deploy a template to owned devices; repeat with a mixed list containing a foreign device. | Per-device authorization and configured response rules apply; foreign configuration is not changed. |
| IT-08 | FR09–FR13<br/>P1<br/>Minimum order value | Create valid storefront orders valued at 1,999 and 2,000 VND using controlled product prices. | 1,999 VND is rejected; 2,000 VND passes the minimum-value check when all other conditions are valid. |
| IT-09 | FR09–FR13<br/>P0<br/>Immutable order snapshot | Create an order, then change the product name, price and discount. Read the existing order. | Historical item snapshots/totals remain consistent with creation; later catalogue changes do not rewrite the order. |
| IT-10 | FR09–FR13<br/>P0<br/>Idempotent order request | Submit the same logical device/storefront request twice using the supported request/idempotency key. | One logical order and one stock effect exist; repeated request returns the defined existing result or conflict. |
| IT-11 | FR09–FR13<br/>P0<br/>Concurrent inventory | Set one unit available; submit two eligible simultaneous orders requiring one unit each. | No oversell or negative availability; successful reservations reconcile with one available unit. |
| IT-12 | FR09–FR13<br/>P0<br/>Cancellation boundary | Use owned Web/Mobile/button-source fixtures with PENDING and CONFIRMED at 119 seconds, exactly 120 seconds and 121 seconds; control the clock. Include missing/future timestamps. | 119 seconds is eligible; exactly 120 and 121 seconds are rejected. The common policy rejects elapsed >= 120 seconds for customers regardless of source; ownership/status checks remain mandatory. |
| IT-13 | FR09–FR13<br/>P0<br/>Cancellation state and ownership | Attempt customer cancellation on a foreign order; then PREPARING/SHIPPING/COMPLETED orders; then an owned CONFIRMED order before the deadline. Retry an owned CANCELLED order and a foreign CANCELLED order. | Reject foreign or processed orders. Accept an owned eligible CONFIRMED order before 120 seconds. An owned already-CANCELLED retry is idempotent; a foreign retry is denied without returning order data. |
| IT-14 | FR09–FR13<br/>P0<br/>Cancel and confirm race | Race permitted cancellation against confirmation for one pending order; repeat the winning request. | Only an allowed final transition commits; history and stock compensation occur once. |
| IT-15 | FR23<br/>P0<br/>Payment callback authenticity | Create an eligible payment request. Submit a valid signed callback, a forged callback and a replay. | Forgery is rejected; verified payment is applied to the intended transaction once; replay does not credit twice. |
| IT-16 | FR23<br/>P0<br/>Late paid cancellation | Cancel/reject an order, then deliver a valid paid callback for its existing payment transaction. | Backend records the reconciliation/refund-pending condition defined in the repository and does not reopen the order. |
| IT-17 | FR24–FR26<br/>P0<br/>Withdrawal boundaries | Use a verified store bank account and sufficient wallet. Request 49,999 and 50,000 VND; repeat with insufficient funds/unverified bank. | 49,999 VND, insufficient-funds and unverified-bank requests fail; an eligible 50,000 VND request follows the withdrawal workflow. |
| IT-18 | FR24–FR26<br/>P0<br/>Withdrawal deduplication | Send two concurrent withdrawal requests with the same idempotency key and inspect wallet/ledger/withdrawal records. | One logical withdrawal/debit is committed; a repeated key does not consume balance twice. |
| IT-19 | FR24–FR26<br/>P0<br/>Payout failure recovery | Drive an authorized payout through a deterministic provider failure and repeated failure notification. | Withdrawal reaches the defined failed/reconciled state; eligible funds are restored once; no fake provider success is recorded. |
| IT-20 | FR24–FR26<br/>P0<br/>Bank verification callback | Create a verification request; submit mismatched sender/amount/expiry then a valid controlled 2,000 VND callback and replay. | Invalid evidence is rejected; valid ownership and refund state follow provider mode; replay cannot duplicate refund. |
| IT-21 | FR27–FR28<br/>P0<br/>Wallet subscription | Subscribe using an active plan and sufficient wallet; repeat the idempotency key and test insufficient funds. | One entitlement and debit are atomic; repeat is deduplicated; insufficient funds leave no partial subscription. |
| IT-22 | FR27–FR28<br/>P1<br/>Rental lifecycle | Create a rental and linked payment; exercise the supported paid activation, extension and return actions. | Ownership and contract/payment guards are enforced; the linked rental state follows allowed transitions. |
| IT-23 | FR19–FR22<br/>P0<br/>Driver claim race | Use two eligible delivery users to claim the same assignable order concurrently. | One valid assignee wins; the losing request cannot silently overwrite the assigned driver. |
| IT-24 | FR19–FR22<br/>P0<br/>Delivery completion | For COD submit incorrect then correct collected amount with valid evidence. For electronic payment attempt completion before and after PAID. | Incorrect COD/unpaid electronic completion fails; valid completion records evidence, delivery state and permitted financial effects once. |
| IT-25 | FR29–FR30<br/>P0<br/>Identity and admin scope | Create a controlled Didit session; send invalid and verified callback variants. Attempt privileged actions with a customer credential. | Only verified authorized decisions update identity; a client status field or customer role cannot grant privileges. |
| IT-26 | FR38<br/>P0<br/>Queue retry and DLQ | Run Redis mode; force a processor to exhaust configured retries, await terminal failure, replay the dead-letter entry and repeat the replay request. | Failed job is observable, replay targets the correct persisted entry, and downstream business effects remain idempotent. |


#### 4.3 System Test Cases

| ID | Requirement and objective | Prerequisites and actions | Expected result |
| --- | --- | --- | --- |
| ST-01 | FR01–FR04<br/>P1<br/>Role landing screens | Use each approved role to log in on the integrated Web build; reload and navigate to a forbidden role route. | Each role reaches its main workspace; reload retains a valid session; forbidden route/API access is denied. |
| ST-02 | FR05–FR08<br/>P1<br/>Customer storefront | As customer, select store/product/quantity/address and submit a valid COD checkout; reload Orders. | The correct server-created order, amount and destination are visible after reload; no local-only success is presented. |
| ST-03 | FR23<br/>P0<br/>PayOS return and cancel | Open payment from a real server order; exercise cancel/return and then a controlled verified callback. | Redirect alone does not prove PAID; UI reconciles with Backend and displays the matching order/payment status. |
| ST-04 | FR14–FR17<br/>P1<br/>Device management UI | List owned devices, rename one, inspect mapping and attempt an invalid/foreign update. | Valid changes survive reload; ownership failures are shown clearly without changing foreign data. |
| ST-05 | FR19–FR22<br/>P1<br/>Store to driver journey | Store confirms/fulfils an eligible order, driver claims and completes with required proof; store reviews handover. | All role screens agree with committed Backend states, evidence and shift totals. |
| ST-06 | FR01–FR38<br/>P1<br/>Mobile four-tab flow | Use Home, Devices, Orders and Account on a candidate app; refresh each screen and reopen an order detail. | Navigation, loading and current account data remain consistent; no unsupported household role is required. |
| ST-07 | FR01–FR04<br/>P0<br/>Mobile expired session | Expire access credentials during an order list request, then revoke refresh credentials and retry. | Valid refresh recovers; revoked session returns to authentication without leaking stale protected content. |
| ST-08 | FR34<br/>P1<br/>Reconnect and notification | Disconnect/reconnect the client while a test order changes state; allow then deny notification permission. | Client refreshes authoritative state after reconnect; denied push permission does not block core order use. |
| ST-09 | NFR<br/>P1<br/>Responsive and keyboard use | Test Web at 360, 768 and 1366 px; use keyboard for login, checkout, order actions and error recovery; retain screenshots and browser version. | Critical labels/buttons remain readable and usable; no clipped actions or keyboard trap blocks the journey. |
| ST-10 | NFR<br/>P1<br/>Controlled load | Run the proposed workload in Section 2.1 against isolated seeded data, including stock-limited ordering. | Record p50/p95, throughput, errors and DB/resource observations; assess agreed targets and verify no oversell/duplicate settlement. |


#### 4.4 Acceptance Test Cases

| ID | Requirement and objective | Prerequisites and actions | Expected result |
| --- | --- | --- | --- |
| AT-01 | FR09–FR17<br/>P1<br/>Recurring essentials order | Representative customer creates a COD storefront order (or a declared software simulation of a configured button source), reviews the order and cancels while PENDING/CONFIRMED before 120 seconds. Repeat at expiry and using another account. A simulation is not physical-hardware acceptance. | Customer can identify the ordered items and see an accepted cancellation consistent with Backend state; simulator use is disclosed. |
| AT-02 | FR05–FR13<br/>P1<br/>Store operating flow | Representative owner manages an allowed product/stock and processes a customer order. | Business data and order totals agree across catalogue, stock and store order views. |
| AT-03 | FR19–FR22<br/>P1<br/>Delivery and cash | Representative delivery user completes an eligible COD order with the exact amount and proof; store reviews handover. | Delivery, cash responsibility and handover are understandable and match the committed records. |
| AT-04 | FR23–FR28<br/>P0<br/>Financial transparency | Representative owner reviews a controlled payment, wallet entry, verified bank and withdrawal/subscription history. | Amounts, states and references reconcile; provider test mode is visible in the evidence and unresolved financial failures block sign-off. |
| AT-05 | FR01–FR38<br/>P1<br/>Client usability | Representative customer completes login, device review, order review and account actions in Web and Mobile. | Critical journeys are usable; UI refinement findings are recorded with severity and owner. |
| AT-06 | FR29–FR30, FR38<br/>P1<br/>Administrative access | Representative administrator reviews permitted reports and performs a controlled admin action; ordinary user attempts the same action. | Authorized operation is auditable and understandable; ordinary user access remains denied. |


#### 4.5 Physical Hardware Test Cases

| ID | Requirement and objective | Prerequisites and actions | Expected result |
| --- | --- | --- | --- |
| HW-01 | FR14–FR17<br/>P1<br/>Power and startup | When the prototype is ready, record board variant, wiring and supply; power on and inspect boot/serial indicators. | Stable startup without reset loop; firmware and board identity are captured. |
| HW-02 | FR14–FR17<br/>P1<br/>BLE and Wi-Fi setup | Use a BLE-capable phone, reset configuration and provision valid Wi-Fi; repeat with denied permission and wrong password. | Valid provisioning reaches the configured cloud; invalid setup gives recoverable feedback without claiming success. |
| HW-03 | FR10, FR12<br/>P0<br/>Gesture and signed order | Record supported single/double/hold mappings; perform each gesture and capture signed request and Backend order trace. | One intended action per gesture; order/cancel/Wi-Fi actions match the selected firmware variant and valid server response. |
| HW-04 | FR10–FR17<br/>P0<br/>Network interruption | Drop Wi-Fi during a button order, restore it and repeat the same logical event under the supported retry policy. | No false success or duplicate business order; feedback distinguishes pending, accepted and failed outcomes. |
| HW-05 | NFR<br/>P1<br/>Power and sleep | Measure active/sleep current with the actual board and power configuration; wake and send an event. | Record measured values and wake behavior; compare with an agreed hardware target before claiming battery life. |
| HW-06 | FR14–FR17<br/>P1<br/>Feedback and reconnect | Force accepted/rejected server responses, loss of network and reboot; observe LED/buzzer and restored configuration. | Feedback matches actual result, credentials/configuration persist appropriately, and recovery permits a subsequent valid action. |


The original six HW IDs remain BLOCKED by physical readiness. In the expanded register, five additional physical-dependent designs are BLOCKED; other new cases are NOT RUN. Recorded automated assertion evidence does not automatically mark the original catalogue or end-to-end/manual designs passed.

#### 4.6 Traceability and Existing Automation

| Requirement group | Report case references | Existing repository evidence |
| --- | --- | --- |
| Accounts | UT-01–UT-03, UT-10; IT-01–IT-03; ST-01, ST-07 | Mobile/test/api_client_test.dart, logout_flow_test.dart; Backend/tests/firebase-phone-auth.spec.ts |
| Orders and stock | UT-04, UT-06–UT-07, UT-09; IT-08–IT-14; ST-02; AT-01–AT-02 | Backend/tests/order-lifecycle.spec.ts, inventory-concurrency-race.spec.ts; Mobile/test/stock_order_test.dart |
| Devices and templates | IT-04–IT-07; ST-04; HW-01–HW-06 | Backend/tests/device-config-product-mapping.test.ts, zero-touch-provisioning.test.ts, device-templates-bulk-deploy.spec.ts |
| Payment and finance | UT-05, UT-08; IT-15–IT-22; ST-03; AT-04 | Backend/tests/bank-account-verification.spec.ts, withdrawal-concurrency-idempotency.spec.ts; Mobile/test/quick_order_payment_test.dart |
| Delivery and roles | IT-23–IT-25; ST-01, ST-05; AT-03, AT-06 | Backend/tests/driver-shifts-monitoring.spec.ts, store-staff-management.spec.ts, identity-verification-didit.spec.ts |
| Clients and operations | UT-11–UT-12; IT-26; ST-06, ST-08–ST-10; AT-05 | Mobile/test/orders_api_integration_test.dart; Backend/tests/phase3-queues-retry-dlq.spec.ts, phase5-graceful-shutdown-health.spec.ts |


Additional catalog, discount, category, address, customer, analytics, subscription and rental suites are enumerated in the CI inventory in Section 5. They extend automation coverage beyond the representative report-case catalogue. Every Report 3 requirement still needs a reviewed execution link before acceptance; a grouped reference does not establish full coverage by itself.

### 5. Test Reports

#### 5.1 Evidence and Execution Status

Evidence updated 30 October 2026. The recorded four-job tag CI passed at commit 9e7ff50dc6f0c60392b5fe96dd76779d9396c6d1. A new local rerun of the same unchanged source passed nine Backend and four Web cancellation tests. A local Flutter attempt produced no runner result and was interrupted; no new Mobile pass is claimed. Historical selected 71-Mobile-test evidence remains separate from current reruns and from the report-ID catalogue.

| Evidence | Observed result | Interpretation |
| --- | --- | --- |
| Backend run 40299945105, 26 October 2026 | Workflow completed: failure. Quality/build job: success. Integration job: failure. Production deploy job: skipped. | A successful compile/build exists, but this revision did not meet its full CI gate. |
| Integration master runner | 40 suites; 38 reported PASS; 2 reported FAIL; duration 51.3 s. | 95% suite success by child-process exit status, not a count of individual test cases or feature acceptance. |
| Database preparation and readiness | Migrations, seed and /readyz wait steps succeeded. | CI environment initialization succeeded for that run; production health and live providers are not established. |
| Mobile selected Review-2 automation | Selected local suite: 71 tests passed; Flutter analysis reported no issues; tag CI Mobile job passed. | Only the explicitly selected files are covered. Initial full inherited Mobile execution had failures. |
| Web build and physical hardware | Review-2 Web build and four policy tests passed; hardware research/drawings exist. | No manual browser acceptance or assembled-device bench result is claimed. |


Historical evidence only: https://github.com/AmazonButton/Backend/actions/runs/40299945105 (26 October 2026, Backend e7331bc2). Build job 121495081893; integration job 121495346948. This historical full master runner enumerates 40 suites and is not the new selected Review-2 workflow.

#### 5.2 Historical Backend CI Suite Results (26 October baseline)

| No | Suite | Result | Duration |
| --- | --- | --- | --- |
| 1 | Firebase Phone Authentication Suite | PASS | 1.6 s |
| 2 | Firebase Cloud Messaging (FCM) & Notifications Suite | PASS | 1.6 s |
| 3 | Order Lifecycle, Window Cancel & Inventory Safety | PASS | 1.3 s |
| 4 | IoT Device Config & Product Mapping Suite | PASS | 1.3 s |
| 5 | Zero-Touch Provisioning & Security Incidents Suite | PASS | 1.8 s |
| 6 | End-to-End Zero-Touch Device Lifecycle v4.0 | PASS | 1.5 s |
| 7 | Multi-Vendor Marketplace, Rental & Escrow Wallet E2E | PASS | 1.1 s |
| 8 | Security Audit 8 Criteria & Zero Residue Verifier | PASS | 2.3 s |
| 9 | Smart Order Button API Integration Suite | PASS | 1.5 s |
| 10 | User Avatar URL & Profile Management Suite | PASS | 2.1 s |
| 11 | Order Minimum Value (>= 2,000 VND) Constraint Suite | PASS | 1.5 s |
| 12 | Didit eKYC Identity Verification Suite | PASS | 1.0 s |
| 13 | Penny-Deposit Bank Account Verification (2.000 VND) Suite | FAIL | 1.1 s |
| 14 | Device Templates, Bulk Deploy, Allocation & Order Alias Suite | PASS | 2.3 s |
| 15 | Frontend Contract Gap & Notifications Integration Suite | PASS | 5.3 s |
| 16 | Withdrawal Concurrency, Idempotency & Payout Engine Suite | PASS | 0.9 s |
| 17 | Storefront Checkout 6-Layer Architecture Suite | PASS | 0.8 s |
| 18 | Inventory Concurrency & Row-Level Locking Suite | PASS | 0.7 s |
| 19 | Product DTO & Category Ownership Boundary Suite | PASS | 0.8 s |
| 20 | Canonical Pagination Envelope & Limit Caps Suite | PASS | 0.7 s |
| 21 | Customer Addresses CRUD & Default Management Suite | PASS | 0.8 s |
| 22 | Category Hierarchy & Graph Cycle Detection Suite | PASS | 0.8 s |
| 23 | Product Discounts CRUD & Time Window Exclusivity Suite | PASS | 0.8 s |
| 24 | Order Filter, Date Range & Status Timeline Suite | PASS | 0.8 s |
| 25 | Store Self-Management & Profile Update Suite | PASS | 0.8 s |
| 26 | Store Staff Management & Anti-Role-Escalation Suite | PASS | 0.9 s |
| 27 | Store Subscription Public Catalog & History Suite | PASS | 0.8 s |
| 28 | Bank Account Verification Polling Suite | PASS | 0.8 s |
| 29 | Button Rental Payment Linking & Lifecycle Expansion Suite | PASS | 0.8 s |
| 30 | Product Price History & Inventory Read Views Suite | PASS | 0.9 s |
| 31 | Store Wallet & Withdrawal Pagination, Filter & Detail Views Suite | PASS | 0.8 s |
| 32 | Driver Shifts Monitoring & Delivery Summary Suite | PASS | 0.8 s |
| 33 | Store-Customer Relationship CRM Module Suite | PASS | 0.9 s |
| 34 | Analytics Date Range & Grouping Filters Suite | PASS | 1.1 s |
| 35 | P0 Security, Payout Refund & Concurrency Invariants Suite | PASS | 0.8 s |
| 36 | Phase 1 Database Transactions & Concurrency Invariants Suite | PASS | 1.0 s |
| 37 | Phase 2 Universal Idempotency Platform Suite | PASS | 1.1 s |
| 38 | Phase 3 Asynchronous Queues, Backoff Retry & DLQ Suite | FAIL | 1.8 s |
| 39 | Phase 4 Database Index & Query Optimization Suite | PASS | 0.6 s |
| 40 | Phase 5 Health Probes & Graceful Shutdown Suite | PASS | 2.9 s |


The runner uses each child process exit status to classify a suite. Some scripts combine live DB/API checks, direct service calls, source inspection and provider substitutes. Results therefore certify only what those scripts actually exercised in this CI environment. Do not interpret 38 successful exits as 38 fully validated production features, or infer an aggregate assertion count by adding incompatible script summaries.

#### 5.3 Failed Suites and Follow-up

| Finding | Observed evidence | Required investigation and retest |
| --- | --- | --- |
| R5-OBS-01<br/>Bank verification<br/>High priority | Suite 13 aborted in its concurrency section with Prisma P2002: unique constraint on store_id during storeBankAccount.upsert. Script summary: 33 passed, 1 failed. | Reproduce on a clean migrated DB; inspect fixture reuse, the store/account uniqueness model and upsert key. Resolve the cause, rerun the entire suite and verify concurrent verification/refund behavior. Root cause and fix are not yet established. |
| R5-OBS-02<br/>Queue retry and DLQ<br/>High priority | Suite 38 reported no DLQ entry ready for replay, then threw TypeError reading id from undefined at phase3-queues-retry-dlq.spec.ts:157. | Reproduce Redis worker timing and retry exhaustion; inspect persistence, polling/wait conditions and fixture cleanup. Guard test diagnostics against missing entries, then prove persistence/replay behavior and rerun. A timing or product cause must be confirmed, not assumed. |


The two findings describe the historical full-suite revision. Keep them open until the affected bank/DLQ suites have corrective-revision and rerun evidence. The selected Review-2 workflow does not include those two suites and cannot close these findings. No production-outage claim is made.

#### 5.4 Original 60-case Subset Statistics (see Section 6 for the expanded register)

| Case group | Designed | Pass / Fail | Not Run / Blocked |
| --- | --- | --- | --- |
| UT | 12 | 0 / 0 | 12 / 0 |
| IT | 26 | 0 / 0 | 26 / 0 |
| ST | 10 | 0 / 0 | 10 / 0 |
| AT | 6 | 0 / 0 | 6 / 0 |
| HW | 6 | 0 / 0 | 0 / 6 |
| Total | 60 | 0 / 0 | 54 / 6 |


Counting authority: Test Report Execution_Register contains 208 unique IDs: 20 PASS, 177 NOT RUN, 11 BLOCKED; zero current FAIL IDs recorded. Recorded execution coverage is 20/208 (9.62%), while pass rate among the 20 executed mapped IDs is 100%. Neither number proves overall product acceptance or closes the two historical failed suites. Unit/component workbook contains 28 IDs (16 PASS and 12 NOT RUN), all overlapping the main register.

#### 5.5 Reproduction and Run Record

Reproduction must target the declared fixed revision and an isolated database. See Section 6 for exact selected commands and dependencies. npm run test:all is the wider legacy runner; it must not be substituted for the selected CI run or launched against public staging. Record provider modes, migration IDs, fixtures and each exit/result; retain targeted bank/DLQ reruns separately.

Flutter: reproduce the selected files listed in .github/workflows/ci.yml with a compatible recorded SDK, or run only test/review2_cancellation_test.dart and label that scope explicitly. Web: npm ci then npm test; npm run build is compile/build verification, not a browser acceptance journey. Backend: npm run test:review2 requires no live DB; tests/review2-cancellation-db.spec.ts is a distinct seeded local PostgreSQL check guarded to a local database ending in _test.

Hardware reproduction begins only after the board is ready. Record the selected modular or Arduino firmware variant, resolved dependencies, board/wiring and configuration; build/flash using the corresponding project instructions, then execute the HW catalogue while retaining serial traces and server request/order references. A successful firmware build alone does not complete a bench case.

| Run field | Required contents |
| --- | --- |
| Identity | Run ID; case ID or suite name; executor/reviewer; execution date and timezone. |
| Baseline | Repository commit(s), app/firmware build and API target; migration/seed baseline. |
| Environment | OS/browser/phone/board; SDK/tool versions; mock/live provider mode; sanitized fixture identifiers. |
| Outcome | Expected and actual result; Pass, Fail, Blocked or Not Run; duration if measured; defect reference. |
| Evidence | Command and exit code, relevant log, request/response or screenshot, before/after DB assertions and provider references. |
| Retest | Corrective revision, previous finding, rerun evidence and reviewer disposition. |


#### 5.6 Completion Assessment

The selected Iteration 1 CI gate has passed on tag review-2. Final acceptance still requires cross-client demo, mapped report-case outcomes, NFR/provider measurements and later hardware validation. Historical bank/DLQ findings remain unclosed without their affected-suite evidence. The initial full Mobile run had failures; passing the selected 71 tests does not claim the entire legacy suite now passes.

#### 5.7 Source Register

Active software: Review-2/backend, frontend and mobile at the frozen commit. Workflow: .github/workflows/ci.yml. Review tests: backend/tests/review2-cancellation*.spec.ts, selected API scripts, frontend/tests/orderCancellation.test.ts and selected mobile/test files. The old master runner and separate Hardware repository remain historical/outside-selection references, not the list executed by Review-2 CI.

https://github.com/AmazonButton/Frontend/tree/72594427216c30fcec727deb6825f51d982b21a4

https://github.com/AmazonButton/Backend/tree/e7331bc2ce17f248ce3a9efad637b4d29cc09d81

https://github.com/AmazonButton/Mobile/tree/2bacc9635ced7bd8f2152f3b71b2ecf315799121

https://github.com/AmazonButton/Hardware/tree/ac82792daebf01b47e4c8489435308a27c793688

Business scope, team identities and requirement identifiers are carried forward from Report 3; software structure is carried forward from Report 4. Relative milestone dates and suggested test ownership are planning assumptions in this report. CI outcomes are attributed to the linked run rather than to unobserved manual execution.


## Review 2 synchronization addendum — working draft

Prepared 29 October 2026. Frozen software snapshot: https://github.com/AmazonButton/Review-2/tree/review-2; commit 9e7ff50dc6f0c60392b5fe96dd76779d9396c6d1.

These edits synchronize the available documents with the implemented Iteration 1 snapshot. The final Registration form is not yet baselined. Existing wider product requirements are retained as proposals, not silently removed. COD is selected for Iteration 1; PayOS collection, bank verification and withdrawals are included and implementation-complete as reported by the team on 30 October 2026. Deployment providers are declared as Vercel/Render/Supabase; Flutter is the Mobile framework. Formal Registration approval and deployed-revision/provider acceptance evidence remain separate. No BM03/BM02 approval is asserted.

### Iteration 1 boundary

| ID | Review scope |
| --- | --- |
| I1-01 | Sign-in and basic role authorization |
| I1-02 | Store and product browsing |
| I1-03 | Customer delivery-address management |
| I1-04 | COD checkout |
| I1-05 | Store order processing |
| I1-06 | Customer order list, detail and timeline |
| I1-07 | Hardware component research, block diagram, proposed schematic and operating flow |
| I1-08 | Common 120-second customer cancellation rule |

Hardware is research and proposed drawings in Iteration 1, not an assembled or validated prototype. This does not remove functional IoT hardware from the final capstone scope. Features outside Iteration 1 remain subject to the approved final Registration.

### Customer cancellation contract

Customers may cancel their own orders from any channel only while PENDING or CONFIRMED, with elapsed server time >= 0 and < 120 seconds from order creation. At exactly 120 seconds or later, reject with CANCEL_WINDOW_EXPIRED. Authenticate and check ownership before an idempotent response; a retry of an already CANCELLED order by its owner does not repeat stock effects. Privileged operational cancellation remains a separate permission-controlled path.

The service validates eligibility and the repository repeats status/deadline validation after SELECT ... FOR UPDATE using a database clock read after the lock. Invalid requests have no inventory mutation. Active generic status transitions are still subject to staff authorization. A legacy device cancelWindowSeconds column/default may remain in the schema; it no longer overrides the common customer-cancellation policy in this snapshot.

### Observed verification

| Evidence | Observed result | Limit |
| --- | --- | --- |
| Tag workflow | https://github.com/AmazonButton/Review-2/actions/runs/40885061978 — success, four jobs | Selected Iteration 1 checks; not the full inherited suite |
| Backend | Build/type check and 9 cancellation regressions passed locally; DB/API job passed on tag | Does not certify real provider or physical-device behavior |
| Web | Build and 4 cancellation-policy tests passed | Manual browser acceptance remains pending |
| Mobile | Analysis: no issues; selected local suite: 71 tests passed; tag CI job passed | Initial full inherited run failed; not replaced by a full-suite pass claim |
| Hardware | Research, two proposed drawings, valid SVG XML | No assembly, flashing, physical measurements or integration acceptance |

### Open review items

• Obtain BM03 and approve Registration; Reports 1/2 were synchronized on 30 October 2026 and final scope/effort/ownership approval remains pending.

• Staging URLs are supplied in Section 6. Record deployed Web/Worker/Render revisions, provider modes, Supabase project/region and real readiness/smoke evidence; implementation completion is separate.

• Report 4 now includes activity/state views and a companion editable-source package. Add approved sources/documents to the submission repository without silently moving the frozen tag.

• Report 4 Figures 1/17 and workflow/state views were updated; align route/guard and full state-transition test inventory before final commitments.

• The workbook maps 38 FRs and four proposed workflows to owners and planned cases. Confirm ownership, expected outcomes, complete transition coverage and actual demo evidence before sign-off.

• Retest inherited bank-verification and DLQ findings separately before closing them; selected CI success does not prove those fixes.

• Complete manual demo/NFR/provider execution records; do not convert Not Run/Blocked into Pass without evidence.

• After approval and final layout review, export official English PDFs with the course naming convention and reconcile the submission snapshot without silently moving the published tag.

## 6. Review 2 Traceability, Execution Register and Remaining Gates

Revision: 30 October 2026. This section supersedes outdated tool/catalogue/ownership statements in earlier versions. It does not replace historical failed-run evidence, create a supervisor approval, or mark unexecuted cases as passed.

### 6.1 Authoritative Workbooks and Counting Rules

Main Test Report: https://docs.google.com/spreadsheets/d/1EseLTh4Gi3g8JMlgXEQhSmNym-LPuxI8/edit

Unit/component workbook: https://docs.google.com/spreadsheets/d/1bd9XsSa-VESEaxj7EpyZ6S6657nv2_EB/edit

Reproduction logs and execution manifest: https://drive.google.com/file/d/1rHI4elpGC0mBqL0JJf-QtYmm91sF5BS8/view

| Register group | Designed IDs / state | Interpretation |
| --- | --- | --- |
| Original catalogue | 60 = 54 NOT RUN + 6 BLOCKED | UT/IT/ST/AT/HW rows in Sections 4–5 retained; case-level execution mapping pending. |
| Recorded automation | 20 PASS | 9 Backend policy/mock + 4 Web policy + 3 Mobile model + 4 PostgreSQL scenarios; cases are not CI job counts. |
| Feature designs | 114 | FR01–FR38, three distinct principal/boundary-authorization designs per feature; not a claim every subcondition is covered. |
| Workflow demos | 8 | One principal and one exception per WF01–WF04; ownership proposed as in BM01. |
| NFR measurements | 6 | BM01 N1–N6 targets; none measured here. |
| Total master register | 208 = 20 PASS + 177 NOT RUN + 11 BLOCKED | Execution_Register counts distinct IDs only; view tabs and overlapping unit workbook are not added again. |
| Recorded execution coverage | 20/208 = 9.62% | 100% pass rate among the 20 mapped executed IDs is limited to that subset; it is not overall acceptance. |
| Unit/component subset | 28 = 16 PASS + 12 NOT RUN | Includes pure policy/model and mocked service/repository component tests; no line/branch coverage percentage claimed. |

### 6.2 Requirement, Workflow and State Traceability

FR_Traceability lists every SRS FR01–FR38 with a new P/N/A design triad, legacy grouped references, mapped execution IDs and a proposed primary workflow owner. P means principal outcome, N means feature-specific boundary/error/repeat handling, A means authorization/trust-boundary rejection. A design triad is a reviewed starting set; it does not prove every requirement subclause or invalid state transition is tested.

| Workflow / proposed owner | SDD / main and exception IDs | Expected evidence |
| --- | --- | --- |
| WF01 / Nguyen Van Thanh | Report 4 Figure 32; R2-WF01-MAIN / R2-WF01-EXC | Valid session and own address persist; account scope is enforced. No session bypass, foreign data or mutation. |
| WF02 / Le Ho Gia Bao | Report 4 Figure 33; R2-WF02-MAIN / R2-WF02-EXC | One order follows permitted fulfillment states; stock, proof, cash and timeline reconcile. Eligible cancellation has one effect; expired/ineligible/foreign request has none. Retain current-state/row-lock evidence. |
| WF03 / Tran Tan Phat | Report 4 Figure 34; R2-WF03-MAIN / R2-WF03-EXC | One verified payment and one settled or correctly compensated withdrawal; no immediate collection-to-wallet assumption. Invalid evidence rejected; no double debit/refund; uncertain payout remains PROCESSING until reconciled. |
| WF04 / Truong Quang Tan Tai | Report 4 Figure 35; R2-WF04-MAIN / R2-WF04-EXC | Owned configured physical device creates one order with traceable acknowledgment. No false pairing/order success or duplicate effect; recoverable failure is visible. |

Transition_Inventory contains the 16 declared ALLOWED_ORDER_TRANSITIONS edges, each pending exact route, role, current-state guard and positive/invalid expected-result reconciliation. It is not an executed case list. Payment, bank ownership/verification refunds, withdrawals, device/provisioning, rentals, subscriptions and shifts have separate state domains. Complete their valid/invalid transition inventory before fixing T. The BM01 lower-bound calculation 3×38 + 4 + 16 + 6 = 140 is not the final commitment; this 208-ID draft catalogue contains additional/overlapping designs and does not automatically become the fixed Defense total.

### 6.3 Environment, Fixtures and Execution Safety

| Target | Declared endpoint / condition |
| --- | --- |
| Web | https://buttontdash.vercel.app/ |
| Public API | https://fragrant-mode-3a41.ptt24032004.workers.dev/api/v1 |
| Backend / Swagger host | https://backend-fae8.onrender.com; source mounts Swagger at /docs; exact live path/revision unverified |
| Database / queue | Supabase PostgreSQL declared; project/region and Redis runtime not supplied. Mutating/concurrency tests require isolated seeded test data. |
| Mobile / hardware | Record app build, supported phone/OS, API host, physical board/firmware, router and permissions. No current physical acceptance result. |
| Provider mode | Declare mocked/controlled/live mode per run. No real payment/withdrawal, identity verification or phone push was executed by this documentation update. |

Use two tenants/customers and explicit allowed/foreign actors; active/inactive products, known stock/reservations, own/foreign addresses/devices, verified/unverified bank fixtures and ledger balances. For each run record pre/post values, migration revision, actual callback evidence, request IDs and cleanup of only test-created isolated data. Do not point master runners, seed resets or concurrency scripts at the public staging/production database. The earlier endpoint availability checks could not resolve hosts from this execution environment; no outage or successful live readiness is inferred.

### 6.4 Reproduction and Actual Run Records

| Run / command | Actual result | Limits |
| --- | --- | --- |
| RUN-20261030-BE \| backend/: npm run test:review2 | 9 passed, 0 failed; exit 0; Node v24.18.0/npm 10.9.9 | Policy plus mocked service/repository tests; no local DB/API/provider needed. |
| RUN-20261030-WEB \| frontend/: npm test | 4 passed, 0 failed; exit 0 | Node policy/countdown assertions; no browser journey. |
| RUN-20261030-MOBILE-ATTEMPT \| flutter test --no-pub --reporter expanded test/review2_cancellation_test.dart | No runner output/result obtained; interrupted | Do not count as PASS or product failure. Earlier selected tag-Mobile evidence remains valid for its own run. |
| Frozen tag CI \| .github/workflows/ci.yml | Recorded four-job success; https://github.com/AmazonButton/Review-2/actions/runs/40885061978 | Selected integration/API suite and selected Mobile files; not the full historical master runner. |
| DB reproducer \| backend/: npx tsx tests/review2-cancellation-db.spec.ts | Not rerun locally in this revision; four mapped cases retain prior tag evidence | Requires seeded local DB ending in _test; 100s/130s ages do not establish exact-120s database-race proof. |
| Historical targeted retests | Bank and DLQ remain OPEN / retest pending | tests/bank-account-verification.spec.ts and tests/phase3-queues-retry-dlq.spec.ts; use actual corrective revision and isolated infrastructure. |

An executor is not inferred from a proposed owner. Unexecuted cases leave actual executor/date blank. A status change to PASS requires the case ID, target revision/build, environment/provider mode, exact steps/command, expected/actual result, evidence and any defect/retest references. Secret values and real identity/bank payloads must be masked in retained evidence.

### 6.5 Proposed NFR Measurements and Acceptance Targets

| ID / objective | Procedure and proposed target |
| --- | --- |
| N1 / API latency | Seed 10 stores and 10,000 orders; 50 concurrent users exercise agreed ordinary list/detail APIs for a proposed five-minute window; exclude provider time explicitly. Record workload, duration, p50/p95, error count and environment. Proposed BM01 target: p95 <=2 seconds at 50 concurrent users. Do not claim measured success before execution. |
| N2 / Ownership/authorization | Execute the agreed cross-customer and cross-store negative set, including address, order, payment, bank, wallet and admin operations. 100% of required negative cases reject without foreign data disclosure or mutation; preserve response and DB assertions. |
| N3 / Idempotency/concurrency | Replay 100 identical accepted event/callback IDs and run 10 competing requests on isolated stock/wallet fixtures. Zero duplicate stock/ledger effects; compare before/after totals and each logical operation reference. Scope is limited to the approved operation set. |
| N4 / Responsive Web | At 360, 768 and 1366 px, use keyboard and browser to complete login, checkout, order actions and error recovery; capture screenshots. Critical controls readable/reachable; no horizontal body overflow or blocked primary action on declared browsers. |
| N5 / Reconnect recovery | Ten controlled disconnect/reconnect attempts while an order changes; compare client visible state and server timestamps. Authoritative order state visible within five seconds after reconnect under declared network conditions. |
| N6 / Physical provisioning | Ten supervised trials with the declared physical board/phone/router; time from QR/BLE start to owned configured device. At least 9 of 10 trials complete within three minutes under declared setup. Hardware/phone/router and excluded external outages are recorded. |

Defense targets proposed for Review 2: 100% main workflows end-to-end; 100% principal demos and at least 80% exception demos pass; execute no fewer than the approved fixed total; at least 90% of committed cases and 100% mandatory principal cases pass; at least 50% automated in CI; no open Critical/High defects. These are future gates, not achieved results. Approval must reconcile the full SRS NFR set, complete state-transition inventory and individual commitments.

### 6.6 Remaining Sign-off Items

Confirm Registration/BM03 and workflow owners; review each new design/expected outcome; finish route/state/invalid-transition inventory and fixed totals; run manual workflow/provider and measured NFR checks; resolve or explicitly disposition historical findings with valid reruns; record deployed revisions and release/rollback smoke evidence; run unchanged BM02 prompt; then export the approved submission. BM04 records the actual post-review commitments under the course deadline. No signature, approval, hardware result or live financial result is fabricated here.

### Observed demo smoke update — 30 October 2026

After the user corrected the demo credential, customer login reached /customer/home and the own-orders page loaded. Store login reached dashboard/device/wallet views; admin login reached Admin Hub. All sessions were logged out after read-only smoke checks. No order, payment, bank, withdrawal or device mutation was performed; no full workflow PASS is inferred.
