# Registration — Review 2 proposed input

FA26SE124 | GFA26SE25 | 30 October 2026. Contact emails/phones redacted in this public repository view; full editable originals are in the team Drive. No business requirement or source rule is redacted.

![Embedded Registration diagram](assets/Registration-164d9c8482ab24.png)


CAPSTONE PROJECT REGISTER


Class / group: GFA26SE25. Project code: FA26SE124. Academic start/end dates: pending team confirmation.

Profession: Software Engineering. Specialty: to be confirmed by the group/course record.

Register type: student capstone proposal; supervisor information retained below.

1. Register information for supervisor (if have)


| Họ và tên / Full name | Điện thoại / Phone | E-Mail | Học vị / Title | Vai trò / Role |
| --- | --- | --- | --- | --- |
| Trương Long | [contact phone redacted] | [contact email redacted] | Mr. | Giảng viên hướng dẫn / Supervisor |


2. Register information for students (if have)


|  | Full name | Student code | Phone | E-mail | Role in Group |
| --- | --- | --- | --- | --- | --- |
| 1 | Nguyễn Văn Thành  | SE193632  | [contact phone redacted] | [contact email redacted] | Leader |
| 2 | Lê Hồ Gia Bảo | SE184518  | [contact phone redacted] | [contact email redacted] | Member |
| 3 | Trương Quang Tấn Tài  | SE182652 | [contact phone redacted] | [contact email redacted] | Member |
| 4 | Trần Tấn Phát  | SE183281 | [contact phone redacted] | [contact email redacted] | Member |


3. Register content of the Capstone Project

##### 3.1. Capstone Project Name

English: Smart IoT Ordering Button for Apartment Residents

Vietnamese: Hệ thống nút bấm IoT hỗ trợ đặt hàng nhu yếu phẩm cho cư dân chung cư

Abbreviation: SmartOrderButton

Review 2 proposed registration revision v0.2 | 30 October 2026 | Proposed for review, not a signed/approved replacement. Original approved project name is retained; official code/group/date must be confirmed. Accompanying change record follows this form.

##### Context

In modern high-rise apartment complexes, residents frequently purchase essential commodities on a recurring basis, such as cooking gas cylinders, drinking water jugs, rice bags, and household paper products. However, the current traditional process of ordering via smartphones presents several friction points: residents must locate their phones, open specific e-commerce or local store apps, search for the item, and go through a multi-step checkout process.

This multi-step sequence is highly inefficient for repetitive, single-item essential purchases. Furthermore, for a significant demographic segment—specifically elderly residents living alone—smartphones present a steep technological barrier due to complex user interfaces and unintuitive navigation.

SmartOrderButton proposes a physical-to-digital ordering interface for apartment residents, supported by Web and Flutter Mobile. Usability improvements and market claims require validation; no completed user study or exclusive-market claim is asserted.

##### Proposed Solutions

The proposed final product combines secure IoT provisioning/ordering, resident storefront ordering, store catalog/inventory/fulfillment, delivery workflows and controlled payment/banking operations. Detailed mandatory requirements are SRS FR01–FR38, grouped below; Iteration 1 is a smaller delivery slice.

Physical IoT Hardware Trigger: Deployment of low-power wireless buttons (ESP32-based) pre-configured for specific household locations and items (e.g., Kitchen Button for gas, Water Station Button for bottled water).

IoT Gateway & Smart Logic Engine: A backend pipeline that instantly ingests hardware signals, extracts the physical hardware ID, maps it to the registered resident profile, identifies the pre-assigned product link, and triggers automated order generation.

Cross-Platform Mobile Management Application: A Flutter-based app allowing residents to manage profiles, register hardware devices, map specific consumer goods to physical buttons, and track live delivery status.

Signal Edge Case Filtering (Debounce Engine): An embedded and cloud-side debounce logic that filters erratic or accidental repeated button presses (e.g., child play or continuous tapping), ensuring multiple rapid presses result in only a single valid order.

