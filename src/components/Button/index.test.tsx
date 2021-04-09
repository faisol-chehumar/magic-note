import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';

test('renders learn react link', () => {
  const { getByText } = render(<Button text="XXX" />);
  const headline = getByText(/XXX/);
  expect(headline).toBeInTheDocument();
});
