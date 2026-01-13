"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Mouse } from 'lucide-react';
import Link from "next/link";

const Hero = () => {
  const cursor = useRef(null);
  const heading = useRef(null);
  const resumebtn = useRef(null);
  const scroller = useRef();

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.15,
        ease: "power3.out",
      });
    };



    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="lg:h-full h-screen">
      <div
        ref={cursor}
        className="hidden lg:block lg:w-10 lg:h-10 border-2 border-[#FB164A] rounded-full fixed top-0 left-0 pointer-events-none z-50"
      />
      <div>
        <div className="min-h-full px-5 lg:px-25 lg:pt-20 pt-10 lg:mt-[15vh] lg:mx-20 flex flex-col">
          <h3 className="text-[20px]">Hey 👋, I'm</h3>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium">
            Dhananjay Chitale.
          </h2>

          <h1
            ref={heading}
            onMouseEnter={() =>
              gsap.to(heading.current, { color: "#FB164A", duration: 0.5 })
            }
            onMouseLeave={() =>
              gsap.to(heading.current, { color: "#111", duration: 0.5 })
            }
            className=" text-2xl md:text-4xl lg:text-6xl "
          >
            Full Stack Developer
          </h1>
          <h3 className="text-2xl leading-2xl md:text-2xl lg:text-4xl inline-block self-start bg-amber-300">
            I Make Code Visible.
          </h3>

          <div className="flex gap-4 mt-5 items-center">
            <button
              ref={resumebtn}
              onMouseEnter={() =>
                gsap.to(resumebtn.current, { color: "#FB164A", duration: 0.5 })
              }
              onMouseLeave={() =>
                gsap.to(resumebtn.current, { color: "#111", duration: 0.5 })
              }
              className="border border-black rounded-4xl p-3 text-[20px]"
            >
              Resume
            </button>
            <Link href="/contact">
              <p className="hover:underline text-2xl">Contact Me</p>
            </Link>
          </div>
         
        </div>
        <div className="h-60 flex justify-center items-center">
          <Mouse size={68} strokeWidth={1}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
