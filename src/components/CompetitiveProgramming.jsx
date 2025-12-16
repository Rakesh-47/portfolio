import React from 'react';
import { FaCode, FaStar, FaChartLine } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';

const CompetitiveProgramming = () => {
  const profiles = [
    { name: "Codeforces", username: "cypher57", url: "https://codeforces.com/profile/cypher57", icon: <SiCodeforces className="text-2xl" />, rank: "Expert", rating: "1786", problems: "600", color: "from-blue-500 to-cyan-500" },
    { name: "LeetCode", username: "rk_02_04", url: "https://leetcode.com/u/rk_02_04/", icon: <SiLeetcode className="text-2xl" />, rank: "Knight", rating: "1912", problems: "412", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { label: "Problems", value: "1000+", icon: <FaCode className="text-blue-400" /> },
    { label: "Max Rating", value: "1912", icon: <FaStar className="text-yellow-400" /> },
    { label: "Years", value: "3+", icon: <FaChartLine className="text-green-400" /> }
  ];

  return (
    <section id="competitive-programming" className="relative h-full w-full flex flex-col justify-center px-6 md:px-12 py-8">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Competitive Programming</h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400" />
        </motion.div>
        
        {/* Profile Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {profiles.map((profile, index) => (
            <motion.a 
              key={index}
              href={profile.url} 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative block"
            >
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${profile.color} opacity-40 blur-lg group-hover:opacity-60 transition`} />
              <div className="relative rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-lg backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${profile.color} text-white`}>
                    {profile.icon}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${profile.color} text-white`}>
                    {profile.rank}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{profile.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">@{profile.username}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-100/80 dark:bg-slate-800/60 p-3 text-center">
                    <p className="text-xl font-bold text-slate-900 dark:text-white">{profile.rating}</p>
                    <p className="text-xs text-slate-500">Rating</p>
                  </div>
                  <div className="rounded-xl bg-slate-100/80 dark:bg-slate-800/60 p-3 text-center">
                    <p className="text-xl font-bold text-slate-900 dark:text-white">{profile.problems}</p>
                    <p className="text-xs text-slate-500">Solved</p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 opacity-30 blur-lg group-hover:opacity-50 transition" />
          <div className="relative rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-lg backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">{React.cloneElement(stat.icon, { className: 'text-2xl' })}</div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
