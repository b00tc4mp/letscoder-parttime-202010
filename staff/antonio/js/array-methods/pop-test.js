function pop(array) {        //["10", "11", "12", "13"]
    if (!(array instanceof Array)) throw new TypeError(`${array} is not an array`) // array + " is not an array"    

    var lastItem = array[array.length - 1]
    // var newArray = []
    array.length = array.length - 1
    return lastItem

}
var numeros = [10, 11, 12]
var result = pop(array)

console.log('TEST pop') // title
console.assert(result[0] === 10, 'should return the element removed')
console.assert(result[1] === 11, 'should return the element removed')
console.assert(array.length === 2, 'should have -1 in original length')
console.assert(result.length === 1, 'should only return one element')

console.log('should fail on invalid array input') // unhappy path

var fail = ''

try {
    pop(undefined)

} catch (error) {
    fail = error.message
}

console.assert(fail.length > 0, 'should exist error')
console.assert(fail === 'undefined is not an array', 'should throw array error')