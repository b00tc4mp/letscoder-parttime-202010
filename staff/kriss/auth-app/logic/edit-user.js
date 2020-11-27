function editUser (token, address, gender, age, callback)  { 

    if (!address) throw TypeError ("full address is required")
    if (!gender) throw TypeError ("gender must be specified")
    if (!age) throw TypeError ("You must be older than 18")

    const method = "PATCH"                    
    const url = "https://b00tc4mp.herokuapp.com/api/v2/users/ "
    const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
    const body =JSON.stringify ({address, gender, age })
    

    call (method, url, headers,body, (status, res) => {

        if (status ===204) {                        
            
             callback() 
        } else {
            const {error} = JSON.parse (res)
            callback(error)
    
        }
    })
}