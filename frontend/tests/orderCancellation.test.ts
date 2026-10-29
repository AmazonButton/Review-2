import { test } from 'node:test';
import assert from 'node:assert/strict';
import { canCustomerCancel, cancellationSecondsRemaining } from '../src/utils/orderCancellation.ts';

const createdAt = '2026-10-29T00:00:00Z';
const created = Date.parse(createdAt);
for (const status of ['PENDING', 'CONFIRMED']) {
  test(`${status}: 119 seconds allowed, 121 seconds expired`, () => {
    assert.equal(canCustomerCancel({createdAt, status}, created + 119000), true);
    assert.equal(canCustomerCancel({createdAt, status}, created + 121000), false);
  });
}
test('processed, missing and future orders cannot be cancelled', () => {
  for (const status of ['PREPARING', 'SHIPPING', 'COMPLETED', 'CANCELLED']) {
    assert.equal(canCustomerCancel({createdAt, status}, created + 1000), false);
  }
  assert.equal(canCustomerCancel({status:'PENDING'}, created), false);
  assert.equal(canCustomerCancel({createdAt:'invalid',status:'PENDING'}, created), false);
  assert.equal(canCustomerCancel({createdAt,status:'PENDING'}, created - 1), false);
});
test('countdown derives from creation time, including after reload', () => {
  assert.equal(cancellationSecondsRemaining({createdAt}, created + 60000), 60);
  assert.equal(cancellationSecondsRemaining({createdAt}, created + 120000), 0);
});