Common customer cancellation: the owner may cancel orders from any channel only while PENDING or CONFIRMED and server-measured elapsed time from creation is strictly below 120 seconds. At exactly 120 seconds or later, reject. Recheck current state and a fresh database clock after locking the row; an owner retry of a cancelled order does not repeat stock effects.

Remote Battery and Hardware Telemetry: Continuous tracking of hardware health where the IoT device transmits battery voltage levels alongside every trigger event, displaying power alerts directly on the user dashboard.

#### 3.2. Functional Requirements

##### 3.2.1. End-User (Apartment Resident)

As a Resident, I want supported registration, sign-in/session management, recovery/verification and profile management, with server-derived role and identity scope (FR01–FR04, FR35).

As a Resident, I want to set up my precise apartment address (Block, Floor, Room Number) during onboarding so that I never have to manually input a delivery address again.

As a Resident, I want to select an active rental package, complete the required controlled payment and manage the resulting device-rental lifecycle (FR27).

As a Resident, I want to assign a specific name (e.g., Kitchen Button, Water Button) to my physical device to easily recognize its purpose.

As a Resident, I want to map a product from the vendor catalog to a specific button and set default order quantities (e.g., Gas 12kg x1, Lavie 19L x2) so that pressing that button triggers the exact required order.

As a Resident, I want to easily change the mapped product or quantity assigned to a button at any time through the mobile app.

As a Resident, I want to lock/disable a button temporarily so that accidental presses (e.g., by children) do not trigger orders.

As a Resident, I want to switch my preferred store vendor for a button without having to return or reconfigure the physical hardware after a month.

As a Resident, I want to press the physical button to instantly generate an order without touching my smartphone.

As a Resident, I want to receive an immediate push notification on my phone when a button is pressed, confirming that my order is being prepared.

As a Resident, I want a cancellation countdown based on server order creation for every ordering channel; only my PENDING/CONFIRMED order before 120 seconds may cancel. An expired or foreign order remains protected even if a client timer is stale.

Resident financial and storefront scope: browse stores/products/categories, manage own delivery addresses, create COD or eligible PayOS storefront orders, reorder configured products, read own timeline and cancel under the common policy (FR05–FR13).

Resident identity and notification scope: complete the supported verified identity/session path and access only own notifications/media permitted by SRS (FR34–FR35, FR37).

As a Resident, I want to monitor the live delivery status of my active orders (Pending → Delivering → Completed).

As a Resident, I want to view the real-time battery status percentage of each of my linked buttons on the app dashboard so that I know when to replace the power cells.

As a Resident, I want to configure the Wi-Fi credentials of my ESP32 button effortlessly using Bluetooth Low Energy (BLE) Provisioning directly through the mobile app without recoding the hardware.

##### 3.2.2. Store Vendor / Delivery Staff (Supply Partner Role)

As a Vendor/Staff, I want to access an Order Management Dashboard sorted by priority and room number so that I can organize fast delivery.

As a Vendor/Staff, I want to receive instant sound and visual alerts when an automated order is generated by a resident's button.

As a Vendor/Staff, I want to update the order fulfillment status (Accept → Out for Delivery → Complete) to keep residents informed in real-time.

As a Vendor/Staff, I want to link customer profiles to specific buttons so that orders are accurately routed to mapped residents.

As authorized Store/Delivery Staff, I want to process orders, claim delivery, record valid proof/COD amounts or delivery failure, and reconcile driver shifts/handover under the role rules (FR18–FR22). Periodic customer credit billing is not committed.

As a Vendor/Staff, I want to view a resident’s complete historical purchase records to manage custom preferences and stock inventory efficiently.

Store financial scope: inspect own wallet/ledger, register and verify bank ownership, request/process authorized withdrawals with one reservation/settlement or guarded compensation path, and subscribe to eligible store plans (FR23–FR28). The team reports PayOS collection, bank verification and withdrawals implemented; controlled/live acceptance remains separate.

