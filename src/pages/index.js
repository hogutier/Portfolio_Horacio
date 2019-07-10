import React from 'react'

import Layout from '../components/layout'
import HeroImage from '../components/imgLightbulb'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import Button from '../components/button'
import Typing from 'react-typing-animation'

import indexBodyStyles from '../styles/indexBody.module.css'
import iconRealEstate from '../images/iconRealEstate.png'

/* To include when these case studies are ready to publish
import iconBusyBus from '../images/iconBusyBus.png'
import iconPortfolio from '../images/iconPortfolio.png' */
import Line from '../components/line'

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
    <section className={indexBodyStyles.indexBodyContainer}>
      <div className={indexBodyStyles.welcome}>
        <Typing>
          <h2>
            Hi, I'm <span className={indexBodyStyles.myname}>Horacio</span> from
            Austin, Texas
            <Typing.Backspace count={13} />
            Monterrey, Mexico
          </h2>
        </Typing>
      </div>

      <div className={indexBodyStyles.productmanager}>
        <h3>Product Manager</h3>
        <p>
          Experienced product leader in the creation, launch, maintenance and
          management of software & services.
        </p>
      </div>
      <div className={indexBodyStyles.designerhero}>
        <h3>UI/UX Designer</h3>
        <p>
          Digital Designer with a passion for creating beautiful and functional
          user experiences.
        </p>
      </div>
      <div className={indexBodyStyles.developer}>
        <h3>Software Engineer</h3>
        <p>
          Fullstack Software Developer who focuses on clean, modern, scalable
          and efficient code.
        </p>
      </div>

      <div className={indexBodyStyles.heroimage}>
        <HeroImage />
      </div>
      <Line />
      <div className={indexBodyStyles.featuredprojects}>
        <h2>Featured Projects</h2>
      </div>

      <div className={indexBodyStyles.project1}>
        <Link to="/propertyvault/">
          <img src={iconRealEstate} alt="Property Vault Project" />
          <h3>Property Vault</h3>
          <p>
            UX/UI Design & <br />
            Branding
          </p>
          <Button name="More Details" />
        </Link>
      </div>

      {/*  Will include commented sections below when these case studies are ready to be published */}
      {/* <div className={indexBodyStyles.project2}>
        <Link to="/propertyvault/">
          <img src={iconBusyBus} alt="Busy Bus Project" />
          <h3>Public Transportation</h3>
          <p>
            UX/UI Design & <br />
            Development
          </p>
        </Link>
      </div>
      <div className={indexBodyStyles.project3}>
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

export default IndexPage
