'use client';

import React, { useEffect, useRef } from "react";
import { ExternalLink } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

 const projects = [
  {
    title: "KrishiMitra 2.0",
    imageUrl: "https://ik.imagekit.io/dchitale/Portfolio/KrishiMitra%202.0.jpg",
    description: "What if farmers had an AI advisor in their pocket? KrishiMitra 2.0 brings smart crop recommendations, real-time disease detection, and future price forecasting to agriculture — bridging the gap between data science and the fields.",
    project_link: "https://krishi-mitra-2.vercel.app/",
    tags: ["React", "AI", "Node.js"]
  },
  {
    title: "Shakti-Exchange",
    imageUrl: "https://ik.imagekit.io/dchitale/Portfolio/Shakti-Exchange%20(1).jpg",
    description: "Energy trading, but without the middlemen. Shakti-Exchange is a decentralized P2P platform where producers and consumers trade energy directly via blockchain smart contracts — rethinking how power flows in a Web3 world.",
    project_link: "https://shakti-exchange.vercel.app/",
    tags: ["Vite", "Solidity", "Tailwind"]
  },
 
 {
  title: "HexNotes",
  imageUrl: "https://ik.imagekit.io/dchitale/Portfolio/Hex-Notes.jpg",
  description: "A personal tech blog with a hacker's mindset. HexNotes dives deep into cybersecurity concepts, tools, and findings — written for curious minds who like to understand how things break and how to fix them.",
  project_link: "https://hexnotes.vercel.app/",
  tags: ["React", "MongoDB", "Node.js"]
},
 
  {
    title:"DeepRealm",
    imageUrl:"https://ik.imagekit.io/dchitale/Portfolio/DeepRealm.jpg",
    description:"DeepRealm is an immersive ocean exploration web experience that guides users from the Sunlight Zone to the deepest Hadal trenches with cinematic storytelling and smooth interactions.",
    project_link:"https://deeprealm.vercel.app/",
    tags:["React","three.js","GSAP"]
  },
  {
    title: "Social-Guard",
    imageUrl: "https://ik.imagekit.io/dchitale/Portfolio/Social-Guard.jpg",
    description: "How vulnerable is your organization to social engineering? Social-Guard simulates realistic attack scenarios — phishing, pretexting, and more — to expose weaknesses before real attackers do.",
    project_link: "https://social-guard-rouge.vercel.app/",
    tags: ["Next.js", "Security", "GSAP"]
  },
];

  useEffect(() => {
    if (!containerRef.current) return;

    cardsRef.current.forEach((card, index) => {
      // Entrance animation
      gsap.fromTo(card,
        { opacity: 20, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stacking scaling effect: current card shrinks slightly as next one covers it
      if (index < projects.length - 1) {
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.85,
          scrollTrigger: {
            trigger: cardsRef.current[index + 1],
            start: "top 85%",
            end: "top 25%",
            scrub: true,
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [projects.length]);

  return (
    <div ref={containerRef} className="w-full py-20 px-6 md:px-12 lg:px-24 bg-[#FFFBEC]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[#FB164A] font-medium tracking-widest uppercase text-sm mb-2 block">My Work</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-[#111]">Projects</h2>
          </div>
          <p className="text-gray-600 max-w-md text-lg italic">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
        </div>

        <div className="relative flex flex-col gap-10 md:gap-20">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="sticky top-28 md:top-36 w-full mb-10 group"
              style={{
                zIndex: index + 1,
              }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl transition-all duration-500 hover:shadow-black/5 flex flex-col lg:flex-row h-auto lg:h-[500px]">
                {/* Image Section - Black & White by default */}
                <div className="w-full lg:w-1/2 h-64 lg:h-full overflow-hidden lg:grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                  <img
                    className="object-cover w-full h-full scale-100 group-hover:scale-105 transition-transform duration-700"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium uppercase tracking-wider italic">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl lg:text-5xl font-display font-medium text-[#111] mb-6 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 line-clamp-4 lg:line-clamp-none italic">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <a
                      href={project.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 text-[#111] font-bold text-lg uppercase tracking-widest hover:text-[#FB164A] transition-colors"
                    >
                      View Live
                      <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
