import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  <footer className='bg-gray-800 border-y text-white'>
    <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 md:flex md:justify-between'>

    <p className='text-[hsl(224,89%,60%)] mr-3'>Kankana</p><br/>
    <div className='font-medium'>
            <a href="#" class="footer__icon px-2 hover:underline"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#" class="footer__icon hover:underline"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
        <p className="footer__copy">&#169; Kankana.2024 All rigths reserved</p>

    </div>
  </footer>



    // <section id='footer' className='container h-screen flex justify-between items-center bg-[#0d1730] text-white'>
    //   <p className='text-3xl font-bold mb-4'>Kankana</p><br/>
    //   <div className="footer__social space-x-4">
    //             <a href="#" class="footer__icon px-2 hover:text-gray-400"><FontAwesomeIcon icon={faGithub} /></a>
    //             <a href="#" class="footer__icon hover:text-gray-400"><FontAwesomeIcon icon={faTwitter} /></a>
    //         </div>
    //         <p className="footer__copy">&#169; Kankana.2024 All rigths reserved</p>
    // </section>
  )
}

export default Footer
