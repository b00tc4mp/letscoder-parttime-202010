async function Login_methods() {
    /////

    console.log('Test - Insert User.....')
    let user = new UserAttr("1", "1", "1", "1", "r@e.es");

    let usera = new User(user.username, user.password);



    let r1 = await insertUser(user);
    let r2 = await authUser(usera);
    let r3 = await getUser(usera, r2);


    r3.t.username == '1' ? console.log('(OK) Test - Insert User> ' + user.username) : console.assert(r3.t.username == '1', '(KO) Test Insert fails')



    ///
    console.log('Test - Update User...')

    user = new UserAttr("2", "2", "1", "1", "re@es");


    let r4 = await insertUser(user);
    let r5 = await authUser(usera);
    let r6 = await getUser(usera, r5);

    r6.t.email == 'r@e.es' ? console.log('(OK) Test - Update User> ' + user.username) : console.assert(r6.t.email == '2', '(KO) Test Update fails')


    //
    console.log('Test - Delete User...');
    let r7 = await deleteUser(usera);
    let r8 = await authUser(usera);


    r8 === undefined ? console.log('(OK)Test - Delete User > ' + user.username) : console.assert(!r8, '(KO) Test user deleted fails');
}