
function Nav({ searchClick, allCarsClick, profileClick }) {
    return (
        <nav className='nav'>
            <a href='#' className='nav__item' onClick={searchClick}>Search</a>
            <a href='#' className='nav__item' onClick={allCarsClick}>All Cars</a>
            <a href='#' className='nav__item' onClick={profileClick}>Profile</a >
        </nav >
    );
}

export default Nav