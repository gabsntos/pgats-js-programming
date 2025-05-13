// loops
// loops are need when we want to repeat a certain operation multiple times

let cars = ['Volvo','Toyota','Tesla']

// for loop / for i loop
for (let i = 0; i < 5; i++) {
    console.log('Hello world ' + i)
}

for (let i = 0; i <= 2; i++) {
    console.log(cars[i])
}

//for of loop
for (let car of cars) {
    console.log(car)
}

// ES6 syntax for each loop. using forEach method and fat arrow
cars.forEach(car => {
    console.log(car)
})