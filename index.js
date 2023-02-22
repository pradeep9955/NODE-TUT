const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;

// CREATE file-> apple.txt
//fs.writeFileSync(filePath, "this is a simple file");

// READ file
// fs.readFile(filePath,'utf8', (err, item)=>{
//     console.log(item);
// })

//UPDATE
// fs.appendFile(filePath, ' ans file name is apple.txt', (err)=>{
//     if(!err) console.log("file is updated");
// })

// RENAME
// fs.rename(filePath, `${dirPath}/data.txt`, (err)=>{
//     if(!err) console.log("File name is updated");
// })

//DELETE
fs.unlinkSync(`${dirPath}/data.txt`);
