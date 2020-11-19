var body = document.getElementsByTagName('body')

var h1 = document.createElement('h1')
h1.innerText = 'Login'
body.appendChild(h1)

var section = document.createElement('section')
body.appendChild(section)
section.className = 'container'

section.innerHTML = ` <form action="" class="form" id='login'>
    <label for="email">Email</label>
    <input type="email" name="email" id="email-login" class="form__item">
    <label for="password">Password</label>
    <input type="password" name="password" id="password-login" class="form__item form__item--last">
    <div class="error"></div>
    <button type="submit" class="form__button">Send</button>
    </form>`

var form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    var name = form['email'].value
    var password = form['password'].value

    console.log(email, password)




})