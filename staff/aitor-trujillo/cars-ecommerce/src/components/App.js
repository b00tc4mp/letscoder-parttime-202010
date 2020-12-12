import { useEffect, useState } from 'react'

import Landing from './Landing'
import Register from './Register'
import Login from './Login'
import Home from './Home'

function App() {
  const [view, setView] = useState('landing')

  const handleGoToRegister = () => {
    setView('register')
  }

  const handleGoToLogin = () => {
    setView('login')
  }

  const handleOnUserLogin = (token) => {
    sessionStorage.token = token
    setView('home')
  }

  return (<>
    {view === 'landing' && <Landing goToRegister={handleGoToRegister} goToLogin={handleGoToLogin} />}
    {view === 'register' && <Register goToLogin={handleGoToLogin} />}
    {view === 'login' && <Login goToRegister={handleGoToRegister} onUserLogin={handleOnUserLogin} />}
    {view === 'home' && <Home />}
  </>);
}

export default App;
