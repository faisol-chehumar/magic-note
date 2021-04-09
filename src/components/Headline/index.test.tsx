import React from 'react';
import { render } from '@testing-library/react';
import Headline from './index';

test('renders learn react link', () => {
  const { getByText } = render(<Headline>XXX</Headline>);
  const headline = getByText(/XXX/);
  expect(headline).toBeInTheDocument();
});
