# Authentication Troubleshooting

## Backend Not Running

Error:
Network Error

Files:
src/server.js
src/database/index.js

Fix:

npm run dev

---

## Database Connection Failed

Error:
password authentication failed

Files:
src/database/index.js
.env

Fix:

Verify:

DB_HOST
DB_PORT
DB_NAME
DB_USER
DB_PASSWORD

---

## CORS Error

Error:
Cross-Origin Request Blocked

Files:
src/app.js
frontend/services/api.ts

Fix:

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

---

## Login Button Not Working

Cause:
Using Windows browser with Ubuntu VM Next.js development server.

Fix:
Use Ubuntu browser:

http://localhost:3000

---

## JWT Authentication Failed

Error:
Unauthorized

Files:
src/middleware/auth.middleware.js
src/utils/jwt.js

Fix:

Verify:

Authorization:
Bearer JWT_TOKEN
