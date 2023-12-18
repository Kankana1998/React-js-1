import { useState } from 'react'
import Login from './Login'
import './App.css'
import UserContextProvider from './UserContextProvider'
import Profile from './Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React for Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
