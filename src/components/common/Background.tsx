// import react from "react";
import "./styles/Background.scss";

interface Props {
  image: string;
}

const Background = ({ image }: Props) => {
  return (
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
};

export default Background;
