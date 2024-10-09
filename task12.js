const express = require('express');

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.listen(4000,()=>{
    console.log('Server is running...')
});