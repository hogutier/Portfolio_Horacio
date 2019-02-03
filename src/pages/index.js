import React from 'react'

import Layout from '../components/layout'
import HeroImage from '../components/imgLightbulb'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import '../components/indexBody.css'

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
        <h2>Product Manager</h2>
        <p>
          Experienced product leader in the creation, launch, maintenance and
          management of software & services.
        </p>
      </div>
      <div className="designer">
        <h2>UI/UX Designer</h2>
        <p>
          Digital Designer with a passion for creating beautiul and functional
          user experiences.
        </p>
      </div>
      <div className="developer">
        <h2>Software Engineer</h2>
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
          <h3>Property Vault</h3>
        </Link>
        <p>UX/UI Design & Branding</p>
      </div>
      <div className="project2">
        <h3>Busy Bus</h3>
        <p>UX/UI Design & Development</p>
      </div>
      <div className="project3">
        <h3>Personal Portfolio</h3>
        <p>UX/UI Design, Branding & Branding</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
