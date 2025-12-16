import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { SiScala, SiApachespark, SiGooglecloud, SiApachekafka } from 'react-icons/si';
import { motion } from 'framer-motion';

const Experience = () => {
  const technologies = [
    { name: "Scala", icon: <SiScala /> },
    { name: "Spark", icon: <SiApachespark /> },
    { name: "GCP", icon: <SiGooglecloud /> },
    { name: "Kafka", icon: <SiApachekafka /> },
    { name: "Airflow" },
    { name: "BigQuery" },
    { name: "Hive" },
    { name: "SQL" }
  ];

  const achievements = [
    { metric: "65%", text: "Reduced data query runtime with Spark-Scala pipeline" },
    { metric: "Real-time", text: "Built fault-tolerant ETL pipeline with Kafka" },
    { metric: "60%", text: "Accelerated NoSQL ingestion with partition pruning" }
  ];

  return (
    <section id="experience" className="relative h-full w-full flex flex-col justify-center px-6 md:px-12 py-8">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Work Experience</h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-400" />
        </motion.div>
        
        {/* Experience Card - Compact */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-400/40 via-sky-400/40 to-emerald-400/40 opacity-40 blur-lg group-hover:opacity-60" />
          <div className="relative rounded-2xl border border-slate-200/80 bg-white/90 p-6 md:p-8 shadow-lg backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/85">
            {/* Header Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                  <FaBriefcase className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Software Engineer Intern</h3>
                  <p className="text-lg font-semibold text-indigo-500 dark:text-indigo-300">Walmart Global Tech</p>
                </div>
              </div>
              <div className="flex gap-3 text-sm">
                <span className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 dark:bg-slate-800">
                  <FaMapMarkerAlt className="text-indigo-400" /> Bengaluru
                </span>
                <span className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 dark:bg-slate-800">
                  <FaCalendar className="text-violet-400" /> May - July 2025
                </span>
              </div>
            </div>
            
            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wide">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                  <span key={idx} className="flex items-center gap-2 rounded-lg border border-slate-200/70 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-200">
                    {tech.icon && <span className="text-base">{tech.icon}</span>}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Achievements - Horizontal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 rounded-xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-slate-700/60 dark:bg-slate-800/60"
                >
                  <div className="flex h-12 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-sky-400 text-white text-base font-bold">
                    {item.metric}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
