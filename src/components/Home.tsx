import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";

import Card from "./common/Card";
import Background from "./common/Background";

const Home = () => {
  return (
    <>
      <Link to="/blog">
        <Card
          image={`${process.env.PUBLIC_URL}/img/icons/blog_icon.png`}
          title="Blog"
          text="This is my personal tech blog. Contains a guide to create the ultimate modded GBA."
        />
      </Link>
      <Link to="/projects">
        <Card
          title="Projects"
          text="Some personal projects and games. Including a text based adventure game, a Pokémon tool etc."
          image={`${process.env.PUBLIC_URL}/img/icons/projects_icon.png`}
          circularImage={false}
        />
      </Link>
      <Background
        image={`${process.env.PUBLIC_URL}/img/bg/gba_background.jpeg`}
      />
    </>
  );
};

export default Home;
