"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mouse, ArrowRight } from "lucide-react";

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      })
        .from(svgRef.current, {
          scale: 0.5,
          opacity: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)"
        }, "-=0.8")
        .to(".mouse-icon", {
          y: 10,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: "power1.inOut"
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[90vh] w-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-20 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        <div className="space-y-8">
          <div className="hero-text overflow-hidden">
            <span className=" font-medium tracking-widest uppercase text-lg mb-4 block">Hey 👋, I'm</span>

            <h1 className="text-5xl md:text-7xl font-display font-medium text-[#111] leading-[1.1]">
              Dhananjay <br />

            </h1>
            <span className="text-[#FB164A] font-medium tracking-widest uppercase text-lg mb-4 block">Full Stack Developer</span>

          </div>

          <div className="hero-text">
            <h2 className="text-2xl md:text-4xl text-gray-700 font-light max-w-xl leading-relaxed">
              I build <span className="text-[#111] font-medium italic underline decoration-[#F9CD2F] decoration-4">digital experiences</span> that blend logic with high-end aesthetics.
            </h2>
          </div>

          <div className="hero-text flex flex-wrap gap-6 pt-4">
            <a href="#projects" className="group flex items-center gap-3 bg-[#111] text-white px-8 py-5 rounded-full font-bold text-lg tracking-wider hover:bg-[#FB164A] transition-all duration-300">
              VIEW PROJECTS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div ref={svgRef} className="flex items-center justify-center w-full">
            <svg
              className="h-56 lg:h-80 w-auto"
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
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 mouse-icon hidden lg:block">
        <Mouse size={32} className="text-gray-400" strokeWidth={1} />
      </div>
    </div>
  );
};

export default Hero;
