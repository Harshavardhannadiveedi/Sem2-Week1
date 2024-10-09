const express = require('express');
const app = express();

const PORT = process.env.PORT || 5555; // Use environment variable or default to 3000

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

