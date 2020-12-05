const title = document.querySelector('.title')
const register = document.getElementById('register')
const login = document.querySelector('#login')
const editForm = document.querySelector('#edit-user')
const errorFeedback = document.querySelector('.error')
const pageSwitch = document.querySelector('.reg-log-toggle')
let myToken = ''

pageSwitch.addEventListener('click', (event) => {
    if (!login.style.display || login.style.display === 'none') {
        register.style.display = 'none'
        title.innerHTML = 'LOGIN'
        login.style.display = 'flex'
        pageSwitch.innerText = 'Go to Register'
    } else {
        login.style.display = 'none'
        title.innerHTML = 'REGISTER'
        register.style.display = 'flex'
        pageSwitch.innerText = 'Go to Login'
    }
})

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
            errorFeedback.innerText = ''
            register.style.display = 'none'
            login.style.display = 'flex'
            title.innerHTML = 'LOGIN'
        })

    } catch (error) {
        errorFeedback.innerText = error.message
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
                errorFeedback.innerText = ''
                pageSwitch.style.display = 'none'
                title.innerHTML = 'Welcome back ' + user.name

                const div = document.createElement('div')
                const ul = document.createElement('ul')
                const li1 = document.createElement('li')
                li1.innerText = 'Name: ' + user.name
                const li2 = document.createElement('li')
                li2.innerText = 'Surname: ' + user.surname
                ul.appendChild(li1)
                ul.appendChild(li2)
                div.appendChild(ul)
                document.querySelector('body').appendChild(div)

                editForm.style.display = 'flex' // now we show edit user form, new addEventListener
            })
        })
    } catch (error) {
        errorFeedback.innerText = error.message
    }
})

editForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const address = editForm['address'].value
    const gender = editForm['gender'].value
    const age = editForm['age'].value

    try {
        editUser(myToken, address, gender, age, (error) => {
            if (error) return errorFeedback.innerText = error
            errorFeedback.innerText = ''

            retrieveUser(myToken, (error, user) => {
                if (error) return errorFeedback.innerText = error

                const div = document.createElement('div')
                const ul = document.createElement('ul')
                const li1 = document.createElement('li')
                li1.innerText = 'Address: ' + user.address
                const li2 = document.createElement('li')
                li2.innerText = 'Gender: ' + user.gender
                const li3 = document.createElement('li')
                li3.innerText = 'Age: ' + user.age
                ul.appendChild(li1)
                ul.appendChild(li2)
                ul.appendChild(li3)
                div.appendChild(ul)
                document.querySelector('body').appendChild(div)

            })
        })

    } catch (error) {
        errorFeedback.innerText = error.message
    }
})






