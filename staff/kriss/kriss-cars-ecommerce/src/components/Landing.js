import AppButton from './AppButton'

function Landing({ goToRegister, goToLogin }) {

    return (
        <section className='container'>
            <h1 className='title'>Welcome to Cars Ecommerce</h1>
            <img className='image' alt='' src="https://www.interactone.com/wp-content/uploads/2019/03/Automotive-eCommerce-platform-blog-1.jpg" />
            <div className='buttons-container' >
                <AppButton text='Register' buttonClick={goToRegister} />
                <AppButton text='Login' color='highlight' buttonClick={() => goToLogin()} />
            </div>
        </section>
    );
}

export default Landing;