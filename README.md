# PassOP: Your Own Password Manager

Welcome to **PassOP**, a lightweight password management application built for simplicity and practice. With PassOP, you can securely manage your passwords, edit or delete existing ones, and even copy text with a single click. This project is implemented in two ways:

1. **Local Storage Implementation** (`passManager`)
2. **MongoDB Implementation** (`passManager using mongo`)

---

## Features

- **Password Management**: Save, edit, delete, and copy passwords effortlessly.
- **Dynamic Password Visibility**: Toggle password visibility on the input field.
- **Real-Time Actions**: Seamless addition, editing, and deletion of passwords with instant feedback.
- **Copy to Clipboard**: Quickly copy any saved password, username, or site link to your clipboard.
- **Two Implementations**:
  - LocalStorage for client-side storage.
  - MongoDB for backend-driven storage, providing a practical demonstration of database handling.

---

## Folder Structure

The project is organized into two separate implementations:

###  1. **passManager**
This version uses **localStorage** to store passwords directly in the browser.

- **Frontend**: React with TailwindCSS for a responsive and modern UI.
- **No Backend**: Data is stored and retrieved directly in the browser's localStorage.

###  2. **passManager using mongo**
This version uses **MongoDB** for server-side password storage.

- **Frontend**: React with TailwindCSS.
- **Backend**: A Node.js/Express server connects the application to a MongoDB database.

---

## Screenshots

###  Home Screen
Display of all saved passwords, with options to copy, edit, and delete.

![](https://github.com/vishwas343/Password-Manager-using-React-Node/blob/main/screenshots/Screenshot%202024-12-21%20192420.png)
![](https://github.com/vishwas343/Password-Manager-using-React-Node/blob/main/screenshots/Screenshot%202024-12-21%20192449.png)
---

## Technologies Used

###  Frontend:
- React
- TailwindCSS
- React Toastify for notifications

###  Backend (MongoDB version only):
- Node.js
- Express.js
- MongoDB (via Mongoose)

---

## How to Run the Project

###  Prerequisites
- Node.js installed on your system.
- MongoDB installed and running (for the MongoDB implementation).

###  Clone the Repository
```bash
git clone (https://github.com/vishwas343/Password-Manager-using-React-Node)
```

### 1. For passManager (LocalStorage Version)
Navigate to the folder:
```
cd passManager
```
Install dependencies:
```
npm install
```
Start the application:
```
npm run dev
```
### 2. For passManager using mongo (MongoDB Version)
Navigate to the folder:
```
cd "passManager using mongo"
```
Install dependencies for both frontend and backend:
```
npm install
cd backend
npm install
cd ..
```
Start the backend server:
```
cd backend
node server.js
```
Start the frontend:
```
cd ..
npm run dev
```
## API Endpoints (MongoDB Implementation)

| Endpoint         | Method | Description                          | Request Body                                                                 |
|-------------------|--------|--------------------------------------|------------------------------------------------------------------------------|
| `/api/passwords` | GET    | Fetch all saved passwords            | None                                                                         |
| `/api/passwords` | POST   | Add a new password                   | `{ "website": "example.com", "username": "user123", "password": "pass123" }` |
| `/api/passwords/:id` | DELETE | Delete a password by its unique ID  | None                                                                         |

### Features Breakdown
Save Passwords: Enter the website, username, and password to save them in the database or localStorage.
Copy to Clipboard: Copy site URL, username, or password with a single click.
Edit Passwords: Retrieve a saved password into the form, make changes, and re-save it.
Delete Passwords: Remove unwanted entries with a confirmation prompt.
### Learning Goals and Purpose
This project was created as a practice to understand:

Client-side storage using localStorage.
- Server-side storage using MongoDB and its integration with a Node.js backend.
- React fundamentals and state management.
- Styling with TailwindCSS for responsive design.
- API design and implementation using REST principles.
- Challenges Faced
- Handling updates for edited passwords in MongoDB without using a PUT request.
- Normalizing state between localStorage and MongoDB for seamless updates.
- Efficient UI rendering after CRUD operations.

###  Future Enhancements
- Implement user authentication for added security.
- Add encryption to protect passwords at rest and during transmission.
- Expand functionality to categorize passwords by type (e.g., personal, work, etc.).
- Include a password strength checker.

### Contributing
Feel free to fork this repository, raise issues, or contribute via pull requests. Contributions are always welcome!

### License
This project is open-source and available under the MIT License. See the LICENSE file for details.

### Author
- [vishwas343] - Developer and Designer
- Connect with me on [LinkedIN](linkedin.com/in/vishwas-bhatia-5a0789244) | GitHub


### Special thanks to:

React Toastify for notification handling.
MongoDB for the free tier for practice.
TailwindCSS for modern and responsive design tools.

