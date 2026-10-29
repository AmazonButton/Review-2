import 'reflect-metadata';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertCustomerCancellation } from '../src/orders/customer-cancellation.policy';
import { OrdersService } from '../src/orders/orders.service';
import { OrdersRepository } from '../src/orders/orders.repository';

const now = Date.parse('2026-10-29T00:02:00Z');
for (const buttonId of [null, 7n]) {
  for (const orderStatus of ['PENDING', 'CONFIRMED']) {
    test(`${buttonId ? 'device' : 'storefront'} ${orderStatus}: common 120s boundary`, () => {
      const order = {buttonId, orderStatus, createdAt: new Date(now - 120000)};
      assert.doesNotThrow(() => assertCustomerCancellation(order, now - 1));
      assert.throws(() => assertCustomerCancellation(order, now));
    });
  }
}
test('processed, missing, invalid and future creation dates fail closed', () => {
  for (const orderStatus of ['PREPARING', 'PROCESSING', 'SHIPPING', 'DELIVERED', 'COMPLETED', 'CANCELLED', 'REJECTED']) {
    assert.throws(() => assertCustomerCancellation({orderStatus,createdAt:new Date(now)},now));
  }
  for (const createdAt of [undefined, 'invalid', new Date(now + 1)]) {
    assert.throws(() => assertCustomerCancellation({orderStatus:'PENDING',createdAt}, now));
  }
});
function fixture(overrides: any = {}) {
  return {orderId:1n, storeId:2n, customerId:3n, orderStatus:'PENDING',
    paymentMethod:'COD', paymentStatus:'UNPAID', createdAt:new Date(Date.now()-1000), ...overrides};
}
const customer = {role:'CUSTOMER', customerProfileId:'3',userId:'4'};
function serviceFor(order: any) {
  const calls: any[] = [];
  const repo = {findOrderById:async()=>order,cancelOrderAtomicTx:async(...args:any[])=>{
    calls.push(args);return {...order,orderStatus:'CANCELLED'};
  }};
  const svc = new OrdersService(repo as any,{} as any,
    {emitToStore(){},emitToCustomer(){}} as any,{} as any);
  return {svc,calls};
}
test('service passes customer policy into atomic cancellation', async () => {
  const {svc,calls}=serviceFor(fixture());
  await svc.cancelOrder('1','test',customer);
  assert.equal(calls.length,1);
  assert.equal(calls[0][4],true);
});
test('expired storefront orders are rejected by service', async () => {
  const {svc,calls}=serviceFor(fixture({createdAt:new Date(Date.now()-121000)}));
  await assert.rejects(()=>svc.cancelOrder('1','test',customer));
  assert.equal(calls.length,0);
});
test('cancelled order remains private and retry is idempotent for its owner', async () => {
  const {svc,calls}=serviceFor(fixture({orderStatus:'CANCELLED'}));
  await assert.rejects(()=>svc.cancelOrder('1','test',{...customer,customerProfileId:'99'}));
  await assert.rejects(()=>svc.cancelOrder('1','test'));
  const result=await svc.cancelOrder('1','test',customer);
  assert.equal(result.orderStatus,'CANCELLED');
  assert.equal(calls.length,0);
});
test('repository rechecks changed status and deadline after lock before stock effects', async () => {
  for (const row of [
    {order_status:'SHIPPING',created_at:new Date(now-1000)},
    {order_status:'PENDING',created_at:new Date(now-121000)},
  ]) {
    const tx = {$queryRawUnsafe: async(sql:string)=>sql.includes('clock_timestamp') ? [{checked_at:new Date(now)}] : [row]};
    const repo=new OrdersRepository({$transaction:async(fn:any)=>fn(tx)} as any);
    await assert.rejects(()=>repo.cancelOrderAtomicTx(1n,'test','4','CANCELLED',true));
  }
});
