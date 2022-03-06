import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link className='link' to="/">Home</Link>
      <Link className='link' to="/people">People</Link>
      <Link className='link' to="/planets">Planets</Link>
      <Link className='link' to="/vehicles">Vehicles</Link>
      
    </div>
  );
}

export default Navbar;
