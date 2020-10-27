import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ViewDetails from './ViewDetails';

describe('ViewDetails component', () => {
  afterEach(() => cleanup());
  it('renders ViewDetails', () => {
    const { asFragment } = render(<ViewDetails
      name="Bob" 
      image="http://img.com/pic.png"
      occupation="builder"
      description="Weird stuff happened"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
