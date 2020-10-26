import React, { useState, useEffect } from 'react';
import Loading from '../components/loading/Loading';
import CharacterList from '../components/characters/CharacterList';
import { getCharacterList } from '../services/getCharacterList';

const ViewCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacterList()
      .then(characters => setCharacters(characters))
      .finally(setLoading(false));
  }, []);
  if(loading) return <Loading />;
  
  return <CharacterList characters={characters}/>;
};

export default ViewCharacters;
