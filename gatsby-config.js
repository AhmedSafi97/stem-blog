module.exports = {
  plugins: [
    'gatsby-plugin-offline',
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
  ],
}
