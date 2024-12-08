import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#101124] text-gray-400 py-6">
      <div className="container mx-auto px-6 max-w-screen-lg text-center">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Section */}
          <div className="text-white text-lg font-bold">
            &copy; {new Date().getFullYear()} Chris Bright
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/Brightchr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://twitter.com/yourtwitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4">
          <p>
            Designed & Developed by{" "}
            <span className="text-blue-400">Chris Bright</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
