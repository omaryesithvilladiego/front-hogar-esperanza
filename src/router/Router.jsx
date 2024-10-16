import {
   
    Switch,
    Route,
    Link,
    useRouteMatch,
  } from "react-router-dom";
  import LandingPage from "../pages/landingPage/LandingPage";
import Team from "../pages/landingPage/team/Team";
import { LoginPage } from "../pages/landingPage/Login/LoginPage";
import PrivateRouter from "../auth/PrivateRouter";
import  Users  from "../private-pages/Users";


  function Router() {
    return (
     
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/team">
          <Team />
          </Route>
          <Route exact path='/login'> <LoginPage /> </Route>
          <PrivateRouter exact path='/users' component={Users} /> 
        
        </Switch>
    
    );
  }

  export default Router