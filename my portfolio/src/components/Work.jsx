import React from 'react'

function Work() {
  return (
    <section className="work section" id="work">
    <h2 className="section-title">Work</h2>

    <div className="work__container grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <a href="" className="work__img">
            <img src="src/assets/img/work1.jpg" alt=""/>
        </a>
        <a href="" className="work__img">
            <img src="src/assets/img/work2.jpg" alt=""/>
        </a>
        <a href="" className="work__img">
            <img src="src/assets/img/work3.jpg" alt=""/>
        </a>
        <a href="" className="work__img">
            <img src="src/assets/img/work4.jpg" alt=""/>
        </a>
        <a href="" className="work__img">
            <img src="src/assets/img/work5.jpg" alt=""/>
        </a>
        <a href="" className="work__img">
            <img src="src/assets/img/work6.jpg" alt=""/>
        </a>
    </div>
</section>
  )
}

export default Work