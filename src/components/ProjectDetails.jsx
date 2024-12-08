import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-scroll"; // Import Link for smooth scrolling
import projectsData from "../assets/Projects.json";

const ProjectDetails = () => {
  const { id } = useParams(); // Get project ID from route params
  const navigate = useNavigate();

  const project = projectsData.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return (
      <div className="text-white text-center mt-10">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <button
          className="mt-4 px-4 py-2 bg-blue-400 text-black rounded"
          onClick={() => navigate("/portfolio")} // Navigate to the portfolio page
        >
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#101124] text-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-[#181A1F] p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-300">{project.description}</p>
        <div className="mt-4 flex justify-start space-x-4">
          {/* Back to Projects Button */}
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-4 py-2 bg-blue-400 text-black rounded cursor-pointer"
            onClick={() => navigate("/portfolio")} // Ensure navigation to the portfolio page first
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
