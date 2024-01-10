import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <section className="home bd-grid" id="home">
    <div className="home__data">
        <h1 className="font-abc home__title">Hi,<br/>I'am <span className="text-[hsl(224,56%,12%)] home__title-color">Kankana</span><br/> Frontend Developer</h1>
    </div>

    <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        
                            <img src="src/assets/img/undraw_Working_remotely_re_6b3a.png" alt="no image" />
                
                </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="src/assets/img/undraw_React_re_g3ui.png" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="src/assets/img/202011_04.jpg" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
    
</section>
</>
  )
}

export default Home
