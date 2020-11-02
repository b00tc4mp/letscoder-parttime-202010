async function Validator_methods() {
    /////

    console.log('Test - authUser Validators ...')
    let res = true;
    try {
        await authUser(3);
    } catch (error) {
        res = res && (error instanceof NullObjectError);
        console.assert((error instanceof NullObjectError), 'KO Test authUser - Error type : NullObjectError' + error.message)
    }

    try {
        await authUser(new UserAttr('1', '1', '1', '1', 're@es'));

    } catch (error) {
        res = res && (error instanceof InvalidOjectError);
        console.assert((error instanceof InvalidOjectError), 'KO Test authUser - Error type InvalidOjectError:' + error.message)
    }

    try {
        await insertUser(new UserAttr("2", "2", "1", "1", "re.es"));


    } catch (error) {
        res = res && (error instanceof InvalidOjectError);
        console.assert((error instanceof InvalidOjectError), 'KO Test authUser - Error type InvalidOjectError :' + error.message)
    }



    res ? console.log('(OK)Test - authUser Validators') : console.log('(KO)Test - authUser Validators => ')

    //

    console.log('Test - User insertUser User...')
    res = true;
    try {
        await insertUser(3);
    } catch (error) {
        res = res && (error instanceof NullObjectError);
        console.assert((error instanceof NullObjectError), 'KO Test insertUser - Error type : NullObjectError' + error.message)
    }

    try {
        await insertUser(new User('1', '1'));

    } catch (error) {
        res = res && (error instanceof InvalidOjectError);
        console.assert((error instanceof InvalidOjectError), 'KO Test insertUser - Error type InvalidOjectError:' + error.message)
    }

    res ? console.log('(OK)Test - insertUser Validators') : console.log('(KO)Test - insertUser Validators => ')


    //
    console.log('Test - User deleteUser User...')
    res = true;
    try {
        await deleteUser(3);
    } catch (error) {
        res = res && (error instanceof NullObjectError);
        console.assert((error instanceof NullObjectError), 'KO Test deleteUser - Error type : NullObjectError' + error.message)
    }

    try {
        await deleteUser(new User('1', '1'));

    } catch (error) {
        res = res && (error instanceof InvalidOjectError);
        console.assert((error instanceof InvalidOjectError), 'KO Test deleteUser - Error type InvalidOjectError:' + error.message)
    }

    res ? console.log('(OK)Test - deleteUser Validators') : console.log('(KO)Test - deleteUser Validators => ')

    //

    console.log('Test - User getUser User...')
    res = true;
    try {
        await getUser(3, '');
    } catch (error) {
        res = res && (error instanceof NullObjectError);
        console.assert((error instanceof NullObjectError), 'KO Test getUser - Error type : NullObjectError' + error.message)
    }

    try {
        await getUser(new User('1', '1', '1', '1'), '');

    } catch (error) {
        res = res && (error instanceof InvalidOjectError);
        console.assert((error instanceof InvalidOjectError), 'KO Test getUser - Error type InvalidOjectError:' + error.message)
    }

    res ? console.log('(OK)Test - getUser Validators') : console.log('(KO)Test - getUser Validators => ')


}