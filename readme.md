## Contact Management App

### Introduction

The Contact Management App is a web-based application designed to help users manage their contacts efficiently. Users can add new contacts, update existing ones, and delete contacts as needed. This application is built using modern web technologies, providing a robust backend and a user-friendly frontend.

### Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Environment Variables](#environment-variables)
8. [License](#license)

### Features

- Add new contacts
- Edit existing contacts
- Delete contacts
- View all contacts

### Technologies Used

#### Frontend

- **React JS**: A JavaScript library for building user interfaces
- **Tailwind CSS**: A utility-first CSS framework
- **Vite JS**: A fast development build tool
- **Next UI**: A React component library for building modern web applications
- **useSWR**: A React hook library for data fetching

#### Backend

- **Node JS**: A JavaScript runtime built on Chrome's V8 JavaScript engine
- **Express JS**: A web application framework for Node.js
- **MySQL**: An open-source relational database management system

### Installation

#### Prerequisites

- Node.js
- npm (Node Package Manager)
- MySQL

#### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/tonmoydeb404/contact-management.git
   cd contact-management/backend
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

3. Set up the `.env` file with your MySQL database configuration:

   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=contacts_db
   PORT=4000
   ```

4. Start the server:
   ```bash
   yarn start
   ```

#### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```

### Usage

1. Ensure the backend server is running at `http://localhost:4000`.
2. Ensure the frontend development server is running at `http://localhost:5173`.
3. Open a browser and navigate to `http://localhost:5173` to use the Contact Management App.

### API Endpoints

#### GET /api/contacts

- Fetch all contacts
- Response: JSON array of contacts

#### POST /api/contacts

- Create a new contact
- Request Body: JSON object containing contact details (name, email, phone)
- Response: JSON object of the created contact

#### PUT /api/contacts/:id

- Update an existing contact
- Request Body: JSON object containing updated contact details
- Response: JSON object of the updated contact

#### DELETE /api/contacts/:id

- Delete a contact
- Response: No content (204 status)

### Environment Variables

- `DB_HOST`: Database host (e.g., `localhost`)
- `DB_USER`: Database username (e.g., `root`)
- `DB_PASSWORD`: Database password
- `DB_NAME`: Database name (e.g., `contacts_db`)
- `PORT`: Server port (e.g., `4000`)

### License

This project is licensed under the MIT License.
