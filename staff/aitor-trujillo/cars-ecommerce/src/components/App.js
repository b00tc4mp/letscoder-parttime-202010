import Landing from './Landing'
import Register from './Register'

function App() {

  const handleGoToRegister = () => {
    alert("I'm handling Register Click")
  }

  const handleGoToLogin = () => {
    alert("I'm handling Login Click")
  }



  return (
    <Landing goToRegister={handleGoToRegister} goToLogin={handleGoToLogin} />
    // <Register />
  );
}

export default App;
