import { useState } from 'react';
import AppButton from './AppButton'
import Car from './Car'
import searchCars from '../logic/searchCars'

function Search(props) {
    const [carsFound, setCarsFound] = useState([])
    const [noResultsFeedback, setNoResultsFeedback] = useState('')

    const handleOnSearch = (event) => {
        event.preventDefault()

        setNoResultsFeedback('')
        setCarsFound([])
        const query = event.target.query.value

        searchCars(query, (error, cars) => {
            if (error) return alert(error)

            cars.length ? setCarsFound(cars) : setNoResultsFeedback(`No results for ${query}`)
        })
    }

    return (<section className='container container--donotcenter'>
        <h1 className='title'>Search Cars</h1>
        <form className='search-bar' onSubmit={handleOnSearch}>
            <input className='form__item search-bar__input' placeholder='Find your next car' name='query' type='text' />
            <AppButton text='Go!' classes='button--small' color='highlight' />
        </form>
        {noResultsFeedback && <div className='feedback feedback--info'>{noResultsFeedback}</div>}
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