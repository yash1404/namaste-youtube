import React from "react";

const Button = (props) => {
  const { buttonName } = props;
  return (
    <div className="mt-4">
      <button className="p-2 bg-gray-300 rounded-lg m-2 ">{buttonName}</button>
    </div>
  );
};

export default Button;
