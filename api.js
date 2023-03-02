const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

// GET
app.get('/', async (req, resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data);
});

//POST
app.post('/', async (req, resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    resp.send(result);
});

//PUT
app.put('/', async (req, resp)=>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name:req.body.name},
        {$set:req.body}
        )
    resp.send({result:"update"})
});

app.listen(5000);
