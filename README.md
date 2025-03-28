# EmployWise User Management App

![React](https://img.shields.io/badge/React-18.2.0-blue)
![MaterialUI](https://img.shields.io/badge/Material%20UI-5.14.2-blueviolet)
![Axios](https://img.shields.io/badge/Axios-1.5.0-yellowgreen)

A responsive React application for user management with authentication, built with Material-UI and integrated with the ReqRes API.

## Features

- 🔒 **Authentication System**
  - Login/logout functionality
  - Token-based authentication
  - Protected routes

- 👥 **User Management**
  - Paginated user listing
  - Edit user profiles
  - Delete users
  - Client-side search and filtering

- 🎨 **UI/UX**
  - Responsive design (mobile & desktop)
  - Loading states
  - Error handling
  - Success/error notifications

## Demo

[Live Demo](https://employwise-demo.vercel.app) (if deployed)

![App Screenshot](/screenshot.png)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/employwise-user-management.git

cd employwise-user-management

```

Install dependencies:
```bash
npm install

Start the development server:
```bash
npm run dev

The application will open in your browser at http://localhost:5173

Usage

Login Credentials

Use these credentials to log in:

Email: eve.holt@reqres.in
Password: cityslicka
API Endpoints Used

Feature	Endpoint	Method
Login	/api/login	POST
List Users	/api/users?page={page}	GET
Update User	/api/users/{id}	PUT
Delete User	/api/users/{id}	DELETE
Project Structure

The project is structured as follows:
src/
├── components/
│   ├── Auth/
│   │   └── Login.jsx
│   ├── Users/
│   │   ├── UserList.jsx
│   │   ├── UserCard.jsx
│   │   └── EditUser.jsx
│   └── Layout/
│       └── Navbar.jsx
├── context/
│   └── AuthContext.js
├── services/
│   └── api.js
├── App.js
└── index.js
Technologies Used

React 18 with functional components and hooks
React Router v6 for navigation
Material-UI (MUI) for UI components
Axios for API calls
Context API for state management
localStorage for token persistence
Requirements Checklist

Level 1: Authentication Screen

✅ Login screen with email and password fields
✅ Integration with /api/login endpoint
✅ Token storage and redirect to user list
✅ Error handling for failed login

Level 2: List All Users

✅ Paginated user listing from /api/users
✅ Displays first name, last name, and avatar
✅ Responsive layout (table on desktop, cards on mobile)
✅ Loading states during API calls

Level 3: Edit/Delete Users

✅ Edit user details with pre-filled form
✅ Update user via PUT /api/users/{id}
✅ Delete user via DELETE /api/users/{id}
✅ Success/error feedback for operations