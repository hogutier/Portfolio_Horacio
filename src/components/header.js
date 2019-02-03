import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './header.css'
import Logo from '../images/logoYellow.png'

const Header = ({ siteTitle, siteAbout, sitePortfolio, siteContact }) => (
  <div className="headerContainer">
    <div
      className="logo"
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem'
      }}
    >
      <Link
        to="/"
        style={{
          color: '#E2BE1C',
          textDecoration: 'none'
        }}
      >
        <img src={Logo} alt="Logo" />
      </Link>
    </div>
    <div className="name">
      <div>
        <h3>
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
      </div>
    </div>

    <div className="pages">
      <div className="about">
        <h3>
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
      </div>

      <div className="portfolio">
        <h3>
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
      </div>

      <div className="contact">
        <h3>
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
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
