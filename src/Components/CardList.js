import React from "react";
import Card from "./Card";

const CardList = (props) => {
  const searchList = props.robots.filter((robot) => {
    return robot.username.toLowerCase().includes(props.value.toLowerCase());
  });
  return (
    <div className="pa4 cardList">
      {props.value === ""
        ? props.robots.map((robot, i) => {
            return (
              <Card name={robot.username} email={robot.email} key={robot.id} />
            );
          })
        : searchList.map((robot, i) => {
            return (
              <Card name={robot.username} email={robot.email} key={robot.id} />
            );
          })}
    </div>
  );
};

export default CardList;
