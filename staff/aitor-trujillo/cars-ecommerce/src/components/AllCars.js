import { useEffect, useState } from 'react';
import Car from './Car'
import Feedback from './Feedback'
import { retrieveAllCars, retrieveUser } from '../logic'

function AllCars(props) {
    const [allCars, setAllCars] = useState([])
    const [myCars, setMyCars] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        try {
            retrieveAllCars((error, cars) => {
                if (error) return setError(error)
                retrieveUser(sessionStorage.token, (error, user) => {
                    if (error) return setError(error)

                    const { myCars: _myCars } = user

                    setMyCars(_myCars)
                    cars.length ? setAllCars(cars) : setError('Oops something went wrong')
                })
            })
        } catch (error) {
            setError(error.message)
        }
    }, [])

    return (<section className='container container--donotcenter'>
        {error && <Feedback message={error} type='error' />}
        <h1 className='title' >My Cars</h1>
        {myCars && myCars.length > 0 &&
            <section className='carsResult'>
                {myCars.map(car => {
                    return <Car id={car.id} name={car.name} thumbnail={car.thumbnail} price={car.price} />
                })}
            </section>
        }
        <h1 className='title' >Hotwheels Cars</h1>
        {allCars && allCars.length > 0 &&
            <section className='carsResult'>
                {allCars.map(car => {
                    return <Car id={car.id} name={car.name} thumbnail={car.thumbnail} price={car.price} />
                })}
            </section>
        }
    </section>);
}

export default AllCars