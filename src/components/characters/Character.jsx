import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';
const Character = ({ name, image }) => {
  return (
    <div className={styles.Character}>
      <a href={`detail/${name}`}>
        <h3>{name}</h3>
        <img src={image} alt={name} />
      </a>
    </div>
    
  );
};

Character.propTypes = {
  name:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired
};

export default Character;
