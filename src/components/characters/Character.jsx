import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name }) => {
  return (
    <a href={`detail/${name}`}>
      {name}
    </a>
  );
};

Character.propTypes = {
  name:PropTypes.string.isRequired
};

export default Character;
