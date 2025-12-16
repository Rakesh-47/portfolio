import React, { useEffect, useRef } from 'react';

// Particle constellation effect inspired by stavrossymeonidis.dev
// Creates a circular cluster of dots that follow mouse movement

const PARTICLE_COUNT = 320; // Optimized for performance
const CENTER_X = 0.5;
const CENTER_Y = 0.5;
const MAX_RADIUS = 0.38; // Radius of the circular cluster relative to viewport

const HeroBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles in a circular cluster
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        // Random angle and radius for circular distribution
        const angle = Math.random() * Math.PI * 2;
        // Use sqrt for even distribution within circle
        const radius = Math.sqrt(Math.random()) * MAX_RADIUS;

        // More randomization: fuzzy edge + slight centroid wobble
        const jitter = (Math.random() - 0.5) * 0.14;
        const centerJitterX = (Math.random() - 0.5) * 0.02;
        const centerJitterY = (Math.random() - 0.5) * 0.02;
        
        particlesRef.current.push({
          // Base position (normalized 0-1)
          baseX: CENTER_X + centerJitterX + Math.cos(angle) * (radius + jitter),
          baseY: CENTER_Y + centerJitterY + Math.sin(angle) * (radius + jitter),
          // Current position
          x: 0,
          y: 0,
          // Size variation
          size: Math.random() * 0.9 + 0.22,
          // Opacity variation
          opacity: Math.random() * 0.65 + 0.12,
          // Individual mouse influence factor
          influence: Math.random() * 0.65 + 0.05,
          // Slight drift
          driftOffset: Math.random() * Math.PI * 2,
          driftSpeed: 0.6 + Math.random() * 1.6,
        });
      }
    };
    initParticles();

    // Mouse tracking
    const handleMouseMove = (event) => {
      mouseRef.current.targetX = event.clientX / width;
      mouseRef.current.targetY = event.clientY / height;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Check if dark mode
    const isDarkMode = () => {
      return document.documentElement.classList.contains('dark');
    };

    // Animation loop
    const animate = () => {
      // Smooth mouse following
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      const time = Date.now() * 0.001;
      const dark = isDarkMode();
      
      // Calculate mouse offset from center (for particle displacement)
      const mouseOffsetX = (mouseRef.current.x - 0.5) * 80;
      const mouseOffsetY = (mouseRef.current.y - 0.5) * 80;

      // Draw particles
      particlesRef.current.forEach((particle) => {
        // Add subtle drift animation (randomized per particle)
        const driftX = Math.sin(time * particle.driftSpeed + particle.driftOffset) * 0.007;
        const driftY = Math.cos(time * (particle.driftSpeed * 0.9) + particle.driftOffset) * 0.007;
        
        // Calculate position with mouse influence
        const offsetX = mouseOffsetX * particle.influence;
        const offsetY = mouseOffsetY * particle.influence;
        
        particle.x = (particle.baseX + driftX) * width + offsetX;
        particle.y = (particle.baseY + driftY) * height + offsetY;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Color: black dots in light mode, white/gray dots in dark mode
        if (dark) {
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.7})`;
        } else {
          ctx.fillStyle = `rgba(0, 0, 0, ${particle.opacity * 0.85})`;
        }
        
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Base background color */}
      <div className="absolute inset-0 bg-white transition-colors duration-500 dark:bg-slate-950" />
      
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      {/* Subtle vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.3)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)]" />
    </div>
  );
};

export default HeroBackground;
