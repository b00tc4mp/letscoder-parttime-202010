import searchCars from './searchCars'

console.log('searchCars TEST')

console.log("should work for 'audi' query") // happy path

searchCars('audi', (error, cars) => {
    if (error) console.assert(!error, 'should not reach this point')

    console.assert(cars, 'cars array should exist')
    console.assert(cars.length === 7, 'should have 7 cars for audi query')
    console.assert(cars[0].name === "AUDI RS 5 COUPE", 'should match first car name')
})