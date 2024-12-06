// src/pages/Skills.jsx
import React from "react";
import Navbar from "../components/Navbar";

export default function Skills() {
  const skills = [
    { name: "GitHub", icon: "fab fa-github" },
    { name: "WordPress", icon: "fab fa-wordpress" },
    { name: "Java", icon: "fab fa-java" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "Python", icon: "fab fa-python" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "MongoDB", icon: "fas fa-leaf" },
    { name: "Photoshop", icon: "fas fa-pencil-alt" }, // Photoshop (using pencil-alt as a placeholder)
    { name: "Premiere Pro", icon: "fas fa-video" }, // Premiere Pro (using video icon as a placeholder)
  ];

  return (
    <>
      <Navbar />
      <section className="bg-[#101124] py-2 text-white min-h-screen">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-8 text-center">My Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-[#1a1b2e] rounded-lg shadow-lg py-6 px-4 hover:bg-zinc-900 transition-transform transform hover:scale-105"
              >
                <i
                  className={`${skill.icon} text-4xl mb-4`}
                  style={{
                    background: "linear-gradient(45deg, cyan, purple)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                ></i>
                <h2 className="text-xl font-bold">{skill.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
