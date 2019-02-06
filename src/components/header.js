import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import '../styles/header.css'
import Logo from '../images/logoYellow.png'
import Line from './line'

const Header = ({ siteTitle, siteAbout, sitePortfolio, siteContact }) => (
  <section className="headerContainer">
    <div className="logo">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </div>
    <div className="name">
      <h3>
        <Link className="link" to="/">
          {siteTitle}
        </Link>
      </h3>
    </div>

    <div className="pages">
      <div className="aboutnav">
        <h3>
          <Link to="/about/" className="link">
            {siteAbout}
          </Link>
        </h3>
      </div>

      <div className="portfolio">
        <h3>
          <Link to="/portfolio/" className="link">
            {sitePortfolio}
          </Link>
        </h3>
      </div>

      <div className="contact">
        <h3>
          <Link to="/contact/" className="link">
            {siteContact}
          </Link>
        </h3>
      </div>
    </div>
    <Line />
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
