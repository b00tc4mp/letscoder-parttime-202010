var body = document.getElementsByTagName('body')[0]

// Creating title
var h1 = document.createElement('h1')
h1.innerText = 'REGISTER'
body.appendChild(h1)
h1.className = 'hello'
h1.className += ' title'

// Creating section for Form
var section = document.createElement('section')
body.appendChild(section)
section.className = 'container'

// Adding form with innerHTML

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

var form = document.querySelector('form'


form.addEventListener('submit', function (event) {
    event.preventDefault()

    var name = form['name'].value
    var surname = form['surname'].value
    var email = form['email'].value
    var password = form['password'].value
    console.log(name, surname, email, password)
}