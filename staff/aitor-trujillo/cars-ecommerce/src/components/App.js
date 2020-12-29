import { useEffect, useState } from "react";
import {
  Route,
  withRouter,
  Redirect,
  Switch,
} from "react-router-dom";
import Landing from './Landing'
import Register from './Register'
import Login from './Login'
import Home from './Home'

function App({ history }) {
  const [token, setToken] = useState('')

  useEffect(() => {
    if (sessionStorage.token) setToken(sessionStorage.token)
  }, [])

  const handleGoToLogin = () => {
    history.push('/login')
  }

  const handleGoToRegister = () => {
    history.push('/register')
  }

  const handleOnUserLogin = (token) => {
    setToken(token)
    sessionStorage.token = token
  }

  const handleOnLogout = () => {
    delete sessionStorage.token
    delete sessionStorage.cart
    setToken('')
    history.push('/')
  }

  return (
    <Switch>
      <Route path="/register" render={() => token ? <Redirect to='/home' /> : <Register goToLogin={handleGoToLogin} />} />
      <Route path="/login" render={() => token ? <Redirect to='/home' /> : <Login onUserLogin={handleOnUserLogin} goToRegister={handleGoToRegister} />} />
      <Route path="/home" render={() => token ? <Home onLogout={handleOnLogout} /> : <Redirect to='/' />} />
      <Route path="/" render={() => token ? <Redirect to='/home' /> : <Landing />} />
    </Switch>
  );
}

export default withRouter(App);