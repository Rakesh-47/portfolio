import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// Animated text that reveals letter by letter
export const TextReveal = ({ children, className = '', delay = 0 }) => {
  const text = typeof children === 'string' ? children : '';
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Animated text that reveals word by word
export const WordReveal = ({ children, className = '', delay = 0 }) => {
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: -45,
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      style={{ perspective: 1000 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="mr-2 inline-block"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Glowing gradient text animation
export const GradientText = ({ children, className = '' }) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 bg-[length:200%_auto] bg-clip-text text-transparent ${className}`}
      animate={{
        backgroundPosition: ['0% center', '200% center'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
};

// Typewriter effect with cursor
export const TypewriterText = ({ texts, className = '' }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [textIndex, setTextIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-[1em] bg-current ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      />
    </span>
  );
};

// Counter animation that counts up
export const CountUp = ({ end, duration = 2, suffix = '', className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
};

// Line draw SVG animation
export const AnimatedLine = ({ className = '' }) => {
  return (
    <svg
      className={`overflow-visible ${className}`}
      viewBox="0 0 200 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.line
        x1="0"
        y1="1"
        x2="200"
        y2="1"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Floating element animation
export const FloatingElement = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

// 3D Card tilt effect
export const TiltCard = ({ children, className = '' }) => {
  const ref = useRef(null);
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    setRotateX(-y * 10);
    setRotateY(x * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
};

// Staggered fade in for lists
export const StaggerContainer = ({ children, className = '', staggerDelay = 0.1 }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Magnetic button effect
export const MagneticButton = ({ children, className = '' }) => {
  const ref = useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - centerX) * 0.15,
      y: (e.clientY - centerY) * 0.15,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};