Store operating scope: own catalog/stock, categories/discounts, customer relationships, staff/profile, delivery/shift and scoped analytics/media; foreign store/customer data must remain inaccessible (FR05–FR08, FR18–FR22, FR33, FR36–FR37).

##### 3.2.3. System Administrator

As an Admin, I want to manage user accounts and assign security access levels to maintain platform integrity.

As an Admin, I want to review and approve store linking requests to verify vendor legitimacy within apartment complexes.

As an authorized Administrator/Store Operator, I want to manage store plans/subscriptions and device-rental packages under the supported wallet/payment and eligibility rules (FR27–FR30). A fee-per-button or percentage commission model is not asserted unless specified by the approved plan data.

As an Admin, I want to manage a system-wide button rental and inventory model for hardware distribution.

As an authorized Store/Platform actor, I want permitted product/category/discount/inventory and device-template/batch operations while preserving store boundaries (FR05–FR07, FR31–FR32).

As an Admin, I want to manage global system architecture settings, monitoring active Device IDs and operational connections.

As an Admin, I want to view aggregated system analytics (total orders, active buttons, average delivery times) to monitor platform health.

As an authorized actor, I want persisted notifications and configured provider delivery, with independent delivery failure handling, and platform processing/health monitoring (FR34, FR38).

As an allowed Store/Platform actor, I want scoped analytics/customer views, staff/store-profile management and permitted media/proof handling; report export formats and extra messaging-template editors are not assumed without a matching FR (FR33, FR36–FR38).

#### 3.3. Main Flows

Flow 1: User Registration, Device Pairing, and Wireless Network Configuration

Step 1: The user enters their full name and phone number.

Step 2: The user enters the OTP code received on their device.

Step 3: Establish a Bluetooth connection with the button device.

Step 4: Enter the Wi-Fi password to configure the wireless network.

Step 5: Complete the synchronization and write the configuration data directly to the device.

Flow 2: Product Mapping and Configuration

Step 1: The resident navigates to their device list on the mobile dashboard and selects a newly paired device (e.g., "Kitchen Button"). Initial status: Unassigned.

Step 2: The user opens the essential product catalog grid (ST25 Rice, 12kg Gas Cylinder, Pack of Bottled Water...).

Step 3: The user selects the desired product and taps [Assign to Kitchen Button]. The backend API updates the database, mapping the Device ID to that product for the specific apartment profile. The app interface shifts to display the icon of the linked product (e.g., Gas Cylinder image). The resident can modify this assignment flexibly at any time.

Flow 3: Core Physical Order Trigger and Edge Case Processing ("Magic Flow")

Step 1: The resident presses the configured physical ESP32 button. The target device sends an authenticated request using the selected secure transport and device signature/freshness contract. Physical timing, board and firmware variant must be verified; MQTT is not assumed deployed merely because an earlier proposal mentioned it.

Step 2: The Backend validates device identity, freshness, mapping, idempotency and inventory. Repeated events must not create duplicate logical orders; exact debounce/gesture and supported retry behavior are verified on the chosen implementation.

Step 3: The Backend commits an eligible PENDING order and relevant stock/history effects; it then publishes scoped events/notifications. An event/notification failure must not falsely report the committed order as uncreated.

Step 4: The resident reads the authoritative order status. An order-created notification must not claim store confirmation/preparation before the permitted transition occurs.

Step 5: Edge Case Resolution:

Case 1: Authorized store and assigned delivery actors move the order through PENDING → CONFIRMED → PREPARING → READY_FOR_DELIVERY → SHIPPING → DELIVERED → COMPLETED, with separate guarded cancellation/rejection/failure paths. No timer alone automatically completes fulfillment or proves payment.

Case 2: The customer may cancel their own PENDING/CONFIRMED order from any channel before 120 seconds. Exactly 120 seconds is expired. Current state, ownership and the post-lock database clock govern acceptance; the client countdown is advisory.

Flow 4: Vendor Fulfillment and Analytics Management

Step 1: The merchant/delivery staff opens their order monitoring interface, which immediately displays the incoming automated order with exact room details.

