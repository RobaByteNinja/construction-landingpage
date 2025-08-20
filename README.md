# BuildMaster Construction Company Website

A full-stack website for BuildMaster Construction Company featuring a responsive frontend with React and a backend API for handling contact form submissions.

## Features

- Responsive design with Bootstrap
- Contact form with email notifications
- Project showcase with modals
- Services and testimonials sections
- Google Maps integration
- Backend API with Node.js and Express

## Tech Stack

### Frontend
- React.js
- Bootstrap
- HTML5/CSS3
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- Nodemailer for email functionality
- Express Validator for input validation

## Project Structure
construction-landing/
├── client/ # React frontend application
│ ├── public/ # Static assets
│ ├── src/ # React components and logic
│ ├── package.json # Frontend dependencies
│ └── README.md # Frontend documentation
├── server/ # Node.js backend API
│ ├── controllers/ # Route controllers
│ ├── middleware/ # Custom middleware
│ ├── routes/ # API routes
│ ├── .env # Environment variables
│ ├── package.json # Backend dependencies
│ └── server.js # Server entry point
├── .gitignore # Git ignore rules
└── README.md # Project documentation (this file)


## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm
- Gmail account (for email functionality)

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd construction-landing

2. Install root dependencies:
npm install

3. nstall client dependencies:
cd client
npm install
cd ..

4. Install server dependencies:
cd server
npm install
cd ..

Environment Configuration
1. Navigate to the server directory:
cd server

2. Create a .env file with the following variables:
PORT=5000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
RECIPIENT_EMAIL=your_email@gmail.com
CLIENT_URL=http://localhost:3000

2. For Gmail setup:
    ‣ Enable 2-Step Verification on your Google account
    ‣ Generate an App Password for your application
    ‣ Use the app password in the EMAIL_PASS variable

Running the Application
1. Start both frontend and backend (from root directory):
npm run dev
2. Or run them separately:
    • Terminal 1 (backend):
    cd server
    npm run dev
    • Terminal 2 (frontend):
    cd client
    npm start

3. Open your browser and navigate to:
    • Frontend: http://localhost:3000
    • Backend API: http://localhost:5000

API Endpoints
• POST /api/contact - Handle contact form submissions

Contact Form Validation
    • Name: 2-50 characters
    • Email: Valid email format
    • Subject: 5-100 characters
    • Message: 10-1000 characters

Deployment
Frontend Deployment (Netlify/Vercel)
1. Build the frontend:
cd client
npm run build
2. Deploy the build folder to your preferred hosting service
Backend Deployment (Heroku/Railway)
1. Set environment variables on your hosting platform
2. Deploy the server folder

Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request