const app=require('./app')

//console.log(app.z())

const arr=[2,4,5,9,3,1];
let ans= arr.filter((item)=>{
    return item>=3
});
console.log(ans)