import React, { useState } from "react";
import { commentDummyData } from "../utils/CommentDummyData";
import Comment from "./Comment";

const CommentSection = () => {
  const [commentData, setCommentData] = useState(commentDummyData);
  return (
    <React.Fragment>
      <div className="w-[44rem]">
        <h4 className="text-xl font-bold text-black mt-5">Comment:</h4>
        <Comment commentData={commentData} />
      </div>
    </React.Fragment>
  );
};

export default CommentSection;
