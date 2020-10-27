import React from 'react';
import PropTypes from 'prop-types';
import styles from './ViewDetails.css';

const ViewDetails = ({ name, image, occupation, description }) => {
  
  return (
    <div className={styles.ViewDetails}>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      {occupation && <div>Occupation: {occupation}</div> }
      <div>{description}</div>
    </div>
  );
};

ViewDetails.propTypes = {
  match:PropTypes.object,
  name:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  occupation:PropTypes.string,
  description:PropTypes.string.isRequired
};

export default ViewDetails;
