import call from './utils/call'

function deleteCar(token, id, carsArray, callback) {
    if (!token) throw new Error('invalid token')
    if (typeof id !== 'string') throw new Error('id must be a string')

    const carIndex = carsArray.findIndex(car => car.id === id)

    carsArray.splice(carIndex, 1)

    const method = 'PATCH'
    const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/'
    const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
    const body = JSON.stringify({ myCars: carsArray })

    call(method, url, headers, body, (status, res) => {
        if (status === 204) {
            callback()
        } else {
            const error = JSON.parse(res)
            callback(error)
        }
    })
}

export default deleteCar