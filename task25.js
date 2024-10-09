const express = require('express');
const app = express();

// Send 200 OK with a success message
app.get('/success', (req, res) => {
  res.status(200).send({ message: 'Request successful' });
});

// Send 400 Bad Request with an error message
app.get('/bad-request', (req, res) => {
  res.status(400).send({ message: 'Invalid request' });
});

// Send 404 Not Found with an error message
app.get('/not-found', (req, res) => {
  res.status(404).send({ message: 'Resource not found' });
});

// Send 500 Internal Server Error with an error message
app.get('/internal-server-error', (req, res) => {
  res.status(500).send({ message: 'Server error' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});