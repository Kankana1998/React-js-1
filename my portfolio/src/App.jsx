import { useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faBars);



import './App.css'

function App() {
  

  return (
    <>
      {/* ----HEADER SECTION---- */}
    <header className="h-">
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
                    <svg class="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                            <image class="home__blob-img" x="50" y="60" src="src/assets/img/202011_04.jpg"/>
                        </g>
                    </svg>
                </div>
        </section>

        {/* ===== ABOUT ===== */}
            <section>
                <h2>About</h2>

                <div>
                    <div>
                        <img src="src/assets/img/undraw_Web_development_0l6v.png" alt=""/>
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
                        <img src="src/assets/img/work3.jpg" alt="" class="skills__img"/>
                    </div>
                </div>
            </section>

            {/* ===== WORK ===== */}
            <section class="work section" id="work">
                <h2 class="section-title">Work</h2>

                <div class="work__container bd-grid">
                    <a href="" class="work__img">
                        <img src="src/assets/img/work1.jpg" alt=""/>
                    </a>
                    <a href="" class="work__img">
                        <img src="src/assets/img/work2.jpg" alt=""/>
                    </a>
                    <a href="" class="work__img">
                        <img src="src/assets/img/work3.jpg" alt=""/>
                    </a>
                    <a href="" class="work__img">
                        <img src="src/assets/img/work4.jpg" alt=""/>
                    </a>
                    <a href="" class="work__img">
                        <img src="src/assets/img/work5.jpg" alt=""/>
                    </a>
                    <a href="" class="work__img">
                        <img src="src/assets/img/work6.jpg" alt=""/>
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
