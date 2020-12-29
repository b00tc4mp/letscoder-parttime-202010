import {
    withRouter,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import Nav from './Nav'
import Search from './Search'
import AllCars from './AllCars'
import Profile from './Profile'
import MyCars from './MyCars'
import { useEffect, useState } from "react";

function Home({ history, location, onLogout }) {
    const [cartValue, setCartValue] = useState(0)

    useEffect(() => {
        if (sessionStorage.cart) setCartValue(Number(sessionStorage.cart))
    }, [])

    const handleSearchClick = (event) => {
        event.preventDefault()
        history.push('/home/search')
    }

    const handleAllCarsClick = (event) => {
        event.preventDefault()
        history.push('/home/all-cars')
    }

    const handleProfileClick = (event) => {
        event.preventDefault()
        history.push('/home/profile')
    }

    const handleMyCarsClick = (event) => {
        event.preventDefault()
        history.push('/home/my-cars')
    }

    const handleOnBuyCar = (event, carPrice) => {
        event.preventDefault()
        debugger
        sessionStorage.cart = cartValue + carPrice
        setCartValue(cartValue + carPrice)
    }

    return (<>
        <Nav
            cartValue={cartValue}
            location={location}
            searchClick={handleSearchClick}
            allCarsClick={handleAllCarsClick}
            profileClick={handleProfileClick}
            myCarsClick={handleMyCarsClick}
        />
        <Switch>
            <Route exact path='/home' render={() => <Redirect to='/home/search' />} />
            <Route path='/home/search' render={() => <Search onBuyCar={handleOnBuyCar} />} />
            <Route path='/home/all-cars' render={() => <AllCars onBuyCar={handleOnBuyCar} />} />
            <Route path='/home/profile' render={() => <Profile onLogout={onLogout} />} />
            <Route path='/home/my-cars' render={() => <MyCars onBuyCar={handleOnBuyCar} />} />
        </Switch>
    </>);
}

export default withRouter(Home)