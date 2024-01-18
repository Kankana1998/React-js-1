import ThemeContext from './Theme'
import './App.css'
import Sample from './Sample'
import MyComponent from './MyComponent'
function App() {
 
  return (
    <>
     {/* <ThemeContext.Provider value='dark'>
      <Sample />
     </ThemeContext.Provider> */}
    <MyComponent name='Sudheer' age={30}/>
    </>
  )
}

export default App
