import React from "react";
import "./L1NewCard.css";

const L1NewCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
        <li>
          <strong>Subcard:</strong> {props.subCard}
        </li>
      </ul>
    </div>
  </div>
);

export default L1NewCard;
