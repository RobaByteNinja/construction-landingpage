require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000'
}));
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'BuildMaster API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});