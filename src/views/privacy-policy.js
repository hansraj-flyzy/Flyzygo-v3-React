import React from 'react'

import { Helmet } from 'react-helmet'

import './privacy-policy.css'

const PrivacyPolicy = (props) => {
  return (
    <div className="privacy-policy-container">
      <Helmet>
        <title>Privacy-Policy - Flyzygo v3</title>
        <meta property="og:title" content="Privacy-Policy - Flyzygo v3" />
      </Helmet>
      <iframe
        src="https://flyzygo-website-v21.firebaseapp.com/privacy-policy"
        allowFullScreen
        className="privacy-policy-iframe"
      ></iframe>
    </div>
  )
}

export default PrivacyPolicy
