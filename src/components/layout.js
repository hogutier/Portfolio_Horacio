import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
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
            //backgroundColor: '#191919',
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0
            //color: '#FFFFFF'
          }}
        >
          <div>{children}</div>

          <footer>
            <h2>Connect with me</h2>
            <Link to="/contact/">Message</Link>
            <div />
            <a href="https://www.linkedin.com/in/hogutier/">LinkedIn</a>
            <div />
            <a href="https://twitter.com/Horacio_Gtz">Twitter</a>
            <div />
            <div />
            <a href="https://github.com/hogutier">Github</a>
            <div />© {new Date().getFullYear()} Horacio Gutierrez{' '}
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
