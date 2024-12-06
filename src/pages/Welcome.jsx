import React from "react";

const WelcomePage = ({ onContinue }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between items-center">
      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-center w-full max-w-4xl mx-auto px-4 text-center">
        <header>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            Welcome to My Programming Portfolio
          </h1>
          <p className="mt-4 text-lg">
            Discover my projects, skills, and coding journey.
          </p>
          <button
            className="relative group px-6 py-3 text-white font-bold inline-block mt-6"
            onClick={onContinue}
          >
            <span className="absolute top-0 left-0 w-8 h-1 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            <span className="absolute top-0 left-0 w-1 h-8 bg-purple-400 group-hover:h-full transition-all duration-300"></span>
            <span className="absolute bottom-0 right-0 w-8 h-1 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            <span className="absolute bottom-0 right-0 w-1 h-8 bg-purple-400 group-hover:h-full transition-all duration-300"></span>
            <span className="relative z-10">Continue</span>
          </button>
        </header>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black py-6 text-center">
        <div className="w-full h-[1px] bg-gray-700 mb-4 mx-auto"></div>
        <p className="mb-2">
          Connect with me on{" "}
          <a
            href="https://github.com/yourgithub"
            className="text-purple-400 hover:underline"
          >
            GitHub
          </a>{" "}
          or{" "}
          <a
            href="https://linkedin.com/in/yourlinkedin"
            className="text-purple-400 hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
        <p className="text-gray-400">
          &copy; 2024 Your Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default WelcomePage;
