import fs from"fs"
//fs.mkdir("../net")

//make directory sync
// const makesyncdir = (path) => {
//     fs.mkdirSync(path);
//     console.log("Directory has been created ")
// }
// makesyncdir("./go");


// //make directory async try catch

// const makedir = (path) => {
//     try{
//         fs.mkdirSync(path);
//         console.log("Directory has been created ")
//     }catch(error){
//         console.log("Unable to create directory ")
//     }
// }
// makedir("../go");

// //read directory 
const readdir = (path) => {
    fs.readdirSync(path);
    console.log(" Reading Directory ")
}
readdir("./go");

// //read directory try catch
const readdir = (path) => {
    try{
        const data = fs.readdirSync(path);
        console.log("Directory is getting read ",data)
    }catch(error){
        console.log("Unable to read directory ")
    }
}
readdir("../day-02");

// //remove directory
const removedir = async(path) => {
    await fs.rmdir(path);
    console.log(" Removing Directory ")
}
removedir("./net");

// //remove directory try catch
const removedir = async(path) => {
    try{
        await fs.rmdir(path);
        console.log("Directory is getting removed ")
    }catch(error){
        console.log("Unable to remove directory ")
    }
}
removedir("./net");