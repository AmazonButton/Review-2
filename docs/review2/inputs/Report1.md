# Report1 — Review 2 proposed input

FA26SE124 | GFA26SE25 | 30 October 2026. Contact emails/phones redacted in this public repository view; full editable originals are in the team Drive. No business requirement or source rule is redacted.


![Embedded Report1 diagram](assets/Report1-7247f62de38a9c.png)








CAPSTONE PROJECT REPORT

Report 1 – Project Introduction










– Ho Chi Minh, 2026 –

Table of Contents


## I. Record of Changes

| Date | A*<br/>M, D | In charge | Change Description |
| --- | --- | --- | --- |
| 13/09/2026 | A | Nguyen Van Thanh | Initial complete draft of Report 1 – Project Introduction |
| 30/10/2026 | M | Project team (review pending) | Review 2 scope alignment: PayOS/bank verification/withdrawals; server-authoritative cancellation under 120s for all channels; PostgreSQL and declared Vercel/Render/Supabase setup; distinguish Iteration 1 hardware research from final IoT acceptance; add final-scope features and explicit exclusions. Draft for team/supervisor review; no approval or new test execution asserted. |
|  |  |  |  |
|  |  |  |  |
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

## II. Project Introduction

### 1. Overview

#### 1.1 Project Information

Project name (English): Smart IoT Ordering Button for Apartment Residents

Project name (Vietnamese): Hệ thống nút bấm IoT hỗ trợ đặt hàng nhu yếu phẩm cho cư dân chung cư

Project code / Abbreviation: SmartOrderButton (SOB-IOT, working abbreviation; project FA26SE124; group GFA26SE25).

Major: Software Engineering (Specialty: ES / IS / JS)

Software type: Full-stack IoT SaaS Platform (Web Application, Mobile Application, Embedded Firmware, Cloud Backend)

Review 2 revision draft | 30 October 2026. This revision reflects the team-confirmed scope and deployment choices; supervisor approval of Registration/BM03, official submission template, final reviewed commitments and test commitments remains pending. SOB-IOT is the working abbreviation. Implementation completion, executed test evidence and final acceptance are recorded separately.

#### 1.2 Project Team


| Full Name | Student ID | Role | Email | Mobile |
| --- | --- | --- | --- | --- |
| Truong Long | - | Lecturer (Supervisor) | [contact email redacted] |  |
| Nguyen Van Thanh | SE193632 | Leader | [contact email redacted] | [contact phone redacted] |
| Le Ho Gia Bao | SE184518 | Member | [contact email redacted] | [contact phone redacted] |
| Truong Quang Tan Tai | SE182652 | Member | [contact email redacted] | [contact phone redacted] |
| Tran Tan Phat | SE183281 | Member | [contact email redacted] | [contact phone redacted] |


### 2. Product Background

In modern high-rise apartment complexes across Vietnam, residents frequently purchase essential commodities on a recurring basis — such as cooking gas cylinders (12kg), drinking water jugs (19–20L), rice bags, and household paper products. However, the current traditional process of ordering these items via smartphones presents several significant friction points:

1. Multi-step ordering: Reordering a familiar essential item may require finding a phone, opening an application, locating the product, selecting an address and confirming checkout. The project aims to reduce this interaction through a configured physical button and accessible Web/Mobile ordering. Timing and usability improvements remain to be measured.

2. Accessibility: Residents who find smartphone navigation difficult may benefit from a simple physical ordering action. Accessibility and usability must be evaluated with representative users; no completed user study is claimed here.

3. Store operations: Fragmented phone or chat orders can make stock availability, fulfillment and customer status difficult to coordinate. The platform centralizes the catalog, inventory, order lifecycle and delivery records.

4. Physical-to-digital ordering: SmartOrderButton proposes a secure link between an owned, configured IoT button and the store order workflow, supported by Web and Mobile applications.

### 3. Existing Systems

#### 3.1 Amazon Dash Button

Description: Amazon Dash Button is a compact physical button device developed by Amazon starting in 2015, allowing customers to reorder familiar consumer products (laundry detergent, paper towels, etc.) with a single press. The device connects via Wi-Fi to Amazon's cloud infrastructure and automatically creates an order on the user's Prime account.

Link: https://www.amazon.com/Dash-Buttons/ (Discontinued since February 2019)

Target Users: Amazon Prime customers in the US, Japan, and Europe.

