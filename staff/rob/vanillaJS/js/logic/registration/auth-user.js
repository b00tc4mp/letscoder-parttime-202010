 function auth_user(user) {

     ObjectValidator.prototype.validate(user, User);

     return ((async() => {

         const response = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users/auth/', {
             headers: {
                 'Content-type': 'application/json'
             },
             method: 'POST',
             body: JSON.stringify(user)
         });
         const result = await response.json();
         if (response.ok)
             return result.token;
         else return '';




     })());

 }