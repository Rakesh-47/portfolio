import React from 'react';
import { FaGithub, FaUsers, FaRocket, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      name: "Course Chronicle",
      description: "Centralized platform for past exam papers with AI-powered Q&A extraction.",
      tech: ["React", "Node.js", "MongoDB", "Gemini API"],
      impact: "50+ users",
      color: "from-blue-500 to-cyan-500",
      github: "https://github.com/Rakesh-47/Course-Chronicle"
    },
    {
      name: "CPU Scheduler Visualizer",
      description: "Interactive OS scheduling simulator with real-time visualizations.",
      tech: ["Next.js", "TypeScript"],
      impact: "100+ users",
      color: "from-purple-500 to-pink-500",
      github: "https://github.com/Rakesh-47/CPU-Scheduler-Visualizer"
    },
    {
      name: "Connectify",
      description: "Real-time MERN chat app with 70% improved concurrent capacity.",
      tech: ["React", "Node.js", "Socket.IO"],
      impact: "70% boost",
      color: "from-green-500 to-emerald-500",
      github: "https://github.com/Rakesh-47/Connectify"
    },
    {
      name: "Interactive Portfolio",
      description: "Modern portfolio with advanced animations and glassmorphism.",
      tech: ["React", "Tailwind", "Framer Motion"],
      impact: "Live Site",
      color: "from-indigo-500 to-violet-500",
      github: "https://github.com/Rakesh-47/portfolio"
    }
  ];

  return (
    <section id="projects" className="relative h-full w-full flex flex-col justify-center px-6 md:px-12 py-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header - Shifted up */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400" />
        </motion.div>
        
        {/* Projects Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.a 
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative block cursor-pointer"
            >
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${project.color} opacity-40 blur-lg group-hover:opacity-70 transition`} />
              <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-lg backdrop-blur-xl transition-all group-hover:-translate-y-1 dark:border-slate-700/60 dark:bg-slate-900/80">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.color} text-white`}>
                    <FaRocket className="text-lg" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      <FaUsers className="text-sm" />
                      {project.impact}
                    </span>
                    <FaGithub className="text-lg text-slate-500 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{project.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
