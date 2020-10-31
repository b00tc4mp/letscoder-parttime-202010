function pop(array) {        //["10", "11", "12", "13"]
    var lastItem = array[array.length - 1]
    // var newArray = []
    array.length = array.length - 1

    //for (i = 0; i < array.length - 1; i++) {
    //    newArray[newArray.length] = array[i]

    //}
    //array = newArray
    //console.log(array)
    return lastItem

}
                            //  output => "13" // array = ["10", "11", "12"]

