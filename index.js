const express = require('express');
const app = express();

app.get("", (req, res)=>{
    res.send(`
    <h1>Welcome, to Home Page.</h1>
    <a href="/about" > Go to About Page</a>
    `);
});

app.get('/about', (req, res)=>{
    res.send(`
    <input type="text" placeholder="User name" value="${req.query.name}" />
    <button>Click Me</button>
    <a href="/" > Go to Home Page</a>
    `);
});

app.get('/help', (req, res)=>{
    res.send([
        {
        name: "sam",
        email: "sam@gmail.com"
        },
        {
        name: "padeep",
        email: "pradeep@gmail.com"
        }
    ]);
});

app.listen(4000);