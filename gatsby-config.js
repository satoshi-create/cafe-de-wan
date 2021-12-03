require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "cafe de wan",
    description: "犬と一緒にカフェを運営しています",
    lang: "ja",
    url: "https://cafe-de-wan.netlify.app",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cafe de wan`,
        short_name: `cafe de wan`,
        start_url: `/`,
        background_color: `#fff7e2`,
        theme_color: `#fff7e2`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: "Dancing Script",
    //           variants: ["700"],
    //         },
    //         {
    //           family: "Josefin Sans",
    //           variants: ["700"],
    //         },
    //         {
    //           family: "Noto Sans JP",
    //           variants: ["400"],
    //         },
    //       ],
    //     },
    //   },
    // },
  ],
};
