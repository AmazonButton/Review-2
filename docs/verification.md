# Verification record

Prepared 2026-10-29. This is a source snapshot for academic review, not a production certification.

## Local checks

- Backend: `prisma generate`, `tsc --noEmit`, `npm run build` completed successfully.
- Backend cancellation regression: 9/9 tests passed after the final boundary/locking adjustment.
- Web: cancellation tests passed (4/4); build passed. Local proxy targets localhost:3000.
- Mobile: Flutter 3.47.7 / Dart 3.13.5; analysis completed with no issues; selected Iteration 1 suite passed 71/71 tests.
- Initial full Mobile suite: 158 passed, 9 failed. Old device-provider mocks, notification routing and timestamp/countdown fixtures require reconciliation. The full legacy suite is not claimed green.
- Review 2 CI selects the documented Iteration 1 tests explicitly; preserved legacy tests outside that selection are not implied to have passed.
- Local Docker engine is not running. PostgreSQL migrations/API integration will be checked by the isolated GitHub Actions job.
- Manual cross-client demo, real hardware assembly, physical measurements, Android APK/iOS builds and external-provider tests have not been performed.

## CI

See the repository Actions tab for the exact commit and test outcome. This record will be updated with observed results before tagging.

## Scope limits

Hardware drawings are proposals only. Old Report 1/2/3 files outside this repo have not been rewritten.
Extra modules are retained to preserve source dependencies, not accepted as Iteration 1 deliverables.
The existing full Backend runner includes suites based on older device-specific cancellation settings;
the Review 2 regression and database tests specify the updated common 120-second customer rule.

## Source filtering

A live Firebase smoke script containing a private-key block was excluded before any commit. No private-key files or .env files were staged. Other source histories are not imported. The owner should revoke/rotate any still-active key in the original repository.
