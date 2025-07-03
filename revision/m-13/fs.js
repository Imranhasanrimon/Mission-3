const fs = require("fs");
const text = "learning nodejs fileSystem in asyncronous way"

// const data = fs.readFileSync("./hellow.txt", { encoding: "utf-8" })

// fs.writeFileSync("./hellow.txt", text);

// const data2 = fs.readFileSync("./hellow.txt", { encoding: "utf-8" })
// console.log(data2);



// fs.writeFile("./hellow.txt", text, { encoding: "utf-8" }, (err) => {
//     if (err) {
//         console.log("sth wnt wrng");
//         return
//     }
//     console.log("file written successfully");

//     fs.readFile("./hellow-world.txt", { encoding: "utf-8" }, (err, data) => {
//         if (err) {
//             console.log("something went wrong");
//             return;
//         }
//         console.log(data);
//     })
// })

const readStream = fs.createReadStream("./hellow-worl.txt", { encoding: "utf-8" })
const writeStream = fs.createWriteStream("./hellow.txt", { encoding: "utf-8" })

readStream.on("data", (data) => {
    // console.log(data);
    writeStream.write(data, (err) => {
        if (err) {
            throw Error("Error", err)
        }
    })
})
readStream.on("error", (err) => {
    if (err) {
        throw Error("Error", err)
    }
})
writeStream.on("error", (err) => {
    if (err) {
        throw Error("Error", err)
    }
})