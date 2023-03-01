const dbConnect = require('./mongodb')

// // promiss 1
dbConnect().then((resp)=>{
    resp.find().toArray().then((data)=>{
        console.warn(data)
    })
})


// // promiss 2
// const main= async ()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.warn(data);
// }
//main();