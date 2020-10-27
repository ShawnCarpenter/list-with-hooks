import React from 'react';
import { findByTestId, render, screen, waitFor } from '@testing-library/react';
import { mockComponent } from 'react-dom/test-utils';
import { getCharacterList } from '../services/getCharacterList';
import CharactersView from './CharactersView';


jest.mock('../services/getCharacterList.js');
describe('CharacterListView tests', () => {
  it('renders a list of characters to the screen', () => {
    getCharacterList.mockResolvedValue([
      { 
        name:'Bob',
        image:'http://img.com/pic.png',
        occupation:'builder',
        description:'Weird stuff happened',
      }
    ]);
    render(<CharactersView />);
  });
  
});
