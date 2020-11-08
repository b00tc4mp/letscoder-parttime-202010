function slice(array, i, j) {          //[1,2,3,4,5,6,7] , 2, 4 

    var sliceArray = []
    if (i < 0) return sliceArray


    for (var i = i; i < j; i++) {
        sliceArray[sliceArray.length] = array[i]
    }



    return sliceArray

}
