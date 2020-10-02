import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Home from '../Home';
import LandingPage from '../Landing';

import Navigation from '../Navigation';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';

import * as ROUTES from '../../constants/routes';

import { withAuthentication } from '../Session';

const App = () => {
    return (
        <Router>
        <div>
            <Navigation />

            <hr />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.HOME} component={Home} />
        </div>
        </Router>
    );
}

export default withAuthentication(App);
