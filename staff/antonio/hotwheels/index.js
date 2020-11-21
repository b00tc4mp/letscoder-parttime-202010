var searchBar = document.querySelector('#search');
var carsContainer = document.querySelector('.cars-container');

searchBar.addEventListener("submit", function (event) {
    event.preventDefault();
    var query = searchBar["search__item"].value;
    var result = [];

    var method = "GET";
    var url = `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`;
    var headers = { "Content-type": "application/json" };
    var body = undefined;


    call(method, url, headers, body, function (status, response) {
        if (status === 200) {
            result = JSON.parse(response);
            showCars(result);

        }

    }
    );
})
function showCars(array) {
    array.forEach(function (car) {
        var div = document.createElement("div");
        div.classList = "car";
        div.innerHTML = `
        <div>${car.id}</div>
        <img
            src="${car.thumbnail}"
            />
        <div>${car.name}</div>
        <div>${car.price}</div>`;
        carsContainer.appendChild(div);
    })
}
