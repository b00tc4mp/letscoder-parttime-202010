console.log('retrieveUser TEST')

function beforeEach(callback) {
    let username = 'testing-u' + Math.random()
    let password = 'testing-p' + Math.random()

    const method = 'POST'
    const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/'
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify({ username, password })

    call(method, url, headers, body, (error) => {
        if (error) console.assert(!error, 'beforeEach register failed')
        else {
            const method = 'POST'
            const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/auth'
            const headers = { 'Content-Type': 'application/json' }
            const body = JSON.stringify({ username, password })

            call(method, url, headers, body, (error, token) => {
                if (error) console.assert(!error, 'beforeEach auth failed')
                else callback(token)
            })
        }
    })

    // we need to call authenticate user
}

console.log('should retrieve user data') // happy path

retrieveUser(token)