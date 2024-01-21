import React from 'react'
import {personsImgs} from '../../utils/images'
import './Sidebar.css'
import {navigationLinks} from '../../data/data'
const Sidebar = () => {
  return (
    <div className={`sidebar sidebar-change`}>
      <div className='user-info'>
      <div className='info-img img-fit-cover'>
      <img src={personsImgs.person_two} alt='profile image'/>
      </div>
      <span className='info-name'>alice doe</span>
    </div>
    <nav className='navigation'>
      <ul className='nav-list'>
        {
          navigationLinks.map((navigationLink) => (
            <li className='nav-item' key={navigationLink.id}>
              <a href='#' className={`nav-link`}>
                <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                <span className='nav-link-text'>{navigationLink.title}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  </div>
  )
}

export default Sidebar
