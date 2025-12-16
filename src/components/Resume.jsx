import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Layout from './Layout';

const RESUME_PREVIEW_URL = 'https://drive.google.com/file/d/1vWV-uxVLQA9jcR8APOyiYLjoLhNt65Ca/preview';
const RESUME_VIEW_URL = 'https://drive.google.com/file/d/1vWV-uxVLQA9jcR8APOyiYLjoLhNt65Ca/view?usp=drive_link';

const Resume = () => {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 22, mass: 0.8 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 22, mass: 0.8 });

  const primaryX = useTransform(smoothX, [-0.5, 0.5], [-140, 140]);
  const primaryY = useTransform(smoothY, [-0.5, 0.5], [-100, 100]);
  const secondaryX = useTransform(smoothX, [-0.5, 0.5], [120, -120]);
  const secondaryY = useTransform(smoothY, [-0.5, 0.5], [-90, 90]);
  const meshOffsetX = useTransform(smoothX, [-0.5, 0.5], [-40, 40]);

  const glowRefs = useRef([]);
  const meshRef = useRef(null);

  useEffect(() => {
    const animations = glowRefs.current.map((element, index) => {
      if (!element) return null;
      const direction = index % 2 === 0 ? 1 : -1;
      return gsap.to(element, {
        duration: 10 - index * 2,
        rotate: 10 * direction,
        scale: 1.05 + index * 0.05,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    }).filter(Boolean);

    let meshAnimation = null;
    if (meshRef.current) {
      meshAnimation = gsap.to(meshRef.current, {
        duration: 16,
        backgroundPosition: '120px 120px',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    return () => {
      animations.forEach((animation) => animation && animation.kill());
      if (meshAnimation) {
        meshAnimation.kill();
      }
    };
  }, []);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const xPosition = (event.clientX - bounds.left) / bounds.width - 0.5;
    const yPosition = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(Math.max(-0.5, Math.min(0.5, xPosition)));
    pointerY.set(Math.max(-0.5, Math.min(0.5, yPosition)));
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <Layout>
      <section
        className="relative overflow-hidden px-4 pb-24 pt-12 md:px-8 md:pt-16 lg:px-16"
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
      >
        <motion.div
          className="pointer-events-none absolute -left-56 -top-48 h-[32rem] w-[32rem]"
          style={{ x: primaryX, y: primaryY }}
        >
          <div
            ref={(element) => {
              glowRefs.current[0] = element;
            }}
            className="h-full w-full rounded-full bg-gradient-to-br from-indigo-500/25 via-sky-400/20 to-emerald-400/25 blur-3xl"
          />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute -bottom-40 right-[-10rem] h-[26rem] w-[26rem]"
          style={{ x: secondaryX, y: secondaryY }}
        >
          <div
            ref={(element) => {
              glowRefs.current[1] = element;
            }}
            className="h-full w-full rounded-[45%] bg-gradient-to-br from-emerald-400/20 via-sky-400/20 to-indigo-500/25 blur-3xl"
          />
        </motion.div>

        <motion.div
          ref={meshRef}
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.07)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40"
          style={{ x: meshOffsetX }}
        />

        <div className="absolute inset-0 bg-white/80 backdrop-blur-md transition-colors duration-700 dark:bg-slate-950/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-sky-50/30 to-emerald-100/40 dark:from-indigo-900/25 dark:via-slate-900/20 dark:to-emerald-900/30" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto max-w-4xl"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/90">
              <div className="aspect-[8.5/11] w-full overflow-hidden border-b border-slate-200/70 dark:border-slate-700/60">
                <iframe
                  title="Rakesh Kumar Resume"
                  src={RESUME_PREVIEW_URL}
                  loading="lazy"
                  className="h-full w-full"
                  allow="autoplay"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Prefer a download-ready view? Open the file directly on Google Drive.
                </p>
                <a
                  href={RESUME_VIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 px-5 py-2 text-sm font-semibold text-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  View in Drive
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
