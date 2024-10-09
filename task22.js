const express = require('express');
const app = express();

app.get('/data', (req, res) => {
  const data = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer'
  };
  res.json(data);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});