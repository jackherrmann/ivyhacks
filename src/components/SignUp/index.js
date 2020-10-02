import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

// Render signup page
const SignUpPage = () => (
    <div>
        <h1>Sign Up</h1>
        <SignUpForm />
    </div>
)

const INIT_STATE = {
    email: '',
    password: '',
    error: null
}

// Component for sign up form
class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = INIT_STATE;
    }

    // Update handler for input elements
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    // Call signup function from ../helpers/auth
    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase
            .createUser(email, password)
            .then(user => {
                this.setState({...INIT_STATE});
                this.props.history.push(ROUTES.LANDING);
            })
            .catch(error => {
                this.setState({ error });
            })
        event.preventDefault();
    }

    render() {
        const {
            email,
            password,
            error
        } = this.state;

        return(
            <form onSubmit={this.onSubmit}>
                <input name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email"
                />
                <input name="password"
                    value={password}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Password"
                />
                <button type="submit">Sign Up</button>

                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = compose(withRouter, withFirebase,)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink }