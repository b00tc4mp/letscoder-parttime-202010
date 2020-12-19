import { useEffect, useState } from 'react'
import AppButton from './AppButton'
import Car from './Car'
import { uploadCar, retrieveUser } from '../logic'
import Feedback from './Feedback'

function MyCars(props) {
    const [myCars, setMyCars] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) return setError(error)
                const { myCars: _myCars } = user

                setMyCars(_myCars)
            })
        } catch (error) {
            setError(error.message)
        }
    }, [refresh])

    const handleUploadCar = (event) => {
        event.preventDefault()

        const carsArray = myCars

        const thumbnail = event.target.thumbnail.value
        const name = event.target.name.value
        const price = event.target.price.value

        if (!thumbnail || !name || !price) return alert('all inputs are required')

        carsArray.push({ thumbnail, name, price, id: carsArray.length + 100 })

        try {
            uploadCar(sessionStorage.token, carsArray, (error) => {
                if (error) return setError(error)

                setRefresh(!refresh)
            })
        } catch (error) {
            setError(error.message)
        }
    }

    return (<section className='container container--donotcenter'>
        {error && <Feedback message={error} type='error' />}
        <form className='form' onSubmit={handleUploadCar}>
            <input placeholder='Insert Car Image (URL)' type='text' className='form__item form__item--last' name='thumbnail' />
            <input placeholder='Name' type='text' className='form__item form__item--last' name='name' />
            <input placeholder='Price' type='text' className='form__item form__item--last' name='price' />
            <AppButton text='Upload' color='highlight' classes='button--small' />
        </form>

        {myCars.length > 0 &&
            <section className='carsResult'>
                {myCars.map(car => <Car id={car.id} thumbnail={car.thumbnail} name={car.name} price={car.price} />)}
            </section>
        }
    </section>);
}

export default MyCars