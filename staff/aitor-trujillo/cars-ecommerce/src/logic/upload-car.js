import call from './utils/call'

function uploadCar(token, thumbnail, name, price, carsArray, callback) {
    if (!token) throw new Error('invalid token')
    if (!thumbnail || !name || !price) throw new Error('all inputs are required')

    const id = carsArray.length ? Number(carsArray[carsArray.length - 1].id) + 1 : 100

    carsArray.push({ thumbnail, name, price: Number(price), id: id.toString() })

    const method = 'PATCH'
    const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/'
    const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
    const body = JSON.stringify({ myCars: carsArray })

    call(method, url, headers, body, (status, res) => {
        if (status === 204) {
            callback()
        } else {
            callback(JSON.parse(res).error)
        }
    })
}

export default uploadCar