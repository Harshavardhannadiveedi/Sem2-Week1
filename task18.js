const express = require('express');
const compression = require('compression');
const app = express();
const port = process.env.PORT || 3000;

// Add compression middleware
app.use(compression());

// Your routes here...
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log("Server listening on port ${port}");
});