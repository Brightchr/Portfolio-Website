import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/ContactMe";
import Services from "./pages/Services";
import ProjectDetails from "./components/ProjectDetails";
import WelcomePage from "./pages/Welcome";
import Footer from "./components/Footer";
import "./styles/index.css";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        {/* Route for Welcome Page */}
        <Route
          path="/"
          element={<WelcomePage onContinue={() => navigate("/portfolio")} />}
        />

        {/* Route for Main Portfolio */}
        <Route
          path="/portfolio"
          element={
            <>
              <Navbar />

              {/* Render all sections as part of the single-page design */}
              <div className="sections-container">
                <section id="home" className="min-h-screen">
                  <Home />
                </section>
                <section id="services" className="min-h-screen bg-gray-900">
                  <Services />
                </section>
                <section id="about" className="min-h-screen bg-gray-800">
                  <About />
                </section>
                <section id="projects" className="min-h-screen bg-gray-700">
                  <Projects />
                </section>
                <section id="contact" className="min-h-screen bg-gray-600">
                  <Contact />
                </section>
                <Footer />
              </div>
            </>
          }
        />
        {/* Route for ProjectDetails Page */}
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
