const fs = require('fs')
const pathModule = require('path')
const arr = process.argv;
const text = arr.slice(2).join(" ");

if (!text) {
    console.log("❌ No Text Added!");
    console.log("Example: node index.js hellow world");
    process.exit(1)
}

const time = new Date().toISOString();
const message = `${text} ${time} \n`

const path = pathModule.join(__dirname, 'log.txt')



fs.appendFile(path, message, { encoding: "utf-8" }, (err) => {
    if (err) {
        console.log('Shit .....');
    }
})