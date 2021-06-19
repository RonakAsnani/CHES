import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Footer from "./shared/Footer/Footer";

import "./App.css";
import Home from "./shared/HomePage/Home";
import Auth from "./shared/Auth/Auth";
import UserProfile from "./shared/UserProfile/UserProfile";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/siphon" exact>
            siphon
          </Route>
          <Route path="/eureka" exact>
            eureka
          </Route>
          <Route path="/blogs" exact>
            blogs
          </Route>
          <Route path="/about" exact>
            about
          </Route>
          <Route path="/auth" component={Auth} exact></Route>
          <Route path="/userProfile" component={UserProfile} exact></Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
