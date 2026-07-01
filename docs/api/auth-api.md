# Authentication APIs

## Register User

Method:
POST

Route:
/api/v1/auth/register

Backend Files:
src/routes/v1/auth.routes.js
src/controllers/auth.controller.js
src/services/auth.service.js
src/models/user.model.js

Request:

```json
{
  "name": "Binaya",
  "email": "binaya@example.com",
  "password": "secret123"
}
```

Response:

```json
{
  "message": "User registered successfully"
}
```

---

## Login User

Method:
POST

Route:
/api/v1/auth/login

Backend Files:
src/routes/v1/auth.routes.js
src/controllers/auth.controller.js
src/services/auth.service.js
src/models/user.model.js
src/utils/jwt.js

Frontend Files:
app/login/page.tsx
services/api.ts
store/auth-store.ts

Request:

```json
{
  "email": "binaya@example.com",
  "password": "secret123"
}
```

Response:

```json
{
  "message": "Login successful",
  "data": {
    "token": "JWT_TOKEN"
  }
}
```

---

## Current User

Method:
GET

Route:
/api/v1/users/me

Backend Files:
src/routes/v1/user.routes.js
src/controllers/user.controller.js
src/services/user.service.js
src/models/user.model.js
src/middleware/auth.middleware.js

Headers:

Authorization:
Bearer JWT_TOKEN