Step 2: Authorized staff and drivers execute only their allowed current-state transitions and delivery-evidence/cash/handover rules. Web/Mobile reload or reconnect to committed state, not an assumed three-state shortcut.

#### 3.4. Non-Functional Requirements

NFR-01 Performance (proposed): ordinary list/detail API p95 <=2 seconds at 50 concurrent users against 10 stores/10,000 orders, measured with declared workload/duration/error count and excluding provider latency. Record physical signal and push timing separately; earlier <500ms/1000-signal targets are superseded as proposed changes, not claimed achievements.

NFR-02 Usability: primary Web actions remain keyboard reachable and readable at 360/768/1366 px without horizontal body overflow; measure screenshots and completed task outcomes. Validate elderly-user usability with representative users before claiming it. NFR-03 physical provisioning: <=3 minutes in at least 9/10 supervised declared-board/phone/router trials.

NFR-04 Security: enforce transport encryption and identity/role/object scope; 100% of required cross-account/store negative cases reject without leakage/mutation. Test signatures, replay and ownership using synthetic fixtures; device credentials and database/provider secrets remain server-side.

NFR-05 Integrity: zero duplicate stock/ledger effects across 100 identical accepted logical events and 10 concurrent requests in the approved isolated operation set. Scope and before/after reconciliation are recorded; no unmeasured universal scaling guarantee is claimed.

NFR-06 Recovery: in ten controlled client reconnect trials, authoritative order state is visible within five seconds after reconnection under the declared network setup. Hosting uptime is monitored if committed separately; the former unmeasured 99% guarantee is not asserted here.

Reliability and workflow acceptance: idempotent retries, signed callbacks, declared provider-mode evidence, retained DLQ/replay tests and guarded financial compensation. Main/exception demo and failure thresholds are proposed in BM01 and finalized at Review 2, not recorded as already achieved.

Maintainability/testability: preserve source, schema migrations, editable diagrams and CI commands; map every FR to actual tests. Line/branch coverage and the final fixed case total require their own measurement/approval; do not infer a coverage percentage from passing selected tests.

All NFR amendments above are proposed at Review 2 and require reviewer agreement; they explicitly replace earlier quantitative claims rather than silently treating them as met. Detailed metrics, measurement cases and remaining commitments are in BM01/Report 5.

Full quality scope: SRS NFR01–NFR23 remains the detailed proposed set. Six priority measurements summarize it, not replace it. In particular, NFR07 availability/recovery targets and NFR20 Backend >=80% / Mobile >=75% measured coverage remain explicit proposals requiring actual infrastructure/coverage evidence and reviewer disposition; no guarantee or achieved result is asserted.

#### 3.5. Main Proposal Content (Results and Products)

##### Theory and Practice Documents:

The project will be managed using the Agile/Scrum software development framework, utilizing UML 2.0 for complete structural and behavioral system modeling. Required deliverables include: User Requirements Specification (URS), Software Requirements Specification (SRS), System Architecture Design Document (detailing Component, Deployment, and Entity-Relationship Diagrams), Detailed Design Document (including detailed API Specifications, Database Schemas, and UI Wireframes), System Implementation Report, Comprehensive Test Plan & Test Report (covering Unit, Integration, and Performance stress testing), Hardware Installation Guide, User Manuals tailored for both Residents and System Admins, fully deployable source repositories, and containerized Docker execution scripts.

##### Technology Stack:

IoT Hardware Node: ESP32 Microcontroller (utilizing C++ via Arduino IDE / ESP-IDF, integrated Wi-Fi + BLE 5 protocols, EEPROM management, and Deep Sleep routines).

Server-Side Application Interface: Node.js paired with the NestJS framework (or Express), leveraging REST APIs and WebSockets for live status updates.

Primary Database Infrastructure: PostgreSQL with Prisma schema/migrations, including required constraints, indexes, transactions and procedural invariants. Supabase is the team-declared database host; MongoDB collections are superseded in this proposed revision.

Notification Engine: Firebase Cloud Messaging (FCM) to power real-time mobile push notifications from Backend to Flutter App.

