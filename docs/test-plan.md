# Review 2 — test và demo

## Tự động

| Phần | Lệnh | Mục đích |
|---|---|---|
| Backend | npm run test:review2 | Biên 120s, mọi nguồn đơn, trạng thái, quyền sở hữu, retry và kiểm tra lại sau row lock |
| PostgreSQL | npx tsx tests/review2-cancellation-db.spec.ts | Quy tắc hủy với DB thật trên 2 nguồn đơn; hết hạn và idempotency |
| API | npx tsx tests/api.test.ts | Xác thực, luồng API và tồn kho theo fixture của dự án |
| Địa chỉ | npx tsx tests/customer-addresses-crud.spec.ts | CRUD và cách ly khách hàng |
| Sản phẩm | npx tsx tests/products-http.spec.ts | Route, guard và dữ liệu sản phẩm |
| Theo dõi | npx tsx tests/order-filter-and-timeline.spec.ts | Danh sách, lọc và timeline |
| Checkout | npx tsx tests/storefront-checkout-refactor.spec.ts | Contract/validation checkout |
| Web | npm test; npm run build | Hủy đơn theo creation time và kiểm tra biên dịch |
| Mobile | flutter test test/api_client_test.dart test/address_crud_integration_test.dart test/orders_api_integration_test.dart test/models_type_safety_test.dart test/validators_and_formatters_test.dart test/review2_cancellation_test.dart test/login_screen_test.dart test/logout_flow_test.dart test/home_and_orders_modular_widgets_test.dart | Token, địa chỉ, order API mock, model và hủy 120s |

Các bài DB/API cần môi trường đúng như CI (server, seed, secrets local và Redis). Không chạy script live/stress của repo nguồn lên dịch vụ thật.
Test policy đơn lẻ không thay cho kiểm thử UI đầy đủ. Toàn bộ test cũ được giữ, một số còn cần cập nhật;
xem verification.md về lần chạy toàn bộ Mobile và các giới hạn.

## Demo thủ công để nghiệm thu

1. Đăng nhập sai để kiểm tra lỗi; đăng nhập khách hàng hợp lệ.
2. Xem cửa hàng và sản phẩm, tạo/chọn địa chỉ giao hàng.
3. Đặt sản phẩm còn hàng bằng COD; đối chiếu tổng tiền và số lượng.
4. Đăng nhập cửa hàng, kiểm tra chỉ thấy đơn thuộc phạm vi của cửa hàng.
5. Chuyển trạng thái hợp lệ; khách hàng kiểm tra danh sách/chi tiết/timeline.
6. Tạo đơn mới, hủy trước 120s; thử lại cùng yêu cầu và kiểm tra hoàn kho không lặp.
7. Tạo đơn khác, thử hủy sau 120s; xác nhận Backend từ chối.
8. Thử tài khoản khác hủy/xem đơn và thử hủy khi đang chuẩn bị/giao hàng.
9. Trình bày nghiên cứu, bản vẽ hardware; ghi rõ chưa lắp mạch.

Nhóm lưu ảnh màn hình, test log và lỗi thực tế; chưa thực hiện không ghi PASS.
