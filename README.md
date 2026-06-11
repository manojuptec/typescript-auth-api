# Node + Express + TypeScript + MongoDB Auth API

Register, Login and Profile APIs.
# Node.js + Express + TypeScript + MongoDB Authentication API

A production-ready Authentication REST API built using Node.js, Express.js, TypeScript, MongoDB, JWT, and bcrypt.

## Features

* User Registration
* User Login
* JWT Authentication
* Protected Profile Endpoint
* Password Hashing using bcrypt
* MongoDB Integration with Mongoose
* TypeScript Support
* Environment Variables Configuration
* Clean Project Structure

---

## Tech Stack

* Node.js
* Express.js
* TypeScript
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* dotenv

---

## Project Structure

```bash
src/
│
├── config/
│   └── db.ts
│
├── controllers/
│   └── User.ts
│
├── middleware/
│   └── authMiddleware.ts
│
├── models/
│   └── User.ts
│
├── routes/
│   └── User.ts
│
├── app.ts
└── server.ts
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd auth-api
```

### Install Dependencies

```bash
npm install
```

### Install Development Dependencies

```bash
npm install -D typescript ts-node nodemon @types/node @types/express @types/bcryptjs @types/jsonwebtoken
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGO_URI=mongodb://localhost:27017/authdb

JWT_SECRET=your_secret_key
```

---

## Run Application

### Development Mode

```bash
npm run dev
```

### Build Project

```bash
npm run build
```

### Production Mode

```bash
npm start
```

---

## API Endpoints

### Register User

**POST**

```http
/register
```

Request Body

```json
{
  "name": "Manoj Kumar",
  "email": "manoj@example.com",
  "password": "Password123"
}
```

Response

```json
{
  "message": "User Registered Successfully"
}
```

---

### Login User

**POST**

```http
/login
```

Request Body

```json
{
  "email": "manoj@example.com",
  "password": "Password123"
}
```

Response

```json
{
  "token": "jwt_token_here"
}
```

---

### Get User Profile

**GET**

```http
/profile
```

Headers

```http
Authorization: Bearer JWT_TOKEN
```

Response

```json
{
  "_id": "665e4d5f12a5",
  "name": "Manoj Kumar",
  "email": "manoj@example.com"
}
```

---

## Authentication Flow

1. User registers using Register API.
2. Password is encrypted using bcrypt.
3. User logs in with email and password.
4. JWT token is generated.
5. Token is sent in Authorization header.
6. Protected APIs validate token before processing request.

---

## Security Features

* Password Hashing
* JWT Authentication
* Protected Routes
* Environment Variable Configuration
* MongoDB Schema Validation

---

## Future Enhancements

* Refresh Tokens
* Forgot Password
* Email Verification
* Role Based Access Control (RBAC)
* Swagger API Documentation
* Docker Support
* Unit Testing
* Rate Limiting

---

## Author

**Manoj Kumar**

Backend Architect | Node.js | TypeScript | PostgreSQL | MongoDB | AWS

Experience: 11+ Years

---

## License

This project is licensed under the MIT License.
