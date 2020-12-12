import call from './utils/call'

function updateAvatar(token, avatarUrl, callback) {
    if (!token) throw new TypeError('you don\'t have access!')
    if (!avatarUrl) throw new TypeError('url is required')

    const method = 'PATCH'
    const url = 'https://b00tc4mp.herokuapp.com/api/v2/users/'
    const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
    const body = JSON.stringify({ avatar: avatarUrl })


    call(method, url, headers, body, (status, res) => {
        if (status === 204) {
            callback()
        } else {
            callback(JSON.parse(res).error)
        }
    }
    )
}

export default updateAvatar