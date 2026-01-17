"use client";

import React, { useRef } from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import gsap from "gsap";

const Contact = () => {
  const insta = useRef();
  const linkedin = useRef();
  const github = useRef();
  const mail = useRef();

  return (
    <div className="w-full  p-5 lg:px-24 lg:py-10">
      <h1 className="font-medium text-3xl lg:text-5xl mb-3">Contact</h1>
      <div>
        <form action="/">
        
        </form>
      </div>
      <div className="rounded-full border-2 border-amber-300 p-5 mb-4 flex justify-around lg:mx-60">
        <a
          href="http://github.com/DChitale"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => {
            gsap.to(github.current, { color: "#24292F", duration: 0.5 });
          }}
          onMouseLeave={() => {
            gsap.to(github.current, { color: "#000" });
          }}
        >
          <Github ref={github} size={50} strokeWidth={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/in/dhananjay-chitale/"
          target="_blank"
          rel="noopener noreferrer"
         onMouseEnter={() => {
            gsap.to(linkedin.current, { color: "#0A66C2", duration: 0.5 });
          }}
          onMouseLeave={() => {
            gsap.to(linkedin.current, { color: "#000" });
          }}
        >
          <Linkedin ref={linkedin} size={50} strokeWidth={1.5} />
        </a>
        <a href="mailto:chitaledhananjay70@gmail.com" target="_blank" rel="noopener noreferrer" 
          onMouseEnter={() => {
            gsap.to(mail.current, { color: "#0F766E", duration: 0.5 });
          }}
          onMouseLeave={() => {
            gsap.to(mail.current, { color: "#000" });
          }}
        >
          <Mail ref={mail} size={50} strokeWidth={1.5} />
        </a>
        <a
          onMouseEnter={() => {
            gsap.to(insta.current, { color: "#E1306C", duration: 0.5 });
          }}
          onMouseLeave={() => {
            gsap.to(insta.current, { color: "#000" });
          }}
          href="https://www.instagram.com/dhananjay.chitale/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram ref={insta} size={50} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
