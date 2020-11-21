const title = document.querySelector('.title')
const register = document.getElementById('register')
const login = document.querySelector('#login')
const editUser = document.querySelector('#edit-user')
const errorFeedback = document.querySelector('.error')
const myToken = ''

register.addEventListener('submit', function (event) {
    event.preventDefault()
    const name = register['name'].value
    const surname = register['surname'].value
    const username = register['username-register'].value
    const password = register['password-register'].value

    try {
        registerUser(username, password, name, surname, function (error) {
            if (error) return errorFeedback.innerText = error

            alert('User Created!')
            register.style.display = 'none'
            login.style.display = 'flex'
            title.innerHTML = 'LOGIN'
        })

    } catch (error) {
        errorFeedback.innerText = error
    }
})

login.addEventListener('submit', function (event) {
    event.preventDefault()

    const username = login['username-login'].value
    const password = login['password-login'].value

    try {
        authenticateUser(username, password, function (error, token) {
            if (error) return errorFeedback.innerText = error

            myToken = token

            retrieveUser(token, function (error, user) {
                if (error) return errorFeedback.innerText = error


                login.style.display = 'none'
                title.innerHTML = 'Welcome back ' + user.name

                const div = document.createElement('div')
                const ul = document.createElement('ul')
                const li1 = document.createElement('li')
                li1.innerText = 'Name: ' + user.name
                var li2 = document.createElement('li')
                li2.innerText = 'Surname: ' + user.surname
                ul.appendChild(li1)
                ul.appendChild(li2)
                div.appendChild(ul)
                document.querySelector('body').appendChild(div)

                editUser.style.display = 'flex' // now we show edit user form, new addEventListener
            })
        })
    } catch (error) {
        var errorBanner = document.createElement('div')
        errorBanner.innerText = error.message
        errorBanner.className = 'error'
        login.appendChild(errorBanner)
    }
})

editUser.addEventListener('submit', (event) => {
    event.preventDefault()

    const address = editUser['address'].value
    const gender = editUser['gender'].value
    const age = editUser['age'].value

    try {
        editUser(address, gender, age, (error) => {

            // tip: we will need to call again retrieve User
            retrieveUser(

                // print to body the new info of the user with dom
            )
        })

    } catch (error) {

    }
})






