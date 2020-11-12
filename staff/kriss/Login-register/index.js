/* function to register a user, test if the username is not already taken, and the password is at least 5 charactes */
var objPeople = [
{
    username: "Kriss",
    password: 12345
},
{
    username: "John",
    password: 34567
},
{
    username: "Mark",
    password: 56789
}

]
// login functionality
 
function Login() {
    // retrieve  data input from the form
    var username = document.getElementById ("username").value 
    var password =document.getElementById ("password").value
    for (i=0; i < objPeople[i].username && password == objPeople[i].password) {  // loop through the users
        console.log (username + " is looged in ")
        return
    }
}

console.log("incorrect username or password") // error if username or password do not match


function registerUser() {

    var registerUser = document.getElementById ("newUser").value
    var registerPassword = document.getElementById ("newPassword").value
    var newUser = {
        username:registerUser,
        pasword: registerPassword
    }

    for (i=0; i < objPeople.length; i++) {
        if (registerUser == objPeople[i].username) {
            alert ("that username is already i use please choose another")
            return
        } else if (registerPassword.length < 5) {
            alert ("that password is too short")
            return
        }
    }

    objPeople.push(newUser)
    console.log(objPeople)
}

