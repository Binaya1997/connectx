# Authentication Foundation Architecture

## Purpose

Provide secure user registration and login functionality for ConnectX.

The authentication system allows users to:

- Register account
- Login
- Receive JWT token
- Access protected routes
- Persist login session

---

# Architecture

Browser
↓
Next.js Frontend
↓
Axios
↓
Express Backend
↓
PostgreSQL Database
↓
JWT Authentication

---

# Request Flow

Login Page
↓
POST /api/v1/auth/login
↓
auth.controller.js
↓
auth.service.js
↓
user.model.js
↓
PostgreSQL
↓
Password Verification
↓
JWT Generation
↓
Frontend Receives Token
↓
Store in Zustand
↓
Store in LocalStorage
↓
Redirect to Profile

---

# Backend Files

src/config/index.js
Purpose:
Application configuration.

src/database/index.js
Purpose:
PostgreSQL connection pool.

src/models/user.model.js
Purpose:
Database queries for users.

src/controllers/auth.controller.js
Purpose:
Handle register and login requests.

src/services/auth.service.js
Purpose:
Business logic for authentication.

src/routes/v1/auth.routes.js
Purpose:
Authentication endpoints.

src/utils/jwt.js
Purpose:
Generate and verify JWT tokens.

src/middleware/auth.middleware.js
Purpose:
Protect private routes.

src/middleware/error.middleware.js
Purpose:
Centralized error handling.

src/app.js
Purpose:
Application middleware and routes.

src/server.js
Purpose:
Start Express server.

---

# Frontend Files

app/login/page.tsx
Purpose:
Login screen and authentication integration.

app/register/page.tsx
Purpose:
User registration screen.

app/profile/page.tsx
Purpose:
Display authenticated user information.

app/edit-profile/page.tsx
Purpose:
Update user information.

services/api.ts
Purpose:
Axios configuration.

store/auth-store.ts
Purpose:
Authentication state management.

---

# Database

Database:
connectx

Table:
users

Columns:

id
name
email
password
created_at
updated_at
