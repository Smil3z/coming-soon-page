import React from "react";
import logoImage from "../assets/Smil3z_IT-Logo.png";

function Logo() {
  return (
    <div className="flex justify-center">
      <img src={logoImage} alt="logo" className="max-w-full h-auto" />
    </div>
  );
}

export default Logo;
