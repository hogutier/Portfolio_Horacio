import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PortfolioPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Portfolio Page</h1>
    <p>Welcome to my Portfolio Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PortfolioPage
