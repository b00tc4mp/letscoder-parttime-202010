function pop (array) { //reduce array length,- last element
var lastItem = array[array.length -1];
array.length--
return lastItem

}

var cars = ["vw", "fiat", "ford", "mercedes" ] //4 items in the array, index 0-3
pop(arr) // remove last element => returns "mercedes", new array => 3 elements only
