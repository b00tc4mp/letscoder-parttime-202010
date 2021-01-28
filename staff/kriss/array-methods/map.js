function map (array,callback) {
    var newArray =[] //new array 

    for (var i=0; i<array.length; i++)
    newArray[newArray.length] = callback (array[i])
    return newArray

}
function sum10 (num){
    return num +10
}
var num = [ 1, 2, 3, 4, 5 ] //new array `11,12 etc
map (num, sum10)
 var cars = [ "fiat", "volvo", "opel" ]  //fiat10, volvo10, opel10