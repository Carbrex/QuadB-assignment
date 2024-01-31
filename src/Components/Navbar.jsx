import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-slate-100 h-20 flex items-center  shadow-[2px_5px_3px_0px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center w-5/6 my-0 mx-auto">
        <Link to="/">
          <h2 className="font-bold text-lg w-32 rounded-lg">TV Maze</h2>
        </Link>
        <Link
          to="/"
          className="inline-block mr-2 tracking-[2px] text-xl py-1 px-2 hover:text-violet-400"
        >
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
