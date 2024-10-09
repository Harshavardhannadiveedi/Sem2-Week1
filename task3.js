const express = require('express');

const app = express();

app.use(express.json())

app.post('/echo',(req,res)=>{
    const info = req.body;
    console.log(info);
    res.send("true");
});

app.listen(1000,()=>{
    console.log('Server is running...')
});