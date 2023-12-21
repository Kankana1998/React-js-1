import { createContext, useState } from 'react'
import ChildA from './ChildA';


const data = createContext();
function App() {
const name="Kankana"

// What is context API?
// Create, provider, Consumer
//How to use it?
// is Context API also problematic?

 return (
    <>
    <data.Provider value={name}>
    <ChildA/>
    </data.Provider>
      
    </>
  )
}

export default App
export {data};
