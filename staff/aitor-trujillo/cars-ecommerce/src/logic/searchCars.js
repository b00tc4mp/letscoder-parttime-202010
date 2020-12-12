import call from './utils/call'

function searchCars(query, callback) {
    if (!(typeof query === 'string')) throw new TypeError(`${query} is not a valid query`)
    if (!query.length) return

    const method = 'GET'
    const url = `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`
    const headers = { 'Content-Type': 'application/json' }

    call(method, url, headers, undefined, (status, res) => {
        if (status === 200) {
            callback(null, JSON.parse(res))
        } else {
            const { error } = JSON.parse(res)
            callback(error)
        }
    })
}

export default searchCars