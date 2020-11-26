var users =[]
console.log ("edit user test")
console.log ("should edit valid user details-address,gender,age")

let address = 'testing-u' + Math.random()
let age = 'testing-p' + Math.random()
let gender = 'testing-n' + Math.random()


editUser (address, gender, age, function (error) {
    console.assert (!error === undefined, "error should not exist") 
    
