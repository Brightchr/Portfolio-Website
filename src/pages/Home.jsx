import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-scroll";
// import Clock from "../components/Clock";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="flex h-screen">
        {/* Left Section */}
        <div className="bg-black w-[30%] flex justify-center items-center relative text-white">
        </div>

        {/* Right Section */}
        <div
          className="w-[70%] h-full bg-cover bg-center relative"
          style={{
            backgroundImage: "url('Main-Img.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-20 left-12 text-white">
            <h1 className="text-6xl font-bold leading-tight">
              Let's Create Something
            </h1>
            <h2 className="text-6xl font-bold text-white">Great Together.</h2>
            <Link
          to="about" // Match the ID of your About Me section
          smooth={true}
          duration={500}
          className="mt-4 relative group px-6 py-3 text-white font-bold inline-block cursor-pointer"
        >
          <span className="absolute top-0 left-0 w-8 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          <span className="absolute top-0 left-0 w-0.5 h-8 bg-blue-400 group-hover:h-full transition-all duration-300"></span>
          <span className="absolute bottom-0 right-0 w-8 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          <span className="absolute bottom-0 right-0 w-0.5 h-8 bg-blue-400 group-hover:h-full transition-all duration-300"></span>
          <span className="relative z-10">About Me</span>
        </Link>
          </div>
        </div>
      </section>

      {/* My Services Section */}
      <section id="services" className="bg-[#100028] py-16 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center max-w-md">
              <h2 className="text-sm uppercase tracking-wide text-blue-400 mb-2">
                My Services
              </h2>
              <h1 className="text-4xl font-bold mb-4">What I Do</h1>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Contact me for professional help to develop custom software
                solutions. Once the project is complete,
                you'll have a tailored product designed to meet your specific
                needs.
              </p>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service Card */}
              <div className="flex flex-col items-start text-left group">
                <div className="relative flex items-center justify-center bg-[#101124] border border-blue-400 w-16 h-16 mb-4 transform transition-transform duration-300 group-hover:rotate-45">
                  <i className="fas fa-chart-bar text-blue-400 text-2xl transform group-hover:rotate-[-45deg] transition-transform duration-300"></i>
                </div>
                <h3 className="text-lg font-bold mb-2">Software Engineering</h3>
                <p className="text-sm text-gray-400">
                  Whether you’re halfway through the development process, or
                  haven’t even started...
                </p>
              </div>

              {/* Other Service Cards */}
              <div className="flex flex-col items-start text-left group">
                <div className="relative flex items-center justify-center bg-[#101124] border border-blue-400 w-16 h-16 mb-4 transform transition-transform duration-300 group-hover:rotate-45">
                  <i className="fas fa-pen text-blue-400 text-2xl transform group-hover:rotate-[-45deg] transition-transform duration-300"></i>
                </div>
                <h3 className="text-lg font-bold mb-2">UI/UX Design</h3>
                <p className="text-sm text-gray-400">
                  I can create or put the finishing touches.
                </p>
              </div>

              <div className="flex flex-col items-start text-left group">
                <div className="relative flex items-center justify-center bg-[#101124] border border-blue-400 w-16 h-16 mb-4 transform transition-transform duration-300 group-hover:rotate-45">
                  <i className="fas fa-video text-blue-400 text-2xl transform group-hover:rotate-[-45deg] transition-transform duration-300"></i>
                </div>
                <h3 className="text-lg font-bold mb-2">Video Editing</h3>
                <p className="text-sm text-gray-400">
                  Your videos can be processed efficiently and professionally.
                </p>
              </div>

              <div className="flex flex-col items-start text-left group">
                <div className="relative flex items-center justify-center bg-[#101124] border border-blue-400 w-16 h-16 mb-4 transform transition-transform duration-300 group-hover:rotate-45">
                  <i className="fas fa-server text-blue-400 text-2xl transform group-hover:rotate-[-45deg] transition-transform duration-300"></i>
                </div>
                <h3 className="text-lg font-bold mb-2">Web Developement</h3>
                <p className="text-sm text-gray-400">
                  Get websites created to your needs with a professionally created website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
