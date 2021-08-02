// import react from "react";
import "./Card.css";

interface Props {
  image: string;
  circularImage?: boolean;
  title: string;
  text: string;
  onClick?: () => void;
}

const Card = ({
  image,
  circularImage = false,
  title,
  text,
  onClick,
}: Props) => {
  return (
    <div className="card" onClick={onClick}>
      <div
        className={`card-image ${circularImage ? "circular-image" : ""}`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="card-container">
        <div className="card-title">{title}</div>
        <div className="card-text">{text}</div>
      </div>
    </div>
  );
};

export default Card;