Client-Side Mobile Application: Flutter Framework (Dart), compiling to native iOS and Android versions from a unified codebase.

Deployment: Vercel Web https://buttontdash.vercel.app/; public API https://fragrant-mode-3a41.ptt24032004.workers.dev/api/v1 via Cloudflare Worker; Backend/Swagger host https://backend-fae8.onrender.com (source docs path /docs); Supabase PostgreSQL; Flutter Mobile build distribution recorded separately. GitHub Actions is selected CI, not proof of automated deployment. Actual revisions, provider modes and readiness remain to be recorded.

##### Products:

Deliverable: documented, deployable NestJS REST/realtime Backend with transaction, authorization and provider contracts. Public production readiness is not claimed without acceptance evidence.

Optimized Physical IoT Firmware: Embedded C++ source code executing low-power optimizations, smart Wi-Fi configuration via BLE Provisioning, and reliable telemetry transmissions.

Resident Companion App: Flutter with Home, Devices, Orders and Account, own account/address/order/device flows and common <120-second cancellation. Android/iOS compatibility requires actual declared build/device evidence.

Vendor Delivery & Admin Dashboard: A responsive web dashboard supporting catalog updates, analytical charting, and real-time incoming order tracking.

##### Proposed Task Packages for Students:

Task Package 1 (Hardware & Firmware Engineering): Developing the ESP32 source code, optimizing power-saving routines (Deep Sleep), setting up the hardware button components, and building the BLE Wi-Fi provisioning architecture.

Task Package 2: NestJS modular Backend and Prisma/PostgreSQL schema/migrations; account/tenant authorization, order/delivery lifecycle, PayOS collection and store-bank/wallet/withdrawal operations.

Task Package 3 (IoT Gateway & Notification Pipeline): Programming the data ingestion layer from hardware, verifying valid devices, building the anti-spam software debounce filters, and integrating Firebase Cloud Messaging (FCM) for push notifications.

Task Package 4: Flutter customer navigation, profile/addresses, order/payment/device flows, supported BLE provisioning, authoritative status and creation-time 120-second countdown.

Task Package 5: isolated integration/security/concurrency/provider-mode testing, approved NFR measurement, selected CI, declared Vercel/Worker/Render/Supabase staging and repeatable deployment/rollback evidence.

Task Package 6 (Technical Documentation Management): Compiling the comprehensive URS, SRS, system architecture briefs (Component, Deployment, ERD diagrams), detailed design specs (API, DB schema), user manuals, and final capstone presentation materials.

Iteration 1 boundary: I1-01 login/basic roles; I1-02 stores/products; I1-03 addresses; I1-04 COD checkout; I1-05 store processing; I1-06 customer tracking; I1-07 hardware research/drawings; I1-08 common customer cancellation. Physical IoT operation remains a final-product commitment.

Exclusions: household membership/RBAC, shared shopping lists, order batching, Gaussian demand prediction, emergency-service alerts, live GPS delivery tracking, mass-production certification and unspecified payment gateways. Periodic credit billing, MQTT deployment, arbitrary CSV/PDF export and extra template editors are not promised without approved FRs. Any scope addition must update Registration/BM03 and dependent SRS/SDD/test records.

#### 4. Other Comments

This Capstone Project serves as a practical, high-impact software engineering implementation combining modern IoT automation with accessible mobile design. By bridging physical hardware components with scalable cloud-based order execution workflows, the project demonstrates a robust engineering solution to an everyday real-world challenge. The modular system design ensures high maintainability and provides a viable prototype that can be easily adopted, customized, and expanded for smart city and building automation deployments across various residential ecosystems.

| Giảng viên hướng dẫn / Supervisor | Ho Chi Minh City, date of approval: pending<br/>On behalf of group: Nguyen Van Thanh<br/>Signature: not supplied for this proposed revision |
| --- | --- |
| Supervisor: Truong Long<br/>Signature/approval: pending for this proposed revision | (Thay mặt cho nhóm đăng ký / On behalf of Registers)<br/><br/><br/><br/>Nguyễn Văn Thành |




