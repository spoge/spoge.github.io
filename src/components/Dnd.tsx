import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import Background from "./common/Background";

import Card from "./common/Card";

const Dnd = () => {
    return (
        <>
            <Link
                to={{
                    pathname: "https://sboge.no/dnd/skatten_til_roger_p.pdf",
                }}
                target="_blank"
            >
                <Card
                    title="Roger's Treasure"
                    text="A DnD oneshot about finding the most legendary of pirate treasures!"
                    image={`${process.env.PUBLIC_URL}/dnd/img/pirate_parrot.jpg`}
                    circularImage={false}
                />
            </Link>
            <Background
                image={`${process.env.PUBLIC_URL}/dnd/img/boat_crash.jpg`}
            />
        </>
    );
};

export default Dnd;
