# Database script

Nguồn chính: `backend/prisma/migrations/*/migration.sql` (chạy theo thứ tự bằng Prisma),
`backend/prisma/schema.prisma` và `backend/prisma/seed.ts`.
Các file trong `BRD/` và `prisma/migrations_archive/` được giữ làm lịch sử tham khảo;
**không chạy chồng chúng lên migrations hiện hành**.

Khởi chạy PostgreSQL và Redis từ root:

```bash
docker compose up -d
docker compose exec postgres psql -U review2 -d smart_order_test -c 'CREATE SCHEMA IF NOT EXISTS extensions; CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions; CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA extensions;'
```

Sau khi đã chạy `node scripts/setup-local.mjs` ở root:

```bash
cd backend
npm ci
npx prisma generate
npx prisma migrate deploy
npm run prisma:seed
```

CI dùng PostgreSQL 15 và Redis 7 riêng, khởi tạo extension, deploy migrations rồi seed.
Database kiểm thử có tên kết thúc `_test`; không dùng URL production để chạy các bài kiểm thử tích hợp.
`compose.yml` chỉ công bố cổng ở 127.0.0.1; mật khẩu trong compose là fixture local, không dùng để triển khai.
