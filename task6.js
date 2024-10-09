const express = require('express');

const app = express();

app.use(express.json())


app.get('/user/:id', (req, res) => {
    const id = (req.params.id);
    res.send(`User ID: ${id}`);
});


app.listen(4400,()=>{
    console.log('Server is running...')
});