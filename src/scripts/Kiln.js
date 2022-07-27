export const firePottery = (object, temp) => {
    object.fired = true 
    if (temp > 2200){
        object.cracked = true
    }
    else {
        object.cracked = false
    }
    return object
}