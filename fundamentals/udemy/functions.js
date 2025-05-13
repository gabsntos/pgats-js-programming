/**
 * functions are used to organize the code into reuseble component
 */

// declarative function
function helloOne() {
    console.log('Hello One!')
}

helloOne() // invoking our function

// anonymus function. asigning the function to a variable
let helloTwo = function() {
    console.log('Hello Two!')
}

helloTwo()

/**
 * IMPORTANT the difference between declarative and anonymus functions is that declative functions can be invoked
 * above its declation, whereas anonymus functions cannot.
 */

// ES6 function syntax or arrow function
let helloThree = () => {
    console.log('Hello Three!')
}

helloThree()

// functions with arguments

function printName(name, lastName) {
    console.log(name, lastName)
}

printName('Mike', 'Smith')

// functions with return
function multiplyByTwo(x) {
    let result = x * 2
    return result
}

console.log(multiplyByTwo(10))

// import functions. note that you have to use export the function in the other file before export it here
import { printWord } from '../fundamentals/helper/printHelper.js'
printWord('building')

//import everything
import * as helper from '../fundamentals/helper/printHelper.js'
helper.printAge(29)