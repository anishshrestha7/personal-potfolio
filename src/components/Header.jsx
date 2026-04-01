import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ activeSection, toggleTheme, theme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bgPrimary/70 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] py-3' : 'py-5 bg-transparent'}`}>
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex justify-between items-center w-full">
            
            {/* Logo / Name - Top Left */}
            <a href="#home" className="text-[22px] font-extrabold tracking-tight text-primary  hover:text-gray-600  transition-colors cursor-pointer z-[110]">
              Anish Shrestha
            </a>

            {/* Nav / Controls - Top Right */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Desktop Nav */}
              <nav className="hidden md:flex gap-8 items-center">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`relative text-[14px] font-medium py-1  transition-colors duration-300
                      ${activeSection === item.id ? 'text-primary' : 'text-textSecondary hover:text-primary'}
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300
                      ${activeSection === item.id ? 'after:w-full' : ''}
                    `}
                  >
                    {item.name}
                  </a>
                ))}
                {/* ThemeToggle on the right side of contact button */}
                <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
              </nav>

              {/* Mobile controls: Theme toggle next to hamburger */}
              <div className="flex md:hidden items-center gap-2 z-[110]">
                {/* Always visible ThemeToggle */}
                <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
                
                <button 
                  className="text-textPrimary p-2 hover:bg-surface rounded-full transition-colors relative"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle Menu"
                >
                  {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[40] bg-black/50 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />
            {/* Sliding Menu sticking on left side */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed inset-y-0 left-0 w-[60%] max-w-[300px] z-[40] bg-bgPrimary/95 backdrop-blur-lg flex flex-col pt-[100px] px-8 md:hidden border-r border-customBorder shadow-[4px_0_24px_rgba(0,0,0,0.1)] overflow-y-auto"
            >
              <div className="flex flex-col items-start gap-8 flex-1 pb-32">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={closeMenu}
                    className={`relative text-2xl font-bold transition-all duration-300 py-2 inline-block
                      ${activeSection === item.id ? 'text-primary' : 'text-textSecondary hover:text-primary'}
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300
                      ${activeSection === item.id ? 'after:w-full' : ''}
                    `}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
