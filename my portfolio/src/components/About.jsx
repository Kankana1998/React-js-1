import React from 'react'

const About = () => {
  return (
    <div className="py-16 bg-white">
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
                <img
                    src="src/assets/img/undraw_Web_development_0l6v.png"
                    alt="image"
                />
            </div>
            <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                I'am Kankana
                </h2>
                <p className="mt-6 text-gray-600">
                I'm a frontend developer with 2+ years of experience  who specializes in building the user interface (UI) and user experience (UX) of web applications.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default About
