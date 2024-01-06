import React from 'react'

const Skill = () => {
  return (
    <section className="skills section" id="skills">
                <h2 class="section-title">Skills</h2>

                <div className="skills__container bd-grid">          
                    <div>
                        <h2 className="skills__subtitle">Profesional Skills</h2>
                        <p className="skills__text"></p>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-html5 skills__icon'></i>
                                <span className="skills__name">HTML5</span>
                            </div>
                            <div className="skills__bar skills__html">

                            </div>
                            <div>
                                <span className="skills__percentage">95%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-css3 skills__icon'></i>
                                <span className="skills__name">CSS3</span>
                            </div>
                            <div className="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">65%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-javascript skills__icon' ></i>
                                <span className="skills__name">JAVASCRIPT</span>
                            </div>
                            <div className="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">75%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-react skills__icon'></i>
                                <span className="skills__name">React Js</span>
                            </div>
                            <div className="skills__bar skills__react">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">65%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-tailwind-css skills__icon'></i>
                                <span className="skills__name">Tailwind CSS</span>
                            </div>
                            <div className="skills__bar skills__tailwind">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">70%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>              
                        <img src="src/assets/img/work3.jpg" alt="" className="skills__img"/>
                    </div>
                </div>
            </section>
  )
}

export default Skill
