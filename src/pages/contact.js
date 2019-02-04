import React from 'react'
import Layout from '../components/layout'
import '../styles/contact.css'

export default () => (
  <Layout>
    <section className="contactContainer">
      <div>
        <h2>Let's Work Together</h2>
        <p>
          Send me a message if you would like to discuss a project or want to
          find out more about me or my work, get in touch!
        </p>
      </div>

      <form method="post" action="#">
        <div className="field half first">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" />
        </div>
        <div className="field half first">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
        <div className="field half">
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" id="phone" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="description">Project Description</label>
          <p>
            <textarea name="description" id="description" rows="6" />
          </p>
        </div>
        <fieldset>
          <legend>Type of Service</legend>
          <p>
            <label htmlFor="service">Select list</label>
            <select id="myList">
              <option value="1">Consulting</option>
              <option value="2">UX/UI Design</option>
              <option value="3">Software Development</option>
              <option value="4">Product Management</option>
            </select>
          </p>
        </fieldset>
        <fieldset>
          <legend>Project Start Date</legend>
          <p>
            <label htmlFor="startDate">Select list</label>
            <select id="startDate">
              <option value="1">Less than 3 months</option>
              <option value="2">Between 3 to 6 months</option>
              <option value="3">Between 6 months to 1 yr</option>
              <option value="4">More than 1yr</option>
            </select>
          </p>
        </fieldset>
        <div>
          <input type="submit" value="Submit" className="special" />
        </div>
      </form>
    </section>
  </Layout>
)
