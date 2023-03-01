const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'e-com';
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
    // let response = await collection.find({name: 'u10'}).toArray();
    // console.log(response);
}

module.exports= dbConnect;