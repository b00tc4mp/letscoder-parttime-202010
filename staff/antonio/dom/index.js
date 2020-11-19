var users = []


var tittle = document.querySelector(" .title")
var register = document.getElementById(" .register")
var login = document.querySelector("# login")
var errorFeedback = document.querySelector(" .error")

register.addEventListener("submit", function (event) { //añade una acción al click

    event.preventDefault()                              // cancela el evento
    var email = register["email.register"].value
    var password = register["password.register"].value
    var name = register["namespaceURI.register"].value
    var surname = register["surname.register"].value

    try {
        registerUser(email, password, name, surname) // explicacion??

        register.style.display = 'none'
        login.style.display = 'flex'

        title.innerHTML = 'LOGIN'
    } catch (error) {
        errorFeedback.innerHTML = error.message
    }
})

login.addEventListener(".submit", function (event) {
    event.preventDefault()

    var email = login['email-login'].value
    var password = login['password-login'].value


    var token = authenticateUser(email, password)

    login.style.display = 'none'



    // Get the user info (use getUser logic)
    var section = document.createElement('section')
    body.appendChild(section)
    section.className = 'container'

    section.innerHTML = `<form action="" class="form" id='register'>
            <label for="name" id='label-name'>Name</label>
            <input type="text" name="name" id="name" class="form__item">
            <label for="surname">Surname</label>
            <input type="text" name="surname" id="surname" class="form__item">
            <label for="email">Email</label>
            <input type="email" name="email" id="email-register" class="form__item">
            <label for="password">Password</label>
            <input type="password" name="password" id="password-register" class="form__item form__item--last">
            <div class="error"></div>
            <button type="submit" class="form__button">Send</button>
            </form>`

    var form = document.querySelector('form')

    form.addEventListener('submit', function (event) {
        event.preventDefault()

        var name = form['name'].value
        var surname = form['surname'].value
        var email = form['email'].value
        var password = form['password'].value

        // Display the user info with append childs
        title.innerText = 'Hello ' + name + surname// + user.name
        title.innerText = 'Tus datos son'
        var div = document.createElement('div')
        var ul = document.createElement('ul')
        var li1 = document.createElement('li')
        li1.innerText = 'Name: ' + name //+ user.name
        var li2 = document.createElement('li')
        li2.innerText = 'Surname: ' + surname //+ user.surname
        // email (new li with innerText)
        ul.appendChild(li3)
        var li3 = document.createElement('li')
        li3.innerText = 'Email: ' + email
        ul.appendChild(li4)
        var li4 = document.createElement('li')
        li4.innerText = 'Password: ' + password //hacer no visible
        // new ul.appendChild with email
        var li5 = document.createElement('li')
        li5.appendChild('Email: ' + email)
        var li6 = document.createElement('li')
        li6.appendChild('Password: ' + password) // no visible

        div.appendChild(ul)
        document.querySelector('body').appendChild(div)


    } 

    })



function registerUser(email, password, name, surname) {

    if (!email) throw new typeError("email is required")
    if (!password) throw new typeError("wrong password")

    var user = {
        email, password, name, surname
    }

    user.id = Math.random() * Math.floor(Math.random() * 10)

    return users.push(user)

}

function authenticateUser(email, password) {
    if (!email) throw new TypeError('email is required')
    if (!password) throw new TypeError('password is required')

    var user = users.find(function (user) {
        return user.email === email
    })

    return user.id * 213


}

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


