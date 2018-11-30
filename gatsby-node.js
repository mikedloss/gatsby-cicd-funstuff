/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const slash = require('slash')


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    console.log(createPage)
    return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsBlogPost{
          edges {
            node {
              title
              bodyContent
              slugslug
            }
          }
        }
      }
    `).then(result => {
        console.log(result.data.allDatoCmsBlogPost)
        if (result.errors) reject(result.errors)

        // create blog page by using the template
        const blogTemplate = path.resolve('./src/templates/blog_post.js')
        result.data.allDatoCmsBlogPost.edges.map(post => {
            createPage({
                path: `/blog/${post.node.slugslug}`,
                component: slash(blogTemplate),
                context: { title: post.node.title }
            })
        })
        resolve()
    })
  })
}