Key Features: One-Touch Reorder via physical button press; Wi-Fi connectivity, configured through the Amazon mobile app; Deep integration with Amazon's e-commerce, payment, and logistics ecosystem

Pros: Extremely simple user experience — single button press to order; Seamless integration with Amazon's payment processing and delivery network; Compact industrial design; can be affixed to appliances such as washing machines, refrigerators, or kitchen shelves

Cons / project comparison: The historical Amazon Dash ecosystem depended on Amazon accounts and catalog integration. SmartOrderButton instead targets local-store workflows. Internal security or cancellation capabilities of that third-party product have not been independently verified for this report.

#### 3.2 Xiaomi Mi Smart Button (Aqara)

Description: The Xiaomi Aqara Smart Mini Switch operates on the Zigbee protocol, allowing users to configure custom actions through the Mi Home application (toggle lights, trigger scenes, send notifications, etc.). The device functions as an automation trigger within Xiaomi's smart home ecosystem.

Link: https://www.aqara.com/en/smart_mini_switch.html

Target Users: Users of the Xiaomi/Aqara smart home ecosystem.

Key Features: Supports Single Click, Double Click, and Long Press with customizable actions; Connects via Zigbee protocol (requires a dedicated Zigbee Gateway Hub); Customizable actions via the Mi Home application or Apple HomeKit

Pros / comparison considerations: A compact multi-action smart switch can simplify physical interaction. Actual price, battery life and compatible integrations depend on the selected model and operating conditions; these are not measured SmartOrderButton results.

Cons / project comparison: A home-automation switch requires compatible automation infrastructure. The proposed project additionally defines store catalog, order, payment and delivery workflows; this report does not establish the absence of particular internal security mechanisms in third-party products.

### 4. Business Opportunity

The market for essential goods ordering within apartment complexes in Vietnam presents several untapped opportunities:

1. Recurring demand: Familiar essential goods are a suitable use case for a configured reorder shortcut. Demand frequency and willingness to adopt require validation; no market survey is claimed.

2. Local-store ordering: The opportunity is to connect a physical reorder action with participating stores and an accountable order lifecycle. A claim of exclusive market availability is outside this report.

3. Store digitization: A shared digital view of products, stock, orders, delivery and financial records can support distributors serving apartment residents.

4. Prototype feasibility: ESP32 provides Wi-Fi and BLE capabilities suitable for investigating a physical ordering prototype. Component cost, battery performance and reliability must be established for the chosen design.

5. Device security: The design uses authenticated device requests, ownership checks and replay protection. These are design requirements to verify, rather than a claim of inventing a new security standard.

### 5. Software Product Vision

For apartment residents in high-rise complexes — including elderly individuals living alone — who need to reorder essential consumable goods (gas, water, rice, household products) quickly and without technological barriers, and for local store vendors and distributors serving apartment buildings who seek to digitize their order intake and inventory management processes, SmartOrderButton is a comprehensive IoT ecosystem that connects intelligent physical buttons (ESP32 microcontroller) with a cloud backend through a 3-tier architecture (Hardware Edge Layer — Cloud Core — Client Applications).

The proposed final product combines ESP32 ordering/provisioning, Web and Flutter Mobile ordering, catalog and inventory, COD and PayOS order payments, delivery tracking, store banking/wallet/withdrawals, device rentals/subscriptions, and role-based administration. Iteration 1 is a smaller delivery slice and includes hardware research/drawings; it does not demonstrate final physical-device acceptance.

### 6. Project Scope & Limitations

#### 6.1 Major Features

FE-01: One-touch ordering via ESP32 physical button — a resident presses a single button to generate an order secured with HMAC-SHA256 cryptographic signature, transmitted to the Cloud, and delivered as a real-time notification to the store vendor dashboard.

FE-02: Customer order cancellation — Customer cancellation applies to orders from all ordering channels while the order is PENDING or CONFIRMED and server-measured elapsed time since creation is strictly less than 120 seconds. At exactly 120 seconds or later, cancellation is rejected. Ownership and status are checked on the server; the deadline is checked again after acquiring the order row lock. A client countdown is advisory. A physical-button cancellation gesture is not assumed accepted without its own implementation and test evidence.

FE-03: Device provisioning and ownership — scan the device identifier, configure Wi-Fi through the supported provisioning flow and claim/configure the device. Provisioning within three minutes is a proposed measurable target, not an achieved result.

