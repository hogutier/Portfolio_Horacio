import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

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
    <h1>Hi, I'm Horacio from Austin, Texas</h1>
    <h2>Product Manager</h2>
    <p>
      Experienced product leader in the creation, launch, maintenance and
      management of software & services.
    </p>
    <h2>UI/UX Designer</h2>
    <p>
      Digital Designer with a passion for creating beautiul and functional user
      experiences.
    </p>
    <h2>Software Engineer</h2>
    <p>
      Fullstack Software Developer who focuses on clean, modern, scalable and
      efficient code.
    </p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <h2>Featured Projects</h2>
    <div>
      <h3>Property Vault</h3>
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
  </Layout>
)

export default IndexPage
