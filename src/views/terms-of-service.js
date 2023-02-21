import React from 'react'

import { Helmet } from 'react-helmet'

import './terms-of-service.css'

const TermsOfService = (props) => {
  return (
    <div className="terms-of-service-container">
      <Helmet>
        <title>Terms-of-Service - Flyzygo v3</title>
        <meta property="og:title" content="Terms-of-Service - Flyzygo v3" />
      </Helmet>
      <iframe
        src="https://flyzygo-website-v21.firebaseapp.com/terms_and_conditions"
        allowFullScreen
        className="terms-of-service-iframe"
      ></iframe>
    </div>
  )
}

export default TermsOfService
