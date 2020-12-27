import call from './utils/call'

function retrieveAllCars(callback) {

    const method = 'GET'
    const url = 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=*'
    const headers = { 'Content-Type': 'application/json' }
    const body = undefined

    call(method, url, headers, body, (status, res) => {
        if (status === 200) callback(null, JSON.parse(res))
        else {
            const { error } = JSON.parse(res)
            callback(error)
        }
    })
}

export default retrieveAllCars