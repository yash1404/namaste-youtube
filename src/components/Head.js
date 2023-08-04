import React, { useEffect } from "react";
import { useState } from "react";
import hambureger from "../assest/Images/menu.png";
import search from "../assest/Images/search-interface-symbol.png";
import user from "../assest/Images/profile-user.png";
import { useDispatch, useSelector } from "react-redux";
import Appslice from "../utils/AppSlice";
import CacheSlice from "../utils/CacheSlice";
import axios from "axios";
import { YOUTUBE_SEARCH_API } from "../utils/Constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [suggestions, setSuggestions] = useState(false);

  const searchCache = useSelector((state) => state.cache);
  const dispatch = useDispatch();

  // debouncing functionality..
  useEffect(() => {
    const Timer = setTimeout(() => {
      // caching functionality
      if (searchCache[searchQuery]) {
        setSearchData(searchCache[searchQuery]);
      } else {
        getDataForSearch();
      }
    }, 200);

    return () => {
      clearTimeout(Timer);
    };
  }, [searchQuery]);

  const getDataForSearch = async () => {
    const data = await axios.get(YOUTUBE_SEARCH_API + searchQuery);
    setSearchData(data?.data[1]);

    // dispatching for storing the value and using as a cache..
    dispatch({
      type: CacheSlice.actions.cacheSearchData.type,
      payload: {
        [searchQuery]: data?.data[1],
      },
    });
  };

  const isToggleHandle = () => {
    dispatch({
      type: Appslice.actions.isToggle.type,
    });
  };
  return (
    <React.Fragment>
      <div className="flex justify-between items-center px-4">
        {/* first section */}
        <div className="flex justify-start items-center">
          <img
            src={hambureger}
            alt="hamburger img"
            className="w-8 cursor-pointer"
            onClick={isToggleHandle}
          />
          <img
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="youtube logo"
            className="w-32"
          />
        </div>

        {/* middle section */}
        <div className="flex justify-start items-center w-2/5">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            className="border-2 border-gray-400 pl-2 rounded-l-full h-12 w-4/5 outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setSuggestions(true)}
            onBlur={(e) => setSuggestions(false)}
          />
          <button className="border-gray-400 cursor-pointer  border-2 bg-gray-300 rounded-r-full h-12 px-8">
            <img src={search} alt="search icon" className="w-4" />
          </button>
        </div>
        {suggestions && (
          <div className="w-[27.5rem] absolute top-[4.3rem] left-[29rem] bg-white py-2 px-5 rounded-lg">
            <ul>
              {searchData.map((searchDataElem, ind) => {
                return (
                  <div>
                    <p key={ind} className=" hover:bg-gray-100 p-[2px] rounded-sm mt-2 font-bold cursor-pointer">
                      {searchDataElem}
                    </p>
                  </div>
                );
              })}
            </ul>
          </div>
        )}

        {/* third section */}
        <div>
          <img src={user} alt="search icon" className="w-6 cursor-pointer" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Head;
