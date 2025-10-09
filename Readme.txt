2. Postman API Testing Steps
(A) Register a New User

POST http://localhost:5000/api/users/register
Body (raw JSON):

{
  "username": "john123",
  "email": "john@example.com",
  "password": "password123"
}


✅ Response:

{
  "token": "eyJhbGciOiJI..."   // Save this token
}

(B) Login User

POST http://localhost:5000/api/users/login
Body (raw JSON):

{
  "email": "john@example.com",
  "password": "password123"
}


✅ Response (new token):

{
  "token": "eyJhbGciOiJI..."
}


👉 Copy this token and use it for all job-related requests.

(C) Create a Job Application

POST http://localhost:5000/api/jobs
Headers:

Authorization: Bearer <your_token_here>
Content-Type: application/json


Body (raw JSON):

{
  "company": "Google",
  "position": "Backend Developer",
  "status": "Applied",
  "notes": "Applied via LinkedIn"
}


✅ Response:

{
  "_id": "651ef1...",
  "company": "Google",
  "position": "Backend Developer",
  "status": "Applied",
  "dateApplied": "2025-10-04T10:00:00.000Z",
  "notes": "Applied via LinkedIn",
  "user": "651eaf..."
}

(D) Get All Jobs (Optional Filter by Status)

GET http://localhost:5000/api/jobs
Headers:

Authorization: Bearer <your_token_here>


✅ Response (example):

[
  {
    "_id": "651ef1...",
    "company": "Google",
    "position": "Backend Developer",
    "status": "Applied",
    "notes": "Applied via LinkedIn"
  },
  {
    "_id": "651ef2...",
    "company": "Amazon",
    "position": "Full Stack Engineer",
    "status": "Interview"
  }
]


👉 To filter:
http://localhost:5000/api/jobs?status=Interview

(E) Update a Job

PUT http://localhost:5000/api/jobs/651ef1...
Headers:

Authorization: Bearer <your_token_here>
Content-Type: application/json


Body (raw JSON):

{
  "status": "Interview",
  "notes": "Scheduled for Monday"
}


✅ Response:

{
  "_id": "651ef1...",
  "company": "Google",
  "position": "Backend Developer",
  "status": "Interview",
  "notes": "Scheduled for Monday"
}

(F) Delete a Job

DELETE http://localhost:5000/api/jobs/651ef1...
Headers:

Authorization: Bearer <your_token_here>


✅ Response:

{
  "msg": "Job deleted"
}