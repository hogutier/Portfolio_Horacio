import React from 'react'
import Layout from '../components/layout'
import DesktopHomeImage from '../components/imgDesktopHome'
import MobileHomeImage from '../components/imgMobileHome'
import iconOverview from '../images/iconOverview.png'
import iconDiscovery from '../images/iconDiscovery.png'

export default () => (
  <Layout>
    <div style={{ color: 'teal', backgroundColor: '#191919' }}>
      <section style={{ color: '#B6B6B6', backgroundColor: '#191919' }}>
        <h1>Property Vault</h1>
        <p>
          Property Vault is a secure web application that was created with a
          specific focus on the Real Estate market to help Property Managers
          store, access and share property & tenant information in one place.
        </p>
        <a href="https://invis.io/Z6OXOYQHSVP">
          <button>View Prototype</button>
        </a>
        <p />
        <DesktopHomeImage />
        <p />
        <MobileHomeImage />

        <div>
          <h3>Design Roles</h3>
          <ul>
            <li>UX Research & Strategy</li>
            <li>Information Architecture</li>
            <li>Branding</li>
            <li>Visual Design</li>
            <li>Wireframes & Prototypes</li>
            <li>User Testing</li>
          </ul>
          <h3>Deliverables</h3>
          <ul>
            <li>User Surveys & Personas</li>
            <li>Competitive Analysis</li>
            <li>Logo & Brand Style Guide</li>
            <li>User Stories & Flows</li>
            <li>Wireframes & Prototypes</li>
            <li>Usability Testing</li>
          </ul>
          <h3>Project Duration</h3>
          <ul>
            <li>2 months</li>
          </ul>
          <h3>Tools</h3>
          <ul>
            <li>Google Forms & Draw.io</li>
            <li>Balsamiq & Usability Hub</li>
            <li>Figma & InVision</li>
          </ul>
        </div>
      </section>

      <section style={{ color: '#191919', backgroundColor: '#F2F2F2' }}>
        <img src={iconOverview} alt="Overview" />
        <h2>Overview</h2>
        <h3>The Problem</h3>
        <p>
          Most online storage & collaboration solutions are too broad and lack
          focus to solve a problem for a specific industry. This oftentimes
          leads to user confusion making it difficult to understand how to apply
          these tools in the business environment.
        </p>
        <h3>The Solution</h3>
        <p>
          Through comprehensive user research, competitive analysis and user
          testing, we created Property Vault - a secure online storage web
          application with a specific focus on the Real Estate Market. Our
          process (detailed in the next section) found that our users wanted an
          easy way to store, access and share property & tenant information in
          one place.
        </p>
      </section>

      <section style={{ color: 'white', backgroundColor: 'black' }}>
        <img src={iconDiscovery} alt="Overview" />
        <h2>Discovery Phase</h2>
        <h3>User Research</h3>
        <p>
          Before diving into any sketches or design tools, it was very important
          to become familiar with our potential users and better understand
          their needs. Below are the key survey takeaways:
        </p>
        <ul>
          <li>
            72% of participants believed the most important features are:
            <ul>
              <li>Sharing files with others.</li>
              <li>Controlling who has access to view/edit files.</li>
              <li>Storing files/folders & organizing them by category.</li>
              <li>
                Accessing content from anywhere with an Internet connection.
              </li>
            </ul>
          </li>
          <li>
            90% of participants will use a Desktop or Laptop to access the
            online storage service.
          </li>
          <li>
            95% of participants liked Email as the preferred method to share
            files/folders.
          </li>
          <li>
            79% of participants liked the idea of using a Property Management
            Cloud Storage Service
          </li>
        </ul>
        <a href="https://docs.google.com/forms/d/1gV6LB6otU2QJBnmYf1cgYuiJhQyCauzxu3mzxNWFg-Q/edit#responses">
          <button>View Survey</button>
        </a>
        <h3>Competitive Analysis</h3>
        <h3>User Personas</h3>
      </section>
    </div>
  </Layout>
)
