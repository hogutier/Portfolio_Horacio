import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import headerStyles from '../styles/header.module.css'
import Logo from '../images/logoYellow.png'
import Line from './line'
import HamburgerMenu from './hamburger'

const Header = ({ siteTitle, siteAbout, sitePortfolio, siteContact }) => (
  <section className={headerStyles.headerContainer}>
    <div className="hamburger">
      <HamburgerMenu right pageWrapId={'page-wrap'} />
    </div>
    <div className={headerStyles.logo}>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </div>
    <div className={headerStyles.name}>
      <h5>
        <Link className={headerStyles.link} to="/">
          {siteTitle}
        </Link>
      </h5>
    </div>

    <div id="page-wrap" className={headerStyles.pages}>
      <div className={headerStyles.aboutnav}>
        <h5>
          <Link to="/about/" className={headerStyles.link}>
            {siteAbout}
          </Link>
        </h5>
      </div>

      <div className={headerStyles.portfolio}>
        <h5>
          <Link to="/portfolio/" className={headerStyles.link}>
            {sitePortfolio}
          </Link>
        </h5>
      </div>

      <div className={headerStyles.contact}>
        <h5>
          <Link to="/contact/" className={headerStyles.link}>
            {siteContact}
          </Link>
        </h5>
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
