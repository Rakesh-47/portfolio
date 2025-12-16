import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    { title: "Top 3% Meta Hacker Cup", desc: "40,000+ participants", icon: <FaTrophy />, color: "from-yellow-500 to-orange-500" },
    { title: "Meesho Dice Tech Semi-finalist", desc: "Track 2.0", icon: <FaMedal />, color: "from-blue-500 to-cyan-500" },
    { title: "Winter of Code Finalist", desc: "IIT Dhanbad '22-23", icon: <FaAward />, color: "from-green-500 to-emerald-500" },
    { title: "Codeforces Expert", desc: "1786 Rating", icon: <FaStar />, color: "from-purple-500 to-pink-500" },
    { title: "LeetCode Knight", desc: "1912 Rating", icon: <FaStar />, color: "from-orange-500 to-red-500" },
    { title: "Chem-A-Code Winner", desc: "Concetto 2024", icon: <FaTrophy />, color: "from-red-500 to-pink-500" }
  ];

  return (
    <section id="achievements" className="relative h-full w-full flex flex-col justify-center px-6 md:px-12 py-8">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Achievements & Honors</h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400" />
        </motion.div>
        
        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${item.color} opacity-40 blur-lg group-hover:opacity-60 transition`} />
              <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-center shadow-lg backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                <div className={`mb-3 inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-white text-2xl`}>
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1 line-clamp-2">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
