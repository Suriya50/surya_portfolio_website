import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo, integrate email service for real.)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-purple-100 via-purple-50 to-white flex flex-col items-center py-16 px-6 md:px-20"
    >
      {/* Section Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b-2 border-purple-500 pb-2">
        Contact Me
      </h1>
      <p className="text-gray-700 text-sm md:text-base mb-10 text-center max-w-2xl">
        I’d love to hear from you! Whether you have a question, want to collaborate on a project, or just want to say hi, feel free to reach out.
      </p>

      {/* Form + Social Links */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-10">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded-md font-medium hover:bg-purple-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex-1 flex flex-col gap-6 justify-center items-center bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Or connect with me:</h2>
          <div className="flex gap-6">
            <a
              href="mailto:suryazzx6@gmail.com"
              className="text-purple-600 text-2xl hover:text-purple-800 transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/surya-s-132356357/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 text-2xl hover:text-blue-900 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 text-2xl hover:text-green-700 transition-colors duration-300"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://github.com/Suriya50"
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 text-2xl hover:text-black transition-colors duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
