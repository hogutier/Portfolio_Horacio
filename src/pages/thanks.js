import React from 'react'
import Layout from '../components/layout'
import thanksStyles from '../styles/thanks.module.css'

export default () => (
  <Layout>
    <div className={thanksStyles.thankyoucontainer}>
      <div className={thanksStyles.thankyounote}>
        <h3>Your information was successfully submitted!</h3>
        <p>Thanks for reaching out. I will get in touch with you soon.</p>
      </div>
    </div>
  </Layout>
)
