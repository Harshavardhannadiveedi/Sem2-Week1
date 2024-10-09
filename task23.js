const express = require('express');
const app = express();

// Redirect to Google
app.get('/google', (req, res) => {
  res.redirect('https://www.google.com');
});

// Redirect to a local route
app.get('/home', (req, res) => {
  res.redirect('/welcome');
});

// Route to redirect to
app.get('/welcome', (req, res) => {
  res.send('Welcome to our website!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
