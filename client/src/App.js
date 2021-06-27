import React, { useState } from "react";
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
import SingleBlog from "./Blogs/SingleBlog/SingleBlog";
import NotFound from "./NotFound";
import { useSelector } from "react-redux";

function App() {
  const [currentId, setCurrentId] = useState(null);
  let user = JSON.parse(localStorage.getItem("profile"));
  const auth = useSelector((state) => state.auth);
  React.useEffect(() => {
    user = JSON.parse(localStorage.getItem("profile"));
  }, [auth]);

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
            <Blogs setCurrentId={setCurrentId} />
          </Route>
          {user && (
            <Route path="/blogs/create" exact>
              <CreateBlog currentId={currentId} setCurrentId={setCurrentId} />
            </Route>
        )}
          <Route component={SingleBlog} path="/blogs/:id"></Route>
          <Route path="/about" component={About} exact></Route>
          <Route path="/auth" component={Auth} exact></Route>
          {user && (
            <Route path="/userProfile" component={UserProfile} exact></Route>
          )}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
