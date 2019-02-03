import React from 'react'

import Layout from '../components/layout'
import HeroImage from '../components/imgLightbulb'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import '../components/indexBody.css'
import iconRealEstate from '../images/iconRealEstate.png'
import iconBusyBus from '../images/iconBusyBus.png'
import iconPortfolio from '../images/iconPortfolio.png'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Horacio Portfolio Home"
      keywords={[
        'Product Manager',
        'UI/UX Designer',
        'Developer',
        'Horacio',
        'Portfolio'
      ]}
    />
    <section className="indexBodyContainer">
      <h1 className="welcome">Hi, I'm Horacio from Austin, Texas</h1>
      <div className="productmanager">
        <h3>Product Manager</h3>
        <p>
          Experienced product leader in the creation, launch, maintenance and
          management of software & services.
        </p>
      </div>
      <div className="designer">
        <h3>UI/UX Designer</h3>
        <p>
          Digital Designer with a passion for creating beautiul and functional
          user experiences.
        </p>
      </div>
      <div className="developer">
        <h3>Software Engineer</h3>
        <p>
          Fullstack Software Developer who focuses on clean, modern, scalable
          and efficient code.
        </p>
      </div>

      <div
        className="heroimage"
        style={{ maxWidth: '300px', marginBottom: '1.45rem' }}
      >
        <HeroImage />
      </div>
      <div className="featuredprojects">
        <h2>Featured Projects</h2>
      </div>

      <div className="project1">
        <Link to="/propertyvault/">
          <img src={iconRealEstate} alt="Property Vault Project" />
        </Link>
        <p>UX/UI Design & Branding</p>
      </div>
      <div className="project2">
        <Link to="/propertyvault/">
          <img src={iconBusyBus} alt="Busy Bus Project" />
        </Link>
        <p>UX/UI Design & Development</p>
      </div>
      <div className="project3">
        <Link to="/propertyvault/">
          <img src={iconPortfolio} alt="Portfolio Project" />
        </Link>
        <p>UX/UI Design, Branding & Development</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
