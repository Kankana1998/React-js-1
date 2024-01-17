import ThemeContext from './Theme'
import './App.css'
import Sample from './Sample'

function App() {
 
  return (
    <>
     <ThemeContext.Provider value='dark'>
      <Sample />
     </ThemeContext.Provider>
    </>
  )
}

export default App
