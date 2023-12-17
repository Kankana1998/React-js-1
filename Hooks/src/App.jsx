import React, { createContext } from "react"
import UseState from "./UseState"
import UseEffect from "./UseEffect"
import UseContext from "./UseContext"
import UseRef from "./UseRef";
import UseReducer from "./UseReducer";
import UseLayoutEffect from "./UseLayoutEffect";
import UseMemo from "./UseMemo";
import UseCallback from "./useCallback";


export const LoginContext = createContext();
function App() {

  return (
    <>
   { /* <UseState/>*/}
     {/* <UseEffect/>*/}

    {/* <LoginContext.Provider value ={true}>
      <div>
      <UseContext/>
      </div>
  </LoginContext.Provider>*/}

  {/*<UseRef/>*/}

  {/*<UseReducer/>*/}

  {/*<UseLayoutEffect />*/}

  {/*<UseMemo/>*/}

  <UseCallback/>
    </>
  )
}

export default App
