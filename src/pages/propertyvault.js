import React from 'react'
import Layout from '../components/layout'
import propertyVaultStyles from '../styles/propertyvault.module.css'

import DesktopHomeImage from '../components/imgDesktopHome'
import MobileHomeImage from '../components/imgMobileHome'
import iconOverview from '../images/iconOverview.png'
import iconBranding from '../images/iconBranding.png'
import iconDiscovery from '../images/iconDiscovery.png'
import iconIA from '../images/iconIA.png'
import iconConclusion from '../images/iconConclusion.png'
import iconDesigner from '../images/iconDesigner.png'
import iconProductMgr from '../images/iconProductMgr.png'
import iconDeveloper from '../images/iconDeveloper.png'
import CompetitiveAnalysis from '../images/CompetitiveAnalysis.png'
import PersonaA from '../images/PersonaA.png'
import PersonaB from '../images/PersonaB.png'
import LogoSketches from '../images/LogoSketches.png'
import LogoRefined from '../images/LogoRefined.png'
import BrandStyleGuide from '../images/BrandStyleGuide.png'
import SignUpProcess from '../images/SignUpProcess.png'
import ViewFilesProcess from '../images/ViewFilesProcess.png'
import RolesAccessProcess from '../images/RolesAccessProcess.png'
import Sitemap from '../images/Sitemap.png'
import PenPaperWireframes from '../images/PenPaperWireframes.png'
import DigitalWireframes from '../images/DigitalWireframes.png'
import LowFidelityPrototype from '../images/LowFidelityPrototype.png'
import HighFidelityPrototype from '../images/HighFidelityPrototype.png'
import ABLogo from '../images/ABLogo.png'
import ABDesktopHome from '../images/ABDesktopHome.png'
import ABMobileHome from '../images/ABMobileHome.png'
import HomepageSketch from '../images/HomepageSketch.png'
import HomepageWireframe from '../images/HomepageWireframe.png'
import HomepageMockup from '../images/HomepageMockup.png'

