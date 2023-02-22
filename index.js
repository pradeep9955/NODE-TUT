//Asynchronous
// console.log('start exe...');

// setTimeout(()=>{
//     console.log('logic exe...');
// },2000);

// console.log('complete exe...');

//Drowback
// a=10;
// b=20;

// setTimeout(()=>{
//     b=30;
// },2000);

// console.log(a+b);

//Handle DrowBack
a=10;
b=20;

let WatingData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(40)
    },2000);
})

WatingData.then((data)=>{
    b=data;
    console.log(a+b);
})


