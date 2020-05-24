import React from 'react';
import { render } from '@testing-library/react';
import Map from '.';

test('renders as expected', () => {
  const { container } = render(<Map />);
  expect(container).toMatchSnapshot();
});
