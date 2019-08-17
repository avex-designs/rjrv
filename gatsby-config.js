module.exports = {
  siteMetadata: {
    title: `R.J. REYNOLDS VAPOR COMPANY`,
    description: `At RJRVC, we operate our business in a responsible manner that best balances the needs of our stakeholders. RJRVC is focused on offering responsible, innovative, satisfying products for adult tobacco consumers’ evolving preferences. <strong>Our Vision and Values seek to reflect the interests of shareholders, adult tobacco consumers, employees, and other stakeholders</strong>. RJRVC shares the values and principles of its parent company, Reynolds American Inc.`,
    author: `@appliedlabs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1D427A`,
        theme_color: `#1D427A`,
        display: `minimal-ui`,
        icon: `src/assets/img/rjrv-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
        resolve: `gatsby-plugin-routes`,
        options: {
            // this is the path to your routes configuration file
            path: `${__dirname}/src/routes.js`,
        },
    },
    {
        resolve: `gatsby-source-contentful`,
        options: {
            spaceId: '7k1qvvohxz7r',
            accessToken: 'cmFvlOlmD_FYNlXLqfJ15GEEes-KxHwWceHynvbS_R0'
        }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
