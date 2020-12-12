import { useEffect, useState } from 'react';
import Car from './Car'
import retrieveAllCars from '../logic/retrieve-all-cars'

function AllCars(props) {
    const [allCars, setAllCars] = useState([])
    const [noResultsFeedback, setNoResultsFeedback] = useState('')

    useEffect(() => {
        retrieveAllCars((error, cars) => {
            if (error) return alert(error)

            cars.length ? setAllCars(cars) : setNoResultsFeedback('Oops something went wrong')
        })
    }, [])

    return (<section className='container container--donotcenter'>
        {noResultsFeedback && <div className='feedback feedback--info'>{noResultsFeedback}</div>}
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