function includes(array, item) {

    for (var i = 0; i < array.length; i++) {
        if (item === array[i]) {
            return true
        }
    }
    return false
}

var result = includes([3, 4, 5], 4)