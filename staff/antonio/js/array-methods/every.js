function every(array, callback) {
    for (var i = 0; i < array.length; i++) {
        if (!callback(array[i])) return false

    }
    return true
}


var nums = [3, 7, 9, 109, 200]

function check100(num) {
    return num > 100
}

every(nums, check100)


