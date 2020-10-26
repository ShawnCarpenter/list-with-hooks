import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCharacter } from '../../services/getCharacter';

const DetailView = props => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getCharacter(props.match.params.name)
      .then(character => setCharacter(character));
  }, []);
  return (
    <div className="details">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <div>Occupation: {character.occupation}</div>
      <div>{character.description}</div>
    </div>
  );
};

DetailView.propTypes = {
  match:PropTypes.object,
};

export default DetailView;
