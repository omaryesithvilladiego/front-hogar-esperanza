import React from 'react';
import { Route, Redirect } from 'react-router';
import { getSession } from '../helper/Helper';

const checkAuth = () => {
    return !getSession() ? false: true;
    
  };
  



const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !checkAuth() ?  (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)  :   <Component {...props} /> 
        
      }
    />
  );
};

export default PrivateRouter;