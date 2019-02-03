import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

import logoMessage from '../images/logoMessage.png'
import logoTwitter from '../images/logoTwitter.png'
import logoLinkedin from '../images/logoLinkedin.png'
import logoGithub from '../images/logoGithub.png'
import Header from './header'
import './layout.css'
import './footer.css'

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
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            color: '#B6B6B6',
            backgroundColor: '#191919'
          }}
        >
          <div>{children}</div>

          <footer className="footerContainer">
            <div className="connect">
              <h2>Connect with me</h2>
            </div>

            <div className="methods">
              <div className="message">
                <Link to="/contact/">
                  <img src={logoMessage} alt="Message" />
                </Link>
              </div>

              <div className="linkedin">
                <a href="https://www.linkedin.com/in/hogutier/">
                  <img src={logoLinkedin} alt="Linkedin" />
                </a>
              </div>

              <div className="twitter">
                <a href="https://twitter.com/Horacio_Gtz">
                  <img src={logoTwitter} alt="Twitter" />
                </a>
              </div>

              <div className="github">
                <a href="https://github.com/hogutier">
                  <img src={logoGithub} alt="github" />
                </a>
              </div>
            </div>

            <div className="date">
              <p>© {new Date().getFullYear()} Horacio Gutierrez</p>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
