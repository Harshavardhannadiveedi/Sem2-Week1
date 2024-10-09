const express = require('express');
const app = express();

app.get('/error', (req, res, next) => {
    throw new Error('Something went wrong');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