## BM03 — Record of Changes to Registration

Prepared from the Review 2 guide because the official BM03 template has not been supplied. Proposed changes only; original Registration is retained as the historical input. This is not a fabricated official form or approval.

Original input: CAPSTONE PROJECT REGISTER (1).docx supplied by the team. Proposed revision: v0.2, 30 October 2026. Change basis: implemented Iteration1/source findings and team-confirmed scope/deployment. Reviewer/supervisor acceptance: pending.

| ID / section | Previous proposal | Proposed revision / reason | Impact / accountable owner |
| --- | --- | --- | --- |
| CH01 / Database | MongoDB collections | PostgreSQL/Prisma migrations, constraints and transactions<br/>Reason: Match implemented relational/financial invariants | SRS data model; SDD §2; migration source<br/>Owner: Tran Tan Phat |
| CH02 / Customer cancellation | Two-minute physical-trigger-only description; exact boundary unclear | All channels; own PENDING/CONFIRMED; elapsed <120s; post-lock server-clock check; no repeat stock effect<br/>Reason: Match agreed policy and implemented regression checks | SRS FR12; SDD Figure 17; R2 cancellation cases<br/>Owner: Le Ho Gia Bao / Tran Tan Phat |
| CH03 / Financial scope | COD/periodic billing description; gateway/payout not formalized | COD + PayOS collection, wallet/ledger, verified bank ownership and withdrawals; subscriptions/rentals<br/>Reason: Formalize team-confirmed implementation and provider integrity requirements | SRS FR23–FR28; SDD finance; Report5 financial designs<br/>Owner: Tran Tan Phat |
| CH04 / Fulfillment | Short implicit/automatic Pending→Delivering→Completed flow | Authorized store/driver lifecycle and proof, cash, failure, shift/handover controls<br/>Reason: Match actual state/role boundaries; avoid timer-based confirmation | SRS FR18–FR22; order transition source<br/>Owner: Le Ho Gia Bao |
| CH05 / Deployment | AWS/Cloud VPS assumption | Vercel Web → Worker API → Render Backend; Supabase PostgreSQL; Flutter client<br/>Reason: Use declared team environment; deployed revisions not inferred | SDD §4; Report5 environment register<br/>Owner: Le Ho Gia Bao / Tran Tan Phat |
| CH06 / NFRs | Unmeasured <500ms,1000 signals,99% uptime,97% monthly reliability,70% coverage targets | Explicit proposed API/load, authorization, idempotency, responsive/reconnect/provisioning measurements; other commitments reviewed explicitly<br/>Reason: Replace unvalidated promises with measurable scoped targets, subject to Review2 approval | BM01 N1–N6; Report5 NFR cases; SRS reconciliation<br/>Owner: All workflow owners |
| CH07 / Final vs iteration scope | Final IoT product mixed with early delivery | Final physical IoT maintained; Iteration1 hardware research/drawings only<br/>Reason: Avoid claiming physical completion from simulation | Iteration1 scope; BM01 WF04; HW tests<br/>Owner: Truong Quang Tan Tai |
| CH08 / Scope exclusions | Some broad ancillary capabilities not matched by FRs | Explicitly exclude household/shared lists/batching/prediction/alerts/liveGPS and unspecified gateways; qualify billing/MQTT/export/template promises<br/>Reason: Control scope drift without silently deleting final hardware complexity | Report1/2; SRS FR01–FR38; BM02 review<br/>Owner: Nguyen Van Thanh |
| CH09 / Identity/contact fields | Conflicting Phat student ID/email between supplied sources | Use user-confirmed identity; pending until supplied<br/>Reason: Avoid submitting wrong personal identifiers | Registration student table and Report1 team table<br/>Owner: Nguyen Van Thanh |

Decision fields: each change to be accepted/modified/rejected by the reviewers; decision date and signatures remain unfilled until actual review. Do not label this proposal “No changes”.
