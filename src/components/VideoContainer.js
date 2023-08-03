import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/Constant";
import VideoCart from "./VideoCart";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    try {
      const data = await axios.get(YOUTUBE_VIDEO_API);
      setVideos(data.data.items);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <React.Fragment>
      <VideoCart videoInfo={videos} />
    </React.Fragment>
  );
};

export default VideoContainer;
