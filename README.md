# Backend-Server
Backend for form submissions using TypeScript and Express
# Forms Backend

## Description
This backend server handles form submissions. It is built using TypeScript and Express, and it uses a JSON file to store submissions.

## Prerequisites
- Node.js (v12.x or higher)
- npm (v6.x or higher)

## Installation

1. Clone the repository:
   
   git clone https://github.com/bhavi7023/Backend-Server


2. Navigate to the project directory:
   
   cd forms-backend


3. Install the dependencies:

   npm install


## Running the Server

1. Start the server:
   
   npm start
  

2. The server will be running at `http://localhost:3000`.

## API Endpoints

- `GET /ping`
  - Description: Checks if the server is running.
  - Response: `true`

- `POST /submissions/submit`
  - Description: Accepts a submission and stores it.
  - Request Body Parameters:
    - `name` (string): Name of the person
    - `email` (string): Email of the person
    - `phone` (string): Phone number of the person
    - `github_link` (string): GitHub repository link
    - `stopwatch_time` (string): Time recorded by the stopwatch
  - Example Request:
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "123-456-7890",
      "github_link": "https://github.com/johndoe/repo",
      "stopwatch_time": "00:10:00"
    }
    ```

- `GET /submissions/read`
  - Description: Retrieves a submission by index.
  - Query Parameters:
    - `index` (integer): The index of the submission to retrieve (0-based)
  - Example Request: `GET /submissions/read?index=0`

- `GET /submissions/read-all`
  - Description: Retrieves all submissions.
  - Response: An array of submissions

## File Structure

```
backend
├── src
│   ├── index.ts
│   ├── routes
│   │   └── submissions.ts
│   ├── controllers
│   │   └── submissionsController.ts
│   ├── models
│   │   └── submission.ts
├── db.json
├── package.json
└── tsconfig.json
```

## Development

1. Start the server in development mode:
   ```sh
   npm run dev
   ```

2. The server will restart automatically when you make changes to the source files.

## Contributing
If you wish to contribute to this project, please fork the repository and create a pull request with your changes.



`https://github.com/bhavi7023/Backend-Server`. This README provides a comprehensive guide to setting up, running, and using the backend server.
