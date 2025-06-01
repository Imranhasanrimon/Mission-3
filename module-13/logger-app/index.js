const fs = require('fs')
const arr = process.argv;
const text = arr.slice(2).join(" ");

fs.writeFile("./log.txt", text, { encoding: "utf-8" }, (err) => {
    if (err) {
        console.log('Shit .....');
    }
})