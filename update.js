const dbConnect = require('./mongodb');

const updateData = async ()=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: 'note 5'},{
            $set:{name:'node pro 5', price : 550}
        }
    );
    console.warn(result);
}
updateData();