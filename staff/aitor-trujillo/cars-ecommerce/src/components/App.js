import { useEffect, useState } from "react";
import {
  Route,
  withRouter,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import Landing from './Landing'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import { retrieveUser } from '../logic'

function App({ history }) {
  const [token, setToken] = useState('')

  useEffect(() => {
    if (sessionStorage.token)
      retrieveUser(sessionStorage.token, (error, user) => {
        if (error) return setToken('')

        setToken(sessionStorage.token)
      })
  }, [])

  const handleGoToLogin = () => {
    history.push('/login')
  }

  const handleOnUserLogin = (token) => {
    setToken(token)
    sessionStorage.token = token
  }

  const handleOnLogout = () => {
    delete sessionStorage.token
    setToken('')
    history.push('/')
  }

  return (
    <>
      <Route exact path="/" render={() => token ? <Redirect to='/home' /> : <Landing />} />
      <Route exact path="/register" render={() => token ? <Redirect to='/' /> : <Register goToLogin={handleGoToLogin} />} />
      <Route exact path="/login" render={() => token ? <Redirect to='/' /> : <Login onUserLogin={handleOnUserLogin} />} />
      <Route exact path="/home" render={() => token ? <Router><Home onLogout={handleOnLogout} /></Router> : <Redirect to='/' />} />
    </>
  );
}

export default withRouter(App);