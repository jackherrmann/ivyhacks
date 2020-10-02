import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import LandingPage from './components/Landing';
import LandingPage from '../Landing'
import Navigation from '../Navigation';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';

import * as ROUTES from '../../constants/routes';

function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <hr />

        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      </div>
    </Router>
  );
}

export default App;