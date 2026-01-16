import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "KrishiMitra 2.0",
      imageUrl:
        "https://ik.imagekit.io/dchitale/Portfolio/KrishiMitra%202.0.jpg",
      description: "A modern AI-powered agricultural platform designed to empower farmers with data-driven insights. It offers smart features like personalized crop recommendations, disease detection from images, weather monitoring, and future price forecasting.",
      project_link: "https://krishi-mitra-2.vercel.app/"
    },
     {
      title: "Shakti-Exchange",
      imageUrl:
        "https://ik.imagekit.io/dchitale/Portfolio/Shakti-Exchange%20(1).jpg",
      description: "A decentralized peer-to-peer energy trading platform that enables producers and consumers to trade energy directly using blockchain smart contracts. The platform features a responsive web dashboard for creating offers, matching trades, and settling transactions in a trustless manner.",
      project_link: "https://shakti-exchange.vercel.app/"
    }, {
      
      title: "Shakti-Exchange",
      imageUrl:
        "https://ik.imagekit.io/dchitale/Portfolio/Social-Guard.jpg",
      description: "A Social Engineering Attack Simulator designed to help organizations strengthen their cybersecurity posture by simulating realistic attack scenarios, training employees, and tracking performance with detailed analytics.",
      project_link: "https://social-guard-rouge.vercel.app/"
    }
  ];

  return (
    <div className="w-full min-h-screen p-5 lg:px-24 lg:py-10 bg-gray-200">
      <h1 className="font-medium text-5xl mb-6">Projects</h1>

      <div className="flex gap-6 flex-wrap">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border bg-gray-300 p-4 w-100"
          >
            <div className="h-70  mb-4">
              <img
                className="object-cover rounded h-full w-full"
                src={project.imageUrl}
                alt={project.title}
              />
            </div>

            <h1 className="text-2xl font-medium">
              {project.title}
            </h1>
            <h2 className="text-xl text-gray-700">
              {project.description}
            </h2>

            {project.project_link && (
              <a
                href={project.project_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 mt-2 inline-block"
              >
                Link
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
