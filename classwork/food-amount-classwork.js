let storage = 1000
let foodQuantityPerDay

let dog = [
    weight = 14,
    dogName = 'bolinha',
    foodQuantityPerDay = weight * 30,
    daysUntilFoodRunOut = storage / foodQuantityPerDay
]
logString = 
`Dog's name: ${dog[1]}
Dog's weight: ${dog[0]}Kg
Food quantity per day: ${dog[2]}g
Days until food run out: ${dog[3].toFixed(2)} dias`

console.log(logString)


