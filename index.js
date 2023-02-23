// const express = require('express');
// const app = express();

// const reqFilter=(req, res, next)=>{
//     if(!req.query.age){
//         res.send("Please provide age");
//     }
//     else if(req.query.age<18){
//         res.send("You can't access this page");
//     }
//     else{
//         next();
//     }
// };



// app.get('/', (req, res)=>{
//     res.send('Welcome to Home Page');
// });

//Single Routed Middlewere
// app.get('/users', reqFilter, (req, res)=>{
//     res.send('Welcome to Users Page');
// });

// app.get('/about', (req, res)=>{
//     res.send('Welcome to About Page');
// });


// app.listen(4000);


//Multi Routed Middlewere
// const express = require('express');
// const app = express();

// const reqFilter=(req, res, next)=>{
//     if(!req.query.age){
//         res.send("Please provide age");
//     }
//     else if(req.query.age<18){
//         res.send("You can't access this page");
//     }
//     else{
//         next();
//     }
// };



// app.get('/', (req, res)=>{
//     res.send('Welcome to Home Page');
// });

// app.get('/users', reqFilter, (req, res)=>{
//     res.send('Welcome to Users Page');
// });

// app.get('/about',reqFilter, (req, res)=>{
//     res.send('Welcome to About Page');
// });


// app.listen(4000);



// Group Rout Middlewere
const express = require('express');
const reqFilter = require('./middlewere');
const app = express();
const route = express.Router();

route.use(reqFilter);

app.get('/', (req, res)=>{
    res.send('Welcome to Home Page');
});

app.get('/users', (req, res)=>{
    res.send('Welcome to Users Page');
});

route.get('/about', (req, res)=>{
    res.send('Welcome to About Page');
});

route.get('/contact', (req, res)=>{
    res.send('Welcome to Contact Page');
});

app.use('/',route);

app.listen(4000);