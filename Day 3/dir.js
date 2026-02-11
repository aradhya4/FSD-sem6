import fs from"fs/promises"
//fs.mkdir("../net")

//make directory async
const makedir = async(path) => {
    await fs.mkdir(path);
console.log("Directory has been created ")
}
makedir("./net");


//make directory async try catch

const makedir = async(path) => {
    try{
        await fs.mkdir(path);
        console.log("Directory has been created ")
    }catch(error){
        console.log("Unable to create directory ")
    }
}
makedir("../ret.txt");

//read directory 
const readdir = async(path) => {
    await fs.readdir(path);
    console.log(" Reading Directory ")
}
readdir("./net.txt");

//read directory try catch
const readdir = async(path) => {
    try{
        const data = await fs.readdir(path);
        console.log("Directory is getting read ",data)
    }catch(error){
        console.log("Unable to read directory ")
    }
}
readdir("../day-02");

//remove directory
const removedir = async(path) => {
    await fs.rmdir(path);
    console.log(" Removing Directory ")
}
removedir("./net");

//remove directory try catch
const removedir = async(path) => {
    try{
        await fs.rmdir(path);
        console.log("Directory is getting removed ")
    }catch(error){
        console.log("Unable to remove directory ")
    }
}
removedir("./net");





