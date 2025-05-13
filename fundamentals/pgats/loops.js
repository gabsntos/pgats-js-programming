/**
 * while (condicional)
 * for (contador)
 * forEach  (para listas)
 */

let laspsUntilTiredness = 5
let lapsQuantity = 1

console.log('While loop')
while (lapsQuantity < laspsUntilTiredness) {
    console.log(`lap number ${lapsQuantity}`)
    lapsQuantity++
}

console.log('\nfor i loop')
for (let dogFood = 10; dogFood >= 0; dogFood--) {
    dogFood == 0 ? console.log(`we need to buy more food for the dog`)
                 : console.log(`we still have ${dogFood} dog food grams`)
    // if (dogFood == 0) {
    //     console.log(`we need to buy more food for the dog`)
    // } else {
    //     console.log(`we still have ${dogFood} dog food grams`)
    // }
    
}

console.log(`\nfor each loop`) // percorre uma lista e executa uma ação para cada item da lista

const students = [
    'Matheus',
    'Lucas',
    'Larissa'
]

const studentObjects = [
    {
        nome: 'João',
        grade: 6
    },
    {
        nome: 'Maria',
        grade: 7
    },
    {
        nome: 'Wanderson',
        grade: 8
    }
]

students.forEach(student => {
    console.log(`student's name: ${student}`)
})

studentObjects.forEach(student => {
    console.log(`name: ${student.nome}, grade is ${student.grade}`)
})