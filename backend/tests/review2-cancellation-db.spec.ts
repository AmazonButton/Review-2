import 'reflect-metadata';
import assert from 'node:assert/strict';
import { PrismaService } from '../src/prisma/prisma.service';
import { OrdersRepository } from '../src/orders/orders.repository';
import { OrdersService } from '../src/orders/orders.service';

async function main() {
  const url = new URL(process.env.DATABASE_URL || '');
  assert.ok(['localhost','127.0.0.1'].includes(url.hostname) && url.pathname.endsWith('_test'),
    'This test only runs against a local database ending in _test.');
  const prisma = new PrismaService();
  try {
    const customer = await prisma.customerProfile.findFirstOrThrow();
    const store = await prisma.store.findFirstOrThrow();
    const button = await prisma.ioTButton.findFirstOrThrow({where:{storeId:store.storeId}});
    const repo = new OrdersRepository(prisma);
    const service = new OrdersService(repo, {} as any,
      {emitToStore(){},emitToCustomer(){}} as any, {} as any);
    const user = {role:'CUSTOMER',userId:customer.userId,customerProfileId:customer.customerId};
    let passed = 0;
    for (const buttonId of [null,button.buttonId]) {
      for (const age of [100,130]) {
        const order = await prisma.order.create({data:{
          orderCode:`R2-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,
          storeId:store.storeId,customerId:customer.customerId,buttonId,
          orderStatus:'PENDING',paymentMethod:'COD',paymentStatus:'UNPAID',
          subtotalAmount:10000,totalAmount:10000,discountAmount:0,shippingFee:0,
          shippingRecipientName:'Review 2 Demo',shippingPhone:'0900000000',shippingAddress:'Demo address',
          createdAt:new Date(Date.now()-age*1000),
        }});
        if (age === 100) {
          const result=await service.cancelOrder(order.orderId,'Review 2 automated test',user);
          assert.equal(result.orderStatus,'CANCELLED');
          assert.equal((await service.cancelOrder(order.orderId,'retry',user)).orderStatus,'CANCELLED');
          await assert.rejects(()=>service.cancelOrder(order.orderId,'foreign', {...user,customerProfileId:customer.customerId+999999n}));
        } else {
          await assert.rejects(()=>service.cancelOrder(order.orderId,'expired',user));
          await assert.rejects(()=>repo.cancelOrderAtomicTx(order.orderId,'locked expiry',user.userId,'CANCELLED',true));
          assert.equal((await prisma.order.findUniqueOrThrow({where:{orderId:order.orderId}})).orderStatus,'PENDING');
        }
        passed++;
      }
    }
    console.log(`Review 2 PostgreSQL cancellation checks: ${passed}/4 scenarios passed`);
  } finally {
    await prisma.$disconnect();
  }
}
main().catch(e=>{console.error(e);process.exit(1);});
