import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import PrivacyPolicy from './views/privacy-policy'
import TermsOfService from './views/terms-of-service'
import FlyzyHome from './views/flyzy-home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={PrivacyPolicy} exact path="/privacy-policy" />
        <Route component={TermsOfService} exact path="/terms_and_conditions" />
        <Route component={FlyzyHome} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
