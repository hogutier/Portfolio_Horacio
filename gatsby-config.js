if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

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
    'gatsby-plugin-sitemap',
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'horacio-portfolio',
        short_name: 'horacio',
        start_url: '/',
        background_color: '#f2f2f2',
        theme_color: '#f2f2f2',
        display: 'minimal-ui',
        icon: 'src/images/logoBlack.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.trackingId
      }
    },
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: process.env.websiteId,
        //  Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        enableDuringDevelop: true
      }
    }
  ]
}
