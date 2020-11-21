

function filter(array, callback) { // array [1,2,4,6] , pares()
    var newArray = []

    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) newArray[newArray.length] = array[i]
    }




    return newArray
}





function pares(num) {        // callback sera si son numeros pares
    return num % 2 === 0



}
pares(1)                      

