import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';


describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders CharacterList', () => {
    const { asFragment } = render(
      <CharacterList characters={[
        { name:'Bob', image:'http://image.com/pic.jpg' }]}
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
