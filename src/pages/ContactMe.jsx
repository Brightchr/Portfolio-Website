import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs for email sending functionality
import Navbar from "../components/Navbar"; // Import Navbar component
import states from "../assets/states.json"; // Import the list of US states

const Contact = () => {
  // State for form values
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    reason: "",
    state: "",
    businessAddress: "",
    message: "",
  });

  // State for submission confirmation
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes and update state dynamically
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Use emailjs to send an email with form data
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Service ID from environment variables
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID from environment variables
        {
          ...formValues,
          to_email: "Brightchr.a@gmail.com", // Email recipient
        },
        process.env.REACT_APP_EMAILJS_USER_ID // User ID from environment variables
      )
      .then(
        () => {
          // If email sent successfully, reset form and show confirmation
          setIsSubmitted(true);
          setFormValues({
            firstName: "",
            lastName: "",
            businessName: "",
            reason: "",
            state: "",
            businessAddress: "",
            message: "",
          });
        },
        (error) => {
          // If an error occurs, log it and show an alert
          console.error("Email failed to send:", error);
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <>
      {/* Navbar component */}
      <Navbar />
      <section
        id="contact"
        className="bg-[#101124] py-10 text-white min-h-screen"
      >
        <div className="container mx-auto px-6 max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>

          {/* Main Card for Contact Information and Form */}
          <div className="bg-[#100028] p-6 rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section: Contact Information */}
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
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Follow Me</h2>
                {/* Social Media Links */}
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

            {/* Right Section: Contact Form */}
            <div>
              {/* Show confirmation message if submitted */}
              {isSubmitted ? (
                <p className="text-green-500 font-bold">
                  Thank you! Your message has been sent.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        value={formValues.firstName}
                        onChange={handleInputChange}
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
                        value={formValues.lastName}
                        onChange={handleInputChange}
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
                      value={formValues.businessName}
                      onChange={handleInputChange}
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
                      value={formValues.reason}
                      onChange={handleInputChange}
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
                      value={formValues.state}
                      onChange={handleInputChange}
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
                      value={formValues.businessAddress}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-400"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#1a1b2e] border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Type your message here..."
                      value={formValues.message}
                      onChange={handleInputChange}
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="relative group px-6 py-3 text-white font-bold inline-block bg-blue-500 rounded-lg"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
