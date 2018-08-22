const express = require('express');
const PORT = process.env.PORT || 9000;
const app = express();
const cors = require('cors');
const { resolve } = require('path');

app.use(cors());

app.use(express.static(resolve(__dirname, "client", "dist")));

function log(msg){
    return (req, res, next) =>
    {
        console.log(msg);
        next();
    }
}

app.use(log("can i get uuhhhhhhhhhhhh middleware"));

app.get('/api/get-stuff', (req, res)=>{
    res.send({
        success: "true",
        message: "here is...sum stuff..."
    })
});

app.post('/api/get-user', (req, res)=>{
    res.send({
        success: "true",
        user: {
            name: 'Hazard Trigger',
            age: 39
        }
    });
});

// app.get('/', (req, res) =>{
//     res.send('<h1>ayyyy</h1>');
// });

app.get('*', (req, res)=>{
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
})

app.listen(PORT, ()=>{
    console.log("I'M IN");
});