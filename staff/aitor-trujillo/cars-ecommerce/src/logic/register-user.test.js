import registerUser from './register-user'
import call from './utils/call'

describe('registerUser TEST', () => {
    // BEFORE EACH if needed
    test('should call callback on valid user', () => { // HAPPY

        let username = 'testing-u' + Math.random()
        let password = 'testing-p' + Math.random()
        let name = 'testing-n' + Math.random()
        let surname = 'testing-s' + Math.random()

        const callback = jest.fn()
        registerUser(username, password, name, surname, callback)

        setTimeout(() => {
            expect(callback).toHaveBeenCalled()
        }, 1000)
    })

    test('should register user for a valid user data', () => { // HAPPY

        let username = 'testing-u' + Math.random()
        let password = 'testing-p' + Math.random()
        let name = 'testing-n' + Math.random()
        let surname = 'testing-s' + Math.random()

        registerUser(username, password, name, surname, function (error) {

            expect(error).toBeUndefined()

            const method = 'POST'
            const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/auth'
            const headers = { 'Content-Type': 'application/json' }
            const body = {
                username, password
            }

            call(method, url, headers, JSON.stringify(body), function (status, res) {
                if (status === 201) {
                    const { token } = JSON.parse(res)
                    expect(token).toBeDefined()
                    expect(token).toBeInstanceOf(String)
                    expect(token).toHaveLength(172)
                } else {
                    const { error } = JSON.parse(res)
                    expect(error).toBeUndefined()
                }
            })
        })
    })

    test('should not register already registered user', () => { // UNHAPPY ASYNC

        const username = 'testing-u' + Math.random()
        const password = 'testing-p' + Math.random()

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
                    expect(error).toBeDefined()
                    expect(error).toBe(`user with username "${username}" already exists`)

                })
            } else {
                const { error } = JSON.parse(res)
                expect(error).toBeUndefined()
            }
        })
    })

    test('should fail if username is undefined', () => { // UNHAPPY SYNC
        const username = undefined
        const password = 'testing-p' + Math.random()
        const name = 'testing-n' + Math.random()
        const surname = 'testing-s' + Math.random()

        expect(() => {
            registerUser(username, password, name, surname)
        }).toThrow()

        expect(() => {
            registerUser(username, password, name, surname)
        }).toThrowError('username is required')
    })

    test('should fail if password is undefined', () => { // UNHAPPY SYNC
        const username = 'testing-u' + Math.random()
        const password = undefined
        const name = 'testing-n' + Math.random()
        const surname = 'testing-s' + Math.random()

        expect(() => {
            registerUser(username, password, name, surname)
        }).toThrow()

        expect(() => {
            registerUser(username, password, name, surname)
        }).toThrowError('password is required')
    })

    test('should fail if password length is less than 3', () => { // UNHAPPY SYNC
        const username = 'testing-u' + Math.random()
        const password = 'ab'
        const name = 'testing-n' + Math.random()
        const surname = 'testing-s' + Math.random()

        expect(() => {
            registerUser(username, password, name, surname)
        }).toThrow()

        expect(() => {
            registerUser(username, password, name, surname)
        }).toThrowError('password must be at least 3 caracters')
    })

})     
