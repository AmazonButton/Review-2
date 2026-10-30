# SmartOrderButton — Review 2

Repo tổng hợp mã nguồn và tài liệu cho **Iteration 1**. Tag nộp bài: **`review-2`**.
Đây là bản sao riêng; không thay đổi hoặc triển khai lại các repo nguồn.

## Phạm vi

| Mã | Nội dung |
|---|---|
| I1-01 | Đăng nhập và phân quyền cơ bản |
| I1-02 | Xem cửa hàng và sản phẩm |
| I1-03 | Quản lý địa chỉ giao hàng |
| I1-04 | Tạo đơn hàng COD |
| I1-05 | Cửa hàng xử lý đơn |
| I1-06 | Khách hàng theo dõi đơn |
| I1-07 | Nghiên cứu linh kiện, sơ đồ khối, nguyên lý dự kiến và luồng hoạt động nút bấm |
| I1-08 | Khách hàng hủy đơn của mình trong 120 giây từ khi tạo, khi còn PENDING/CONFIRMED |

Phạm vi do nhóm lựa chọn trong quá trình chuẩn bị; không phải chứng nhận phê duyệt của giảng viên.
Các module khác vẫn được giữ để bảo toàn phụ thuộc, không được coi là sản phẩm nghiệm thu Iteration 1.

## Tìm nội dung nộp bài

- `backend/`: NestJS, test, `prisma/schema.prisma`, migrations SQL và `prisma/seed.ts`.
- `frontend/`: React/Vite, test quy tắc hủy đơn.
- `mobile/`: Flutter và các bài test.
- `hardware/`: nghiên cứu và bản vẽ đề xuất; **chưa lắp ráp/đo kiểm thiết bị**.
- `.github/workflows/ci.yml`: build/test, database kiểm thử tách riêng; không deploy production.
- [Kế hoạch và tiêu chí Iteration 1](docs/iteration-1.md).
- [Hướng dẫn database](docs/database.md).
- [Kế hoạch kiểm thử và demo](docs/test-plan.md).
- [Kết quả kiểm tra và giới hạn](docs/verification.md).
- [Commit nguồn](docs/source-manifest.json).

## Chạy local

Cần Node.js 24 (Backend tương thích Node 20 trong CI), npm, Docker Compose; Flutter 3.47.7 để chạy Mobile.

Từ thư mục gốc:

```bash
node scripts/setup-local.mjs
docker compose up -d
```

Khởi tạo schema và extension theo [database.md](docs/database.md), sau đó:

```bash
cd backend
npm ci
npx prisma generate
npx prisma migrate deploy
npm run prisma:seed
npm run dev
```

API: `http://localhost:3000/api/v1`. Seed chỉ dùng local/test, không chạy trên database thật.
Tài khoản demo nằm trong `backend/prisma/seed.ts` (mật khẩu fixture: `Password123!`).
Không nhập dữ liệu cá nhân thật vào môi trường demo.

Mở terminal khác:

```bash
cd frontend
npm ci
npm run dev
```

Web: `http://localhost:5173`. Vite proxy trỏ về Backend local, không dùng deployment của repo nguồn.

Mobile:

```bash
cd mobile
flutter pub get
flutter run
```

Android emulator dùng `http://10.0.2.2:3000/api/v1`; cấu hình ở `lib/services/api_config.dart`.
Điện thoại thật cần địa chỉ LAN của máy chạy Backend. Firebase/Google/Cloudinary/PayOS cần tài khoản cấu hình riêng nếu dùng;
không có khóa dịch vụ thật trong repo và không bắt buộc các chức năng ngoài phạm vi này để chạy test mock.

## Quy tắc hủy đơn

- Áp dụng chung cho Web, Mobile và đơn có nguồn nút bấm.
- Server kiểm tra quyền sở hữu, trạng thái và thời điểm tạo; không tin đồng hồ đếm ngược phía client.
- PENDING hoặc CONFIRMED: hủy được trong thời hạn 120 giây. Các trạng thái xử lý/giao hàng bị từ chối với khách hàng.
- Yêu cầu lặp của đúng chủ đơn đã CANCELLED là idempotent; không hoàn tồn kho lần nữa.
- Kiểm tra lại trạng thái và thời hạn sau khóa dòng trong transaction để chống thao tác đồng thời.
- Quyền xử lý ngoại lệ của quản trị/cửa hàng giữ riêng theo Backend; không cấp cho khách hàng.

## Kiểm tra

```bash
cd backend
npm run test:review2
```

```bash
cd frontend
npm test
npm run build
```

Lệnh kiểm thử Flutter và API có database xem [test-plan.md](docs/test-plan.md).
Không suy ra toàn bộ test cũ thành công từ kết quả của các bài test chọn cho Review 2.

## Completed Review 2 document package — FA26SE124 / GFA26SE25

See [documents, editable diagrams and original Self-Review](docs/review2/README.md). Review: 05 November 2026. Documentation completion does not claim final hardware, live financial or complete workflow acceptance.
