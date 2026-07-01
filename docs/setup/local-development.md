# Local Development Setup

## Requirements

Node.js v22
npm
PostgreSQL
Git

---

## Clone Repository

```bash
git clone <repository>
cd connectx
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend:

http://localhost:5000

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend:

http://localhost:3000

---

## Database

Database:
connectx

Environment Variables:

PORT=5000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=connectx
DB_USER=postgres
DB_PASSWORD=********

JWT_SECRET=********
JWT_EXPIRES_IN=1d
