import React from 'react';
import PropTypes from 'prop-types';
import './title.scss';

const Title = ({content}) => {
  return (
    <h3 className='title'>
        {content}
    </h3>
  )
}

Title.propTypes = {
    content: PropTypes.string.isRequired
}

export default Title