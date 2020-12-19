import { useState } from 'react'
import { Link } from "react-router-dom";
import AppButton from './AppButton'
import Feedback from './Feedback'
import { registerUser } from '../logic'

function Register({ goToLogin }) {
    const [error, setError] = useState('')


    const handleOnSubmit = (event) => {
        event.preventDefault()

        const name = event.target.name.value
        const surname = event.target.surname.value
        const username = event.target.username.value
        const password = event.target.password.value

        try {
            registerUser(username, password, name, surname, (error) => {
                if (error) return setError(error)

                goToLogin()
            })
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <section className='container'>
            <h1 className='title'>Register</h1>
            <form className="form" id="register" onSubmit={handleOnSubmit} >
                <label htmlFor="name" className="form__label" id="label-name">Name</label>
                <input type="text" name="name" id="name" className="form__item" />
                <label htmlFor="surname" className="form__label">Surname</label>
                <input type="text" name="surname" id="surname" className="form__item" />
                <label htmlFor="username" className="form__label">Username</label>
                <input type="text" name="username" id="username-register" className="form__item" />
                <label htmlFor="password" className="form__label">Password</label>
                <input type="password" name="password" id="password-register" className="form__item form__item--last" />
                <AppButton text='Register' classes='form__button' />
            </form>
            {error && <Feedback message={error} type='error' />}
            <Link to='/login' ><AppButton text='Go to Login' color='highlight' /></Link>

        </section>
    );
}

export default Register