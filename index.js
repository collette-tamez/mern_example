const express = require('express');
const PORT = process.env.PORT || 9000;
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api/get-stuff', (req, res)=>{
    res.send({
        success: "true",
        message: "here is...sum stuff..."
    })
});

app.get('/', (req, res) =>{
    res.send('<h1>ayyyy</h1>');
});

app.listen(PORT, ()=>{
    console.log("I'M IN");
});