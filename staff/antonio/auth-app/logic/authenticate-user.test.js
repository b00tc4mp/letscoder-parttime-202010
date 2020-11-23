console.log('authenticate-user test')
console.log('should athenticate a valid user')

const username = 'testing-u' + Math.random()
const password = 'testing-p' + Math.random()

authenticateUser(username, password, function (error) {


    const method = 'POST'
    const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/auth'
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify({ username, password })

    call(method, url, headers, body, (status, res) => {

        if (status === 200) {
            const { token } = JSON.parse(res)
            console.assert(token.length > 0, 'token should exist for registered user')
            console.assert(typeof token === 'string', 'token should be string')


        } else {
            const { error } = JSON.parse(res)
            console.assert(!error, 'error should not exist')
            callback(error)

        }
    })
})

