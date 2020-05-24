module.exports = {
  siteMetadata: {
    title: 'Template',
    description: 'Template, Template, Template, Template',
    keywords: 'Template, boilerplate',
    siteUrl: 'https://www.template.com',
    author: {
      name: 'Mamadou Ouologuem',
      url: 'https://www.linkedin.com/in/ouologuem',
      email: 'mamadou.ouologuem02@gmail.com',
    },
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: { injectFirst: true },
      },
    },
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        whitelist: ['MY_ENV_VAR'],
      },
    },
  ],
};
