import { useEffect, useState } from 'react'
import AppButton from './AppButton'
import Car from './Car'
import { uploadCar, retrieveUser, deleteCar } from '../logic'
import Feedback from './Feedback'

function MyCars({ onBuyCar }) {
    const [myCars, setMyCars] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) return setError(error)
                const { myCars: _myCars } = user

                if (_myCars) setMyCars(_myCars)
                setError('')
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

        try {
            uploadCar(sessionStorage.token, thumbnail, name, price, carsArray, (error) => {
                if (error) return setError(error)

                setError('')
                setRefresh(!refresh)
            })
        } catch (error) {
            setError(error.message)
        }
    }

    const handleOnDelete = (event, id) => {
        event.preventDefault()
        const carsArray = myCars

        try {
            deleteCar(sessionStorage.token, id, carsArray, (error) => {
                if (error) return setError(error)

                setError('')
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
                {myCars.map(car =>
                    <Car
                        id={car.id}
                        thumbnail={car.thumbnail}
                        name={car.name}
                        price={car.price}
                        showRemoveButton={true}
                        onDelete={handleOnDelete}
                        onBuyCar={onBuyCar}
                    />
                )}
            </section>
        }
    </section>);
}

export default MyCars