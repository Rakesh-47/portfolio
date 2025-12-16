import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext(undefined);
const STORAGE_KEY = 'portfolio-theme';

const getPreferredTheme = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  return 'light';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    // Intentionally do not auto-switch theme on OS-level changes.
    // Leaving this effect out prevents the site from redirecting to dark mode
    // when the user's system preference changes. Theme is controlled by stored
    // preference or defaults to 'light'.
  }, []);

  const value = useMemo(() => ({
    theme,
    toggleTheme: () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
