const path = require(`path`)

module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1440,
              linkImagesToOriginal: false,
              wrapperStyle: "margin-bottom: 18px",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: path.join(__dirname, `src`, `content`, `articles`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `content`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `STEM blog`,
        short_name: `STEM`,
        start_url: `/`,
        background_color: `#E5E5E5`,
        theme_color: `#E5E5E5`,
        display: `standalone`,
        icon: `src/assets/icon.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
