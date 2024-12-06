// src/pages/Contact.jsx
import React from "react";
import Navbar from "../components/Navbar";
import states from "../assets/states.json";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section
        id="contact"
        className="bg-[#101124] py-20 text-white min-h-screen"
      >
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-12 text-center">Contact Me</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Information Card */}
            <div className="bg-[#100028] p-8 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-gray-400 mb-6">
                  Fill up the form, and I'll get back to you within 24 hours.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center gap-4">
                    <i className="fas fa-phone-alt text-blue-400"></i>
                    <span>+1 (123) 456-7890</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <i className="fas fa-envelope text-blue-400"></i>
                    <span>yourname@example.com</span>
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Follow Me</h2>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook text-xl text-gray-400 hover:text-blue-400 transition"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram text-xl text-gray-400 hover:text-pink-400 transition"></i>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin text-xl text-gray-400 hover:text-blue-400 transition"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#100028] p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-400"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#1a1b2e] border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-400"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#1a1b2e] border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Business Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    className="w-full mt-2 px-4 py-3 rounded-lg bg-[#1a1b2e] border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Business Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="reason"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Reason for Contact
                  </label>
                  <select
                    id="reason"
                    className="w-full mt-2 px-4 py-3 rounded-lg bg-[#1a1b2e] border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Reason</option>
                    <option value="project">Project Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-400"
                  >
                    State <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="state"
                    className="w-full mt-2 px-4 py-3 rounded-lg bg-[#1a1b2e] border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select State</option>
                    {states.map((state, index) => (
                      <option key={index} value={state.code}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="businessAddress"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Business Address (Optional)
                  </label>
                  <input
                    type="text"
                    id="businessAddress"
                    className="w-full mt-2 px-4 py-3 rounded-lg bg-[#1a1b2e] border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Business Address"
                  />
                </div>
                <button
                  type="submit"
                  className="relative group px-6 py-3 text-white font-bold inline-block"
                >
                  <span className="absolute top-0 left-0 w-8 h-1 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute top-0 left-0 w-1 h-8 bg-blue-400 group-hover:h-full transition-all duration-300"></span>
                  <span className="absolute bottom-0 right-0 w-8 h-1 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute bottom-0 right-0 w-1 h-8 bg-blue-400 group-hover:h-full transition-all duration-300"></span>
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
