module.exports = {
  siteMetadata: {
    title: "cafe de wan",
    description:"犬と一緒にカフェを運営しています",
    lang:"ja",
    url:"https://goofy-neumann-595c81.netlify.app/"
    
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
