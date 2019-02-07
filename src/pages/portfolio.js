import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import portfolioStyles from '../styles/portfolio.module.css'
import iconRealEstate from '../images/iconRealEstate.png'

/*  Will include commented sections below when these case studies are ready to be published 
 import iconBusyBus from '../images/iconBusyBus.png'
import iconPortfolio from '../images/iconPortfolio.png' */

const PortfolioPage = () => (
  <Layout>
    <section className={portfolioStyles.portfolioContainer}>
      <div className={portfolioStyles.propertyVault}>
        <Link to="/propertyvault/">
          <img src={iconRealEstate} alt="Property Vault Project" />
          <h3>Property Vault</h3>
          <p>
            UX/UI Design & <br />
            Branding
          </p>
        </Link>
      </div>

{/*  Will include commented sections below when these case studies are ready to be published */}
      {/* <div className={portfolioStyles.busyBus}>
        <Link to="/propertyvault/">
          <img src={iconBusyBus} alt="Busy Bus Project" />
          <h3>Public Transportation</h3>
          <p>
            UX/UI Design & <br />
            Development
          </p>
        </Link>
      </div>

      <div className={portfolioStyles.personalPortfolio}>
        <Link to="/propertyvault/">
          <img src={iconPortfolio} alt="Portfolio Project" />
          <h3>Portfolio</h3>
          <p>
            UX/UI Design, Branding & <br />
            Development
          </p>
        </Link>
      </div> */}
    </section>
  </Layout>
)

export default PortfolioPage
