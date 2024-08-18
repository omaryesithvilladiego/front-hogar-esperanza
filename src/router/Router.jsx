import {
   
    Switch,
    Route,
    Link,
    useRouteMatch,
  } from "react-router-dom";
  import LandingPage from "../pages/landingPage/LandingPage";
import Team from "../pages/landingPage/team/Team";


  function Router() {
    return (
     
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/team">
          <Team />
          </Route>
        
        </Switch>
    
    );
  }

  export default Router