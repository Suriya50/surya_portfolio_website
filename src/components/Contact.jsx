// components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: FaEnvelope, label: "Email", value: "suryazzx6@gmail.com", href: "mailto:suryazzx6@gmail.com" },
    { icon: FaPhoneAlt, label: "Phone", value: "+91 7868943703", href: "tel:+917868943703" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Tiruvannamalai, India", href: "#" },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a1f] to-[#0a0a1a]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Touch
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-400 text-sm mt-3">Let's work together</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.02, x: 3 }}
                href={info.href}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/5 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="bg-purple-500/20 p-2 rounded-full">
                  <info.icon className="text-cyan-400 text-sm" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px]">{info.label}</p>
                  <p className="text-white text-xs sm:text-sm font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/5"
            >
              <h3 className="text-gray-300 text-xs font-semibold mb-2">Connect</h3>
              <div className="flex gap-2">
                {[
                  { icon: FaGithub, href: "https://github.com/Suriya50" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/surya-s-132356357" },
                  { icon: FaWhatsapp, href: "https://wa.me/917868943703" },
                  { icon: FaTwitter, href: "#" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.15, y: -2 }}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white/5 rounded-full border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
                  >
                    <social.icon className="text-gray-400 hover:text-cyan-400 text-sm" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/5"
            >
              <h3 className="text-lg font-bold text-white mb-4">Send a Message</h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-3 p-2 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg text-xs text-center"
                >
                  ✓ Message sent! I'll get back to you soon.
                </motion.div>
              )}

              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/20 text-white placeholder-gray-500 text-sm transition"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/20 text-white placeholder-gray-500 text-sm transition"
                  required
                />
              </div>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/20 text-white placeholder-gray-500 text-sm transition mb-3 resize-none"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300 text-sm"
              >
                Send Message →
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-gray-500 text-[10px] sm:text-xs border-t border-white/5 pt-5"
        >
          <p>© 2025 Surya S. All rights reserved. | Built with React & Tailwind CSS</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;