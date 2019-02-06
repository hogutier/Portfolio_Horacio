import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import HoracioImage from '../components/imgHoracio'

import iconDesigner from '../images/iconDesigner.png'
import iconProductMgr from '../images/iconProductMgr.png'
import iconDeveloper from '../images/iconDeveloper.png'

import Line from '../components/line'
import '../styles/about.css'

export default () => (
  <Layout>
    <section className="aboutContainer">
      <div className="about">
        <h1>About Me</h1>
        <p>
          I’m a veteran in the technology industry with 20+ years of experience
          working for tech giants like Cisco Systems and Dell Technologies. I’m
          the CEO and founder of Perfectec, a software solutions company, where
          I currently offer consulting, product management, design and software
          development of web/mobile apps and e-commerce stores to small/medium
          businesses and government institutions in the United States and
          Mexico.
        </p>
        <p>
          Throughout my career, I’ve lead cross-functional teams to develop
          various software and service products from concept to launch. I’ve
          also been directly responsible for delivering on the financial goals
          and growing sales for these products.
        </p>
        <Link to="/contact/">
          <button className="button">Contact Me</button>
        </Link>
      </div>

      <div className="photo">
        <HoracioImage />
      </div>
      <Line />
      <h2 className="skills">Skills</h2>
      <div className="designer">
        <img className="icon" src={iconDesigner} alt="Designer Icon" />
        <h3>UX/UI Designer</h3>
      </div>

      <div className="designerskills">
        <ul>
          <li>UX Research & Strategy</li>
          <li>Information Architecture</li>
          <li>Branding</li>
          <li>Visual Design</li>
          <li>Wireframes & Prototypes</li>
          <li>User Testing</li>
        </ul>
      </div>
      <div className="product">
        <img className="icon" src={iconProductMgr} alt="Product Manager Icon" />
        <h3>Product Manager</h3>
      </div>

      <div className="productskills">
        <ul>
          <li>Product Strategy & Vision</li>
          <li>Marketing Requirements</li>
          <li>Business Case</li>
          <li>Roadmapping</li>
          <li>Portfolio Management</li>
          <li>Pricing & Merchandising</li>
        </ul>
      </div>
      <div className="software">
        <img className="icon" src={iconDeveloper} alt="Product Manager Icon" />
        <h3>Software Engineer</h3>
      </div>

      <div className="softwareskills">
        <ul>
          <li>Javascript</li>
          <li>React - Redux</li>
          <li>HTML - CSS - JQuery</li>
          <li>Node - Express - Sequelize</li>
          <li>PostgreSQL - GitHub</li>
          <li>Heroku - Netlify - Gatsby</li>
        </ul>
      </div>
    </section>
  </Layout>
)
