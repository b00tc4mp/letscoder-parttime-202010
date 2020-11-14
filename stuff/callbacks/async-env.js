// Declaration
function boilWater(callback) {
    console.log('Start cooking mood')
    console.log('Start boil water')
    setTimeout(function () {
        console.log('WATER IS BOILING RIIIIIING')
        callback() // this executes when boil finishes
    }, 3000)
    console.log('We are waiting')
}

// Execution
boilWater(function () {
    console.log('Pick rice')
    console.log('Rice into water')
    console.log('Dinner is ready!')
})