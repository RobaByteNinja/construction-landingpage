const express = require('express');
const { contactForm } = require('../controllers/contactController');
const { validateContact } = require('../middleware/validation');

const router = express.Router();

router.post('/', validateContact, contactForm);

module.exports = router;