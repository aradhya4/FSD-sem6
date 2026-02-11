import fs from 'fs';
const appendfilesync = (file , data) =>{
    try{
       fs.appendFileSync(file ,data);
    console.log("appended the data ");
    }
    catch(error){
        console.log("unable to read data");
    }
}
//appendfilesync("./expamle.txt" , "this data has been appended to the file");
const readfilesync = (path) =>{
    try{
       const data = fs.readFileSync(path,"utf-8");
    console.log(data);
    }
    catch(error){
        console.log("unable to read data");
    }
}
import { fileURLToPath } from 'url';
console.log(fs);
const writeFileSync = (file,data) => {
    try{
   fs.writeFileSync(file , data);
    console.log("file has been written successfully");
    }
    catch(error){
        console.log("some error occured");
    }
}
console.log(1);
writeFileSync ("./example.txt" , "this data has been written through sync function 1");
console.log(1);
console.log(2);
appendfilesync("./expamle.txt" , "this data has been appended to the file");
console.log(2);
console.log(3);
readfilesync("./example.txt");
console.log(3);