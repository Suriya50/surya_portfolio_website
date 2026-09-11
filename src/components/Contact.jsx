import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaTelegramPlane,
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
    { icon: FaMapMarkerAlt, label: "Location", value: "Chennai, Tamil Nadu, India", href: "#" },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 max-w-6xl mx-auto overflow-hidden bg-primary min-h-[400px]">

      {/* Faint Background Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
        <h2 className="text-[80px] md:text-[160px] font-extrabold text-white/[0.03] tracking-widest">
          CONTACT
        </h2>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-accent-2/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >

        {/* ===== HEADER ===== */}
        <div className="mb-8 text-center lg:text-left">
          <div className="inline-block mb-3 text-accent text-[10px] font-semibold tracking-widest border border-accent/30 px-3 py-1 rounded-full bg-accent/5">
            📩 GET IN TOUCH
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-2 text-gray-400 text-[11px] sm:text-xs md:text-sm max-w-lg mx-auto lg:mx-0">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        {/* ===== TWO-COLUMN LAYOUT ===== */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">

          {/* ===== LEFT SIDE: Contact Info ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5 flex flex-col"
          >
            {/* Contact Info Cards */}
            <div className="space-y-2.5 w-full">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  whileHover={{ x: 4, borderColor: "#8b5cf6" }}
                  href={info.href}
                  className="flex items-center gap-2.5 glass rounded-xl p-2.5 border border-white/5 transition-all duration-300 cursor-pointer group"
                >
                  <div className="p-1.5 rounded-full bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <info.icon className="text-accent text-[11px]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-500 text-[8px] md:text-[9px] uppercase tracking-wider">{info.label}</p>
                    <p className="text-white text-[11px] md:text-xs font-medium truncate">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-2 mt-4">
              {[
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/surya-s-132356357", label: "LinkedIn" },
                { icon: FaGithub, href: "https://github.com/Suriya50", label: "GitHub" },
                { icon: FaEnvelope, href: "mailto:suryazzx6@gmail.com", label: "Email" },
                { icon: FaWhatsapp, href: "https://wa.me/917868943703", label: "WhatsApp" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3, borderColor: "#8b5cf6", boxShadow: "0 0 15px rgba(139,92,246,0.25)" }}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="p-2 glass rounded-full border border-white/10 text-gray-400 hover:text-accent transition-all duration-300"
                >
                  <social.icon size={14} />
                </motion.a>
              ))}
            </div>

            {/* Availability Note */}
            <div className="mt-5 p-3 rounded-xl glass border border-accent/20">
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                </span>
                <p className="text-green-400 text-[10px] md:text-[11px] font-bold tracking-wider">
                  AVAILABLE NOW
                </p>
              </div>
              <p className="text-gray-400 text-[9px] md:text-[10px] leading-relaxed">
                Open to full-time roles, internships, and freelance projects.
              </p>
            </div>
          </motion.div>


          {/* ===== RIGHT SIDE: Form ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-3/5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm md:max-w-md group">

              {/* Glow behind form */}
              <div className="absolute -inset-1 bg-accent/10 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />

              {/* Floating Envelope Icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-7 -right-2 md:-top-10 md:-right-6 z-20 w-12 h-12 md:w-16 md:h-16 glass rounded-full border border-accent/40 flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.3)] rotate-6 group-hover:rotate-12 transition-transform duration-500"
              >
                <div className="absolute inset-0 rounded-full bg-accent/20 blur-md -z-10" />
                <FaEnvelope className="text-accent text-lg md:text-2xl" />
              </motion.div>

              {/* Form */}
              <motion.form
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-4 md:p-6 border border-accent/30 shadow-[0_0_30px_rgba(139,92,246,0.12)] relative z-10"
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2.5">
                  <span className="text-gray-400 text-[9px] md:text-[10px] uppercase tracking-widest">
                    Send a Message
                  </span>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-accent/50 to-transparent" />
                </div>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-3 p-2.5 bg-accent/10 border border-accent/30 text-accent rounded-xl text-[10px] text-center font-medium"
                  >
                    ✓ Message sent! I'll get back to you soon.
                  </motion.div>
                )}

                {/* Inputs */}
                <div className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-secondary/80 backdrop-blur-sm rounded-lg border border-white/10 px-3.5 py-2.5 text-white placeholder-gray-500 text-[11px] md:text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-secondary/80 backdrop-blur-sm rounded-lg border border-white/10 px-3.5 py-2.5 text-white placeholder-gray-500 text-[11px] md:text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                    required
                  />
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-secondary/80 backdrop-blur-sm rounded-lg border border-white/10 px-3.5 py-2.5 text-white placeholder-gray-500 text-[11px] md:text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300 resize-none"
                    required
                  />

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(139,92,246,0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-2.5 bg-gradient-to-r from-accent to-accent-2 text-white font-semibold text-[11px] md:text-xs rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                  >
                    Send Message
                    <FaTelegramPlane size={13} />
                  </motion.button>
                </div>

                {/* Decorative Corners */}
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-accent/40 rounded-tr-2xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-accent/40 rounded-bl-2xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.form>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};

export default Contact;