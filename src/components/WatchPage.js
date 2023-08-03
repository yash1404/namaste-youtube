import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppSlice from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import CommentSection from "./CommentSection";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: AppSlice.actions.closeMenu.type,
    });
  }, []);

  return (
    <React.Fragment>
      <div className="m-4">
        <iframe
          width="800"
          height="400"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <CommentSection />
      </div>
    </React.Fragment>
  );
};

export default WatchPage;
