module.exports = {
  siteMetadata: {
    title: `Alldrit Tech | Make your dream a reality`,
    description: `Hello World! My name is Devin and I'm a computer engineer, founder of a company, singer song writer and I'm trying to change the world one line of code at a time.`,
    author: `Devin Alldrit`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alldrit Tech | Make your dream a reality`,
        short_name: `Alldrit`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
