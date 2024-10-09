const express = require('express');

const app = express();

app.use(express.json())

app.get('/hello', (req, res) => {
    const data = { message: "Hello, world!" };
    res.json(data);
});


app.listen(4000,()=>{
    console.log('Server is running...')
});