import React, { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';

const InteractiveBackground = () => {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth) * 100;
      const y = (event.clientY / innerHeight) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.6 });

  const translateX = useTransform(springX, [0, 100], [-180, 180]);
  const translateY = useTransform(springY, [0, 100], [-180, 180]);
  const hue = useTransform(springX, [0, 100], [180, 320]);
  const glowBackground = useMotionTemplate`radial-gradient(circle at center, hsl(${hue}, 90%, 70%) 0%, rgba(14, 116, 144, 0) 60%)`;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Solid base background */}
      <div className="absolute inset-0 bg-slate-50 transition-colors duration-700 dark:bg-slate-950" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-surface opacity-40 transition-opacity duration-700 dark:opacity-20" />
      
      {/* 3D Geometric shapes - animated cubes and spheres */}
      <div className="absolute inset-0">
        {/* Floating cubes */}
        <motion.div
          className="absolute left-[10%] top-[15%] h-32 w-32 rounded-2xl border border-indigo-300/30 bg-gradient-to-br from-indigo-400/10 to-sky-400/10 backdrop-blur-sm dark:border-indigo-500/30 dark:from-indigo-500/15 dark:to-sky-500/15"
          animate={{
            y: [0, -30, 0],
            rotateX: [0, 360],
            rotateY: [0, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformStyle: 'preserve-3d' }}
        />
        
        <motion.div
          className="absolute right-[15%] top-[25%] h-24 w-24 rounded-2xl border border-emerald-300/30 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 backdrop-blur-sm dark:border-emerald-500/30 dark:from-emerald-500/15 dark:to-teal-500/15"
          animate={{
            y: [0, 40, 0],
            rotateX: [0, -360],
            rotateZ: [0, 180],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          style={{ transformStyle: 'preserve-3d' }}
        />
        
        {/* Floating spheres */}
        <motion.div
          className="absolute left-[70%] top-[60%] h-40 w-40 rounded-full border border-violet-300/30 bg-gradient-to-br from-violet-400/10 to-purple-400/10 backdrop-blur-sm dark:border-violet-500/30 dark:from-violet-500/15 dark:to-purple-500/15"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        
        <motion.div
          className="absolute left-[20%] bottom-[20%] h-36 w-36 rounded-full border border-sky-300/30 bg-gradient-to-br from-sky-400/10 to-cyan-400/10 backdrop-blur-sm dark:border-sky-500/30 dark:from-sky-500/15 dark:to-cyan-500/15"
          animate={{
            y: [0, 35, 0],
            x: [0, -25, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
        
        {/* Wireframe geometric shapes */}
        <motion.div
          className="absolute right-[25%] bottom-[35%] h-28 w-28"
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg viewBox="0 0 100 100" className="h-full w-full opacity-20 dark:opacity-30">
            <polygon
              points="50,10 90,75 10,75"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-indigo-500"
            />
            <polygon
              points="50,25 75,65 25,65"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-sky-500"
            />
          </svg>
        </motion.div>
      </div>
      
      {/* Mouse-reactive glow orb */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[48rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-50"
        style={{ x: translateX, y: translateY, background: glowBackground }}
      />
    </div>
  );
};

export default InteractiveBackground;
