import { useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faBars);



import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* ----HEADER SECTION---- */}
    <header>
        <nav>
            <div>
                <a href="#">Kankana Nath</a>
            </div>

            <div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#work">Work</a></li>
                </ul>
            </div>

            <div><FontAwesomeIcon icon="fa-solid fa-bars" /></div>
        </nav>
    </header>


    <main>
        {/* ---- HOME-------------- */}
 
 
    </main>
    </>
  )
}

export default App
