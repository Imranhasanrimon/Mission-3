const EventEmitter = require("events")
class SchoolBell extends EventEmitter { }

const schoolBell = new SchoolBell();

schoolBell.on("ring", () => {
    console.log("Yahoo! Class Shes");
})

schoolBell.on("ring", () => {
    console.log("Dhet arekta class");
})

schoolBell.on("broken", () => {
    console.log("oh no class ki ar shes hobe na?");
})

schoolBell.emit("broken")
schoolBell.emit("ring")