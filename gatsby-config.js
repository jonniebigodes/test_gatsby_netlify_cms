module.exports = {
  siteMetadata: {
    title: `test_netlify_cms_image`,
    author: `jonniebigodes`,
    description: `Example code for netlify cms and images`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
  },
  plugins: [
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        path:`${__dirname}/static/assets`,
        name:`assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
   /*  {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        // Path to your Netlify CMS config file
        cmsConfig: `/static/admin/config.yml`
      }
    }, */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          /* {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
              cmsConfig: `/static/admin/config.yml`,
            },
          }, */
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1500,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
         
          `gatsby-remark-prismjs`,
          {
            resolve:`gatsby-remark-copy-linked-files`,
            options:{
              destinationDir:`${__dirname}/static`
            }
          },
          {
            resolve:`gatsby-remark-copy-linked-files`,
            options:{
              destinationDir:`${__dirname}/static`
            }
          },
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    /* `gatsby-plugin-offline`, */
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify` 
  ],
}
