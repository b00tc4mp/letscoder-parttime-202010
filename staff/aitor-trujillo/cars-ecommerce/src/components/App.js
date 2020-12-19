import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from './Landing'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import { retrieveUser } from '../logic'

function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    if (sessionStorage.token)
      retrieveUser(sessionStorage.token, (error, user) => {
        if (error) return setToken('')

        setToken(sessionStorage.token)
      })
  }, [])

  const handleOnUserLogin = (token) => {
    setToken(token)
    sessionStorage.token = token
  }

  return (<Router>
    <Switch>
      <Route exact path="/">
        {token ? <Home /> : <Landing />}
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login onUserLogin={handleOnUserLogin} />
      </Route>
      {/* <Route exact path="/home">
        {sessionStorage.token && }
      </Route> */}
    </Switch>
  </Router>);
}

export default App;


// return (<>
//   {view === 'landing' && <Landing goToRegister={handleGoToRegister} goToLogin={handleGoToLogin} />}
//   {view === 'register' && <Register goToLogin={handleGoToLogin} />}
//   {view === 'login' && <Login goToRegister={handleGoToRegister} onUserLogin={handleOnUserLogin} />}
//   {view === 'home' && <Home />}
// </>);