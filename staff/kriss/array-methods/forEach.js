function forEach(array, callback) {
    if (!(array instanceof Array))
        throw new TypeError(array + "this is  ot an array");
    if (!(callback))
        throw new TypeError(callback + "this nis not a function)");

    for (var i = 0; i < array.length; i++) {
        callback(array[i]);

    }



}
