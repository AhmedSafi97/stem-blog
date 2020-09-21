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
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
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
        path: path.join(__dirname, `src`, `content`),
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
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`title`],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            path: node => node.fields.slug,
          },
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
        icon: path.join(`src`, `assets`, `icon.svg`),
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: path.join(__dirname, "src", "cms", "cms.js"),
      },
    },
    "gatsby-plugin-netlify",
  ],
}
