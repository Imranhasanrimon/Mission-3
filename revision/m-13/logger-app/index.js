const path = require("path")
const fs = require("fs")
const inputArguements = process.argv.slice(2)
const txt = inputArguements.join(" ")

const timeStamps = new Date().toISOString();
console.log(timeStamps);

if (!txt) {
    console.log("text is required");
    process.exit(1)
}

const text = `${txt} ${timeStamps} \n`



const filePath = path.join(__dirname, "log.txt");
fs.appendFile(filePath, text, { encoding: "utf-8" }, () => {
    console.log("text added");
})

// console.log(filePath);