import Theme from "./Theme";
import Sample from "./Sample";
import './App.css'

function App() {
 
  return (
    <>
      <Theme.Provider value="dark">
      <Sample />
    </Theme.Provider>
    </>
  )
}

export default App
