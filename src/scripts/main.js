// Imports go first
import {makePottery} from './PotteryWheel.js'
import {firePottery} from './Kiln.js'
import {toSellOrNotToSell} from './PotteryCatalog.js'
import {usePottery} from './PotteryCatalog.js'



// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 4, 6)
console.log(mug)

let bowl = makePottery("bowl", 6, 4)
console.log(bowl)

let plate = makePottery("plate", 5, 2)
console.log(plate)

let vase = makePottery("vase", 8, 10)
console.log(vase)

let servingBowl = makePottery("servingBowl", 10, 12)
console.log(servingBowl)

// Fire each piece of pottery in the kiln

let newMug = firePottery(mug, 2100)
console.log(newMug)

let newBowl = firePottery(bowl, 2400)
console.log(newBowl)

let newPlate = firePottery(plate, 2000)
console.log(newPlate)

let newVase = firePottery(vase, 2300)
console.log(newVase)

let newServingBowl = firePottery(servingBowl, 2100)
console.log(newServingBowl)
// Determine which ones should be sold, and their price

toSellOrNotToSell(newMug)
toSellOrNotToSell(newBowl)
toSellOrNotToSell(newPlate)
toSellOrNotToSell(newVase)
toSellOrNotToSell(newServingBowl)
const potterySaleArray = usePottery()
console.log(potterySaleArray)
// Invoke the component function that renders the HTML list



