function editUser(adress, gender, age, callback) {
    if (!adress) throw new TypeError('adress is required')
    if (!gender) throw new TypeError('gender is required')
    if (!age) throw new TypeError('age is required')

    const method = 'PATCH'
    const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/'
    const headers = { 'Content-Type': 'application/json' }
    const body = {
        adress, gender, age
    }

    call(method, url, headers, JSON.stringify(body), function (status, res) {

        if (status === 200) {

            callback()
        } else {
            const { error } = JSON.parse(res)
            callback(error)
        }
    })

}

