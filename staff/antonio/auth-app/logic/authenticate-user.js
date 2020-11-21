function authenticateUser(username, password, callback) {
    if (!username) throw new TypeError('username is required')
    if (!password) throw new TypeError('password is required')

    const method = 'POST'
    const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/auth'
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify({ username, password })

    call(method, url, headers, body, (status, res) => {

        if (status === 200) {
            const { token } = JSON.parse(res)

            callback(null, token)


        } else {
            const { error } = JSON.parse(res)
            callback(error)

        }
    })
}

