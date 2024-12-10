import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-scroll";

export default function Services() {
  const services = [
    {
      title: "Software Engineering",
      description:
        "Providing scalable and reliable software solutions tailored to your needs. From concept to deployment, I ensure the highest quality standards are met for your software projects.",
      image: "/software-engineering.jpg", // Replace with your image path
      link: "#",
    },
    {
      title: "Web Development",
      description:
        "Creating stunning, responsive, and user-friendly websites to make your online presence stand out. Whether it’s a portfolio, eCommerce site, or blog, I’ve got you covered.",
      image: "/web-development.jpg", // Replace with your image path
      link: "#",
    },
    {
      title: "Video Editing",
      description:
        "Transforming raw footage into professional videos with seamless transitions, sound, and effects. Whether for marketing, YouTube, or personal projects, I deliver impactful videos.",
      image: "/video-editing.jpg", // Replace with your image path
      link: "#",
    },
  ];

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
    <>
      <Navbar />
      <section
        id="services"
        className="relative bg-[#100028] py-8 text-white min-h-screen bg-cover bg-center flex items-center"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="Animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Transparent Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>

        {/* Content Wrapper */}
        <div className="relative mx-auto px-6 max-w-6xl bg-[#100028] bg-opacity-80 rounded-lg py-12 shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Services I Provide:
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center scroll-section"
                data-direction={index % 2 === 0 ? "left" : "right"} // Alternates slide direction
              >
                {/* Service Image */}
                <div
                  className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg mb-4"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                ></div>
                {/* Service Title */}
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                {/* Service Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                {/* Call to Action Button */}
                <div className="flex justify-center lg:justify-start">
                  <Link
                    to="contact" // Match the ID of your About Me section
                    smooth={true}
                    duration={500}
                    className="mt-4 relative group px-6 py-3 text-white font-bold inline-block cursor-pointer"
                  >
                    <span className="absolute top-0 left-0 w-8 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    <span className="absolute top-0 left-0 w-0.5 h-8 bg-blue-400 group-hover:h-full transition-all duration-300"></span>
                    <span className="absolute bottom-0 right-0 w-8 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    <span className="absolute bottom-0 right-0 w-0.5 h-8 bg-blue-400 group-hover:h-full transition-all duration-300"></span>
                    <span className="relative z-10">Contact Me</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
