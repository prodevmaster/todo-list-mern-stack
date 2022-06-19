import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-auto flex flex-col items-center justify-between px-12 py-4 bg-indigo-500 md:flex-row">
      <Link to="/" className="text-white font-bold text-3xl">
        Todo's
      </Link>
      <div className="space-x-6 font-bold text-white">
        <NavLink to="/" className="hover:text-black duration-300 ease-in-out">
          Home
        </NavLink>
        <NavLink
          to="/create"
          className="hover:text-black duration-300 ease-in-out"
        >
          Create
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
