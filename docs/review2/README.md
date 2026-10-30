# Review 2 — FA26SE124 / GFA26SE25

Project: Smart IoT Ordering Button for Apartment Residents. Review: 05 November 2026.

## Inputs and evidence

- [Registration v0.2 and BM03 change record](inputs/Registration.md)
- [SRS: FR01–FR38 and NFR01–NFR23](inputs/SRS.md)
- [SDD with diagrams](inputs/SDD.md)
- [Report 1](inputs/Report1.md), [Report 2](inputs/Report2.md), [Report 5](inputs/Report5.md)
- [Unchanged course prompt](self-review-prompt.txt)
- [Complete original Self-Review output](SelfReview_Original_Output.md)
- [Separate response for every finding](Team_Response.md)
- [Input hashes and implementation baseline](input-manifest.json)
- Editable Mermaid diagram sources are under `diagrams/`; input images are under `inputs/assets/`.
- Read-only smoke observations and cropped screenshots are under `evidence/`.

Implementation baseline: `9e7ff50dc6f0c60392b5fe96dd76779d9396c6d1`. This completion adds documentation, sources and evidence; implementation files are unchanged. The final tag resolves the submission document snapshot; prior test records remain attributed to their original revision. No deployment equivalence is inferred from a document-only release.

The public repository views redact contact emails/phones. Full editable forms and officially named PDFs remain in the team Drive submission folder: https://drive.google.com/drive/folders/1ujzxdl_p-wu1XXVjVRAPdOGk_-Ym4-v2 . No passwords or access tokens are included.

## Individual ownership and demo handoff

- Nguyen Van Thanh: Mobile, WF01 account/profile/address.
- Le Ho Gia Bao: Frontend Web, WF02 order/fulfillment/cancellation.
- Tran Tan Phat: Backend, WF03 PayOS/bank/wallet/withdrawal.
- Truong Quang Tan Tai: hardware/device, WF04 physical provisioning/ordering target.

Bao/Phat/Tai can share the Web for distinct demonstrations; each must explain the owned source, state and exception behavior. Web fleet/simulation does not prove working physical hardware.

## Important limits

The original report catalogue and design expansions are not fabricated executions: 208 IDs, 20 recorded PASS, 177 NOT RUN and 11 physical-dependent BLOCKED. Current local reruns passed 9 Backend and 4 Web cases; Mobile startup produced no new result. Role sign-ins and read views were observed separately; no order or real financial transaction was performed.

Self-Review preserves 10 original findings and five unresolved High items, all listed in BM01 Known Gaps and assigned in the response. No High is labelled Fixed without a source commit and appropriate retest. Exact state/invalid-transition and fixed commitment totals, measured NFRs, deployed revisions, full demos and final hardware acceptance remain review/implementation obligations. BM04 is an unsigned worksheet until the actual post-review decisions are recorded.
