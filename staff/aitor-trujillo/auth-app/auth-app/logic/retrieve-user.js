function retrieveUser(token) {
    if (!token) throw new TypeError('bad request')

    var userId = token / 213

    var user = users.find(function (user) {
        return user.id === userId
    })

    var result = {}

    result.name = user.name
    result.surname = user.surname
    result.email = user.email

    return result
}