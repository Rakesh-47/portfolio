import React from 'react';
import { FaGraduationCap, FaCode, FaTrophy, FaChartLine, FaLightbulb, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative h-full w-full flex flex-col justify-center px-6 md:px-12 py-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">About Me</h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400" />
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A curious engineer blending data pipelines, full-stack craft, and elegant interactions.
          </p>
        </motion.div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-2 group relative"
          >
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-400/40 to-emerald-400/40 opacity-40 blur-lg group-hover:opacity-60" />
            <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-lg backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-400 p-3 text-white">
                  <FaGraduationCap className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
                  <span className="text-sm text-indigo-500 font-medium">2022-2026</span>
                </div>
              </div>
              <p className="text-lg font-bold text-slate-900 dark:text-white">IIT (ISM) Dhanbad</p>
              <p className="text-base text-slate-600 dark:text-slate-300 mb-4">Bachelor of Technology</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 rounded-lg bg-slate-100/80 px-3 py-1.5 dark:bg-slate-800/60">
                  <FaLightbulb className="text-sm text-amber-500" />
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-200">Computer Science Focus</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-slate-100/80 px-3 py-1.5 dark:bg-slate-800/60">
                  <FaRocket className="text-sm text-fuchsia-400" />
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-200">Data Engineering</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards - Compact */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-400/40 to-fuchsia-400/40 opacity-40 blur-lg group-hover:opacity-60" />
            <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-lg backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 flex flex-col items-center justify-center text-center">
              <FaCode className="text-3xl text-violet-500 mb-3" />
              <span className="text-3xl font-bold text-slate-900 dark:text-white">1000+</span>
              <span className="text-sm text-slate-600 dark:text-slate-300">Problems Solved</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-400/40 to-teal-400/40 opacity-40 blur-lg group-hover:opacity-60" />
            <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-lg backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 flex flex-col items-center justify-center text-center">
              <FaTrophy className="text-3xl text-amber-500 mb-3" />
              <span className="text-3xl font-bold text-slate-900 dark:text-white">Top 3%</span>
              <span className="text-sm text-slate-600 dark:text-slate-300">Meta Hacker Cup</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-sky-400/40 to-blue-400/40 opacity-40 blur-lg group-hover:opacity-60" />
            <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-lg backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 flex flex-col items-center justify-center text-center">
              <FaChartLine className="text-3xl text-sky-500 mb-3" />
              <span className="text-3xl font-bold text-slate-900 dark:text-white">1912</span>
              <span className="text-sm text-slate-600 dark:text-slate-300">LeetCode Rating</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-orange-400/40 to-red-400/40 opacity-40 blur-lg group-hover:opacity-60" />
            <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-lg backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 flex flex-col items-center justify-center text-center">
              <FaCode className="text-3xl text-orange-500 mb-3" />
              <span className="text-3xl font-bold text-slate-900 dark:text-white">1786</span>
              <span className="text-sm text-slate-600 dark:text-slate-300">CF Expert</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
