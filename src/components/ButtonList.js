import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonListItem = [
    "Programming",
    "Namaste Javascript",
    "Cricket",
    "Ghost Hunter",
    "Badminton",
    "Tennnis",
    "News",
    "Sports",
    "Motivation",
    "Music",
    "Science",
  ];
  return (
    <div className="flex">
      {buttonListItem.map((curr, ind) => {
        return <Button key={ind} buttonName={curr} />;
      })}
    </div>
  );
};

export default ButtonList;
