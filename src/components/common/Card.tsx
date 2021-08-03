// import react from "react";
import "./styles/Card.scss";

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
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-text">{text}</div>
      </div>
    </div>
  );
};

export default Card;
