let salePottery = []

export const toSellOrNotToSell = (pottery) => {
    if (pottery.weight >= 6 && pottery.cracked === false) {
        pottery.price = 40
        salePottery.push(pottery)
    }
    else if (pottery.weight < 6 && pottery.cracked === false){
        pottery.price = 20
        salePottery.push(pottery)
    }
    return pottery
}

export const usePottery = () => {
    return salePottery.map(salePottery => ({...salePottery}))
}