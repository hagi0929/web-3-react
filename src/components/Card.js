import "./Card.css";

function Card(props) {
  const classRcv = "card " + props.className;
  return <div className={classRcv}>{props.children}</div>;
}

export default Card;
