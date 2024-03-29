import React from "react";

const Hero = ({ children }) => {
  // calc(100vh-4rem) -> 100vh - navbar height
  return (
    <div className="hero min-h-[calc(100vh-4rem)] bg-gradient-to-b to-indigo-900 from-base-100">
      <div className="hero-content w-full">{children}</div>
    </div>
  );
};

export default Hero;
