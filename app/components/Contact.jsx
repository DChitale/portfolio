"use client";

import React, { useEffect, useRef } from "react";
import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      elementsRef.current.forEach((el, index) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const socials = [
    { name: "GitHub", url: "http://github.com/DChitale", icon: <Github size={32} strokeWidth={1.5} />, color: "#24292F" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/dhananjay-chitale/", icon: <Linkedin size={32} strokeWidth={1.5} />, color: "#0A66C2" },
    { name: "Email", url: "mailto:chitaledhananjay70@gmail.com", icon: <Mail size={32} strokeWidth={1.5} />, color: "#FB164A" },
    { name: "Instagram", url: "https://www.instagram.com/dhananjay.chitale/", icon: <Instagram size={32} strokeWidth={1.5} />, color: "#E1306C" }
  ];

  return (
    <div ref={containerRef} className="w-full py-24 px-6 md:px-12 lg:px-24 rounded-t-[3rem]  lg:mt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        <p ref={el => elementsRef.current[0] = el} className="text-[#f9cd2f] font-bold tracking-widest uppercase text-sm mb-6">
          What's Next?
        </p>

        <h1 ref={el => elementsRef.current[1] = el} className="text-5xl md:text-8xl font-display font-medium  mb-8">
          Let's Work <span className="border-[#111]/30 italic">Together.</span>
        </h1>

        <p ref={el => elementsRef.current[2] = el} className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        <a
          ref={el => elementsRef.current[3] = el}
          href="mailto:chitaledhananjay70@gmail.com"
          className="group flex items-center gap-3 bg-[#F9CD2F] text-[#111] px-10 py-5 rounded-full font-bold text-lg tracking-wider hover:bg-[#FB164A] hover:text-white transition-all duration-300 mb-24"
        >
          LET'S CONNECT
          <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

        <div className="w-full border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div ref={el => elementsRef.current[4] = el} className="text-gray-800 font-light text-sm">
            © {new Date().getFullYear()} Dhananjay Chitale. All rights reserved.
          </div>

          <div ref={el => elementsRef.current[5] = el} className="flex gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-gray-600 hover:text-white hover:bg-white/10 transition-colors group relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"
                  style={{ backgroundColor: social.color }}
                ></div>
                <div className="relative z-10 transition-transform group-hover:scale-110">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
