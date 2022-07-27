let potteryCreations = 1

export const makePottery = (shape, weight, height) => {
   let potteryObject = {
        shape ,
        weight ,
        height ,
        id: potteryCreations++
    }
    return potteryObject
}