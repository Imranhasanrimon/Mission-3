import mongoose from "mongoose";
import app from "./app";
const PORT = 5000;


async function main() {
    try {
        await mongoose.connect("mongodb+srv://common:common@cluster0.7hbnv.mongodb.net/Advanced-Note-App?retryWrites=true&w=majority&appName=Cluster0");
        console.log("DB is connected");

        app.listen(PORT, () => {
            console.log("Server is running on prot 5000");
        })
    } catch (error) {
        console.log(error);
    }
}

// main()


//full meal for entire month (1-30)
const FMCost = 86 + 90 + 84 + 87 + 82 + 82 + 82 + 78 + 78 + 94 + 69 + 89 + 83 + 77 + 79 + 75 + 123 + 83 + 82 + 81
//full meal for half month (14-30)
const FMCostHalf = 87 + 82 + 82 + 82 + 78 + 78 + 94 + 69 + 89 + 83 + 77 + 79 + 75 + 123 + 83 + 82 + 81
//night meal for entire month (1-30)
const NMCost = 50 + 54 + 50 + 52 + 50 + 50 + 49 + 45 + 47 + 55 + 40 + 52 + 49 + 45 + 47 + 45 + 45 + 50 + 50 + 46
//previous month's meal cost
const previousMonth = 95 + 86


// console.log("FMCost", FMCost);
// console.log("FMCostHalf", FMCostHalf);

const masudBhai = FMCost + previousMonth;
const imran = FMCost + previousMonth;
const mezbaBhai = FMCost - (86 + 90 + 84 + 94 + 69) + (0) + (95 + 55);//previousMonth included
const mahfuzBhai = FMCost - (52) + (82) + previousMonth;
const sohagBhai = FMCost - (90 + 84) + (75 + 123 + 83 + 82 + 81) + previousMonth + 55;
const mozahidBhai = FMCost - (82 + 82) + (50 + 50) + previousMonth;
const nomanBhai = FMCost - (123 + 83 + 82 + 81) + (0) + previousMonth;
const monir = FMCostHalf - (87 + 82 + 82 + 82) + (0);
const amzadBhai = FMCostHalf - (82) + (0);
const tanzim = FMCostHalf - (87) + (0);
const hasbi = FMCostHalf - (87 + 82 + 78 + 78) + (50 + 45 + 47);
const ashrafulBhai = FMCostHalf - (87 + 82 + 82) + (50);
const hridoyBhai = NMCost - (52 + 50 + 50 + 49) + (83) + (40 + 50);//previousMonth included
const abuHanifBhai = NMCost - (52 + 50 + 50 + 55 + 45) + (82 + 94 + 123) + (40 + 50);//previousMonth included
const nazmulHuda = (94 + 69 + 89 + 83 + 77 + 79 + 75 + 123) - (89 + 83 + 75 + 123) + (49 + 45 + 80);
const solaymanBhai = (50 + 90 + 45 + 78 + 94 + 69 + 52 + 45 + 50) + previousMonth - 86 + 50
const munsefBhai = (50 + 52 + (50 * 4) + 82 + 45 + 47 + 94 + 40 + 89 + 83 + 45 + 79 + 45 + 45 + 50 + 82 + 81) + (40 + 50);//previousMonth included
const zabbarBhai = (86) + previousMonth
const golamRasulBhai = (69) + previousMonth - 86
const babuBhai = (0)

// console.log("mahfuz", mahfuzBhai);
// console.log("mozahid", mozahidBhai);
// console.log("noman", nomanBhai);
// console.log("sohag", sohagBhai);
// console.log("monir", monir);
// console.log("amzad", amzadBhai);
// console.log("tanzim", tanzim);
// console.log("hasbi", hasbi);
// console.log("ashraful", ashrafulBhai);
// console.log("hridoy", hridoyBhai);
// console.log("abuHanif", abuHanifBhai);
// console.log("nazmulHuda", nazmulHuda);
// console.log("munsef", munsefBhai);
// console.log("solayman", solaymanBhai);

const totalMealCosts = masudBhai + imran + mezbaBhai + mahfuzBhai + sohagBhai + mozahidBhai + nomanBhai + monir +
    amzadBhai + tanzim + hasbi + ashrafulBhai + hridoyBhai + abuHanifBhai + nazmulHuda + solaymanBhai + munsefBhai + zabbarBhai + golamRasulBhai + babuBhai

const otherCosts = 400 + 400 + 15 + 400 + 400

const totalCost = totalMealCosts + otherCosts;
const totalCollection = 25931
// console.log("totalCost", totalCost);
// console.log("remaining", totalCollection - totalCost);

console.log(zabbarBhai);