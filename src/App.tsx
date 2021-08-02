import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Background from "./components/common/Background";
import Blog from "./Blog";
import Card from "./components/card/Card";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Route exact path="/">
            <Link to="/blog">
              <Card
                image={`${process.env.PUBLIC_URL}/images/blog_icon.png`}
                title="Blog"
                text="This is my personal tech blog. Contains a guide to create an ultimate modded GBA."
              />
            </Link>
            <Background
              image={`${process.env.PUBLIC_URL}/images/gba_background.jpeg`}
            />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
