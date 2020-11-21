const title = document.querySelector('.title')
const register = document.getElementById('register')
const login = document.querySelector('#login')
const errorFeedback = document.querySelector('.error')

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
            retrieveUser(token, function (error, user) {
                if (error) return errorFeedback.innerText = error


                login.style.display = 'none'
                title.innerHTML = 'Welcome back' + user.name

                // Display the user info with append childs

                const div = document.createElement('div')
                const ul = document.createElement('ul')
                const li1 = document.createElement('li')
                li1.innerText = 'Name: ' + user.name
                var li2 = document.createElement('li')
                li2.innerText = 'Surname: ' + user.surname
                // email (new li with innerText)
                ul.appendChild(li1)
                ul.appendChild(li2)
                // new ul.appendChild with email
                div.appendChild(ul)
                document.querySelector('body').appendChild(div)

            })



        })





    } catch (error) {
        var errorBanner = document.createElement('div')
        errorBanner.innerText = error.message
        errorBanner.className = 'error'
        login.appendChild(errorBanner)
    }


})






