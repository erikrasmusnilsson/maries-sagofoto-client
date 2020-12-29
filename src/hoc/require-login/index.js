import React from 'react';
import { Redirect } from 'react-router-dom';

export const requireLogin = (Component) => {
    return class AuthenticatedComponent extends React.Component {
        constructor(props) {
            super(props);
        }

        authenticated = () => {
            return !!this.props.user && this.props.user !== null;
        }

        render() {
            if (this.authenticated()) return <Component {...this.props} />
            else return <Redirect to='/' />
        }
    }
}