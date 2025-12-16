import React, { useEffect, useId, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const ConnectModal = ({ open, onClose, onSubmit }) => {
  const titleId = useId();
  const panelRef = useRef(null);
  const [form, setForm] = useState({
    need: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    // Reset when opening so it feels clean
    setForm({ need: '', email: '', message: '' });
  }, [open]);

  const handleOverlayMouseDown = (event) => {
    if (panelRef.current && !panelRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={handleOverlayMouseDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" />

          <motion.div
            ref={panelRef}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-xl dark:border-white/10"
            initial={{ y: 24, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 18, scale: 0.98, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 26 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id={titleId} className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                  Let&apos;s work together
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Tell me what you need and I&apos;ll get back to you.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
                aria-label="Close"
              >
                <IoClose size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-200">What do you need?</label>
                <input
                  name="need"
                  value={form.need}
                  onChange={handleChange}
                  placeholder="e.g. Portfolio, full-stack app, internship opportunity"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-white/20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-white/20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200">Describe it</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Share details, timeline, links, etc."
                  rows={6}
                  className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-white/20"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Send message
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ConnectModal;
