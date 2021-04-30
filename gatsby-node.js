const path = require(`path`)
const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            slug
            id
          }
        } 
      }
      allWpPage {
        nodes {
          title
          slug
          id
          uri
        }
      }
      allWpProduct {
        nodes {
          id
          name
          slug
        }
      }
    }
  `).then((result) => {
    // Single Post
    result.data.allWpPost.edges.forEach(({node}) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          // This is the $slug variable
          // passed to post.js
          slug: node.slug,
        },
      })
    })

    // Pages
    result.data.allWpPage.nodes.forEach((node) => {
      createPage({
        path: node.uri,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          // This is the $slug variable
          // passed to page.js
          slug: node.slug,
        },
      })
    })

    // Single Product
    result.data.allWpProduct.nodes.forEach((node) => {
      createPage({
        path: `/product/${node.slug}/`,
        component: path.resolve(`./src/templates/product.js`),
        context: {
          id: node.id,
        },
      })
    })

    // Shop Page
    paginate({
      createPage,
      items: result.data.allWpProduct.nodes,
      itemsPerPage: 9,
      pathPrefix: `/products`,
      component: path.resolve('./src/templates/shop.js'),
    })
  })
}