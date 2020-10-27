import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCharacter } from '../services/getCharacter';
import ViewDetails from '../components/detail/ViewDetails';
import Loading from '../components/loading/Loading';

const DetailView = props => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getCharacter(props.match.params.name)
      .then(character => setCharacter(character))
      .finally(setLoading(false));
  }, []);

  return loading ? <Loading /> : <ViewDetails {...character} />;
};

DetailView.propTypes = {
  match:PropTypes.object,
};

export default DetailView;
