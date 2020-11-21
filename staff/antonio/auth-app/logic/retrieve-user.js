function retrieveUser(token, callback) {
    if (!token) throw new TypeError('bad request')

    const method = 'GET'
    const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/'
    const headers = { Authorization: `Bearer ${token}`, 'Content-type': 'application/json' }
    const body = undefined

    call(method, url, headers, body, function (status, res) {
        if (status === 200) {
            const user = JSON.parse(res)

            callback(null, user)

        } else {
            const { error } = JSON.parse(error)
            callback(error)
        }

    })


}