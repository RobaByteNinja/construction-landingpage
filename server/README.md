# BuildMaster Backend

Node.js backend API for the BuildMaster Construction Company website.

## Features

- Contact form email handling
- Input validation
- CORS enabled for frontend communication

## Technologies Used

- Node.js
- Express.js
- Nodemailer
- Express Validator

## API Endpoints

### POST /api/contact
Handles contact form submissions.

## Environment Variables

Create a `.env` file with:
```env
PORT=5000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
RECIPIENT_EMAIL=your_email@gmail.com
CLIENT_URL=http://localhost:3000

Running the Server
npm run dev  # Development mode with nodemon
npm start   # Production mode

Project Structure
server/
├── controllers/       # Route controllers
├── middleware/        # Custom middleware
├── routes/            # API routes
├── .env               # Environment variables
├── package.json       # Backend dependencies
└── server.js          # Server entry point


## Backend Integration

This frontend connects to a backend API for handling contact form submissions. The API expects:

- Endpoint: `http://localhost:5000/api/contact`
- Method: POST
- Content-Type: application/json
- Body: { name, email, subject, message }

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).