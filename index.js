const express = require('express');
const app = express();

app.get('', (req, res)=>{
    console.log("data sent by browser", req.query.name);
    res.send('Welcome This is a Home Page. Hello '+req.query.name);
});

app.get('/about', (req, res)=>{
    res.send('Hello, This is a About Page');
});

app.get('/help', (req, res)=>{
    res.send('Welcome, This is a Hepl Page');
});

app.listen(4000);