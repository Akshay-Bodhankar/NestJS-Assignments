# NestJS Fundamentals — Assignment 2

## Overview

This project demonstrates the fundamentals of NestJS by implementing a Users Module. It covers modules, controllers, services, DTOs, request validation, query parameters, and global validation pipes.

## Features

- **Users Module:** Organizes user-related functionality.
- **Users Controller:** Handles HTTP requests for users.
- **Users Service:** Contains the user management logic.
- **GET /users:** Returns the list of users.
- **POST /users:** Creates a new user.
- **DTO validation:** Validates incoming user data using `class-validator`.
- **Query filtering:** Supports filtering users by role using `GET /users?role=admin`.
- **Global ValidationPipe:** Validates incoming requests and transforms values where applicable.

## Technologies Used

- NestJS
- Node.js
- TypeScript
- class-validator
- class-transformer

## Prerequisites

- Node.js (LTS recommended)
- npm

## Installation

Clone the repository:

```bash
git clone https://github.com/Akshay-Bodhankar/NestJS-Assignments.git
cd Assignment2/nestjs-fundamentals
```

Install dependencies:

```bash
npm install
```

## Run the Application

Start the development server:

```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/users` | Retrieve all users |
| POST | `/users` | Create a user |
| GET | `/users?role=admin` | Retrieve users with the admin role |

### Example POST Request

Send a POST request to `/users` with JSON:

```json
{
  "name": "Akshay",
  "email": "akshay@example.com",
  "password": "password123",
  "role": "admin"
}
```

Valid input creates a user. Invalid input returns HTTP 400 with validation errors.

## Validation

The `CreateUserDto` uses `class-validator` decorators to validate the name, email, password, and role. A global `ValidationPipe` is configured in `src/main.ts`.

## Project Structure

```text
src/
├── users/
│   ├── dto/
│   │   └── create-user.dto.ts
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── app.module.ts
└── main.ts
```

## Implementation Notes

This assignment uses in-memory data for demonstration. User records are not persisted to a database and may reset when the application restarts.

## Deployment

`Deployment URL: `

## Author

Akshay