import React from "react";
import Navbar from "../components/Navbar";

const images = [
  "HeroSection.jpg",
  "Project1.jpg",
  "software-engineering.jpg",
  "Project2.jpg",
  "Services.jpg",
  "web-development.jpg",
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <section className="bg-[#101124] py-8 text-white">
        <div className="w-full">
          <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
          <div className="flex flex-col gap-2">
            {/* Row 1 */}
            <div className="flex gap-2">
              <img
                src={images[0]}
                alt="Project 1"
                className="w-2/3 h-[300px] object-cover"
              />
              <div className="flex flex-col w-1/3 gap-2">
                <img
                  src={images[1]}
                  alt="Project 2"
                  className="h-[148px] object-cover"
                />
                <img
                  src={images[2]}
                  alt="Project 3"
                  className="h-[148px] object-cover"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-2">
              <div className="flex flex-col w-1/3 gap-2">
                <img
                  src={images[3]}
                  alt="Project 4"
                  className="h-[148px] object-cover"
                />
                <img
                  src={images[4]}
                  alt="Project 5"
                  className="h-[148px] object-cover"
                />
              </div>
              <img
                src={images[5]}
                alt="Project 6"
                className="w-2/3 h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
