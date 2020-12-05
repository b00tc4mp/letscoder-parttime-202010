console.log('retrieveUser TEST')

function beforeEach(callback) {

    let username = 'testing-u' + Math.random()
    let password = 'testing-p' + Math.random()
    let name = 'testing-n' + Math.random()
    let surname = 'testing-s' + Math.random()

    let randomUser = {
        username, password, name, surname
    }

    const method = 'POST'
    const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/'
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify(randomUser)

    call(method, url, headers, body, (status, res) => {
        if (status === 201) {
            const method = 'POST'
            const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/auth'
            const headers = { 'Content-Type': 'application/json' }
            const body = JSON.stringify({ username, password })

            call(method, url, headers, body, (status, res) => {
                if (status === 200) {
                    const { token } = JSON.parse(res)
                    callback(randomUser, token)
                }
                else console.error('beforeEach auth failed')
            })
        }
        else console.error('beforeEach register failed')
    })
}




console.log('should retrieve user data') // happy path

beforeEach(({ username, name, surname }, token) => {

    retrieveUser(token, (error, user) => {
        if (error) console.assert(!error, 'error should not exist')

        console.assert(user.name === name, 'should retrieve user name')
        console.assert(user.surname === surname, 'should retrieve user surname')
        console.assert(user.username === username, 'should retrieve user username')
    })
})
