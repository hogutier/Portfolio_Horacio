import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

import logoMessage from '../images/logoMessage.svg'
import logoTwitter from '../images/logoTwitter.svg'
import logoLinkedin from '../images/logoLinkedin.svg'
import logoGithub from '../images/logoGithub.svg'
import Header from './header'
import Line from './line'

import layoutStyles from '../styles/layout.module.css'
import footerStyles from '../styles/footer.module.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            about
            contact
            portfolio
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteAbout={data.site.siteMetadata.about}
          siteContact={data.site.siteMetadata.contact}
          sitePortfolio={data.site.siteMetadata.portfolio}
        />
        <div className={layoutStyles.layoutStyles}>
          <div>{children}</div>
        </div>

        <footer className={footerStyles.footerContainer}>
          <Line />
          <div className={footerStyles.connect}>
            <h2>Connect with me</h2>
          </div>

          <div className={footerStyles.methods}>
            <div className={footerStyles.message}>
              <Link to="/contact/">
                <img
                  className={footerStyles.social}
                  src={logoMessage}
                  alt="Message"
                />
              </Link>
            </div>
            <div className={footerStyles.linkedin}>
              <a
                href="https://www.linkedin.com/in/hogutier/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={footerStyles.social}
                  src={logoLinkedin}
                  alt="Linkedin"
                />
              </a>
            </div>
            <div className={footerStyles.twitter}>
              <a
                href="https://twitter.com/Horacio_Gtz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={footerStyles.social}
                  src={logoTwitter}
                  alt="Twitter"
                />
              </a>
            </div>
            <div className={footerStyles.github}>
              <a
                href="https://github.com/hogutier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={footerStyles.social}
                  src={logoGithub}
                  alt="github"
                />
              </a>
            </div>
          </div>
          <div className={footerStyles.date}>
            <p>© {new Date().getFullYear()} Horacio Gutierrez</p>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
