console.log('authenticateUser TEST')

function beforeEach(callback) {
    let username = 'testing-u' + Math.random()
    let password = 'testing-p' + Math.random()

    let method = 'POST'
    let url = 'https://b00tc4mp.herokuapp.com/api/v2/users/'
    let headers = { 'Content-Type': 'application/json' }
    let body = JSON.stringify({ username, password })

    call(method, url, headers, body, (status, res) => {
        if (status === 201) {

            callback(username, password)

        } else {
            console.assert(status !== 201, 'registering user before testing failed')
        }
    })
}

console.log('should return a valid token for a authenticated user')// happy path

beforeEach((username, password) => {

    authenticateUser(username, password, (error, token) => {
        if (error) console.assert(!error, 'should not reach this point')

        console.assert(token, 'token should exist')
        console.assert(token.length > 0, 'token should have length')
        console.assert(typeof token === 'string', 'token should be a string')

        const method = 'GET'
        const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/'
        const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }

        call(method, url, headers, undefined, (status, res) => {
            const user = JSON.parse(res)

            console.assert(status === 200, 'status in token testing should be 200')
            console.assert(typeof user === 'object', 'res from token testing should be an object')
            console.assert(user.username === username, 'res from token testing should contain username as original username')
        })
    })
})

console.log('should fail when a user types wrong the password') // unhappy path


beforeEach((username, password) => {

    password = 'wrongpassword123'

    authenticateUser(username, password, (error, token) => {
        if (token) console.assert(!token, 'token should not exist for invalid password')

        console.assert(error, 'error should exist for invalid password')
        console.assert(typeof error === 'string', 'error should be a string')
        console.assert(error.length > 0, 'error should have length')
        console.assert(error === "username and/or password wrong", 'error should be wrong input error')
    })
})

