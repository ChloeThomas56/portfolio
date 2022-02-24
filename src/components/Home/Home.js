// Imports
import React from 'react';
import PropTypes from 'prop-types';

import './home.scss';
import TitleAnimation from './animations/TitleAnimation';
import SubtitleAnimation from './animations/SubtitleAnimation';

const Home = (props) => {
  return (
    <div className='home'>
      <div className='home__titles'>
        <div className='home__titles-name'><TitleAnimation /></div>
        <div className='home__titles-position'><SubtitleAnimation /></div>
      </div>
    </div>
  );
}

Home.propTypes = {}

export default Home