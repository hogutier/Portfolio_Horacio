import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const PortfolioPage = () => (
  <Layout>
    <section className="container">
      <div>
        <Link to="/propertyvault/">
          <h3>Property Vault</h3>
        </Link>
        <p>UX/UI Design & Branding</p>
      </div>

      <div>
        <h3>Busy Bus</h3>
        <p>UX/UI Design & Development</p>
      </div>
      <div>
        <h3>Personal Portfolio</h3>
        <p>UX/UI Design, Branding & Branding</p>
      </div>
    </section>
  </Layout>
)

export default PortfolioPage
