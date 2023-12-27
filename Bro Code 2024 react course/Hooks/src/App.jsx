import { useState } from "react"
import MyComponent from "./MyComponent"
import Counter from "./Counter"

// React Hook = Special function that allows functional components to use React features without writing class components (React v16.8) (useState, useEffect, useContext, useRucer, useCallback, and more...)

// useState() = A React hook that allows the creation of a stateful variable AND a setter function to update its value in the virtual DOM. [name, setName]


function App() {
  

  return (
    <>
      {/* <MyComponent /> */}
      <Counter />
    </>
  )
}

export default App
