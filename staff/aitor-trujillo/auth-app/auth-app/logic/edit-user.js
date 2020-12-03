function editUser(token, address, gender, age, callback) {
    if (!token) throw new TypeError('you don\'t have access!')
    if (!address) throw new TypeError('address is required')
    if (!gender) throw new TypeError('gender is required')
    if (!age) throw new TypeError('age is required')

    call('PATCH',
        'https://b00tc4mp.herokuapp.com/api/v2/users/',
        { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        JSON.stringify({ address, gender, age }),
        (status, res) => {
            if (status === 204) {
                callback()
            } else {
                callback(JSON.parse(res).error)
            }
        }
    )


}