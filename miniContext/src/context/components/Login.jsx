import React, { useState } from 'react'
import UserContext from '../UserContext'
function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }
  return (
   <div>
    <h2>Login</h2>
    <input type="text" value={username} onchange={(e) => setUsername(e.target.value)} placeholder='username' />
    <input type="text" value={password} onchange={(e) => setPassword(e.target.value)}  placeholder='password' />
    <button onClick={handleSubmit}>Submit</button>
   </div>
  )
}

export default Login