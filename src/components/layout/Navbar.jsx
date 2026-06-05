import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[var(--color-olive-green)] shadow-md z-50 h-[76px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center relative">
        <a href="#home" className="text-xl font-bold tracking-tighter text-[var(--color-cream)]">
          Kodari Akhil<span className="text-[var(--color-light-tan)]">.</span>
        </a>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-[var(--color-cream)]">
          <a href="#home" className="hover:text-[var(--color-light-tan)] transition-colors">Home</a>
          <a href="#experience" className="hover:text-[var(--color-light-tan)] transition-colors">Experience</a>
          <a href="#education" className="hover:text-[var(--color-light-tan)] transition-colors">Education</a>
          <a href="#projects" className="hover:text-[var(--color-light-tan)] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[var(--color-light-tan)] transition-colors">Contact</a>
        </div>

        <button 
          className="md:hidden text-[var(--color-cream)] focus:outline-none z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      <div className={`md:hidden absolute top-[76px] left-0 w-full bg-[var(--color-olive-green)] shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] border-t border-[var(--color-dark-green)]/20' : 'max-h-0'}`}>
        <div className="flex flex-col items-center py-6 gap-6">
          <a href="#home" onClick={handleMenuClick} className="text-lg font-bold text-[var(--color-cream)] hover:text-[var(--color-copper)] transition-colors">Home</a>
          <a href="#experience" onClick={handleMenuClick} className="text-lg font-bold text-[var(--color-cream)] hover:text-[var(--color-copper)] transition-colors">Experience</a>
          <a href="#education" onClick={handleMenuClick} className="text-lg font-bold text-[var(--color-cream)] hover:text-[var(--color-copper)] transition-colors">Education</a>
          <a href="#projects" onClick={handleMenuClick} className="text-lg font-bold text-[var(--color-cream)] hover:text-[var(--color-copper)] transition-colors">Projects</a>
          <a href="#contact" onClick={handleMenuClick} className="text-lg font-bold text-[var(--color-cream)] hover:text-[var(--color-copper)] transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;