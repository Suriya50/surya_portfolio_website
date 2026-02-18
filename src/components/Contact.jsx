import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

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
      className="w-full min-h-screen bg-gradient-to-b from-purple-100 via-purple-50 to-white flex flex-col items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20"
    >
      {/* Section Title with Decoration */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 inline-block border-b-4 border-purple-500 pb-2 px-4">
          Contact Me
        </h1>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-3 max-w-2xl mx-auto px-4">
          I'd love to hear from you! Whether you have a question, want to collaborate 
          on a project, or just want to say hi, feel free to reach out.
        </p>
      </div>

      {/* Contact Info Cards - Mobile First */}
      <div className="w-full max-w-6xl mx-auto mb-6 sm:mb-8 md:mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* Email Card */}
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-3 sm:gap-4 border border-purple-100">
            <div className="bg-purple-100 p-2 sm:p-3 rounded-full">
              <FaEnvelope className="text-purple-600 text-lg sm:text-xl" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-500">Email</p>
              <a href="mailto:suryazzx6@gmail.com" className="text-sm sm:text-base font-medium text-gray-800 hover:text-purple-600 truncate block">
                suryazzx6@gmail.com
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-3 sm:gap-4 border border-purple-100">
            <div className="bg-purple-100 p-2 sm:p-3 rounded-full">
              <FaPhoneAlt className="text-purple-600 text-lg sm:text-xl" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-500">Phone</p>
              <a href="tel:+919876543210" className="text-sm sm:text-base font-medium text-gray-800 hover:text-purple-600 truncate block">
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-3 sm:gap-4 border border-purple-100 sm:col-span-2 lg:col-span-1">
            <div className="bg-purple-100 p-2 sm:p-3 rounded-full">
              <FaMapMarkerAlt className="text-purple-600 text-lg sm:text-xl" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-500">Location</p>
              <p className="text-sm sm:text-base font-medium text-gray-800 truncate">
                Tiruvannamalai, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section - Form + Social */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {/* Contact Form */}
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col gap-3 sm:gap-4 border border-purple-50"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Send a Message
            </h2>
            
            <div className="space-y-3 sm:space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                required
              />
              
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                required
              />
              
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                required
              />
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:from-purple-600 hover:to-purple-700 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Send Message →
              </button>
            </div>
          </form>
        </div>

        {/* Social Links & Additional Info */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-5">
          {/* Social Cards */}
          <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-50">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Connect With Me
            </h2>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <a
                href="https://github.com/Suriya50"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <FaGithub className="text-gray-800 text-2xl sm:text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs sm:text-sm font-medium text-gray-600 mt-1">GitHub</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/surya-s-132356357/"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center p-3 sm:p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300"
              >
                <FaLinkedin className="text-blue-700 text-2xl sm:text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs sm:text-sm font-medium text-gray-600 mt-1">LinkedIn</span>
              </a>
              
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center p-3 sm:p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-300"
              >
                <FaWhatsapp className="text-green-500 text-2xl sm:text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs sm:text-sm font-medium text-gray-600 mt-1">WhatsApp</span>
              </a>
              
              <a
                href="mailto:suryazzx6@gmail.com"
                className="group flex flex-col items-center p-3 sm:p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-all duration-300"
              >
                <FaEnvelope className="text-purple-600 text-2xl sm:text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs sm:text-sm font-medium text-gray-600 mt-1">Email</span>
              </a>
            </div>
          </div>

          {/* Quick Response Card */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-xl text-white">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-white/20 p-2 sm:p-3 rounded-full">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">Quick Response</h3>
                <p className="text-xs sm:text-sm opacity-90">I usually reply within 24 hours</p>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 text-xs sm:text-sm bg-white/10 rounded-lg p-2 sm:p-3 text-center">
              ⚡ Available for freelance work & collaborations
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-8 sm:mt-10 md:mt-12 text-center text-gray-500 text-xs sm:text-sm">
        <p>© 2025 Surya S. All rights reserved. | Built with React & Tailwind CSS</p>
      </div>
    </section>
  );
};

export default Contact;