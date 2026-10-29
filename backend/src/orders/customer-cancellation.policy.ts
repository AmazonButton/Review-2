import { BadRequestException } from '@nestjs/common';

export const CUSTOMER_CANCEL_WINDOW_SECONDS = 120;

/** Shared rule for Web, Mobile and device orders; call again after locking the row. */
export function assertCustomerCancellation(order: any, now: number = Date.now()): void {
  const status = order.orderStatus ?? order.order_status;
  if (!['PENDING', 'CONFIRMED'].includes(status)) {
    throw new BadRequestException({
      success: false, errorCode: 'ORDER_NOT_CANCELLABLE',
      message: 'Chỉ có thể hủy đơn ở trạng thái PENDING hoặc CONFIRMED.',
    });
  }
  const createdAt = new Date(order.createdAt ?? order.created_at).getTime();
  const elapsed = now - createdAt;
  if (!Number.isFinite(now) || !Number.isFinite(createdAt) || elapsed < 0 || elapsed >= CUSTOMER_CANCEL_WINDOW_SECONDS * 1000) {
    throw new BadRequestException({
      success: false, errorCode: 'CANCEL_WINDOW_EXPIRED',
      message: 'Đã hết thời gian hủy đơn hàng (120 giây kể từ khi tạo đơn).',
    });
  }
}
