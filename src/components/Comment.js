import React from "react";
import user from "../assest/Images/profile-user.png";
const Comment = ({ commentData }) => {
  return (
    <React.Fragment>
      {commentData.map((commentdatas, ind) => {
        const { name, text } = commentdatas;
        return (
          <div
            key={ind}
            className="flex items-center mt-2 p-2 bg-gray-200 rounded-lg w-full"
          >
            <img className="w-8 h-8 mr-2" src={user} alt="comment user" />
            <div>
              <p className="font-semibold capitalize">{name}</p>
              <p>{text}</p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Comment;
