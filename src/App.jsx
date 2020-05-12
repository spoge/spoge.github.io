import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="app-nav-bar">
          <Link color="#ffffff" to="/">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/fun">Fun</Link>
        </div>
        <div className="app-content">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/fun">
              <Fun />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

const Home = () => {
  return <div>This is App. App is cool. Be like App.</div>;
};

const About = () => {
  return <div>There should be something about someone here...</div>;
};

const Fun = () => {
  return <div>Cool stuff!</div>;
};

export default App;
