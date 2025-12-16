import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: '/#about' },
    { name: 'Experience', to: '/#experience' },
    { name: 'Projects', to: '/#projects' },
    { name: 'Resume', to: '/resume' },
    { name: 'Skills', to: '/#skills' },
    { name: 'CP', to: '/#competitive-programming' },
    { name: 'Achievements', to: '/#achievements' },
    { name: 'Contact', to: '/#contact' },
  ];

  const baseNavStyles = scrolled
    ? 'bg-white/80 shadow-lg border border-slate-200/60 dark:bg-slate-900/80 dark:border-slate-800/60'
    : 'bg-white/50 border border-transparent dark:bg-slate-900/50';

  return (
    <nav className={`fixed inset-x-0 top-3 z-50 transition-all duration-500 ease-out`}
      aria-label="Primary navigation"
    >
      <div className="container-custom">
        <div className={`flex items-center justify-between rounded-2xl px-5 py-4 backdrop-blur-xl transition-colors duration-500 ${baseNavStyles}`}>
          <Link to="/" className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
              RK
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.to}
                className="group relative text-sm font-semibold text-slate-600 transition-all duration-300 ease-out hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {link.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-center scale-x-0 bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white/70 text-slate-700 transition-colors duration-300 hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-slate-500"
              aria-label="Toggle color theme"
            >
              {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 text-slate-700 transition-all duration-300 hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 md:hidden"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-3 rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/90 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100/80 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800/80"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
