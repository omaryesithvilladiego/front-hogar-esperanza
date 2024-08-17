import {
   
    Switch,
    Route,
    Link,
    useRouteMatch,
  } from "react-router-dom";
  import LandingPage from "../pages/landingPage/LandingPage";


  function Router() {
    return (
     
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        
        </Switch>
    
    );
  }

  export default Router