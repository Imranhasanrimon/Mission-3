const fs = require('node:fs');

//Syncronous way of FS
// console.log("task-1");
// const txt = "learning writeFileSync"
// fs.writeFileSync('./module-13/hellow.txt', txt)
// console.log("task-2");
// const data = fs.readFileSync("./module-13/hellow.txt", { encoding: "utf-8" })
// console.log(data);
// console.log("task-3");


//Asyncronous way of FS
console.log("task-1");
const txt = "learning writeFile"
// fs.writeFileSync('./module-13/hellow.txt', txt)
// console.log("task-2");
const data = fs.readFile("./module-13/hellow.txt", { encoding: "utf-8" }, (err, dataa) => {
    if (err) {
        console.log('sth went wrong', err);
        return;
    }
    console.log(dataa);
})
console.log(data);
console.log("task-3");