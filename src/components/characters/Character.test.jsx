import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';


describe('Character component', () => {
  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(
      <Character name="Bob" image="http://image.com/pic.jpg"
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
