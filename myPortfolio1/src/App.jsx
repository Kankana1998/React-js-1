
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Project from './components/project'

function App() {
  

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden bg-bgcolor'>
      <Header />
      <Navbar />
      <Main />
      <About />
      <Services />
      <Project />
      <Contact />
    </div>
  )
}

export default App
