import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './context/components/Login'
import Profile from './context/components/Profile'

function App() {
  

  return (
    <UserContextProvider>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
