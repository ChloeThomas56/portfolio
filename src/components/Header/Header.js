import React from 'react';
import PropTypes from 'prop-types';
import './header.scss'

const Header = props => {
  return (
    <div className='header'>
      <nav className='header__list'>
        <a href='#' className='header__list-item'>Accueil</a>
        <a href='#' className='header__list-item'>À propos</a>
        <a href='#' className='header__list-item'>CV</a>
        <a href='#' className='header__list-item'>Projets</a>
        <a href='#' className='header__list-item'>Contact</a>
      </nav>
    </div>
  )
}

Header.propTypes = {}

export default Header