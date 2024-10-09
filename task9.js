const express = require('express');

const app = express();

app.use(express.json())

app.post('/data', (req, res) => {
    const { name, age } = req.body;
    console.log(req.body);
    res.send(`Received data: Name = ${name}, Age = ${age}`);
});

app.listen(4000,()=>{
    console.log('Server is running...')
});