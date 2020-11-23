console.log('retrieve user test')
console.log('should enter a valid token')

const token = 'testing-t' + Math.random()



function retrieveUser(token, function (error) {

    const method = 'GET'
    const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/'
    const headers = { Authorization: `Bearer ${token}`, 'Content-type': 'application/json' }
    const body = undefined

    call(method, url, headers, body, function (status, res) {
        if (status === 200) {
            const user = JSON.parse(res)
            console.assert(user.length > 0, 'user should exist')

            callback(null, user)

        } else {
            const { error } = JSON.parse(error)
            console.assert(!error, 'error should not exist')
            callback(error)
        }

    })


}
console.log()