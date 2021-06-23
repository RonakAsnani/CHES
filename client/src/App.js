import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Footer from "./shared/Footer/Footer";

import "./App.css";
import Home from "./shared/HomePage/Home";
import Auth from "./shared/Auth/Auth";
import About from "./shared/About/About";
import Siphon from "./shared/siphon/Siphon";
import UserProfile from "./shared/UserProfile/UserProfile";
import Blogs from "../src/Blogs/Blogs";
import CreateBlog from "./Blogs/CreateBlog";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/siphon" component={Siphon} exact></Route>
          {/* <Route path="/eureka" exact>
            eureka
          </Route> */}
          <Route path="/blogs" exact>
            <Blogs />
          </Route>
          <Route path="/about" component={About} exact></Route>
          <Route path="/blogs/create" exact>
            <CreateBlog />
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
