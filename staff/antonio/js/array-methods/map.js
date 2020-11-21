function map(array, callback) {   // [1,2,3,4], sum10 
    var newArray = []

    for (var i = 0; i < array.length; i++)
        newArray[newArray.length] = callback(array[i])


    return newArray                 // [10,12,13,14]


}

function sum10(num) {
    return num + 10

}

