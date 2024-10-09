const express = require('express');

const app = express();

app.use(express.json())

app.delete('/delete/:id', (req, res) => {
    const id = (req.params.id);
    res.send(`Deleted item with ID: ${id}`);
});

app.listen(4000,()=>{
    console.log('Server is running...')
});