import React from 'react'
import { Link } from 'gatsby'
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti'

const iconSize = '30px'

const Pagination = ({ pageContext, pathPrefix }) => {
  const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext

  return (
    <nav className="pagination" role="navigation">
      {previousPagePath && (
        <div className="navbar-item">
          <Link to={`${previousPagePath}/`} rel="prev" title="previous page">
            <TiChevronLeftOutline size={iconSize} />
            <span className="sr-only">Previous</span>
          </Link>
        </div>
      )}
      {' '}
      <span>{humanPageNumber} of {numberOfPages}</span>
      {' '}
      {nextPagePath && (
        <div className="navbar-item">
          <Link to={`${nextPagePath}/`} rel="next" title="next page">
            <TiChevronRightOutline size={iconSize} />
            <span className="sr-only">Next</span>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Pagination
