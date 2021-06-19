import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainNavigation from './shared/Navigation/MainNavigation';
import Footer from './shared/Footer/Footer';


import './App.css';
import Home from "./shared/HomePage/Home";

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
          <Route path="/auth" exact>
            auth
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
