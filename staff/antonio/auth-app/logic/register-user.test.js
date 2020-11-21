console.log('register user test')
console.log('should register a valid user')

const username = 'testing-u' + Math.random()
const password = 'testing-p' + Math.random()
const name = 'testing-n' + Math.random()
const surname = 'testing-s' + Math.random()

registerUser(username, password, name, surname, function (error) {

    console.assert(error === undefined, 'error should not exist')
})






