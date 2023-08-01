import React from "react";
import hambureger from "../assest/Images/menu.png";
import search from "../assest/Images/search-interface-symbol.png";
import user from "../assest/Images/profile-user.png";

const Head = () => {
  return (
    <React.Fragment>
   <div className="flex justify-between items-center px-4 shadow-lg">
      {/* first section */}
      <div className="flex justify-start items-center">
        <img src={hambureger} alt="hamburger img" className="w-8 cursor-pointer" />
        <img
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt="youtube logo"
          className="w-32"
        />
      </div>

      {/* middle section */}
      <div className="flex justify-start items-center w-2/5">
        <input type="text" placeholder="Search" className="border-2 border-gray-400 pl-2 rounded-l-full h-12 w-4/5 outline-none"/>
        <button className="border-gray-400 cursor-pointer  border-2 bg-gray-300 rounded-r-full h-12 px-8">
          <img src={search} alt="search icon" className="w-4"  />
        </button>
      </div>

      {/* third section */}
      <div>
        <img src={user} alt="search icon" className="w-6 cursor-pointer"/>
      </div>
   </div>
    </React.Fragment>
  );
};

export default Head;
