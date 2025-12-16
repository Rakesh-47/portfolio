import React from 'react';
import { FaCode, FaDatabase, FaTools, FaLaptopCode } from 'react-icons/fa';
import { SiCplusplus, SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiGit, SiDocker, SiApachekafka, SiApachespark, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';
import InfiniteMarquee from './InfiniteMarquee';

const marqueeIcons = [
  { icon: <SiCplusplus size={20} />, label: 'C++' },
  { icon: <SiPython size={20} />, label: 'Python' },
  { icon: <SiJavascript size={20} />, label: 'JS' },
  { icon: <SiReact size={20} />, label: 'React' },
  { icon: <SiNodedotjs size={20} />, label: 'Node' },
  { icon: <SiNextdotjs size={20} />, label: 'Next' },
  { icon: <SiMongodb size={20} />, label: 'Mongo' },
  { icon: <SiGit size={20} />, label: 'Git' },
  { icon: <SiDocker size={20} />, label: 'Docker' },
  { icon: <SiApachekafka size={20} />, label: 'Kafka' },
  { icon: <SiApachespark size={20} />, label: 'Spark' },
  { icon: <SiTailwindcss size={20} />, label: 'Tailwind' },
];

const Skills = () => {
  const categories = [
    { title: "Languages", icon: <FaCode />, skills: ["C/C++", "Python", "Java", "SQL", "JavaScript"], color: "from-blue-500 to-cyan-500" },
    { title: "Web Dev", icon: <FaLaptopCode />, skills: ["React", "Node.js", "Next.js", "Express", "REST APIs"], color: "from-green-500 to-emerald-500" },
    { title: "Data & Tools", icon: <FaDatabase />, skills: ["MongoDB", "BigQuery", "Spark", "Kafka", "Git"], color: "from-purple-500 to-pink-500" },
    { title: "Core CS", icon: <FaTools />, skills: ["DSA", "OOP", "OS", "RDBMS", "AI/ML"], color: "from-orange-500 to-red-500" }
  ];

  return (
    <section id="skills" className="relative h-full w-full flex flex-col justify-center px-6 md:px-12 py-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400" />
        </motion.div>

        {/* Infinite Marquee */}
        <div className="mb-8">
          <InfiniteMarquee speed={0.6} direction="left" pauseOnHover className="py-4">
            {marqueeIcons.map((item, idx) => (
              <span key={idx} className="mx-6 inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </span>
            ))}
          </InfiniteMarquee>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${cat.color} opacity-40 blur-lg group-hover:opacity-60 transition`} />
              <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-lg backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.color} text-white text-lg`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
