import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './header.scss'

const Header = ({
  aboutClick,
  homeClick,
})=> {
  return (
    <div className='header'>
      <ul className='header__list'>
        <li onClick={homeClick} className='header__list-item'>Accueil</li>
        <li onClick={aboutClick} className='header__list-item'>À propos</li>
        <li className='header__list-item'>Skills</li>
        <li className='header__list-item'>Projets</li>
        <li className='header__list-item'>Contact</li>
      </ul>
    </div>
  )
}

Header.propTypes = {}

export default Header