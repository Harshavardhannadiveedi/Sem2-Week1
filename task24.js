const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

// Custom 404 error handler
app.use((req, res, next) => {
  res.status(404);
  res.send('404: Page Not Found');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});