require('dotenv').config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    title: `2019 | Bal-Kishore Annual Report`,
    description: `Reports on how Bal-Kishore pravrutti in BAPS North America has evovled.`,
    author: `@baps`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `midtype-starter-gatsby-typescript`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/midtype-logo.png`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `fbf3vr55y3te`,
        accessToken: process.env.CF_DELIVERY_API_KEY,
        downloadLocal: true
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false // Flag for disabling animations
      }
    },
    `gatsby-plugin-offline`
  ]
};
