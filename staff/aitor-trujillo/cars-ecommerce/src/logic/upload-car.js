import call from './utils/call'

function uploadCar(token, carsArray, callback) {

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