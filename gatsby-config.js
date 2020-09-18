module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
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
    "gatsby-plugin-offline",
  ],
}
