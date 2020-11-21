function find(array, callback) {

    for (var i = 0; i < array.length; i++)
        if (callback(array[i]))

            return array[i]
}

function check10(num) {
    return num > 10
}