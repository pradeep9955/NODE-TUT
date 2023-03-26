const dbConnect = require('./mongodb');
const mongodb = require('mongodb')
const express = require('express');
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
         //static data
         //{name:"i phone 13"},
        //  {$set:{price: 900}}
        
        //dynamic data
        {name:req.body.name},
        {$set:req.body}
         )
    resp.send({result:"update"})
});

//DELETE
app.delete("/:id", async (req, resp)=>{
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    resp.send(result);
});
app.listen(5000);
