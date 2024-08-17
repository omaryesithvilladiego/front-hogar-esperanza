import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useRouteMatch,
  } from "react-router-dom";
  import LandingPage from "../pages/landingPage/LandingPage";


  function Router() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        
        </Switch>
      </BrowserRouter>
    );
  }

  export default Router