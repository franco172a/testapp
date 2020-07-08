import React from 'react'
import { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Home from '../pages/home';


export default class AuthorizeRoute extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: false
        };

        debugger;
    }

    componentDidMount() {
        
        
    }

    componentWillUnmount() {
        
    }

    render() {
        const authenticated = this.state;
        debugger;
        if (!authenticated) {
            return <Redirect to={Home} />;
        } else {
            return   <Component {...this.props} />
        }
    }

}
