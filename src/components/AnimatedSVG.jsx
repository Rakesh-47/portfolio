import React from 'react';
import { motion } from 'framer-motion';


export const AnimatedCircle = ({ size = 100, strokeWidth = 2, className = '', delay = 0 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg
      width={size}
      height={size}
      className={`overflow-visible ${className}`}
      viewBox={`0 0 ${size} ${size}`}
    >
      <defs>
        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#circleGradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeInOut', delay }}
      />
    </svg>
  );
};

// Animated code brackets
export const AnimatedBrackets = ({ className = '' }) => {
  return (
    <svg
      className={`overflow-visible ${className}`}
      width="60"
      height="80"
      viewBox="0 0 60 80"
      fill="none"
    >
      <defs>
        <linearGradient id="bracketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      {/* Left bracket */}
      <motion.path
        d="M20 10 L10 10 L10 70 L20 70"
        stroke="url(#bracketGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
      {/* Right bracket */}
      <motion.path
        d="M40 10 L50 10 L50 70 L40 70"
        stroke="url(#bracketGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
      />
    </svg>
  );
};

// Animated connection lines
export const AnimatedConnector = ({ className = '' }) => {
  return (
    <svg
      className={`overflow-visible ${className}`}
      width="200"
      height="100"
      viewBox="0 0 200 100"
      fill="none"
    >
      <defs>
        <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <motion.path
        d="M10 50 Q 50 10, 100 50 T 190 50"
        stroke="url(#connectorGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      {/* Animated dot following the path */}
      <motion.circle
        r="5"
        fill="#6366f1"
        initial={{ offsetDistance: '0%' }}
        whileInView={{ offsetDistance: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }}
        style={{ offsetPath: "path('M10 50 Q 50 10, 100 50 T 190 50')" }}
      />
    </svg>
  );
};

// Animated hexagon grid
export const AnimatedHexGrid = ({ className = '' }) => {
  const hexagons = [
    { x: 30, y: 30, delay: 0 },
    { x: 70, y: 30, delay: 0.1 },
    { x: 110, y: 30, delay: 0.2 },
    { x: 50, y: 65, delay: 0.15 },
    { x: 90, y: 65, delay: 0.25 },
    { x: 70, y: 100, delay: 0.3 },
  ];

  return (
    <svg
      className={`overflow-visible ${className}`}
      width="140"
      height="130"
      viewBox="0 0 140 130"
      fill="none"
    >
      <defs>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {hexagons.map((hex, i) => (
        <motion.polygon
          key={i}
          points={`${hex.x},${hex.y - 18} ${hex.x + 16},${hex.y - 9} ${hex.x + 16},${hex.y + 9} ${hex.x},${hex.y + 18} ${hex.x - 16},${hex.y + 9} ${hex.x - 16},${hex.y - 9}`}
          stroke="url(#hexGradient)"
          strokeWidth="1.5"
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: hex.delay, type: 'spring' }}
        />
      ))}
    </svg>
  );
};

// Animated code snippet decoration
export const AnimatedCodeBlock = ({ className = '' }) => {
  return (
    <svg
      className={`overflow-visible ${className}`}
      width="120"
      height="80"
      viewBox="0 0 120 80"
      fill="none"
    >
      <defs>
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      {/* Code lines */}
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x="10"
          y={10 + i * 18}
          width={60 + Math.random() * 40}
          height="8"
          rx="4"
          fill="url(#codeGradient)"
          fillOpacity={0.3 + i * 0.15}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
        />
      ))}
    </svg>
  );
};

// Animated data flow
export const AnimatedDataFlow = ({ className = '' }) => {
  return (
    <svg
      className={`overflow-visible ${className}`}
      width="200"
      height="60"
      viewBox="0 0 200 60"
      fill="none"
    >
      <defs>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1">
            <animate attributeName="stop-color" values="#6366f1;#0ea5e9;#10b981;#6366f1" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#10b981">
            <animate attributeName="stop-color" values="#10b981;#6366f1;#0ea5e9;#10b981" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      
      {/* Source node */}
      <motion.circle
        cx="20"
        cy="30"
        r="12"
        stroke="url(#flowGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Flow line */}
      <motion.path
        d="M35 30 L165 30"
        stroke="url(#flowGradient)"
        strokeWidth="2"
        strokeDasharray="8 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      {/* Destination node */}
      <motion.rect
        x="168"
        y="18"
        width="24"
        height="24"
        rx="4"
        stroke="url(#flowGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      
      {/* Animated particles along the path */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          r="3"
          fill="#6366f1"
          initial={{ cx: 35, cy: 30, opacity: 0 }}
          animate={{ cx: [35, 165], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 2,
            delay: i * 0.6,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </svg>
  );
};

// Animated neural network
export const AnimatedNeuralNet = ({ className = '' }) => {
  const layers = [
    [{ x: 20, y: 20 }, { x: 20, y: 50 }, { x: 20, y: 80 }],
    [{ x: 70, y: 35 }, { x: 70, y: 65 }],
    [{ x: 120, y: 50 }],
  ];

  const connections = [];
  for (let l = 0; l < layers.length - 1; l++) {
    for (const from of layers[l]) {
      for (const to of layers[l + 1]) {
        connections.push({ from, to });
      }
    }
  }

  return (
    <svg
      className={`overflow-visible ${className}`}
      width="140"
      height="100"
      viewBox="0 0 140 100"
      fill="none"
    >
      <defs>
        <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      
      {/* Connections */}
      {connections.map((conn, i) => (
        <motion.line
          key={i}
          x1={conn.from.x}
          y1={conn.from.y}
          x2={conn.to.x}
          y2={conn.to.y}
          stroke="url(#neuralGradient)"
          strokeWidth="1"
          strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.05 }}
        />
      ))}
      
      {/* Nodes */}
      {layers.flat().map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="8"
          fill="url(#neuralGradient)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 + i * 0.1, type: 'spring' }}
        />
      ))}
    </svg>
  );
};

// Animated pulse ring
export const AnimatedPulseRing = ({ size = 60, className = '' }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-indigo-500"
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{
            duration: 2,
            delay: i * 0.6,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400" />
      </div>
    </div>
  );
};

// Animated orbit
export const AnimatedOrbit = ({ size = 100, className = '' }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Orbit path */}
      <div className="absolute inset-0 rounded-full border border-indigo-500/30" />
      
      {/* Orbiting dot */}
      <motion.div
        className="absolute h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400"
        style={{ top: -6, left: '50%', marginLeft: -6 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        transformOrigin={`6px ${size / 2 + 6}px`}
      />
      
      {/* Center dot */}
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400" />
    </div>
  );
};
