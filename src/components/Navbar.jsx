import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-b from-black to-transparent z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Chris Bright</div>
        <div className="space-x-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer relative group text-white transition"
          >
            Home
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transform -translate-x-1/2 transition-all duration-300"></span>
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer relative group text-white transition"
          >
            Services
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transform -translate-x-1/2 transition-all duration-300"></span>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer relative group text-white transition"
          >
            About
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transform -translate-x-1/2 transition-all duration-300"></span>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer relative group text-white transition"
          >
            Projects
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transform -translate-x-1/2 transition-all duration-300"></span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer relative group text-white transition"
          >
            Contact
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transform -translate-x-1/2 transition-all duration-300"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
