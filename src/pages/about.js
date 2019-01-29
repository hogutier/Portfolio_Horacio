import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default () => (
  <Layout>
    <div style={{ color: 'teal' }}>
      <h1>About Me</h1>
      <p>
        I’m a veteran in the technology industry with 20+ years of experience
        working for tech giants like Cisco Systems and Dell Technologies. I’m
        the CEO and founder of Perfectec, a software solutions company, where I
        currently offer consulting, product management, design and software
        development of web/mobile apps and e-commerce stores to small/medium
        businesses and government institutions in the United States and Mexico.
      </p>
      <p>
        Throughout my career, I’ve lead cross-functional teams to develop
        various software and service products from concept to launch. I’ve also
        been directly responsible for delivering on the financial goals and
        growing sales for these products.
      </p>

      <Link to="/contact/">
        <button>Contact Me</button>
      </Link>
    </div>
  </Layout>
)
