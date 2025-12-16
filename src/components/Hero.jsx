import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import ConnectModal from './ConnectModal';
import HeroBackground from './HeroBackground';

const portraitImage = '/assets/photo_6197070477767937428_y-removebg-preview.png';

const quickStats = [
  { label: 'Problems', value: '1000+' },
  { label: 'Projects', value: '10+' },
  { label: 'Internship', value: 'Walmart' },
];

const socialLinks = [
  { href: 'https://github.com/Rakesh-47', label: 'GitHub', icon: <FaGithub size={16} /> },
  { href: 'https://www.linkedin.com/in/rakesh-kumar-322245317/', label: 'LinkedIn', icon: <FaLinkedin size={16} /> },
  { href: 'mailto:rakvc456@gmail.com', label: 'Email', icon: <FaEnvelope size={16} /> },
];

const roleSequence = ['Software Engineer', 'Full Stack Developer', 'Data Engineer', 'Problem Solver'];

const Hero = () => {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 20, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 20, mass: 0.6 });

  const cardTiltX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const cardTiltY = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);

  useEffect(() => {
    const currentRole = roleSequence[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.substring(0, text.length + 1);
        setText(nextText);
        if (nextText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        const nextText = currentRole.substring(0, text.length - 1);
        setText(nextText);
        if (!nextText.length) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roleSequence.length);
        }
      }
    }, isDeleting ? 45 : 120);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.hero-intro', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.05 });
      if (cardRef.current) {
        gsap.from(cardRef.current, { y: 40, opacity: 0, rotateX: -10, duration: 0.8, ease: 'power3.out', delay: 0.1 });
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(Math.max(-0.5, Math.min(0.5, (event.clientX - bounds.left) / bounds.width - 0.5)));
    pointerY.set(Math.max(-0.5, Math.min(0.5, (event.clientY - bounds.top) / bounds.height - 0.5)));
  };

  const handlePointerLeave = () => { pointerX.set(0); pointerY.set(0); };

  const handleConnectSubmit = async (form) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      toast.error('EmailJS not configured. Add keys to .env');
      return;
    }
    const toastId = toast.loading('Sending...');
    try {
      await emailjs.send(serviceId, templateId, { need: form.need, from_email: form.email, reply_to: form.email, message: form.message }, { publicKey });
      toast.success('Message sent!', { id: toastId });
      setIsConnectOpen(false);
    } catch {
      toast.error('Failed to send.', { id: toastId });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-full w-full flex items-center py-8 px-6 md:px-12"
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
    >
      {/* Constellation Background */}
      <HeroBackground />
      
      <div className="container mx-auto max-w-6xl relative z-10 grid items-center gap-8 lg:grid-cols-[1.2fr_auto]">
        {/* Left Content */}
        <div className="lg:pr-4">
          {/* Badges */}
          <div className="hero-intro flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full border border-white/40 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-300">
              IIT (ISM) Dhanbad
            </span>
            <Link
              to="/resume"
              className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/70 bg-indigo-50/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-indigo-600 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-200"
            >
              <FaFileAlt className="text-xs" /> Resume
            </Link>
          </div>

          {/* Name */}
          <h1 className="hero-intro text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
              Rakesh Kumar
            </span>
          </h1>

          {/* Role */}
          <div className="hero-intro mt-3 flex items-center gap-2 text-base font-semibold text-slate-700 dark:text-slate-200">
            <span className="text-indigo-500 dark:text-indigo-300">{text}</span>
            <span className="text-lg text-slate-400">|</span>
          </div>

          {/* Description */}
          <p className="hero-intro mt-4 max-w-lg text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Creating expressive digital systems. Shipping platforms at{' '}
            <span className="font-semibold text-indigo-500">Walmart Global Tech</span>, building{' '}
            <span className="font-semibold text-emerald-500">full-stack experiences</span>.
          </p>

          {/* CTA Buttons */}
          <div className="hero-intro mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaFileAlt className="text-sm" /> View Resume
            </Link>
            <button
              type="button"
              onClick={() => setIsConnectOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-900/15 bg-white/10 px-6 py-2.5 text-sm font-semibold text-slate-900 backdrop-blur-xl hover:bg-white/20 transition-colors dark:border-white/15 dark:bg-white/5 dark:text-white"
            >
              <FaEnvelope className="text-sm" /> Let's connect
            </button>
          </div>

          {/* Stats */}
          <div className="hero-intro mt-6 flex gap-4">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-900/10 bg-white/10 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="hero-intro mt-6 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/10 bg-white/10 text-slate-700 backdrop-blur-xl hover:bg-white/20 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right - Portrait Card */}
        <motion.div
          ref={cardRef}
          className="hidden sm:block relative w-56 lg:w-64"
          style={{ rotateX: cardTiltX, rotateY: cardTiltY, transformStyle: 'preserve-3d' }}
        >
          <div className="rounded-3xl border border-slate-900/10 bg-white/10 p-4 backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-transparent">
              <img src={portraitImage} alt="Rakesh Kumar" className="h-full w-full object-contain" />
            </div>
            <div className="mt-3 text-center">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">B.Tech Student</p>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">IIT (ISM) Dhanbad</p>
            </div>
          </div>
        </motion.div>
      </div>

      <ConnectModal open={isConnectOpen} onClose={() => setIsConnectOpen(false)} onSubmit={handleConnectSubmit} />
    </section>
  );
};

export default Hero;