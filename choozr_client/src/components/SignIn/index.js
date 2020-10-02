import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
    <div>
        <center>
            <h1>Sign In</h1>
            <SignInForm />
            <SignUpLink />
        </center>
    </div>
)

const INIT_STATE = {
    email: '',
    password: '',
    error: null
}

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INIT_STATE};
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase
            .signInUser(email, password)
            .then(() => {
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
            <form onSubmit={this.onSubmit.bind(this)}>
                <p>
                    <input name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email"
                    />
                </p>
                <p>
                    <input name="password"
                        value={password}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Password"
                    />
                </p>
                <button type="submit">Sign In</button>

                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm };