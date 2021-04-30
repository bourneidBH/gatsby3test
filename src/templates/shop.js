import React from 'react'
import { graphql, Link } from "gatsby"
import PropTypes from 'prop-types'
import Pagination from '../components/pagination'

const ShopPage = ({data, pageContext}) => {
  const { edges: products } = data.allWpProduct
  return(
    <>
      <h1>All Products</h1>
      <div className="grid gap col-3">
        {products.map(product => (
          <Link to={`/product/${product.node.slug}`} key={product.node.id}>
            <div>
              <h2>{product.node.name}</h2>
              <p>{product.node.price}</p>
              <img src={product.node.featuredImage.node.sourceUrl} alt={product.node.featuredImage.node.atlText} width="300" />
            </div>
          </Link>
        ))}
      </div>
      <Pagination pageContext={pageContext} pathPrefix="/" />
    </>
  )
}

export default ShopPage

ShopPage.propTypes = {
  data: PropTypes.shape({
    allWcProducts: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
}

export const pageQuery = graphql`
  query ShopQuery($limit: Int!, $skip: Int!) {
    allWpProduct(
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ... on WpSimpleProduct {
            id
            name
            price
            slug
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  }
`