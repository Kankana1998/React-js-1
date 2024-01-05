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
        <section>
            <div>
            <h1>Hi,<br/>I'am <span>Kankana</span><br/> Frontend Developer</h1>
            </div>

            <div class="home__img">
                    <svg class="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                    <image class="home__blob-img" x="50" y="60" href="assets/img/202011_04.jpg"/>
                    </svg>
                </div>
        </section>

        {/* ===== ABOUT ===== */}
            <section>
                <h2>About</h2>

                <div>
                    <div>
                        <img src="assets/img/undraw_Web_development_0l6v.png" alt=""/>
                    </div>
                    
                    <div>
                        <h2>I'am Kankana</h2>
                        <p>I'm a frontend developer with 2+ years of experience  who specializes in building the user interface (UI) and user experience (UX) of web applications. </p>           
                    </div>                                   
                </div>
            </section>

            {/* ===== SKILLS ===== */}
            <section>
                <h2>Skills</h2>

                <div>          
                    <div>
                        <h2>Profesional Skills</h2>
                        <p></p>
                        <div>
                            <div>
                                <i class='bx bxl-html5 skills__icon'></i>
                                <span class="skills__name">HTML5</span>
                            </div>
                            <div class="skills__bar skills__html">

                            </div>
                            <div>
                                <span class="skills__percentage">95%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-css3 skills__icon'></i>
                                <span class="skills__name">CSS3</span>
                            </div>
                            <div class="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">65%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-javascript skills__icon' ></i>
                                <span class="skills__name">JAVASCRIPT</span>
                            </div>
                            <div class="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">75%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-react skills__icon'></i>
                                <span class="skills__name">React Js</span>
                            </div>
                            <div class="skills__bar skills__react">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">65%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-tailwind-css skills__icon'></i>
                                <span class="skills__name">Tailwind CSS</span>
                            </div>
                            <div class="skills__bar skills__tailwind">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">70%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>              
                        <img src="assets/img/work3.jpg" alt="" class="skills__img"/>
                    </div>
                </div>
            </section>

            {/* ===== WORK ===== */}
            <section class="work section" id="work">
                <h2 class="section-title">Work</h2>

                <div class="work__container bd-grid">
                    <a href="" class="work__img">
                        <img src="assets/img/work1.jpg" alt=""/>
                    </a>
                    <a href="" class="work__img">
                        <img src="assets/img/work2.jpg" alt=""/>
                    </a>
                    <a href="" class="work__img">
                        <img src="assets/img/work3.jpg" alt=""/>
                    </a>
                    <a href="" class="work__img">
                        <img src="assets/img/work4.jpg" alt=""/>
                    </a>
                    <a href="" class="work__img">
                        <img src="assets/img/work5.jpg" alt=""/>
                    </a>
                    <a href="" class="work__img">
                        <img src="assets/img/work6.jpg" alt=""/>
                    </a>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
        <footer class="footer">
            <p class="footer__title">Kankana</p>
            <div class="footer__social">
                <a href="https://github.com/Kankana1998" class="footer__icon"><i class='bx bxl-github' ></i></a>
                <a href="https://twitter.com/NerdNightingale" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
            </div>
            <p class="footer__copy">&#169; Kankana Nath.2024 All rigths reserved</p>
        </footer>

    </main>
    </>
  )
}

export default App
