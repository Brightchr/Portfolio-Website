import React, { useEffect, useState } from "react";
import projectsData from "../assets/Projects.json";

const Projects = () => {
  const testimonials = [
    {
      feedback:
        "The design quality, flexibility, documentation, and support are all absolutely excellent. Highly recommended!",
      name: "Josef Sharon",
      position: "CEO, OmniSoft",
    },
    {
      feedback:
        "The team provided outstanding solutions tailored to our needs. Their commitment to quality is unparalleled.",
      name: "Jane Doe",
      position: "CTO, TechWorld",
    },
    {
      feedback:
        "Amazing experience working with them. Their attention to detail and innovation brought our vision to life.",
      name: "John Smith",
      position: "Founder, StartUp Inc.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null); // State for selected project in modal

  useEffect(() => {
    // Auto-scroll for testimonials
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Scroll-triggered animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationClass =
              entry.target.dataset.direction === "left"
                ? "animate-slide-in-left"
                : "animate-slide-in-right";
            entry.target.classList.add(animationClass);
          } else {
            entry.target.classList.remove("animate-slide-in-left");
            entry.target.classList.remove("animate-slide-in-right");
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll(".scroll-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="bg-cover bg-center text-white font-sans pb-10"
      style={{
        backgroundImage: "url('ProjectBackground.jpg')", // Replace with your actual image path
        backgroundAttachment: "fixed", // Keeps the background fixed during scroll
      }}
    >
      {/* Experience Section */}
      <section
        className="py-12 scroll-section opacity-0 transition-opacity duration-1000 "
        data-direction="left"
      >
        <div className="max-w-6xl mx-auto px-4 bg-[#101124] bg-opacity-80 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
          <div className="border-l-4 border-blue-400 pl-6">
            {[
              {
                year: "2024",
                title: "Web Application Developer",
                company: "EASTCONN",
                description:
                  "Developed scalable web applications to improve internal processes and client experience.",
              },
              {
                year: "2021",
                title: "Python Developer",
                company: "Walgreens Co.",
                description:
                  "Created automated tools to streamline supply chain operations.",
              },
            ].map((exp, idx) => (
              <div key={idx} className="mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-400 w-10 h-10 flex items-center justify-center text-black font-bold">
                    {exp.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-4">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        className="max-w-6xl mx-auto py-12 px-4 bg-[#101124] bg-opacity-80 scroll-section opacity-0 transition-opacity duration-1000"
        data-direction="right"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectsData.map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(item)} // Open modal with project details
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        className="max-w-6xl mx-auto py-12 px-4 bg-[#101124] mt-8 mb-0 bg-opacity-80 scroll-section opacity-0 transition-opacity duration-1000"
        data-direction="left"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="relative h-48">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-500 ${
                idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-blue-400 text-lg italic">
                "{testimonial.feedback}"
              </p>
              <p className="text-gray-400 mt-4">
                <strong>{testimonial.name}</strong> - {testimonial.position}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
          <div className="relative bg-[#181A1F] p-8 rounded-lg max-w-3xl w-full">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white rounded-full p-2"
              onClick={() => setSelectedProject(null)} // Close modal
            >
              X
            </button>

            {/* Project Title */}
            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>

            {/* Project Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            {/* Project Description */}
            <p className="text-gray-300">{selectedProject.description}</p>

            {/* View Source Code Button */}
            {selectedProject.sourceCode && (
              <div className="mt-6 text-center">
                <a
                  href={selectedProject.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-400 text-black font-bold rounded-lg hover:bg-blue-500 transition"
                >
                  View Source Code
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
