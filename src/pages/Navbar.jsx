import React from "react";

const Navbar = () => {
  return (
    <nav className="flex py-5 px-10 hover:shadow-2xl bg-slate-700 items-center justify-between text-center">
      <a className="text-yellow-600 font-bold text-3xl" href="#">
        Webpage
      </a>
      <div className="flex items-center gap-10 mr-10">
        <a className="text-lg font-bold" href="Home">Home</a>
        <a className="text-lg font-bold" href="About">About</a>
        <a className="text-lg font-bold" href="Contact">Contact</a>
        <a className="text-lg font-bold" href="Card">Card</a>
      </div>
    </nav>
  );
};

export default Navbar;
