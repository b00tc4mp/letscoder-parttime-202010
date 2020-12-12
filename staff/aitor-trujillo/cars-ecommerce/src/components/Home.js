import { useEffect, useState } from 'react';
import Nav from './Nav'
import Search from './Search'
import AllCars from './AllCars'
import Profile from './Profile'

function Home(props) {
    const [homeView, setHomeView] = useState('search')

    const handleSearchClick = (event) => {
        event.preventDefault()

        setHomeView('search')
    }
    const handleAllCarsClick = (event) => {
        event.preventDefault()

        setHomeView('all-cars')
    }
    const handleProfileClick = (event) => {
        event.preventDefault()

        setHomeView('profile')
    }

    return (<>
        <Nav searchClick={handleSearchClick} allCarsClick={handleAllCarsClick} profileClick={handleProfileClick} />
        {homeView === 'search' && <Search />}
        {homeView === 'all-cars' && <AllCars />}
        {homeView === 'profile' && <Profile />}
    </>);
}

export default Home