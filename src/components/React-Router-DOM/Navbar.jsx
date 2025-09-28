import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex py-5 px-10 rounded-3xl hover:shadow-2xl bg-slate-700 items-center justify-between text-center">
      <Link className="text-yellow-600  font-bold text-4xl hover:shadow-2xl" to="/">
        Webpage
      </Link>
      <input className="text-black font-semibold font-serif decoration-red-700 pl-5 rounded-full py-1 w-[20%] mt-2 mr-[35%]" type="text" placeholder="Search...."/>
      <div className="flex items-center gap-10 mr-10">

       {/* Page reload nahi hona chahiye isliye link tag use kar rahe hai */}
        <Link className="hover:text-red-400 font-semibold hover:underline" to='/' >Home</Link>
        <Link className="hover:text-red-400 font-semibold hover:underline" to='/about'  >About</Link>
        <Link className="hover:text-red-400 font-semibold hover:underline" to='/product'  >Product</Link>
        <Link className="hover:text-red-400 font-semibold hover:underline" to='/contact'  >Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
