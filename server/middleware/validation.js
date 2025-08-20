const { body, validationResult } = require('express-validator');

const validateContact = [
  body('name')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters long'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('subject')
    .trim()
    .isLength({ min: 5 })
    .withMessage('Subject must be at least 5 characters long'),
  body('message')
    .trim()
    .isLength({ min: 10 })
    .withMessage('Message must be at least 10 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateContact };