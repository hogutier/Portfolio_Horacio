import React from 'react'
import Layout from '../components/layout'
import propertyVaultStyles from '../styles/propertyvault.module.css'
import DesktopHomeImage from '../components/imgDesktopHome'
import Button from '../components/button'
import iconOverview from '../images/iconOverview.png'
import iconBranding from '../images/iconBranding.png'
import iconDiscovery from '../images/iconDiscovery.png'
import iconIA from '../images/iconIA.png'
import iconConclusion from '../images/iconConclusion.png'
import iconDesigner from '../images/iconDesigner.png'
import iconDeliverables from '../images/iconDeliverables.png'
import iconDuration from '../images/iconDuration.png'
import iconTools from '../images/iconTools.png'
import CompetitiveAnalysis from '../images/CompetitiveAnalysis.png'
import tom from '../images/tom.png'
import mike from '../images/mike.png'
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
import ABLogoA1 from '../images/ABLogoA1.png'
import ABLogoB1 from '../images/ABLogoB1.png'
import ABDesktopHomeA from '../images/ABDesktopHomeA1.png'
import ABDesktopHomeB from '../images/ABDesktopHomeB1.png'

import ABMobileHomeA1 from '../images/ABMobileHomeA1.png'
import ABMobileHomeB1 from '../images/ABMobileHomeB1.png'

export default () => (
  <Layout>
    <section className={propertyVaultStyles.propertyVaultContainer}>
      <div className={propertyVaultStyles.intro}>
        <article className={propertyVaultStyles.introContent}>
          <h1>Property Vault</h1>
          <p>
            Property Vault is a secure web application that was created with a
            specific focus on the Real Estate market to help Property Managers
            store, access and share property & tenant information in one place.
          </p>
          <div className={propertyVaultStyles.buttonPrototype}>
            <a
              href="https://invis.io/Z6OXOYQHSVP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button name="View Prototype" />
            </a>
          </div>

          <p />

          <div className={propertyVaultStyles.prototypesContainer}>
            <div className={propertyVaultStyles.desktopHomeImage}>
              <DesktopHomeImage />
            </div>
          </div>

          <div className={propertyVaultStyles.rolesContainer}>
            <div className={propertyVaultStyles.design}>
              <img
                className={propertyVaultStyles.icon}
                src={iconDesigner}
                alt="Design Roles Icon"
              />
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
              <img
                className={propertyVaultStyles.icon}
                src={iconDeliverables}
                alt="Deliverables Icon"
              />
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
                <img
                  className={propertyVaultStyles.icon}
                  src={iconDuration}
                  alt="Duration Icon"
                />
                <h3>Project Duration</h3>
                <ul>
                  <li>2 months</li>
                </ul>
              </div>

              <div className={propertyVaultStyles.tools}>
                <img
                  className={propertyVaultStyles.icon}
                  src={iconTools}
                  alt="Tools Icon"
                />
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
      </div>
      <div className={propertyVaultStyles.overview}>
        <article className={propertyVaultStyles.overviewContent}>
          <div className={propertyVaultStyles.overviewtitle}>
            <img src={iconOverview} alt="Overview" />
            <h2>Overview</h2>
          </div>
          <div className={propertyVaultStyles.overviewproblem}>
            <h3>The Problem</h3>
            <p>
              Most online storage & collaboration solutions are too broad and
              lack focus to solve a problem for a specific industry. This
              oftentimes leads to user confusion making it difficult to
              understand how to apply these tools in the business environment.
            </p>
          </div>
          <div className={propertyVaultStyles.overviewsolution}>
            <h3>The Solution</h3>
            <p>
              Through comprehensive user research, competitive analysis and user
              testing, we created Property Vault - a secure online storage web
              application with a specific focus on the Real Estate Market. Our
              process (detailed in the next section) found that our users wanted
              an easy way to store, access and share property & tenant
              information in one place.
            </p>
          </div>
        </article>
      </div>
      <div className={propertyVaultStyles.discovery}>
        <article className={propertyVaultStyles.discoveryContent}>
          <div className={propertyVaultStyles.discoverytitle}>
            <img src={iconDiscovery} alt="Discovery Phase" />
            <h2>Discovery Phase</h2>
          </div>
          <div className={propertyVaultStyles.discoveryur}>
            <h3>User Research</h3>
            <p>
              Before diving into any sketches or design tools, it was very
              important to become familiar with our potential users and better
              understand their needs. Below are the key survey takeaways:
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
                79% of participants liked the idea of using a Property
                Management Cloud Storage Service
              </li>
            </ul>
            <a
              href="https://docs.google.com/forms/d/1gV6LB6otU2QJBnmYf1cgYuiJhQyCauzxu3mzxNWFg-Q/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button name="View Survey" />
            </a>
          </div>

          <div className={propertyVaultStyles.discoveryca}>
            <h3>Competitive Analysis</h3>
            <img src={CompetitiveAnalysis} alt="Competitive Analysis Chart" />
            <p>To view more details, click on the button below:</p>
            <a
              href="https://drive.google.com/open?id=16m4NiOa0KVsNUPanjVzKXqxtm5H-eBKxlwqL_4nDsYs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button name="SWOT Analysis" />
            </a>
          </div>
          <div className={propertyVaultStyles.discoveryuptitle}>
            <h3>User Personas</h3>
            <p>
              After analyzing the user survey results, I was able to validate
              many assumptions, understand user demographics and preferences of
              users in our target market. With this information, the following
              user personas were born:
            </p>
          </div>
          <div className={propertyVaultStyles.discoveryupimages}>
            <div className={propertyVaultStyles.personas}>
              <div className={propertyVaultStyles.personaA}>
                <div className={propertyVaultStyles.personaAvatar}>
                  <img src={tom} alt="User Persona Tom" />
                </div>

                <h3 className={propertyVaultStyles.personaTomMike}>Tom</h3>
                <ul>
                  <li>
                    <strong>Role:</strong> Property Manager
                  </li>
                  <li>
                    <strong>Age: </strong>43{' '}
                  </li>
                  <li>
                    <strong>Location: </strong>Austin, TX{' '}
                  </li>
                  <li>
                    <strong>Gender: </strong>Male{' '}
                  </li>
                </ul>

                <h3>Motivation</h3>
                <p>
                  Tom currently stores all property/tenant information in a file
                  cabinet and local hard drive. It would be great to have a
                  solution to store & organize everything in the cloud with the
                  option to share relevant information with certain tenants or
                  communities.
                </p>
                <h3>Frustrations</h3>

                <ol>
                  <li>Takes a long time to keep everyone informed</li>
                  <li>Difficult keep backup copies of important files</li>
                  <li>Hard to keep everything organized</li>
                  <li>Doesn’t know who has seen the information shared</li>
                </ol>
                <div className={propertyVaultStyles.personaAquote}>
                  <h6>
                    “If I had a solution to upload, organize and share property
                    & tenant information, it would make my life a lot easier”
                  </h6>
                </div>
              </div>
              <div className={propertyVaultStyles.personaB}>
                <div className={propertyVaultStyles.personaAvatar}>
                  <img src={mike} alt="User Persona Mike" />
                </div>
                <h3 className={propertyVaultStyles.personaTomMike}>Mike</h3>
                <ul>
                  <li>
                    <strong>Role:</strong> Tenant
                  </li>
                  <li>
                    <strong>Age: </strong>18{' '}
                  </li>
                  <li>
                    <strong>Location: </strong>Austin, TX{' '}
                  </li>
                  <li>
                    <strong>Gender: </strong>Male{' '}
                  </li>
                </ul>

                <h3>Motivation</h3>
                <p>
                  Mike currently has to go to the leasing office to inquire
                  about the lease contract, maintenance requests and BBQ pit
                  reservations. He also needs to visit the billboard to stay
                  informed of future tenant meetings.
                </p>
                <div className={propertyVaultStyles.personaBfrustrations}>
                  <h3>Frustrations</h3>
                </div>

                <ol>
                  <li>
                    Hates having to walk to the leasing office to reserve bbq
                    pit and to stay informed of what’s going on around the
                    property
                  </li>
                  <li>Can’t view leasing contract online</li>
                </ol>
                <div className={propertyVaultStyles.personaBquote}>
                  <h6>
                    “If I could have a single place online to take care of my
                    needs around the property, I could spend my time more
                    efficiently at school and with my friends”
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className={propertyVaultStyles.branding}>
        <article className={propertyVaultStyles.brandingContent}>
          <div className={propertyVaultStyles.brandingicon}>
            <img src={iconBranding} alt="Branding & Identity" />
          </div>

          <h2>Branding & Identity</h2>
          <h3>The Logo</h3>
          <p>
            After meeting with the client to get a good feel for what they were
            looking for and stand for with their brand, I started with the
            following sketches for their logo:
          </p>
          <div className={propertyVaultStyles.brandimages}>
            <img src={LogoSketches} alt="Logo Sketches" />
          </div>

          <p>
            Once the client showed a preference on what type of logo they liked,
            the following refined options were created:
          </p>
          <div className={propertyVaultStyles.brandimages}>
            <img src={LogoRefined} alt="Logo Refined Mockups" />
          </div>

          <h3>Brand Style Guide</h3>
          <p>
            After sketching and defining the target market for this product and
            the feelings the client wanted to convey, the following style guide
            was created:
          </p>
          <div className={propertyVaultStyles.brandimages}>
            <img src={BrandStyleGuide} alt="Brand Style Guide" />
          </div>
        </article>
      </div>
      <div className={propertyVaultStyles.ia}>
        <article className={propertyVaultStyles.iaContent}>
          <img src={iconIA} alt="Information Architecture" />
          <h2 className={propertyVaultStyles.iatitle}>
            Information Architecture
          </h2>
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
          <a
            href="https://drive.google.com/open?id=1GodrqA5JKi_Cag9u7k5ctZ9m3kGfXpBvCmyBpCIjI6M"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button name="All Stories" />
            <p />
          </a>
          <h3>User Flows</h3>
          <p>
            With the information gathered in user research, the next step was to
            clearly document what our web application will do. Based on this, I
            put myself in the shoes of our user personas to create the following
            user stories:{' '}
          </p>
          <p />
          <div className={propertyVaultStyles.userFlowDetails}>
            <h4>Sign up process</h4>
            <div className={propertyVaultStyles.flowChart}>
              <img src={SignUpProcess} alt="Sign Up Process" />
            </div>
            <p />
            <h4>View file/folder shared with tenant</h4>
            <div className={propertyVaultStyles.flowChart}>
              <img src={ViewFilesProcess} alt="View Files/Folders Process" />
            </div>
            <p />
            <h4>Configure roles & access control</h4>
            <div className={propertyVaultStyles.flowChart}>
              <img
                src={RolesAccessProcess}
                alt="Configure roles & access control"
              />
            </div>
          </div>

          <a
            href="https://drive.google.com/file/d/1lKziE9i_QQKT_BM5vVl5dsAilqEhreZZ/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button name="All User Flows" />
          </a>
          <p />
          <h3>Sitemap</h3>
          <p>
            Now that we have a clear idea on what our web application will do
            with the research we performed, user stories and user flows, in this
            next step I created the following sitemap:
          </p>
          <div className={propertyVaultStyles.siteMap}>
            <img src={Sitemap} alt="Sitemap" />
          </div>
          <div className={propertyVaultStyles.buttonHoldersiteMap}>
            <a
              href="https://drive.google.com/open?id=1BjJGogY_BGca3ksoF-fF55BX8Wg9LShB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button name="View Sitemap" />
            </a>
          </div>
          <p />
          <h3>Pen & Paper Wireframes</h3>
          <p>
            This phase of the project was the first attempt at visualizing all
            of the abstract concepts conceptualized before. To keep the
            creativity at its best, the following wireframes were created with
            pen & paper to figure out the best possible layouts to apply to this
            product:
          </p>
          <div className={propertyVaultStyles.iaimages}>
            <img src={PenPaperWireframes} alt="Pen & Paper Wireframes" />
          </div>

          <h3>Digital Wireframes</h3>
          <p>
            With a better idea on which sketch layouts worked best, the
            following digital wireframes were created using Balsamiq:
          </p>
          <div className={propertyVaultStyles.iaimages}>
            <img src={DigitalWireframes} alt="Digital Wireframes" />
          </div>

          <h3>Prototypes</h3>
          <p>
            Using Figma & InVision and referencing the brand style guide, the
            following prototypes were created:
          </p>

          <div className={propertyVaultStyles.lowProtoImage}>
            <a href="https://projects.invisionapp.com/share/ACOGLHEJUFK#/screens">
              <img src={LowFidelityPrototype} alt="Low Fidelity Prototype" />
            </a>
          </div>
          <div className={propertyVaultStyles.highProtoImage}>
            <a href="https://projects.invisionapp.com/share/Z6OXOYQHSVP#/screens">
              <img src={HighFidelityPrototype} alt="High Fidelity Prototype" />
            </a>
          </div>

          <div className={propertyVaultStyles.lowFiPrototype}>
            <a
              href="https://projects.invisionapp.com/share/ACOGLHEJUFK#/screens"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button name="Low-Fidelity Prototype" />
            </a>
          </div>

          <div className={propertyVaultStyles.highFiPrototype}>
            <a
              href="https://projects.invisionapp.com/share/Z6OXOYQHSVP#/screens"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button name="High-Fidelity Prototype" />
            </a>
          </div>

          <h3>Preference A/B Tests</h3>
          <p>
            To help make specific design decisions, the following preference
            tests were performed:
          </p>
          <p />
          <h4>The Logo</h4>
          <p className={propertyVaultStyles.abtestsp}>
            The logo with the lock performed better and the difference was 95.0%
            likely to be statistically significant. This means that we can be
            confident that it is actually better, and not performing better due
            to random chance.
          </p>
          <div className={propertyVaultStyles.abtests}>
            <img src={ABLogoA1} alt="Logo A/B Test" />
            <img src={ABLogoB1} alt="Logo A/B Test" />
          </div>

          <a
            href="https://app.usabilityhub.com/tests/1acf51d436ec/results/d1166ccf5bb8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button name="See Test Details" />
          </a>
          <p />
          <h4>Desktop Dashboard Home</h4>
          <p className={propertyVaultStyles.abtestsp}>
            The first version of Desktop Dashboard Home performed better, and
            the difference is 90.0% likely to be statistically significant. This
            means that we can be fairly confident that it is actually better,
            and not performing better due to random chance.
          </p>
          <div className={propertyVaultStyles.abtestsDesktop}>
            <img src={ABDesktopHomeA} alt="Desktop Dashboard Home A/B Test" />

            <img src={ABDesktopHomeB} alt="Desktop Dashboard Home A/B Test" />
          </div>
          <a
            href="https://app.usabilityhub.com/tests/bb420b68792a/results/8992c776c275"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button name="See Test Details" />
          </a>
          <p />
          <h4>Mobile Dashboard Home</h4>
          <p className={propertyVaultStyles.abtestsp}>
            Mobile Home version 2 performed better, and the difference is 90.0%
            likely to be statistically significant. This means that we can be
            fairly confident that it is actually better, and not performing
            better due to random chance.
          </p>
          <div className={propertyVaultStyles.abtestsMobile}>
            <img src={ABMobileHomeA1} alt="Desktop Dashboard Home A/B Test" />

            <img src={ABMobileHomeB1} alt="Desktop Dashboard Home A/B Test" />
          </div>
          <a
            href="https://app.usabilityhub.com/tests/cf94a87464a0/results/f4f2e46afa9f"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button name="See Test Details" />
          </a>
        </article>
      </div>
      <div className={propertyVaultStyles.conclusion}>
        <article className={propertyVaultStyles.conclusionContent}>
          <img src={iconConclusion} alt="Conclusion" />
          <h2>Conclusion</h2>
          <p>
            This project was a wonderful experience and I am very proud I helped
            Property Vault become a web application that makes it easy for
            Property Managers to keep property & tenant files organized in one
            place and have granular control on the files they wish to share.
          </p>

          <p>
            At the beginning of the project, it seemed like it would be
            difficult to help the client given the lack of direction and so many
            unanswered questions. However, following UX/UI best practices, I was
            able to find focus and create a product that solved real problems
            for specific types of users in the real estate industry. Below are
            images that show the evolution of the web application throughout the
            project:
          </p>
          <div className={propertyVaultStyles.conclusionimages}>
            <div className={propertyVaultStyles.desktopHomeImageConclusion}>
              <DesktopHomeImage />
            </div>
          </div>
        </article>
      </div>
    </section>
  </Layout>
)
