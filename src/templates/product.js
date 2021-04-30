import React, { Component } from "react"
import { graphql } from "gatsby"
import FsLightbox from 'fslightbox-react'
import '../scss/main.scss'

class Product extends Component {
  constructor() {
    super()
    this.state = {
      slideIndex: 1,
      galleryLightboxOpen: false,
    }
  }

  handleLightboxToggle = () => this.setState({
    galleryLightboxOpen: !this.state.galleryLightboxOpen
  })

  render() {
    const { data } = this.props
    const { 
      galleryImages,
      featuredImage,
      name,
      description,
      price,
    } = data.wpProduct

    const { galleryLightboxOpen } = this.state
    const lightboxImages = galleryImages.nodes.length > 0 ? galleryImages.nodes.map(img => img.sourceUrl) : [featuredImage.node.sourceUrl]

    return(
      <div style={{margin: '0 auto'}}>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <div onClick={this.handleLightboxToggle} onKeyDown={this.handleLightboxToggle} role="button" tabIndex="0">
          <img src={featuredImage.node.sourceUrl} alt={featuredImage.node.altText} />
        </div>
        <FsLightbox
          toggler={ galleryLightboxOpen }
          sources={ lightboxImages }
          slide={this.state.slideIndex}
          type="image"
        />
      </div>
    )
  }
}

export default Product

export const query = graphql`
  query($id: String!) {
    wpProduct(id: { eq: $id }) {
      ... on WpSimpleProduct {
        id
        name
        price
        slug
        galleryImages {
          nodes {
            sourceUrl
            altText
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`