import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Homepage';

describe('Home', () => {
  it("should render a div with class name 'home'", () => {
    const { container } = render(<Home />);
    expect(container.querySelector('.home')).toBeInTheDocument();
  });
});
