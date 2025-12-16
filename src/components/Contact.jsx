import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative h-full w-full flex flex-col justify-center py-8 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Get In Touch</h2>
          <div className="mx-auto h-1 w-20 mt-3 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400"></div>
        </motion.div>
        
        {/* Subtitle */}
        <p className="text-center text-base text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto">
          Open to <span className="font-semibold text-indigo-500">opportunities</span>, 
          <span className="font-semibold text-sky-500"> projects</span>, or 
          <span className="font-semibold text-emerald-500"> collaborations</span>
        </p>
        
        {/* Contact Cards - Horizontal */}
        <div className="flex justify-center gap-6 mb-8">
          <motion.a 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="mailto:rakvc456@gmail.com"
            className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/90 px-6 py-4 shadow-lg backdrop-blur-xl transition-all hover:-translate-y-1 dark:border-slate-700/60 dark:bg-slate-900/80"
          >
            <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 p-3 text-white">
              <FaEnvelope className="text-xl" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
              <p className="text-base font-semibold text-slate-900 dark:text-white">rakvc456@gmail.com</p>
            </div>
          </motion.a>
          
          <motion.a 
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="tel:+919798719722"
            className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/90 px-6 py-4 shadow-lg backdrop-blur-xl transition-all hover:-translate-y-1 dark:border-slate-700/60 dark:bg-slate-900/80"
          >
            <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 text-white">
              <FaPhone className="text-xl" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Phone</p>
              <p className="text-base font-semibold text-slate-900 dark:text-white">+91-9798719722</p>
            </div>
          </motion.a>
        </div>
        
        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-8"
        >
          <a 
            href="https://www.linkedin.com/in/rakesh-kumar-322245317/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl border border-slate-200/70 bg-white/90 p-4 shadow-md backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/80"
          >
            <FaLinkedin size={24} className="text-sky-500" />
          </a>
          <a 
            href="https://github.com/Rakesh-47" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl border border-slate-200/70 bg-white/90 p-4 shadow-md backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/80"
          >
            <FaGithub size={24} className="text-slate-600 dark:text-slate-300" />
          </a>
        </motion.div>
        
        {/* Footer */}
        <div className="border-t border-slate-200/50 pt-6 text-center dark:border-slate-700/40">
          <p className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            Made with <FaHeart className="text-rose-400" /> by Rakesh Kumar · © 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
