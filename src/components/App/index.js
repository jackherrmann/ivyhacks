import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../Home';
import LandingPage from '../Landing';
import Navigation from '../Navigation';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser ? 
                this.setState({ authUser }) 
                : this.setState( { authUser: null });
        });
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {  
        return (
            <Router>
            <div>
                <Navigation authUser={this.state.authUser}/>

                <hr />

                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.HOME} component={Home} />
            </div>
            </Router>
        );
    }
}

export default withFirebase(App);