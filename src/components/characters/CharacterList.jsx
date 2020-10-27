import React from 'react';
import PropTypes, { shape } from 'prop-types';
import Character from './Character';
import styles from './CharacterList.css';

const CharacterList = ({ characters }) => {
  
  return (
    <div className={styles.CharacterList}>
      <ul>{
        characters.map(character => (
          <li key={character.name}>
            <Character
              name={character.name}
              image={character.image} 
            />
          </li>
        ))
      }</ul>
    </div>
      
  );
};

CharacterList.propTypes = {
  characters:PropTypes.arrayOf(shape({ 
    name:PropTypes.string,  }))
};

export default CharacterList;
