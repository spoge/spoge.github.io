import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import Background from "./common/Background";

import Card from "./common/Card";

const Projects = () => {
  return (
    <>
      <Link
        to={{
          pathname: "https://sboge.no/terminal",
        }}
        target="_blank"
      >
        <Card
          title="Terminal"
          text="It knows basic math (including power ^ and parentheses) and even has an brainf**k interpreter!"
          image={`${process.env.PUBLIC_URL}/img/icons/terminal_icon.png`}
          circularImage={false}
        />
      </Link>
      <Link
        to={{
          pathname: "https://sboge.no/text-adventure",
        }}
        target="_blank"
      >
        <Card
          title="Text Adventure"
          text="A little text adventure in a retro style. You fortunately don't need to type the responses yourself!"
          image={`${process.env.PUBLIC_URL}/img/icons/text_adventure_icon.png`}
          circularImage={false}
        />
      </Link>
      <Link
        to={{
          pathname: "https://sboge.no/game-of-life",
        }}
        target="_blank"
      >
        <Card
          title="Game of Life"
          text="An implementation of Conway's Game of Life. Simulate life through multiple generations."
          image={`${process.env.PUBLIC_URL}/img/icons/game_of_life_icon.png`}
          circularImage={false}
        />
      </Link>
      <Link
        to={{
          pathname: "https://sboge.no/pokebox-viewer",
        }}
        target="_blank"
      >
        <Card
          title="Pokémon Boxes"
          text="Use this to sort all your pokémons in their correct boxes. Supports multiple Pokédexes."
          image={`${process.env.PUBLIC_URL}/img/icons/pokemon_icon.png`}
          circularImage={false}
        />
      </Link>
      <Background
        image={`${process.env.PUBLIC_URL}/img/bg/gba_background.jpeg`}
      />
    </>
  );
};

export default Projects;
