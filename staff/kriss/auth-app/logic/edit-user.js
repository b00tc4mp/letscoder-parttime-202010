function editUser (address, gender, age, callback)  { // ?? What type of parametres do we need? How to edit user?

    if (!ddress) throw TypeError ("full address is required")
    if (! gernder) throw TypeError ("gender must be specified")
    if (age < 18) throw TypeError ("You must be older than 18")

    const method = "POST"                    // not sure what method should I use (GET?)
    const url = "https://b00tc4mp.herokuapp.com/api/v2/users/ "
    const headers = { "Content-Type": "application/json"}
    const body =JSON.stringify ({address, gender, age })

    call (method, url, headers,body, (status, res) => {

        if (status ===201) {                        // the same not sure the number (Insomnia showing conflict)
            const user = JSON.parse (res)
             callback(user) 
        } else {
            const {error} = JSON.parse (error)
            callback(error)
    
        }
    })
}