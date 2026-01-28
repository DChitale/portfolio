"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { Mouse } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const cursor = useRef(null);
  const heading = useRef(null);
  const resumebtn = useRef(null);
  const scroller = useRef();

 
  
  return (
    <div className="min-h-full mb-5 w-full overflow-hidden lg:mb-0 lg:h-full  ">
      <div className=" lg:flex lg:justify-around lg:items-center h-full px-5 lg:px-10 py-10 lg:py-0">
        <div className="left ">
          <p className="lg:text-2xl">Hey 👋, I'm</p>
          <h1 className="text-4xl lg:text-7xl font-medium">Dhananjay Chitale.</h1>
          <h2  ref={heading}
            onMouseEnter={() =>
              gsap.to(heading.current, { color: "#FB164A", duration: 0.5 })
            }
            onMouseLeave={() =>
              gsap.to(heading.current, { color: "#111", duration: 0.5 })
            } className="text-2xl lg:text-5xl">Full Stack Developer</h2>
          <h2 className="text-2xl lg:text-5xl inline-block bg-[#F9CD2F]">I Make Code Visible.</h2>
          <div className="buttons "></div>
        </div>
      <div className="right flex items-center justify-center mt-20">
  <svg
    className="h-55 lg:h-80"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 480 480"
  >
    <path
      d="M480 240a240 240 0 0 0-240 240 240 240 0 0 0 240-240ZM240 0A240 240 0 0 0 0 240 240 240 0 0 0 240 0ZM480 240A240 240 0 0 0 240 0a240 240 0 0 0 240 240ZM240 480A240 240 0 0 0 0 240a240 240 0 0 0 240 240Z"
      fill="#F9CD2F"
    />
  </svg>
</div>

      </div>
      <div className="flex justify-center mt-10 lg:mt-20 ">
        <Mouse size={68} strokeWidth={0.8}/>
      </div>
      <hr className="mx-5 mt-15 lg:mx-25"/>
    </div>
  );
};

export default Hero;
