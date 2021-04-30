import React from 'react'
import { graphql } from "gatsby"

const PageTemplate = ({data}) => {
  const page = data.wpPage
  const {
    title,
    date, 
    content
  } = page

  return(
    <div style={{margin: '0 auto'}}>
      <h1>{title}</h1>
      <p>{date}</p>
      <div>{content}</div>
    </div>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    wpPage(slug: { eq: $slug }) {
      title
      content
      date(formatString: "MMMM DD YYYY")
    }
  }
`