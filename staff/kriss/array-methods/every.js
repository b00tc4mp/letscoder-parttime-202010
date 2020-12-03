function calc (a, b, callback) {
console.log ("calc", a, b, callback);
callback()
}
    calc(1, 2, function(){

        console.log("calling the function");
    });