import 'package:flutter_test/flutter_test.dart';
import 'package:smart_order_button/models/order_model.dart';

OrderModel order(String status, DateTime? createdAt) => OrderModel(
  id: '1', customerName: 'Demo', apartment: 'Demo', product: 'Water',
  time: '', status: OrderStatus.info, statusText: status,
  rawStatus: status, createdAt: createdAt,
);

void main() {
  for (final status in ['PENDING', 'CONFIRMED']) {
    test('$status uses 120 seconds for all order sources', () {
      expect(order(status, DateTime.now().subtract(const Duration(seconds: 110))).isEmergencyCancellable, isTrue);
      expect(order(status, DateTime.now().subtract(const Duration(seconds: 121))).isEmergencyCancellable, isFalse);
    });
  }
  test('missing timestamps, future timestamps and processed orders cannot cancel', () {
    expect(order('PENDING', null).isEmergencyCancellable, isFalse);
    expect(order('PENDING', DateTime.now().add(const Duration(minutes: 1))).isEmergencyCancellable, isFalse);
    for (final status in ['PREPARING', 'SHIPPING', 'COMPLETED', 'CANCELLED']) {
      expect(order(status, DateTime.now()).isEmergencyCancellable, isFalse);
    }
  });
}
