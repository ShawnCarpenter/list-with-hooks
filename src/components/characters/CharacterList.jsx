import React, { useState, useEffect } from 'react';
import PropTypes, { shape } from 'prop-types';
import Character from './Character';


const CharacterList = ({ characters }) => {
  
  return (
    <ul>{
      characters.map(character => (
        <li key={character.name}>
          <Character name={character.name} />
        </li>
      ))
    }</ul>
  );
};

CharacterList.propTypes = {
  characters:PropTypes.arrayOf(shape({ 
    name:PropTypes.string,  }))
};

export default CharacterList;
