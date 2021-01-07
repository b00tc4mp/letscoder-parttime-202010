import authenticateUser from './authenticate-user'

describe('authenticateUser TEST', () => {
    let username;
    let password;

    beforeEach(() => {
        username = 'testing-u' + Math.random() // generate username & password
        password = 'testing-p' + Math.random()

        let method = 'POST'
        let url = 'https://b00tc4mp.herokuapp.com/api/v2/users/'
        let headers = { 'Content-Type': 'application/json' }
        let body = JSON.stringify({ username, password })

        call(method, url, headers, body, (status, res) => { // call api to register random user created

            expect(status === 201).toBeTruthy()

        })
    })

    test('should return a valid token for a authenticated user', () => { // HAPPY ASYNC

        authenticateUser(username, password, (error, token) => {
            expect(error).toBeUndefined()

            expect(token).toBeDefined()
            expect(token).toBeInstanceOf(String)
            expect(token).toHaveLength(172)

            const method = 'GET'
            const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/'
            const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }

            call(method, url, headers, undefined, (status, res) => {
                const user = JSON.parse(res)

                expect(status).toBe(200)
                expect(user).toBeInstanceOf(Object)
                expect(user.username).toBe(username)
            })
        })
    })

    test('should fail when a user types wrong the password', () => { // UNHAPPY ASYNC
        password = 'wrongpassword123'

        authenticateUser(username, password, (error, token) => {
            expect(token).toBeUndefined()

            expect(error).toBeDefined()
            expect(error).toBeInstanceOf(String)
            expect(error).toBe("username and/or password wrong")
        })
    })

    test('should fail if username is undefined', () => {

        expect(() => {
            authenticateUser(undefined, password)
        }).toThrow()

        expect(() => {
            authenticateUser(undefined, password)
        }).toThrowError('username is required')
    })
})

