import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Background from "../common/Background";
import Card from "../card/Card";
import GbaModdingArticle from "./GbaModdingArticle";
// import "./App.css";

const Blog = () => {
  return (
    <div>
      <Route exact path="/blog">
        <Link to="/blog/gba-modding">
          {/* <ArticleCard */}
          <Card
            image={`${process.env.PUBLIC_URL}/images/gba_new_shell.jpeg`}
            circularImage={true}
            title="GBA modding!"
            text="Click here to build the ultimate Gameboy Advance."
            onClick={() => {}}
          />
          <Background
            image={`${process.env.PUBLIC_URL}/images/gba_background.jpeg`}
          />
        </Link>
      </Route>
      <Route path="/blog/gba-modding">
        <GbaModdingArticle />
        <Background
          image={`${process.env.PUBLIC_URL}/images/bg_gba_single_wire_blur.jpeg`}
        />
      </Route>
    </div>
  );
};

export default Blog;