FE-04: Store order and delivery lifecycle — process authorized transitions PENDING → CONFIRMED → PREPARING → READY_FOR_DELIVERY → SHIPPING → DELIVERED → COMPLETED, with guarded cancellation/failure branches, delivery claim, completion evidence and driver shift/handover support.

FE-05: IoT Device Fleet Manager — monitors LiPo battery status, Wi-Fi RSSI signal strength, device activity status, QR label printing for product packaging, and dynamic product-to-button mapping.

FE-06: Inventory Manager — tracks product stock levels, automatically deducts inventory upon order placement, generates low-stock alerts, and supports a full product catalog.

FE-07: Resident Portal — manages "My Buttons" dashboard, assigns specific products to each physical button, tracks personal order history, and supports 1-touch Wi-Fi change.

FE-08: Hardware research and simulation support — maintain circuit/enclosure drawings and controlled device-request simulations for integration investigation. Simulated requests and drawings do not prove a working physical prototype; fixed simulator-command counts are not an acceptance commitment.

FE-09: Multi-layer security system — HMAC-SHA256 Edge Authentication, Anti-Replay Attack protection, Clock Drift Guard, Anti-Spam Debounce Engine, and Role-Based Access Control (RBAC).

FE-10: System Administration (Super Admin) — platform-wide statistics, new vendor approval workflow, master product catalog management, audit logs, and security monitoring hub.

FE-11: Flutter Mobile application — customer Home, Devices, Orders and Account navigation, with account/session, address, storefront/order, device provisioning and notification flows as specified in SRS. Platform build/device evidence is required before claiming Android/iOS acceptance.

FE-12: Customer and store operations — account recovery/verification, customer identity where required, delivery addresses, store staff/profile, store customers/analytics and authorized media management.

FE-13: PayOS and store financial lifecycle — process order payments and verified provider callbacks; maintain wallet/ledger records, verify store-bank ownership, and authorize/track withdrawals with failure/compensation controls (SRS FR23–FR26).

FE-14: Commercial and platform administration — device rentals, store subscriptions, store approval, platform users/plans, fleet security, templates/batches and background-processing monitoring (SRS FR27–FR32 and FR38).

Feature traceability: FE identifiers are introductory groups. The detailed requirement baseline remains SRS FR01–FR38; grouping does not reduce the mandatory-feature count used in BM01/test planning.

#### 6.2 Limitations & Exclusions

LI-01: Payment integration boundary — COD and PayOS are included. The team reports PayOS collection, store-bank ownership verification and withdrawals implemented. Other payment gateways are excluded unless added through change control. Provider mode, callback/ledger correctness and live acceptance require separate test evidence; this report does not claim a live funds-transfer test.

LI-02: GPS Delivery Tracking — the system does not currently integrate real-time GPS tracking of delivery personnel on a map.

LI-03: Mass Production Hardware — the Capstone version utilizes ESP32 DevKit modules and prototype circuits.

LI-04: Deployment — team-declared demo/staging uses Vercel for Web, Render for Backend and Supabase PostgreSQL for the database. Flutter is the mobile framework, with device/build distribution recorded separately. Exact URLs, deployed revisions, provider modes, rollback and availability remain to be recorded; production acceptance is not claimed.

LI-05: Cellular Network Protocol Support (LTE-M / NB-IoT) — the current version only supports Wi-Fi 2.4GHz connectivity.

LI-06: Internationalization (i18n) — the interface currently supports primarily Vietnamese with partial English.

#### 6.3 Review 2 Delivery Boundary and References

Iteration 1 comprises I1-01 account/login and basic roles; I1-02 stores/products; I1-03 delivery addresses; I1-04 COD checkout; I1-05 store order processing; I1-06 customer order tracking; I1-07 hardware research and drawings; I1-08 customer cancellation under the common 120-second policy. Completed financial work remains part of the wider product scope and is not excluded by the Iteration 1 COD focus.

Excluded from the current committed product baseline: household membership/RBAC, shared shopping lists, order batching, Gaussian demand prediction, emergency-service alerts, live GPS tracking and mass-production certification. Any future addition requires Registration/BM03 and corresponding SRS/SDD/test changes.

Review 2 source snapshot: https://github.com/AmazonButton/Review-2/tree/review-2; commit 9e7ff50dc6f0c60392b5fe96dd76779d9396c6d1. Documents are revised separately and are not claimed to be contained in that frozen tag. Related artifacts: Report 3 SRS, Report 4 SDD, Report 5, Project Tracking, BM01 and the pending Registration/BM03 and BM02. Final hardware operation remains in the overall project scope.
