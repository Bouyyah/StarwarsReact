import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="home">
      
        <img
          className="swimage"
          src="http://imageshack.com/a/img922/3783/oyvsRd.png"
        />

        <h3 className="text-center home-title">From our beloved saga a collection of informations for every <Link  to="/people">character</Link>,
      <Link  to="/planets"> Planet</Link> and  <Link  to="/vehicles"> starship</Link>. </h3>
      
    </div>
  );
}

export default Homepage;
