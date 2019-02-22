module.exports = {
  siteMetadata: {
    title: 'HORACIO GUTIERREZ',
    description:
      'My portfolio web site where you can learn about me, my work and how to connect with me.',
    author: '@Horacio Gutierrez',
    about: 'ABOUT',
    contact: 'CONTACT',
    portfolio: 'PORTFOLIO'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    /*  {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Horacio Gutierrez Portfolio Site',
        short_name: 'Horacio Portfolio',
        start_url: '/',
        background_color: '#f2f2f2',
        theme_color: '#f2f2f2',
        display: 'browser',
        icon: 'src/images/logoBlack.png' // This path is relative to the root of the site.
      }
    }, */
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-134170205-1'
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Horacio Gutierrez Portfolio Site',
        short_name: 'Horacio-Portfolio',
        start_url: '/',
        background_color: '#f2f2f2',
        theme_color: '#f2f2f2',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'minimal-ui',
        icon: 'src/images/logoBlack.png', // This path is relative to the root of the site.
        include_favicon: true // Include favicon
      }
    },
    'gatsby-plugin-offline'
  ]
}
