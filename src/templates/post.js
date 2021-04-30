import React from 'react'
import { graphql } from "gatsby"

const PostTemplate = ({data}) => {
  const post = data.allWpPost.nodes[0]
  const {
    title,
    date, 
    content
  } = post

  return(
    <div style={{margin: '0 auto'}}>
      <h1>{title}</h1>
      <p>{date}</p>
      <div>{content}</div>
    </div>
  )
}

export default PostTemplate

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`