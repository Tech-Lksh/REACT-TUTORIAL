import React from "react";

const Navbar = () => {
  return (
    <div className="m-5 rounded-2xl flex bg-slate-700 h-16 w-auto">
        <a className="text-yellow-600 font-bold text-3xl ml-28 mt-2 mr-96" href="#">Webpage</a>
      <div className="flex font-bold gap-12 mt-4 ml-80">
        <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Card</a>
      </div>
    </div>
  );
};

export default Navbar;
