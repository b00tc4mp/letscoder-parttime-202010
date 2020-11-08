function reduce(array, callback, valorInicial) {

    for (var i = 0; i < array.length; i++) {
        var result = callback(valorInicial + array[i])
    }

    return result


}



