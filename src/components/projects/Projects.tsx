import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Card from "../card/Card";

const Projects = () => {
  return (
    <div>
      <Link
        to={{
          pathname: "https://sboge.no/terminal",
        }}
        target="_blank"
      >
        <Card
          title="Terminal"
          text="It knows basic math (including power ^ and parentheses) and even has an brainfuck interpreter!"
          image={`${process.env.PUBLIC_URL}/img/icons/terminal_icon.png`}
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
          text="A quite primitive (but working!) implementation of Conway's Game of Life."
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
    </div>
  );
};

export default Projects;
