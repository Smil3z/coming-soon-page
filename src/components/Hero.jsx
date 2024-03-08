import React from "react";
import Logo from "./Logo.jsx";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <Logo />
      <h1 className="text-6xl font-semibold">Coming Soon</h1>
      <p className="font-light text-3xl mt-5">Site under construction!</p>
    </div>
  );
}

export default Hero;
