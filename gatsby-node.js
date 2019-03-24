const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
// const {fmImagesToRelative} = require('gatsby-remark-relative-images');
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      /* const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node */

      console.log('====================================');
      console.log(`POST:\n${JSON.stringify(post,null,2)}`);
      console.log('====================================');      
      createPage({
        //path: post.node.frontmatter.path,
        path: post.node.frontmatter.path===""?`/posts/${post.node.fields.slug}`:post.node.frontmatter.path,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          /* previous,
          next, */
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // fmImagesToRelative(node) 
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
