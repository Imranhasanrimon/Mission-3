const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter { }

const schoolBell = new SchoolBell()

schoolBell.on('ring', () => {
    console.log("Yahoo!! Class Shesh!");
})
schoolBell.on('ring', () => {
    console.log("Dheet!! Arekta Class Ache!");
})
schoolBell.on('broken', () => {
    console.log("Ohh No!! Class ki ar shesh hobe na");
})

schoolBell.emit('ring')
// schoolBell.emit('broken')