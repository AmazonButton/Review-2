# Iteration 1 — phạm vi và nghiệm thu

Ngày chuẩn bị: 29/10/2026. Kế hoạch phạm vi đã được người dùng chốt; ngày bắt đầu/kết thúc,
phân công và phê duyệt của giảng viên cần nhóm điền theo hồ sơ thực tế. Không tạo lịch sử Sprint giả.

| Mã | Sản phẩm | Điều kiện nghiệm thu | Vị trí bằng chứng |
|---|---|---|---|
| I1-01 | Đăng nhập, phân quyền | Tài khoản hợp lệ vào đúng vai trò; thông tin sai/không có quyền bị từ chối | backend/src/auth, common/guards; Web auth; Mobile login |
| I1-02 | Cửa hàng/sản phẩm | Đọc đúng danh mục, giá và tồn kho theo cửa hàng | backend/src/stores, products; frontend/src/pages/customer/ShopPage.tsx |
| I1-03 | Địa chỉ | Thêm/sửa/chọn địa chỉ của mình; chặn truy cập của người khác | backend/tests/customer-addresses-crud.spec.ts; mobile/test/address_crud_integration_test.dart |
| I1-04 | Đặt hàng COD | Giá tính trên server, kiểm tra tồn kho/số lượng/địa chỉ, lưu đơn | backend/src/orders; frontend/src/pages/customer/ShopPage.tsx |
| I1-05 | Xử lý đơn | Cửa hàng chỉ xử lý đơn của mình theo state machine | backend/src/orders/dto/update-order-status.dto.ts; giao diện cửa hàng |
| I1-06 | Theo dõi đơn | Khách chỉ đọc đơn của mình; danh sách, chi tiết, timeline | backend/tests/order-filter-and-timeline.spec.ts; frontend/src/pages/customer/CustomerOrdersPage.tsx |
| I1-07 | Nghiên cứu và bản vẽ | Có BOM, sơ đồ khối, sơ đồ nguyên lý đề xuất, luồng hoạt động và kế hoạch kiểm chứng | hardware/README.md, hardware/*.svg |
| I1-08 | Hủy đơn 120s | Cùng quy tắc mọi kênh; kiểm tra sở hữu/thời hạn/trạng thái; retry không hoàn kho lặp | backend/tests/review2-cancellation*.spec.ts; frontend/tests; mobile/test/review2_cancellation_test.dart |

## Thay đổi so với tài liệu cũ

1. Thay quy tắc 60 giây chỉ cho nút bấm bằng 120 giây chung cho khách hàng; trạng thái PENDING/CONFIRMED.
2. Phần cứng ở mức nghiên cứu/bản vẽ; không tuyên bố đã làm thiết bị hay hoàn thành BLE.
3. Không lấy quản lý hộ gia đình, Gaussian prediction hoặc gộp đơn làm phạm vi nghiệm thu này.
4. Không mặc định Sprint 1 trong Report 2 cũ bằng toàn bộ Iteration 1 đã chốt ở đây.
5. Các bản SRS/Report cũ do nhóm giữ cần được cập nhật riêng; repo này không sửa các bản Google Drive/Word gốc.

## Ngoài phạm vi

PayOS, ngân hàng, eKYC, ví/rút tiền, thuê nút bấm, subscription, thống kê nâng cao và nghiệm thu phần cứng.
Module có trong code không đồng nghĩa đã được nghiệm thu trong Iteration 1.

## Project Tracking thực tế

Nhóm bổ sung người phụ trách, ngày bắt đầu/kết thúc thực tế, lỗi và biên bản review.
Trạng thái kỹ thuật hiện tại tham chiếu docs/verification.md; không đánh dấu hoàn thành dựa trên tên module.
