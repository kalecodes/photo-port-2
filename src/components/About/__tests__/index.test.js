import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// clear memory data after each test to prevent false results
afterEach(cleanup);

// declare the component we are testing
describe('About component', () => {
  // verify componenet is rendering
  it('renders', () => {
    render(<About />);
  });

  // compare snapshot versions of the DOM node structure
  it('matches snapshot DOM node structure', () => {
    // asFragment returns a snapshot of the componenet
    const { asFragment } = render(<About />);
    // test and compare whether the expected and actual outcomes match (using a matcher)
    expect(asFragment()).toMatchSnapshot();
  });
});
