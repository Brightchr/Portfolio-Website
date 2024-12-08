import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

  const skills = [
    { name: "GitHub", icon: "fab fa-github" },
    { name: "WordPress", icon: "fab fa-wordpress" },
    { name: "Java", icon: "fab fa-java" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "Python", icon: "fab fa-python" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "MongoDB", icon: "fas fa-leaf" },
    { name: "Photoshop", icon: "fas fa-pencil-alt" },
    { name: "Premiere Pro", icon: "fas fa-video" },
  ];

  // Use IntersectionObserver for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add slide-in animation when the section is visible
            entry.target.classList.add("animate-slide-in");
          } else {
            // Remove the animation when the section is no longer visible
            entry.target.classList.remove("animate-slide-in");
          }
        });
      },
      { threshold: 0.2 } // Trigger animation when 20% of the section is visible
    );

    const sections = document.querySelectorAll(".scroll-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <>
      <Navbar /> {/* Navbar Component */}
      {/* About Section */}
      <section id="about" className="bg-[#101124] text-white py-16 min-h-screen">
        <div className="container mx-auto px-6 max-w-screen-lg py-16 scroll-section opacity-0 transition-opacity duration-1000">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-sm uppercase tracking-wide text-blue-400 mb-2">
                About Me
              </h2>
              <h1 className="text-4xl font-bold mb-6">Who I Am</h1>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Hello! My name is Chris Bright, and I am a Web Application Developer and Software Engineer. I have a passion for Programming and enjoy creating impactful and innovative solutions.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                <h3 className="text-2xl font-bold mb-6 text-white">Interests</h3>
                When I’m not working, you can find me snowboarding, working out or playing video games. I also do programming projects on the side as I believe in continuous learning and am always eager to expand my knowledge and skill set.
              </p>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <img
                src="HeroSection3.jpg" // Replace with your actual image path
                alt="Profile"
                className="rounded-lg shadow-lg w-80 h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Skills and Resume Section */}
        <section
          id="skills-resume"
          className="bg-[#101124] py-16 text-white scroll-section opacity-0 transition-opacity duration-1000"
        >
          <div className="container mx-auto px-6 max-w-screen-lg grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* PDF Viewer */}
            <div className="bg-[#1A1C27] p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">My Resume</h2>
              <div className="h-96 overflow-hidden border border-gray-700 rounded">
                {/* Embedded Resume */}
                <iframe
                  src="/Resume.pdf" // Path to the PDF file
                  className="w-full h-full rounded"
                  title="Resume"
                  style={{ border: "none" }}
                ></iframe>
              </div>
              <div className="flex justify-between mt-4">
                {/* View Resume Button - Opens Modal */}
                <button
                  className="relative group px-6 py-3 text-white font-bold "
                  onClick={() => setIsModalOpen(true)} // Opens the modal when clicked
                >
                  <span className="absolute top-0 left-0 w-8 h-1 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute top-0 left-0 w-1 h-8 bg-blue-400 group-hover:h-full transition-all duration-300"></span>
                  <span className="absolute bottom-0 right-0 w-8 h-1 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute bottom-0 right-0 w-1 h-8 bg-blue-400 group-hover:h-full transition-all duration-300"></span>
                  <span className="relative z-10">View</span>
                </button>
                {/* Download Resume Button */}
                <a
                  href="/Resume.pdf" // Path to download the PDF
                  className="relative group px-6 py-3 text-white font-bold"
                  download
                >
                  <span className="absolute top-0 left-0 w-8 h-1 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute top-0 left-0 w-1 h-8 bg-blue-400 group-hover:h-full transition-all duration-300"></span>
                  <span className="absolute bottom-0 right-0 w-8 h-1 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute bottom-0 right-0 w-1 h-8 bg-blue-400 group-hover:h-full transition-all duration-300"></span>
                  <span className="relative z-10">Download</span>
                </a>
              </div>
            </div>

            {/* Skills Section */}
            <div className="col-span-2">
              <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center bg-[#1A1C27] rounded-lg shadow-lg py-6 px-4 hover:bg-zinc-900 transition-transform transform hover:scale-105"
                  >
                    <i
                      className={`${skill.icon} text-4xl mb-4`}
                      style={{
                        background: "linear-gradient(45deg, cyan, purple)", // Gradient styling for icons
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    ></i>
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Modal for Enlarged PDF View */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 w-[90%] h-[90%] rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
              onClick={() => setIsModalOpen(false)} // Closes the modal when clicked
            >
              Close
            </button>
            <iframe
              src="/Resume.pdf" // Path to display the PDF
              className="w-full h-full rounded"
              title="Resume Preview"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
