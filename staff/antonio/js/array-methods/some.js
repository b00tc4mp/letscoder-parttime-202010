
function some(array, callback) {
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) return true

        // else return false           

    }
    return false
}

function check10(num) {
    return num > 10
}

var nums = [1, 2, 3, 11]
some(nums, check10)
