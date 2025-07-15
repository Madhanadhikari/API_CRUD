# Basic RESTful API for CRUD

This is a simple RESTful API built using Node.js, Express.js, and MongoDB. It supports basic CRUD operations on employee data.

## 📦 Features
- Add employee (`POST /add`)
- Get all employees (`GET /fetch`)
- Update employee (`PATCH /update/:id`)
- Delete employee (`DELETE /remove/:id`)

## 🚀 Technologies Used
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- Thunder Client (for testing)


## 🔗 Sample Request (POST)
```bash
curl -X POST http://localhost:4000/add \
-H "Content-Type: application/json" \
-d '{"name":"John", "Sal":50000}'
