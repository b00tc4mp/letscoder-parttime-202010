function registerUser(username, password, name, surname, callback) {
    if (!username) throw new TypeError('email is required')
    if (!password) throw new TypeError('password is required')
    if (password.length < 3) throw new TypeError('password must be at least 3 caracters')

    const method = 'POST'
    const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/'
    const headers = { 'Content-Type': 'application/json' }
    const body = {
        username, password, name, surname
    }

    call(method, url, headers, JSON.stringify(body), function (status, res) {
        if (status === 201) {

            callback()
        } else {
            const { error } = JSON.parse(res)
            callback(error)
        }
    })

}