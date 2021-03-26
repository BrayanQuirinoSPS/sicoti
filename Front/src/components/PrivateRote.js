import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {authenticationService} from '../functions/service'
export const PrivateRoute = ({ component: Component, rol, ...rest }) => (
    <Route {...rest} render={props => {
        //console.log('service',authenticationService);
        const currentUser=authenticationService.currentUserValue;
        //console.log(currentUser)
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/',state:{from:props.location} }} />
        }
        //console.log('rolCurrent',currentUser.login.userDetails.rol)
        if (rol && rol.indexOf(currentUser.login.userDetails.rol) === -1) {
            // role not authorised so redirect to home page
            console.log('lo redirijo')
            return <Redirect to={{ pathname: '/home'}} />
        }

        // authorised so return component
        return <Component {...props}/>
    }} />
)