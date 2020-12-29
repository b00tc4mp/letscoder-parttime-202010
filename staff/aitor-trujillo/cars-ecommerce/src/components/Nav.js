import { useEffect, useState } from "react";

function Nav({ cartValue, location, searchClick, allCarsClick, profileClick, myCarsClick }) {
    const [active, setActive] = useState('search')

    useEffect(() => {
        setActive(location.pathname.split('/')[2])
    }, [location.pathname])

    return (
        <nav className='nav'>
            <a href='/' className={`nav__item ${active === 'search' ? 'selected' : ''}`} onClick={searchClick}>Search</a>
            <a href='/' className={`nav__item ${active === 'all-cars' ? 'selected' : ''}`} onClick={allCarsClick}>All Cars</a>
            <a href='/' className={`nav__item ${active === 'profile' ? 'selected' : ''}`} onClick={profileClick}>Profile</a>
            <a href='/' className={`nav__item ${active === 'my-cars' ? 'selected' : ''}`} onClick={myCarsClick}>My Cars</a>
            <div className='cart nav__item'>
                {cartValue}€ 💰
            </div>
        </nav >
    );
}

export default Nav