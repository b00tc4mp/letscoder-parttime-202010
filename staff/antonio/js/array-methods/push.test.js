function push(array, newItem) { //numeros, "13"
    array[array.length] = newItem

    return array // ["10", "11", "12", "13"]
}

var numeros = [10, 11, 12]

console.log('TEST push') // title
console.log('añadir "13"') // happy path
var newItem = 13
var result = []

result = push(numeros, 13)

console.assert(JSON.numeros.push(13) === JSON.result) // SOLUCION


console.assert(numeros.length === result.length, "result.length debe tener numeros.length +1")

console.log('should fail if array is undefined') // unhappy path

var fail = '';
var numeros = [10, 11, 12]
try {
    push("arr", newItem)

} catch (error) {
    fail = error.message
}

console.assert(fail === "arr is not a array") // implementar validador array y funcion