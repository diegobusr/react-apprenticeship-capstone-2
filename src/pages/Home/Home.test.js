import React from 'react';
import Home from '.';
import { render } from '@testing-library/react';

describe('Home page', () => {
  it('must render the home page view', () => {
    const { getByRole } = render(<Home />);
    expect(getByRole('heading')).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();
  });
});
