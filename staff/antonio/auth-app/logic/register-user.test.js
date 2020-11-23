console.log('register user test')
console.log('should register a valid user')

const username = 'testing-u' + Math.random()
const password = 'testing-p' + Math.random()
const name = 'testing-n' + Math.random()
const surname = 'testing-s' + Math.random()


registerUser(username, password, name, surname, function (error) {

    console.assert(error === undefined, 'error should not exist')

    const method = 'POST'
    const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/auth'
    const headers = { 'Content-Type': 'application/json' }
    const body = {
        username, password
    }

    call(method, url, headers, JSON.stringify(body), function (status, res) {
        if (status === 201) {
            const { token } = JSON.parse(res)
            console.assert(token.length > 0, 'token should exist for registered user')
            console.assert(typeof token === 'string', 'token should be string')
        } else {
            const { error } = JSON.parse(res)
            console.assert(!error, 'error should not exist')
        }
    })
})

console.log('should not register already registered user') // unhappy path


username = 'testing-u' + Math.random()
password = 'testing-p' + Math.random()

const method = 'POST'
const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/'
const headers = { 'Content-Type': 'application/json' }
const body = {
    username, password
}

call(method, url, headers, JSON.stringify(body), function (status, res) {
    if (status === 201) {
        const password = 'testing-p' + Math.random()
        const name = 'testing-n' + Math.random()
        const surname = 'testing-s' + Math.random()

        registerUser(username, password, name, surname, function (error) {
            console.assert(error.length > 0, 'error should exist')
            console.assert(error === `user with username "${username}" already exists`, 'should show existing user error')

        })
    } else {
        const { error } = JSON.parse(res)
        console.assert(!error, 'error should not exist')
    }
})








