import AppButton from './AppButton'
import Car from './Car'

function Search(props) {
    return (<section className='container'>
        <h1 className='title'>Search Cars</h1>
        <form className='search-bar'>
            <input className='form__item search-bar__input' placeholder='Find your next car' type='text' />
            <AppButton text='Go!' classes='button--small' color='highlight' />
        </form>
        <Car id='123' name='Audi' />
    </section>

    );
}

export default Search