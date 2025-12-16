import React from 'react';
import { motion } from 'framer-motion';


const FullScreenSection = ({
  children,
  className = '',
  variant = 0, 
}) => {
  // Color variants for different sections
  const colorVariants = [
    { primary: 'from-indigo-500/20 to-sky-500/20', accent: 'border-indigo-400/30' },
    { primary: 'from-violet-500/20 to-purple-500/20', accent: 'border-violet-400/30' },
    { primary: 'from-emerald-500/20 to-teal-500/20', accent: 'border-emerald-400/30' },
    { primary: 'from-sky-500/20 to-cyan-500/20', accent: 'border-sky-400/30' },
    { primary: 'from-rose-500/20 to-pink-500/20', accent: 'border-rose-400/30' },
    { primary: 'from-amber-500/20 to-orange-500/20', accent: 'border-amber-400/30' },
    { primary: 'from-blue-500/20 to-indigo-500/20', accent: 'border-blue-400/30' },
    { primary: 'from-green-500/20 to-emerald-500/20', accent: 'border-green-400/30' },
  ];

  const colors = colorVariants[variant % colorVariants.length];

  return (
    <div className={`relative flex h-screen w-screen items-center justify-center overflow-hidden ${className}`}>
      {/* Solid base background - transparent for Hero (variant 0) */}
      {variant !== 0 && (
        <div className="absolute inset-0 bg-slate-50 transition-colors duration-700 dark:bg-slate-950" />
      )}
      
      {/* Grid pattern - only for non-hero sections */}
      {variant !== 0 && (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)]" />
      )}
      
      {/* Animated 3D geometric shapes - only for non-hero sections */}
      {variant !== 0 && (
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating cube 1 */}
        <motion.div
          className={`absolute left-[8%] top-[12%] h-24 w-24 rounded-2xl border ${colors.accent} bg-gradient-to-br ${colors.primary} backdrop-blur-sm`}
          animate={{
            y: [0, -25, 0],
            rotateZ: [0, 10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Floating cube 2 */}
        <motion.div
          className={`absolute right-[12%] top-[20%] h-20 w-20 rounded-2xl border ${colors.accent} bg-gradient-to-br ${colors.primary} backdrop-blur-sm`}
          animate={{
            y: [0, 30, 0],
            rotateZ: [0, -15, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        
        {/* Floating sphere 1 */}
        <motion.div
          className={`absolute left-[75%] top-[55%] h-32 w-32 rounded-full border ${colors.accent} bg-gradient-to-br ${colors.primary} backdrop-blur-sm`}
          animate={{
            y: [0, -35, 0],
            x: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        
        {/* Floating sphere 2 */}
        <motion.div
          className={`absolute left-[15%] bottom-[18%] h-28 w-28 rounded-full border ${colors.accent} bg-gradient-to-br ${colors.primary} backdrop-blur-sm`}
          animate={{
            y: [0, 28, 0],
            x: [0, -18, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        
        {/* Wireframe triangle */}
        <motion.div
          className="absolute right-[20%] bottom-[25%] h-24 w-24"
          animate={{ rotate: [0, 360], y: [0, -15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 100 100" className="h-full w-full opacity-30">
            <polygon
              points="50,15 85,75 15,75"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-indigo-500 dark:text-indigo-400"
            />
          </svg>
        </motion.div>
        
        <div className={`absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${colors.primary} blur-3xl opacity-40`} />
      </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default FullScreenSection;
