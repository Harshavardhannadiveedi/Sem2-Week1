const express = require('express');

const app = express();

app.use(express.json())

app.get('/goodbye',(req,res)=>{
    res.send("Goodbye, Express!");
});

app.listen(5000,()=>{
    console.log('Server is running...')
});