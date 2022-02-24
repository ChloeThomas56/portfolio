import React from 'react';
import PropTypes from 'prop-types';
import './section.scss';

const Section = ({
  className,
  title,
  children,
}) => {
  return (
    <div className={`section ${className}`}>
      <h2 className='section__title'>{title}</h2>
      <div className='section__content'>
          {children}
      </div>
    </div>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

Section.defaultProps = {
  className: '',
}

export default Section