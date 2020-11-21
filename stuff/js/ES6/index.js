// LET - CONST

let a = 1
a = 0 // output 0

const b = 1
b = 0 // error, not possible to redefine const

// DESTRUCTURING

const obj = { name: 'Aitor', surname: 'Truji', age: 50 }
const { age, surname: identifier, name: title } = obj
console.log(age) // output => 50
console.log(title) // output => 'Aitor'
console.log(identifier) // output => 'Truji'

// TERNARY

//es5- ex1
if (title.length > 5) {
    console.log('Large name')
} else {
    console.log('Short name')
}

// es6- ex1
title.length > 5 ? console.log('Large name') : console.log('Short name')

//es5- ex2
if (title.length > 5) {
    console.log('Large name')
} else if (title.length > 12) {
    console.log('Huge name')
} else {
    console.log('Short name')
}

//es6- ex2
title.length > 5 ?
    title.length > 12 ? console.log('Huge name') : console.log('Large name') :
    console.log('Short name')


// ARROW FUNCTIONS

//es5
function fun(name) {
    console.log('hey ' + name)
}

//es6
const funArrow = (name) => {
    console.log('hey ' + name)
}
