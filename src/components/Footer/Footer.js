import React from 'react';
import PropTypes from 'prop-types';

// import styles
import ButtonAnimation from './animations/ButtonAnimation';
import './footer.scss';

const Footer = props => {
  return (
    <div className='footer'>
        <button className='footer__button'>
            <ButtonAnimation />
        </button>
    </div>
  )
}

Footer.propTypes = {}

export default Footer