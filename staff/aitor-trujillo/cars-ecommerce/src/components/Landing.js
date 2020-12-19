import AppButton from './AppButton'
import { Link } from "react-router-dom";

function Landing(props) {

    return (
        <section className='container'>
            <h1 className='title'>Welcome to Cars Ecommerce</h1>
            <img className='image' alt='' src="https://www.interactone.com/wp-content/uploads/2019/03/Automotive-eCommerce-platform-blog-1.jpg" />
            <div className='buttons-container' >
                <Link to="/register"><AppButton text='Register' /></Link>
                <Link to="/login"><AppButton text='Login' color='highlight' /></Link>

            </div>
        </section>
    );
}

export default Landing;