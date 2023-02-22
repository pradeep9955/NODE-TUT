const fs = require('fs');
const path = require('path');

//path set-> files folder
const dirPath = path.join(__dirname, 'files');

//multiple file create in files folder
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPath+`/hello${i}.txt`, "this is a simple file");
// }

//file reads
fs.readdir(dirPath,(err, files)=>{
    //files name in array formet
    //console.log(files)

    // files name-> indivisualy
    files.forEach((item)=>{
        console.log("file name is: ", item);
    })
})



// console.log("hello");