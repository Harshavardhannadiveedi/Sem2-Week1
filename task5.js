const express = require('express');

const app = express();

app.use(express.json())


app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

app.listen(4000,()=>{
    console.log('Server is running...')
});