const express = require('express');
const userValidationRules = require('./validators/user');

const app = express();

app.post('/users', userValidationRules, (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  // Validation successful, proceed with request
});