import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { auth } from '../../services/firebase';
import { signup } from '../../helpers/auth'

// Render signup page
const SignUpPage = () => (
    <div>
        <h1>Sign Up</h1>
        <SignUpForm />
    </div>
)

// Component for sign up form
class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            error: null
        }
    }

    // Update handler for input elements
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    // Call signup function from ../helpers/auth
    onSubmit = event => {
        const { username, email, password } = this.state;
        signup(email, password).catch(
            error => {
                this.setState({ error });
            }
        );
    }

    render() {
        const {
            username,
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
                <input name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Username"
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

export default SignUpPage;

export { SignUpForm, SignUpLink }