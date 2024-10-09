const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json())

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  console.log(name, email);
  res.send(`Thank you, ${name}!`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});