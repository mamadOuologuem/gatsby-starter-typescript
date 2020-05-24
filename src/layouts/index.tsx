import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from '@material-ui/core/styles';

import muiTheme from '../muiTheme';
import './index.css';

const Layout = ({ children, title, description, keywords }: LayoutProps) => (
  <ThemeProvider theme={muiTheme}>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
      ]}
    />
    {children}
  </ThemeProvider>
);

interface LayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  keywords?: string;
}

export default Layout;
