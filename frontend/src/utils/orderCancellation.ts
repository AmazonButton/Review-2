export const CANCEL_WINDOW_SECONDS = 120;

export function cancellationSecondsRemaining(order: { createdAt?: string | Date }, now = Date.now()): number {
  const created = order.createdAt ? new Date(order.createdAt).getTime() : NaN;
  if (!Number.isFinite(created) || created > now) return 0;
  return Math.max(0, Math.ceil((created + CANCEL_WINDOW_SECONDS * 1000 - now) / 1000));
}

export function canCustomerCancel(order: { createdAt?: string | Date; status?: string; orderStatus?: string }, now = Date.now()): boolean {
  return ['PENDING', 'CONFIRMED'].includes(order.status || order.orderStatus || '')
    && cancellationSecondsRemaining(order, now) > 0;
}
