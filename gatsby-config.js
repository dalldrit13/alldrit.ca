module.exports = {
  siteMetadata: {
    title: `Alldrit Tech | Make your dream a reality`,
    description: `Hello World! My name is Devin and I'm a computer engineer, founder of a company, singer song writer and I'm trying to change the world one line of code at a time.`,
    author: `Devin Alldrit`,
    // Use the existing PNG logo since there is no SVG version
    icon: '/images/logo.png',
    siteUrl: 'https://alldrit.ca',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/404.html'],
      },
    },
  ],
}
