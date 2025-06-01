const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter { }

const schoolBell = new SchoolBell()

schoolBell.on('ring', () => {
    console.log("Yahoo!! Class Shesh!");
})

schoolBell.emit('ring')