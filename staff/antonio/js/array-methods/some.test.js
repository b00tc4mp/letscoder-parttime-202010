function some(array, callback) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (!(callback instanceof Function)) throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) return true

        // else return false           

    }
    return false
}





console.log('TEST some') // title
console.log('should be true if one element evaluates as  true') // happy path

function check10(num) {
    return num > 10
}


console.assert(some([2, 3, 15], check10), "should be true")// en caso de ser true

console.assert(some([2], check10) === false, "should be false")
console.assert(some([3], check10) === false, "should be false")
console.assert(some([15], check10) === true, "should be true")

console.log("should be false, all elements are <10")//happy path
console.assert(some([2, 3, 4, 5], check10) === false, "should be false")//en caso de ser false

console.log('should fail if array is undefined') // unhappy path

var fail = ""
try {
    some(undefined, function (num) {
        if (num > 10) true
    })

} catch (error) {
    fail = error.message

}
console.assert(fail === "undefined is not an array")
console.log('should fail if function is different of function') // unhappy path

var fail = '';
var nums = [1, 2, 3, 4, 15]

try {
    some(nums, 'hello')

} catch (error) {
    fail = error.message
}

console.assert(fail.length > 0, 'should contain the error message') //esperamos que el error exista
console.assert(fail === "hello is not a function")