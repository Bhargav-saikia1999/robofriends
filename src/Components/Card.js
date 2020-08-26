import React from "react";

const Card = (props) => {
  return (
    <div className="tc bg-light-green dib ma2 pa3 br3 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${props.name}?size=200x200`}
        alt={`avatar_of_${props.name}`}
      />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
