import React from 'react';
import PropTypes from 'prop-types';

import './about.scss';
import Section from '../Section/Section';
import Title from '../Title/Title';
import profile from '../../assets/profile.jpg';
import { HiOutlineDownload } from 'react-icons/hi';

const About = ({componentRef}) => {
  return (
    <Section className='about' title='À propos'>
      <div ref={componentRef} className='about__container'>
        <div className='about__left-section'>
          <Title content='Qui suis-je ?'/>
          <p className='about__text'>Je m'appelle <strong>Chloé Thomas</strong> et je suis <strong>développeuse web</strong> en région Bretagne.</p>
          <p className='about__text'>Après deux années passées en tant que traductrice indépendante, ma passion pour l'informatique l'a emporté, aussi ai-je décidé d'appréhender un nouveau type de langage au travers du code. Développeuse <strong>Full Stack</strong> de formation, je suis attirée par la dimension visuelle et créative du <strong>front-end</strong> et c'est naturellement dans cette branche que je me suis spécialisée.</p>
          <button className='about__button'>
            <span className='about__button-text'>Mon CV</span>
            <span className='about__button-icon'><HiOutlineDownload /></span>
          </button>
        </div>

        <div className='about__right-section'>
          <img className='about__img'src={profile} alt='Mon profil'/>
        </div>
      </div>

      <div className='about__aside'>

      </div>
    </Section>
  )
}

About.propTypes = {}

export default About