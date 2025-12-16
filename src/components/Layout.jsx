import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './Navbar';
import InteractiveBackground from './InteractiveBackground';

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <InteractiveBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3500,
            style: {
              background: 'rgba(2, 6, 23, 0.85)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)',
            },
          }}
        />
        <Navbar />
        <main className="flex-1 pt-24 md:pt-28">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
