import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Student name="Kankana" age={25} isStudent={true}/>
      <Student name="Alice" age={31} isStudent={false}  />
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={true}/>
    </>
  )
}

export default App
