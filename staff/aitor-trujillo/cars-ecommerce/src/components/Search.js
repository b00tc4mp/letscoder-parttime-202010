import { useState } from 'react';
import AppButton from './AppButton'
import Car from './Car'
import Feedback from './Feedback'
import { searchCars } from '../logic'


function Search(props) {
    const [carsFound, setCarsFound] = useState([])
    const [error, setError] = useState('')
    const [feedback, setFeedback] = useState('')

    const handleOnSearch = (event) => {
        event.preventDefault()

        setFeedback('')
        setCarsFound([])
        const query = event.target.query.value

        try {
            searchCars(query, (error, cars) => {
                if (error) return setError(error)

                cars.length ? setCarsFound(cars) : setFeedback(`No results for ${query}`)
            })
        } catch (error) {
            setError(error.message)
        }
    }

    return (<section className='container container--donotcenter'>
        <h1 className='title'>Search Cars</h1>
        <form className='search-bar' onSubmit={handleOnSearch}>
            <input className='form__item search-bar__input' placeholder='Find your next car' name='query' type='text' />
            <AppButton text='Go!' classes='button--small' color='highlight' />
        </form>

        {feedback && <Feedback message={feedback} />}
        {error && <Feedback message={error} type='error' />}

        {carsFound && carsFound.length > 0 &&
            <section className='carsResult'>
                {carsFound.map(car => {
                    return <Car id={car.id} name={car.name} thumbnail={car.thumbnail} price={car.price} />
                })}
            </section>
        }
    </section>);
}

export default Search