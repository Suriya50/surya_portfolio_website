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
    <section id="contact" className="relative py-20 px-4 max-w-7xl mx-auto overflow-hidden bg-primary min-h-[400px]">
      
      {/* FAINT BACKGROUND TEXT */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
        <h2 className="text-[80px] md:text-[180px] font-extrabold text-white/[0.03] tracking-widest">
          CONTACT
        </h2>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col lg:flex-row items-start gap-10 lg:gap-14 mt-6"
      >
        
        {/* LEFT SIDE: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/5 flex flex-col"
        >
          {/* Badge */}
          <div className="inline-block mb-3 text-accent text-[9px] font-semibold tracking-widest border border-accent/20 px-3 py-1 rounded-full bg-accent/5 self-start">
            GET IN TOUCH
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Contact <span className="text-accent">Me</span>
          </h2>
          <p className="mt-2 text-gray-400 text-[10px] md:text-xs leading-relaxed max-w-[200px] md:max-w-sm mb-6">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          {/* Contact Information List - Small Cards */}
          <div className="space-y-2.5 w-full">
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                whileHover={{ x: 5, borderColor: "#00ff66" }}
                href={info.href}
                className="flex items-center gap-2.5 glass rounded-xl p-2.5 border border-white/5 transition-all duration-300 cursor-pointer group"
              >
                <div className="p-1.5 rounded-full bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                  <info.icon className="text-accent text-[11px]" />
                </div>
                <div>
                  <p className="text-gray-500 text-[8px] uppercase tracking-wider">{info.label}</p>
                  <p className="text-white text-[11px] sm:text-xs font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links - Added Email & WhatsApp */}
          <div className="flex gap-2 mt-4">
            {[
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/surya-s-132356357" },
              { icon: FaGithub, href: "https://github.com/Suriya50" },
              { icon: FaEnvelope, href: "mailto:suryazzx6@gmail.com" },
              { icon: FaWhatsapp, href: "https://wa.me/917868943703" },
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -3, borderColor: "#00ff66", boxShadow: "0 0 15px rgba(0,255,102,0.2)" }}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 glass rounded-full border border-white/10 text-gray-400 hover:text-accent transition-all duration-300"
              >
                <social.icon size={15} />
              </motion.a>
            ))}
          </div>
        </motion.div>


        {/* RIGHT SIDE: 3D Floating Glass Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-3/5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm md:max-w-md group">
            
            {/* Glowing Base Behind Form */}
            <div className="absolute -inset-1 bg-accent/10 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-700" />

            {/* Floating 3D Envelope Icon - Repositioned perfectly for mobile */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-2 md:-top-12 md:-right-8 z-20 w-14 h-14 md:w-20 md:h-20 glass rounded-full border border-accent/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,102,0.3)] rotate-6 group-hover:rotate-12 transition-transform duration-500"
            >
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-md -z-10" />
              <FaEnvelope className="text-accent text-xl md:text-4xl drop-shadow-[0_0_10px_rgba(0,255,102,0.8)]" />
            </motion.div>

            {/* Main Contact Form - Smaller padding and fonts for 'small cart' feel */}
            <motion.form
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-5 md:p-8 border border-accent/30 shadow-[0_0_40px_rgba(0,255,102,0.1)] relative z-10"
            >
              <div className="flex items-center gap-2 mb-4 md:mb-6 border-b border-white/5 pb-3">
                <span className="text-gray-400 text-[9px] uppercase tracking-widest">Send a Message</span>
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

              {/* Form Inputs - Compact with small fonts */}
              <div className="space-y-3 md:space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-secondary/80 backdrop-blur-sm rounded-xl border border-white/10 px-3.5 py-2.5 text-white placeholder-gray-500 text-[11px] md:text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-secondary/80 backdrop-blur-sm rounded-xl border border-white/10 px-3.5 py-2.5 text-white placeholder-gray-500 text-[11px] md:text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                  required
                />
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-secondary/80 backdrop-blur-sm rounded-xl border border-white/10 px-3.5 py-2.5 text-white placeholder-gray-500 text-[11px] md:text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300 resize-none"
                  required
                />
                
                {/* Premium Send Button - Compact */}
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,255,102,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-2.5 md:py-3 bg-accent text-black font-bold text-[12px] rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Send Message
                  <FaTelegramPlane size={14} />
                </motion.button>
              </div>

              {/* Decorative Neon Corner Accent */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent/40 rounded-tr-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent/40 rounded-bl-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;