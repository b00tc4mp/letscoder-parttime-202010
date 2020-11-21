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

// login.addEventListener('submit', function (event) {
//     event.preventDefault()

//     var email = login['username-login'].value
//     var password = login['password-login'].value

//     try {
//         var token = authenticateUser(email, password)

//         login.style.display = 'none'

//         // Get the user info (use getUser logic)

//         // Display the user info with append childs
//         title.innerText = 'Hello ' // + user.name

//         var div = document.createElement('div')
//         var ul = document.createElement('ul')
//         var li1 = document.createElement('li')
//         li1.innerText = 'Name: ' //+ user.name
//         var li2 = document.createElement('li')
//         li2.innerText = 'Surname: ' //+ user.surname
//         // email (new li with innerText)
//         ul.appendChild(li1)
//         ul.appendChild(li2)
//         // new ul.appendChild with email
//         div.appendChild(ul)
//         document.querySelector('body').appendChild(div)


//     } catch (error) {
//         var errorBanner = document.createElement('div')
//         errorBanner.innerText = error.message
//         errorBanner.className = 'error'
//         login.appendChild(errorBanner)
//     }


// })






