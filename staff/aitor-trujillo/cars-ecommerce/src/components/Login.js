import { useEffect, useState } from 'react'

import AppButton from './AppButton'
import authenticateUser from '../logic/authenticate-user'

function Login({ goToRegister, onUserLogin }) {

    const handleOnSubmit = (event) => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        authenticateUser(username, password, (error, token) => {
            if (error) return alert(error)

            onUserLogin(token)
        })
    }


    return (
        <section className='container'>
            <h1 className='title'>Login</h1>
            <form className="form" id="register" onSubmit={handleOnSubmit} >
                <label htmlFor="username" className="form__label">Username</label>
                <input type="text" name="username" id="username-register" className="form__item" />
                <label htmlFor="password" className="form__label">Password</label>
                <input type="password" name="password" id="password-register" className="form__item form__item--last" />
                <AppButton text='Login' classes='form__button' />
            </form>
            <AppButton text='Go to Register' color='highlight' buttonClick={goToRegister} />
        </section>
    );
}

export default Login