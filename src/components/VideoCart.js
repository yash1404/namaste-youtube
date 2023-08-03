import React from "react";
import { kFormatter } from "../utils/Kformatter";
import { Link } from "react-router-dom";

const VideoCart = (props) => {
  const { videoInfo } = props;
  return (
    <React.Fragment>
      <div className="flex flex-wrap p-4">
        {videoInfo.map((curr, ind) => {
          const { url } = curr.snippet.thumbnails.high;
          const { title, channelTitle } = curr.snippet;
          const { viewCount } = curr.statistics;
          return (
            <Link to={`/watch?v=${curr.id}`}>
            <div key={curr.id} className="w-64 mt-5 ml-2 shadow-lg p-4 h-full cursor-pointer">
            <img src={url} alt="thumbnails" className="rounded-lg"/>
            <p className="font-bold">{title}</p>
            <p className="font-semibold">{channelTitle}</p>
            <span>{kFormatter(viewCount)} Views</span>
          </div>
          </Link>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default VideoCart;
