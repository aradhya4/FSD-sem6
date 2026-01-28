const myPromise = new Promise((resolve, reject) =>{
    let marks = 80;
    if(marks > 33) {
        resolve("pass");
    } else {
        reject("fail");
    }
})
// console.log(myPromise);     //if we run only this then  Promise {pass} is returned
myPromise.then((msg) =>console.log(msg))
    .catch((error) =>console.log("some error occured")) //when we run this then pass is returned and this is perfect