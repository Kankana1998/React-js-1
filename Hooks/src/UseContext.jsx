import React, {useContext} from 'react'
import { LoginContext } from './App'
const UseContext = () => {
    const login = useContext(LoginContext);
    console.log(login);
  return <h3>SINGLE POST</h3>
}

export default UseContext
