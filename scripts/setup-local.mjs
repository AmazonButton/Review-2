import { randomBytes } from 'node:crypto';
import { existsSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const destination = fileURLToPath(new URL('../backend/.env', import.meta.url));
if (existsSync(destination)) throw new Error('backend/.env already exists; it has not been overwritten.');
const secret=()=>randomBytes(32).toString('hex');
writeFileSync(destination, `NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://review2:review2_local_only@localhost:5432/smart_order_test?schema=public
REDIS_URL=redis://localhost:6379
JWT_SECRET=${secret()}
OTP_PEPPER=${secret()}
BANK_ACCOUNT_ENCRYPTION_KEY=${secret()}
BANK_ACCOUNT_HASH_SALT=${secret()}
PAYOS_MOCK_PAYOUT=true
BANK_VERIFICATION_MOCK=true
`, {flag:'wx'});
console.log('Created ignored backend/.env with random local keys. External providers are not configured.');
