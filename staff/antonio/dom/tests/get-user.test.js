var users = []

function getUser(token) {
    if (!token) throw new TypeError('bad request')

    var userId = token / 213

    var user = users.find(function (user) {
        return user.id === userID
    })

    var result = {}

    result.name = user.name
    result.surname = user.surname
    result.email = user.email

    return result
}
console.log('test getUser')
console.log('should return a valid email,')
var users = []

var token = authenticateUser(email, password);
var userId = Math.random() * Math.floor(Math.random() * 10);
var email = Math.random() + "@mail.com";
var password = `${Math.random()}`;

users = [
    {
        email,
        password,
        id: userId,
    },
];
console.assert(getUser(token) === user.email, 'should return a valid email');

console.log('should return a valid userId,')
console.assert(getUser(token) === user.id, 'should return a valid user.id')

console.log('should deny access to user if invalid token')
var users = []

var token = authenticateUser(email, password);
var fail = ''
var result = []

try {
    getUser(undefined) = result;

} catch (error) {
    fail === error.message;
}
console.assert(fail.length > 0, 'fail should exist')
console.assert(fail === 'token is required', 'should throw token missing error')
console.assert(result.length === 0)