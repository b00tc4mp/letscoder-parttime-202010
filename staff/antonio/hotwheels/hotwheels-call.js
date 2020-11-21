var carsContainer = document.getElementsByClassName("cars-container")[0]

var method = 'GET'
var url = 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=mercedes'
var headers = { 'Content-Type': 'application/json' }
var body = undefined


call(method, url, headers, body, function (status, response) {
    if (status === 200) {
        var result = JSON.parse(response)
        console.log('inside callback' + result)
        printCars(result)
    }
})

function printCars(cars) {
    cars.forEach(function (car) {
        var div = document.createElement("div")
        div.innerHTML = `<h1>${car.name}</h1>
    <ul>
        <li>id: ${car.id}</li>
        <li><img src="${car.thumbnail}"> </li>
        <li>price : ${car.price} € </li>
    </ul>
    `
        carsContainer.appendChild(div)
    })


}

