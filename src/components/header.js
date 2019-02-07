import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import headerStyles from '../styles/header.module.css'
import Logo from '../images/logoYellow.png'
import Line from './line'

const Header = ({ siteTitle, siteAbout, sitePortfolio, siteContact }) => (
  <section className={headerStyles.headerContainer}>
    <div className={headerStyles.logo}>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </div>
    <div className={headerStyles.name}>
      <h3>
        <Link className={headerStyles.link} to="/">
          {siteTitle}
        </Link>
      </h3>
    </div>

    <div className={headerStyles.pages}>
      <div className={headerStyles.aboutnav}>
        <h3>
          <Link to="/about/" className={headerStyles.link}>
            {siteAbout}
          </Link>
        </h3>
      </div>

      <div className={headerStyles.portfolio}>
        <h3>
          <Link to="/portfolio/" className={headerStyles.link}>
            {sitePortfolio}
          </Link>
        </h3>
      </div>

      <div className={headerStyles.contact}>
        <h3>
          <Link to="/contact/" className={headerStyles.link}>
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
