console.log ("edit user test")   //Title


beforeEach (callback) {         // checking if user have been registered (authenticate)
    let user = "testing-u" + Math.random()
    let password = "testing-p" + Math.random()

    const method = "POST"
    const url = "https://b00tc4mp.herokuapp.com/api/v2/users/"
    const headers = { "Content-Type": "application/json" }
    const body = JSON.stringify({ username, password })

    call(method, url, headers, body, (status, res) => {  //trying to get a token

        if (status === 201) {
            const { token } = JSON.parse(res)

            callback(token)
        } else
        console.error ("beforeEach register function has failed")  
    })
}        
    


console.log ("should edit valid user details-address,gender,age") // happy path        

let address = 'testing-ad' + Math.random()
let age = 'testing-a' + Math.random()
let gender = 'testing-g' + Math.random()

beforeEach (token)  {

    editUser (token, gender, address, age (error)) => {
        if (error) console.assert (!error, "error should not exist") // check out if the data is correct (authentification)

     const method = "GET"
     const url = "https://b00tc4mp.herokuapp.com/api/v2/users/"
     const headers = {Authorisation: `Bearer $ {token}`, "Content- Type": "apploication/json"}
     const body = undefined 

        call (method, url,headers,body, (status, res)) => {
            if (status === 200) {
                const user = JSON.parse (res)
                console.assert (address, "address should exist")
                console.assert (gender, "gender should exist")
                console.assert (age, "age should exist")
            
            
        
            }else {const {error} = JSON.parse(res)
            callback (user)
        
        }) 
        console.assert (user.address === address, "should add address to existing user")
    })
    
}

