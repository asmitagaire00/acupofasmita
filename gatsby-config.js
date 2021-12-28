const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

module.exports = {
  siteMetadata: {
    title: `Asmita Gaire`,
    description: `Personal site of Asmita Gaire`,
    author: `@asmitagaire00`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Asmita Gaire`,
        short_name: `Asmita Gaire`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#333`,
        icon: `src/images/coffee.png` // This path is relative to the root of the site.
      }
    }, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`
  ]
};
