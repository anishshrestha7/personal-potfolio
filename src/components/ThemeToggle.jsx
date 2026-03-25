import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button 
      className="bg-surface border border-customBorder p-2 rounded-full flex items-center justify-center text-textPrimary cursor-pointer transition-colors duration-300 hover:text-primary"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
