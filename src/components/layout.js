import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
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
            <Link to="/contact/">
              <div className={footerStyles.message}>
                <svg
                  className={footerStyles.social}
                  alt="Message"
                  width="50"
                  height="38"
                  viewBox="0 0 50 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={footerStyles.social}
                    d="M25 20.4854L0.03125 0.25H49.9688L25 20.4854ZM25 25.8479L0 5.5875V37.75H50V5.5875L25 25.8479Z"
                    fill="#A7A7A7"
                  />
                </svg>
              </div>
            </Link>
            <a
              href="https://www.linkedin.com/in/hogutier/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={footerStyles.linkedin}>
                <svg
                  className={footerStyles.social}
                  alt="Linkedin"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={footerStyles.social}
                    d="M39.5833 0H10.4167C4.66458 0 0 4.66458 0 10.4167V39.5833C0 45.3354 4.66458 50 10.4167 50H39.5833C45.3375 50 50 45.3354 50 39.5833V10.4167C50 4.66458 45.3375 0 39.5833 0ZM16.6667 39.5833H10.4167V16.6667H16.6667V39.5833ZM13.5417 14.025C11.5292 14.025 9.89583 12.3792 9.89583 10.35C9.89583 8.32083 11.5292 6.675 13.5417 6.675C15.5542 6.675 17.1875 8.32083 17.1875 10.35C17.1875 12.3792 15.5562 14.025 13.5417 14.025ZM41.6667 39.5833H35.4167V27.9083C35.4167 20.8917 27.0833 21.4229 27.0833 27.9083V39.5833H20.8333V16.6667H27.0833V20.3438C29.9917 14.9563 41.6667 14.5583 41.6667 25.5021V39.5833Z"
                    fill="#A7A7A7"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://twitter.com/Horacio_Gtz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={footerStyles.twitter}>
                <svg
                  className={footerStyles.social}
                  alt="Twitter"
                  width="50"
                  height="42"
                  viewBox="0 0 50 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={footerStyles.social}
                    d="M50 5.49377C48.1604 6.31043 46.1833 6.86043 44.1083 7.10835C46.2271 5.8396 47.8542 3.82918 48.6187 1.43335C46.6375 2.60835 44.4417 3.46252 42.1042 3.92293C40.2354 1.92918 37.5667 0.68335 34.6167 0.68335C27.9937 0.68335 23.1271 6.86252 24.6229 13.2771C16.1 12.85 8.54167 8.76668 3.48125 2.56043C0.79375 7.17085 2.0875 13.2021 6.65417 16.2563C4.975 16.2021 3.39167 15.7417 2.01042 14.9729C1.89792 19.725 5.30417 24.1709 10.2375 25.1604C8.79375 25.5521 7.2125 25.6438 5.60417 25.3354C6.90833 29.4104 10.6958 32.375 15.1875 32.4584C10.875 35.8396 5.44167 37.35 0 36.7084C4.53958 39.6188 9.93333 41.3167 15.725 41.3167C34.7708 41.3167 45.5312 25.2313 44.8812 10.8042C46.8854 9.35627 48.625 7.55002 50 5.49377Z"
                    fill="#A7A7A7"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://github.com/hogutier"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={footerStyles.github}>
                <svg
                  className={footerStyles.social}
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={footerStyles.social}
                    d="M39.5833 0H10.4167C4.66458 0 0 4.66458 0 10.4167V39.5833C0 45.3354 4.66458 50 10.4167 50H39.5833C45.3375 50 50 45.3354 50 39.5833V10.4167C50 4.66458 45.3375 0 39.5833 0ZM30.2792 40.8125C29.4354 40.975 29.1667 40.4562 29.1667 40.0125V35.4396C29.1667 33.8833 28.6208 32.8708 28.0208 32.3542C31.7333 31.9417 35.6333 30.5312 35.6333 24.1312C35.6333 22.3104 34.9833 20.8229 33.9187 19.6583C34.0896 19.2375 34.6604 17.5417 33.7542 15.2479C33.7542 15.2479 32.3562 14.8 29.175 16.9562C27.8417 16.5812 26.4167 16.4 25 16.3917C23.5833 16.3979 22.1583 16.5812 20.8271 16.9521C17.6437 14.7958 16.2437 15.2437 16.2437 15.2437C15.3396 17.5396 15.9104 19.2333 16.0833 19.6563C15.0167 20.8229 14.3667 22.3083 14.3667 24.1292C14.3667 30.5125 18.2563 31.9437 21.9604 32.3667C21.4833 32.7833 21.0521 33.5167 20.9021 34.5958C19.95 35.0208 17.5396 35.7562 16.0521 33.2083C16.0521 33.2083 15.1708 31.6083 13.4958 31.4896C13.4958 31.4896 11.8708 31.4687 13.3812 32.5042C13.3812 32.5042 14.475 33.0167 15.2333 34.9417C15.2333 34.9417 16.1979 37.9167 20.8333 36.9083V40.0104C20.8333 40.45 20.5646 40.9667 19.7333 40.8125C13.1083 38.6104 8.33333 32.3625 8.33333 25C8.33333 15.7937 15.7958 8.33333 25 8.33333C34.2042 8.33333 41.6667 15.7937 41.6667 25C41.6667 32.3604 36.8979 38.6062 30.2792 40.8125V40.8125Z"
                    fill="#A7A7A7"
                  />
                </svg>
              </div>
            </a>
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
