import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { isMenuOpen } = useSelector((state) => state.appSlice);

  return (
    <React.Fragment>
      {isMenuOpen ? (
        <div className=" w-48 shadow-lg h-full ">
          <ul className="mt-5 text-center">
            <li className="mt-2 font-bold "> Home</li>
            <li className="mt-2 font-bold"> Shorts</li>
            <li className="mt-2 font-bold"> Subscriptions</li>
          </ul>
          <hr className="mt-3"></hr>

          <ul className=" mt-5 text-center">
            <li className="mt-2">Library</li>
            <li className="mt-2">History</li>
            <li className="mt-2">Your Videos</li>
            <li className="mt-2">Watch Later</li>
            <li className="mt-2">Liked Videos</li>
          </ul>
          <hr className="mt-3"></hr>
          <h1 className="text-center font-bold mt-5">Explore</h1>
          <ul className="mt-5 text-center">
            <li className="mt-2">Trending</li>
            <li className="mt-2">Shopping</li>
            <li className="mt-2">Music</li>
            <li className="mt-2">Movies</li>
            <li className="mt-2">Live</li>
            <li className="mt-2">Gaming</li>
            <li className="mt-2">News</li>
            <li className="mt-2">Sports</li>
          </ul>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Sidebar;
