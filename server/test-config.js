require('dotenv').config();

console.log('Checking configuration:');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('RECIPIENT_EMAIL:', process.env.RECIPIENT_EMAIL);
console.log('CLIENT_URL:', process.env.CLIENT_URL);

// Check if essential variables are set
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('ERROR: Email credentials are not properly set in .env file');
} else {
  console.log('Email credentials are set');
}

if (process.env.EMAIL_USER === 'your_actual_email@gmail.com') {
  console.error('ERROR: You need to update EMAIL_USER in your .env file with your actual email');
}

if (process.env.RECIPIENT_EMAIL === 'your_actual_email@gmail.com') {
  console.error('ERROR: You need to update RECIPIENT_EMAIL in your .env file with your actual email');
}