export default () => (
  <Layout>
    <section className={propertyVaultStyles.propertyVaultContainer}>
      <article className={propertyVaultStyles.intro}>
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
        <div className={propertyVaultStyles.prototypesContainer}>
          <div className={propertyVaultStyles.desktopHomeImage}>
            <DesktopHomeImage />
          </div>

          <div className={propertyVaultStyles.mobileHomeImage}>
            <MobileHomeImage />
          </div>
        </div>

 
          
    <div className={propertyVaultStyles.rolesContainer}>
        <div className={propertyVaultStyles.design}>
          <img className={propertyVaultStyles.icon} src={iconDesigner} alt="Design Roles Icon" />
          <h3>Design Roles</h3>
        </div>

        <div className={propertyVaultStyles.designroles}>
          <ul>
            <li>UX Research & Strategy</li>
            <li>Information Architecture</li>
            <li>Branding</li>
            <li>Visual Design</li>
            <li>Wireframes & Prototypes</li>
            <li>User Testing</li>
          </ul>
        </div>
          
          
        <div className={propertyVaultStyles.deliverables}>
        <img className={propertyVaultStyles.icon} src={iconProductMgr} alt="Deliverables Icon" />
        <h3>Deliverables</h3>
        </div>
        
        <div className={propertyVaultStyles.deliverableslist}>
              <ul>
                <li>User Surveys & Personas</li>
                <li>Competitive Analysis</li>
                <li>Logo & Brand Style Guide</li>
                <li>User Stories & Flows</li>
                <li>Wireframes & Prototypes</li>
                <li>Usability Testing</li>
              </ul>
        </div>
          
          <div className={propertyVaultStyles.durationtools}>
            <div className={propertyVaultStyles.duration}>
            <img className={propertyVaultStyles.icon} src={iconDeveloper} alt="Developer Icon" />
              <h3>Project Duration</h3>
              <ul>
                <li>2 months</li>
              </ul>
            </div>
            
            <div className={propertyVaultStyles.tools}>
              <img className={propertyVaultStyles.icon} src={iconDeveloper} alt="Developer Icon" />
              <h3>Tools</h3>
              <ul>
                <li>Google Forms & Draw.io</li>
                <li>Balsamiq & Usability Hub</li>
                <li>Figma & InVision</li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      <article className={propertyVaultStyles.overview}>
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
      </article>

      <article className={propertyVaultStyles.discovery}>
        <img src={iconDiscovery} alt="Discovery Phase" />
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
        <a href="https://docs.google.com/forms/d/1gV6LB6otU2QJBnmYf1cgYuiJhQyCauzxu3mzxNWFg-Q/edit?usp=sharing">
          <button>View Survey</button>
        </a>
        <h3>Competitive Analysis</h3>
        <img src={CompetitiveAnalysis} alt="Competitive Analysis Chart" />
        <p>To view more details, click on the button below:</p>
        <a href="https://drive.google.com/open?id=16m4NiOa0KVsNUPanjVzKXqxtm5H-eBKxlwqL_4nDsYs">
          <button>SWOT Analysis</button>
        </a>
        <h3>User Personas</h3>
        <p>
          After analyzing the user survey results, I was able to validate many
          assumptions, understand user demographics and preferences of users in
          our target market. With this information, the following user personas
          were born:
        </p>
        <img src={PersonaA} alt="User Persona Tom" />
        <img src={PersonaB} alt="User Persona Mike" />
      </article>

      <article className={propertyVaultStyles.branding}>
        <img src={iconBranding} alt="Branding & Identity" />
        <h2>Branding & Identity</h2>
        <h3>The Logo</h3>
        <p>
          After meeting with the client to get a good feel for what they were
          looking for and stand for with their brand, I started with the
          following sketches for their logo:
        </p>
        <img src={LogoSketches} alt="Logo Sketches" />
        <p>
          Once the client showed a preference on what type of logo they liked,
          the following refined options were created:
        </p>
        <img src={LogoRefined} alt="Logo Refined Mockups" />
        <h3>Brand Style Guide</h3>
        <p>
          After sketching and defining the target market for this product and
          the feelings the client wanted to convey, the following style guide
          was created:
        </p>
        <img src={BrandStyleGuide} alt="Brand Style Guide" />
      </article>

      <article className={propertyVaultStyles.ia}>
        <img src={iconIA} alt="Information Architecture" />
        <h2>Information Architecture</h2>
        <h3>User Stories</h3>
        <p>
          Below are the user flows for our Minimum Viable Product (MVP) that
          represent the most important needs of our user personas:
        </p>
        <ul>
          <li>
            As a property manager, I want to sign up for the cloud service
          </li>
          <li>
            As a tenant, I want to view a file/folder that was shared with me
          </li>
          <li>
            As an admin, I want to configure available roles & access control
          </li>
        </ul>
        <a href="https://drive.google.com/open?id=1GodrqA5JKi_Cag9u7k5ctZ9m3kGfXpBvCmyBpCIjI6M">
          <button>All Stories</button>
        </a>
        <h3>User Flows</h3>
        <p>
          With the information gathered in user research, the next step was to
          clearly document what our web application will do. Based on this, I
          put myself in the shoes of our user personas to create the following
          user stories:{' '}
        </p>
        <h4>Sign up process</h4>
        <img src={SignUpProcess} alt="Sign Up Process" />
        <h4>View file/folder shared with tenant</h4>
        <img src={ViewFilesProcess} alt="View Files/Folders Process" />
        <h4>Configure roles & access control</h4>
        <img src={RolesAccessProcess} alt="Configure roles & access control" />

        <a href="https://drive.google.com/file/d/1lKziE9i_QQKT_BM5vVl5dsAilqEhreZZ/view">
          <button>All User Flows</button>
        </a>

        <h3>Sitemap</h3>
        <p>
          Now that we have a clear idea on what our web application will do with
          the research we performed, user stories and user flows, in this next
          step I created the following sitemap:
        </p>
        <img src={Sitemap} alt="Sitemap" />
        <h3>Pen & Paper Wireframes</h3>
        <p>
          This phase of the project was the first attempt at visualizing all of
          the abstract concepts conceptualized before. To keep the creativity at
          its best, the following wireframes were created with pen & paper to
          figure out the best possible layouts to apply to this product:
        </p>
        <img src={PenPaperWireframes} alt="Pen & Paper Wireframes" />
        <h3>Digital Wireframes</h3>
        <p>
          With a better idea on which sketch layouts worked best, the following
          digital wireframes were created using Balsamiq:
        </p>
        <img src={DigitalWireframes} alt="Digital Wireframes" />
        <h3>Prototypes</h3>
        <p>
          Using Figma & InVision and referencing the brand style guide, the
          following prototypes were created:
        </p>
        <a href="https://projects.invisionapp.com/share/ACOGLHEJUFK#/screens">
          <img src={LowFidelityPrototype} alt="Low Fidelity Prototype" />
        </a>
        <a href="https://projects.invisionapp.com/share/Z6OXOYQHSVP#/screens">
          <img src={HighFidelityPrototype} alt="High Fidelity Prototype" />
        </a>
        <h3>Preference A/B Tests</h3>
        <p>
          To help make specific design decisions, the following preference tests
          were performed:
        </p>
        <h4>The Logo</h4>
        <div>
          <img src={ABLogo} alt="Logo A/B Test" />
        </div>

        <a href="https://app.usabilityhub.com/tests/1acf51d436ec/results/d1166ccf5bb8">
          <button>See Test Details</button>
        </a>
        <h4>Desktop Dashboard Home</h4>
        <div>
          <img src={ABDesktopHome} alt="Desktop Dashboard Home A/B Test" />
        </div>
        <a href="https://app.usabilityhub.com/tests/bb420b68792a/results/8992c776c275">
          <button>See Test Details</button>
        </a>
        <h4>Mobile Dashboard Home</h4>
        <div>
          <img src={ABMobileHome} alt="Mobile Dashboard Home A/B Test" />
        </div>
        <a href="https://app.usabilityhub.com/tests/cf94a87464a0/results/f4f2e46afa9f">
          <button>See Test Details</button>
        </a>
      </article>
      <article className={propertyVaultStyles.conclusion}>
        <img src={iconConclusion} alt="Conclusion" />
        <h2>Conclusion</h2>
        <p>
          This project was a wonderful experience and I am very proud I helped
          Property Vault become a web application that makes it easy for
          Property Managers to keep property & tenant files organized in one
          place and have granular control on the files they wish to share.
        </p>

        <p>
          At the beginning of the project, it seemed like it would be difficult
          to help the client given the lack of direction and so many unanswered
          questions. However, following UX/UI best practices, I was able to find
          focus and create a product that solved real problems for specific
          types of users in the real estate industry. Below are images that show
          the evolution of the web application throughout the project:
        </p>
        <img
          className={propertyVaultStyles.homePageSketch}
          src={HomepageSketch}
          alt="Pen & Paper Sketch of Homepage"
        />
        <img
          className={propertyVaultStyles.homePageWireframe}
          src={HomepageWireframe}
          alt="Wireframe of Homepage"
        />
        <img
          className={propertyVaultStyles.homePageMockup}
          src={HomepageMockup}
          alt="Mockup of Homepage"
        />
      </article>
    </section>
  </Layout>
)
