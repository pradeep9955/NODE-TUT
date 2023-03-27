const mongoose = require('mongoose');

const main = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1/e-com");
    const ProductSchema = new mongoose.Schema({
        name:String,
        price: Number
    });

    const ProductModel = mongoose.model('products', ProductSchema);
    // let data = new ProductModel({name: "m8"});
    let data = new ProductModel({name: "m 10", price:1000});
    let result = await data.save();
    console.log(result);
};

main();