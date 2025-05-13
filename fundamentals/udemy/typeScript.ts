let firstName = 'Arthur'
// typescript does not let us reassign a variable with a diferent type of data. So this wouldn't work:
// let firstName = 1
// in JS we can easily do this type of move

// also we can explicitaly asign what type of value should this be, for example:
let lastName:  string = 'Laura'
let age: number = 17

// in TS we can create our own custom type. And assign this type to a variable. The value assigned to this
// variable must be the object that should match this particular type.
type Customer = {firstName: string, lastName: string, active: boolean}

// this wouldn't work. Because a number it is not assignable to custumer
// let firstCustomer: Customer = 100

let firstCustomer: Customer = {
    firstName: 'Kaique',
    lastName: 'Wiskey',
    active: true
}

