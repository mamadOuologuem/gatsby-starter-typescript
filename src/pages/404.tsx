import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts';

const NotFoundPage = () => (
  <Layout title="Not Found">
    <h1>404: Page not found.</h1>
    <p>
      You&apos;ve hit the void. <Link to="/">Go back.</Link>
    </p>
  </Layout>
);

export default NotFoundPage;
