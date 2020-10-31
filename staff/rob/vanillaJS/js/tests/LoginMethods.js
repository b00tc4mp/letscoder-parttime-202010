async function Login_methods() {
    /////

    console.log('Test - Insert User.....')
    let user = {
        fistname: "1",
        lastname: "1",
        username: "1",
        password: "1",
        email: "",
    };
    let usera = {
        username: user.username,
        password: user.password
    };


    try {
        await authUser(3);
    } catch (error) {
        console.assert(error.message == 'No es un objeto', 'KO Test Insert fails- Error type')
    }

    try {
        await authUser(user);
    } catch (error) {
        console.assert(error.message == 'Objeto con diferentes propiedades', 'KO Test Insert fails- Error type')
    }



    let r1 = await insertUser(user);
    let r2 = await authUser(usera);
    let r3 = await getUser(user, r2);


    r3.t.username == '1' ? console.log('(OK) Test - Insert User> ' + user.username) : console.assert(r3.t.username == '1', '(KO) Test Insert fails')



    ///
    console.log('Test - Update User...')

    user = {
        fistname: "2",
        lastname: "2",
        username: "1",
        password: "1",
        email: "2",
    };
    usera = {
        username: user.username,
        password: user.password
    };

    let r4 = await insertUser(user);
    let r5 = await authUser(usera);
    let r6 = await getUser(user, r5);

    r6.t.email == '2' ? console.log('(OK) Test - Update User> ' + user.username) : console.assert(r6.t.email == '2', '(KO) Test Update fails')


    //
    console.log('Test - Delete User...')
    let r7 = await deleteUser(user);
    let r8 = await authUser(usera);


    r8 === undefined ? console.log('(OK)Test - Delete User > ' + user.username) : console.assert(!r8, '(KO) Test user deleted fails');
}