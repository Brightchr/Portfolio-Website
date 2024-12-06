// src/pages/About.jsx
import React from "react";
import Navbar from "../components/Navbar"; // Ensure this path matches your file structure

export default function About() {
  return (
    <>
      <Navbar /> {/* Navbar Component */}
      <section
        id="about"
        className="bg-[#101124] min-h-screen py-16 text-white"
      >
        <div className="container mx-auto px-6 max-w-screen-lg mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right Content (Image for Mobile) */}
            <div className="lg:hidden flex justify-center items-center mb-8">
              <img
                src="HeroSection3.jpg" // Placeholder image
                alt="Profile"
                className="rounded-lg shadow-lg w-64 h-64 object-cover"
              />
            </div>

            {/* Left Content */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-sm uppercase tracking-wide text-blue-400 mb-2">
                About Me
              </h2>
              <h1 className="text-4xl font-bold mb-6">Who I Am</h1>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Hello! My name is [Your Name], and I am a [Your
                Role/Profession]. I have a passion for [Your Passion or Focus
                Area] and enjoy creating impactful and innovative solutions.
                With a background in [Your Skills or Expertise], I bring a
                unique perspective to every project I work on.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                When I’m not working, you can find me [Your Hobbies or
                Interests]. I believe in continuous learning and am always eager
                to expand my knowledge and skill set.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="relative group px-6 py-3 text-white font-bold inline-block">
                  <span className="absolute top-0 left-0 w-8 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute top-0 left-0 w-0.5 h-8 bg-blue-400 group-hover:h-full transition-all duration-300"></span>
                  <span className="absolute bottom-0 right-0 w-8 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute bottom-0 right-0 w-0.5 h-8 bg-blue-400 group-hover:h-full transition-all duration-300"></span>
                  <span className="relative z-10">Learn More</span>
                </button>
              </div>
            </div>

            {/* Right Content (Image for Desktop) */}
            <div className="hidden lg:flex justify-center lg:justify-end items-center">
              <img
                src="https://via.placeholder.com/400x400?text=Profile+Image" // Placeholder image
                alt="Profile"
                className="rounded-lg shadow-lg w-80 h-80 object-cover"
              />
            </div>
          </div>

          {/* Interests Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              My Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1A1C27] p-6 rounded-lg text-center shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-400">
                  Outdoor Activities
                </h3>
                <p className="text-gray-400">
                  I enjoy hiking, kayaking, and snowboarding during the winter
                  months.
                </p>
              </div>
              <div className="bg-[#1A1C27] p-6 rounded-lg text-center shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-400">
                  Programming
                </h3>
                <p className="text-gray-400">
                  I love coding and exploring new technologies to solve complex
                  problems.
                </p>
              </div>
              <div className="bg-[#1A1C27] p-6 rounded-lg text-center shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Gaming</h3>
                <p className="text-gray-400">
                  In my free time, I enjoy playing video games and engaging in
                  creative storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
