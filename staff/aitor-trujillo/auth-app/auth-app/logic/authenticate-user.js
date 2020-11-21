function authenticateUser(email, password) {
    if (!email) throw new TypeError('email is required')
    if (!password) throw new TypeError('password is required')

    var user = users.find(function (user) {
        return user.email === email
    })

    if (!user) throw new Error(`user with email ${email} does not exist`)

    if (user.password !== password) throw new Error('password wrong')

    return user.id * 213
}