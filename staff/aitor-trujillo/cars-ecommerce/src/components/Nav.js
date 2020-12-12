import { useEffect, useState } from "react";

function Nav({ selected, searchClick, allCarsClick, profileClick }) {
    const [active, setActive] = useState('search')

    useEffect(() => {
        setActive(selected)
    }, [selected])

    return (
        <nav className='nav'>
            {active === 'search' ?
                <a href='#' className='nav__item selected' onClick={searchClick}>Search</a> :
                <a href='#' className='nav__item' onClick={searchClick}>Search</a>}
            {active === 'all-cars' ?
                <a href='#' className='nav__item selected' onClick={allCarsClick}>All Cars</a> :
                <a href='#' className='nav__item' onClick={allCarsClick}>All Cars</a>}
            {active === 'profile' ?
                <a href='#' className='nav__item selected' onClick={profileClick}>Profile</a > :
                <a href='#' className='nav__item' onClick={profileClick}>Profile</a >}
        </nav >
    );
}

export default Nav