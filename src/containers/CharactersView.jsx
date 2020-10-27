import React, { useState, useEffect } from 'react';
import Loading from '../components/loading/Loading';
import CharacterList from '../components/characters/CharacterList';
import { getCharacterList } from '../services/getCharacterList';

const CharactersView = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacterList()
      .then(characters => setCharacters(characters))
      .finally(setLoading(false));
  }, []);

  return loading ? <Loading /> : <CharacterList characters={characters} />;
};

export default CharactersView;
