import { useState } from 'react';
import Nav from './Nav'
import Search from './Search'
import AllCars from './AllCars'
import Profile from './Profile'
import MyCars from './MyCars'

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
    const handleMyCarsClick = (event) => {
        event.preventDefault()

        setHomeView('my-cars')
    }

    return (<>
        <Nav
            selected={homeView}
            searchClick={handleSearchClick}
            allCarsClick={handleAllCarsClick}
            profileClick={handleProfileClick}
            myCarsClick={handleMyCarsClick}
        />
        {homeView === 'search' && <Search />}
        {homeView === 'all-cars' && <AllCars />}
        {homeView === 'profile' && <Profile />}
        {homeView === 'my-cars' && <MyCars />}
    </>);
}

export default Home