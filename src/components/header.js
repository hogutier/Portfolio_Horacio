import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../images/logoYellow.png'

const Header = ({ siteTitle, siteAbout, sitePortfolio, siteContact }) => (
  <div
    style={{
      backgroundColor: '#191919',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <img src={Logo} alt="Logo" />
      <h3 style={{ margin: 0, fontSize: '2.4rem' }}>
        <Link
          to="/"
          style={{
            color: '#E2BE1C',
            textDecoration: 'none'
          }}
        >
          {siteTitle}
        </Link>
      </h3>

      <h3 style={{ margin: 0, fontSize: '2.4rem' }}>
        <Link
          to="/about/"
          style={{
            color: '#E2BE1C',
            textDecoration: 'none'
          }}
        >
          {siteAbout}
        </Link>
      </h3>

      <h3 style={{ margin: 0, fontSize: '2.4rem' }}>
        <Link
          to="/portfolio/"
          style={{
            color: '#E2BE1C',
            textDecoration: 'none'
          }}
        >
          {sitePortfolio}
        </Link>
      </h3>
      <h3 style={{ margin: 0, fontSize: '2.4rem' }}>
        <Link
          to="/contact/"
          style={{
            color: '#E2BE1C',
            textDecoration: 'none'
          }}
        >
          {siteContact}
        </Link>
      </h3>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
