import React from 'react';
import { render } from '@testing-library/react';

import Layout from '.';

const props = {
  title: 'Title',
  description: 'Description',
  keywords: 'Keywords',
};

test('renders as expected', () => {
  const { container } = render(<Layout {...props}>children</Layout>);
  expect(container).toMatchSnapshot();
});
