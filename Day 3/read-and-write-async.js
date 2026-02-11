import fs from "fs/promises";
//console.log(fs);

//write function
const writeFile = async (path, data) => {
    try {
        await fs.writeFile(path, data);
        console.log("Data has been written succesfully")
    }
    catch (error) {
        console.log("Unable to write the data")

    }
}
// writeFile("./example.txt", "This has been written in async function")

//read file
const readFile = async (path) => {
    try {
        const data =  await fs.readFile(path , utf-8);
        console.log(data);
    }
    catch (error) {
        console.log("Unable to read the data")

    }
}
// readFile("./example.txt")

// const readFile = async (path) => {
//         const data =  fs.readFile(path);
//         console.log(data);
//     }
// readFile("./example.txt")

const appendFile = async (path , data) => {
    try {
        await fs.appendFile(path , data);
        console.log("data has been appended successfully");
    }
    catch (error) {
        console.log("Unable to append the data")

    }
}
//appendFile("./example.txt" , "---------------this data bas been apppended to the file")

// const readFile = async (path) => {
//     try {
//         const data =  await fs.readFile(path , utf-8);
//         console.log(data);
//     }
//     catch (error) {
//         console.log("Unable to read the data")

//     }
// }
// readFile("./example.txt")


console.log("before write")
writeFile("./ample.txt", "This has been written in async function")
console.log("after write")
console.log("before read")
readFile("./ample.txt")
console.log("after read")
console.log("before append")
appendFile("./ample.txt" , "---------------this data bas been apppended to the file")
console.log("after append")