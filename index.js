const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

//ejs template
app.set('view engine', 'ejs');

app.get('/home', (req, res)=>{
    res.sendFile(`${publicPath}/home.html`);
});

app.get('/profile', (req, res)=>{
    const user={
        name: "pradeep",
        email: 'pradeep@gmail.com',
        city: "patna"
    }
    res.render('profile', {user});
});

app.get('/about', (req,res)=>{
    res.sendFile(`${publicPath}/about.html`);
});

app.get('*', (req,res)=>{
    res.sendFile(`${publicPath}/404.html`);
});

app.listen(4000);