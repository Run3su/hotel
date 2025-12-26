
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Stay', href: '#stay' },
    { name: 'Dine', href: '#dine' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Events', href: '#events' },
    { name: 'Info', href: '#info' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300">
      {/* Utility Top Bar - Hides on scroll for a cleaner look */}
      <div className={`hidden lg:flex bg-ocean-dark/95 backdrop-blur-md text-white/70 py-2 border-b border-white/5 transition-all duration-500 ${isScrolled ? '-translate-y-full opacity-0 h-0 overflow-hidden' : 'translate-y-0 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center text-[11px] font-bold uppercase tracking-[0.15em]">
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary">location_on</span>
              Spangereid, 4521 Lindesnes
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary">call</span>
              +47 38 25 21 00
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <div className="flex gap-4 border-r border-white/10 pr-6 mr-2">
              <a href="#" className="hover:text-primary transition-colors">Career</a>
              <a href="#" className="hover:text-primary transition-colors">Gift Cards</a>
            </div>
            <button className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-sm">language</span>
              NOR / ENG
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
              isScrolled ? 'bg-primary text-white' : 'bg-white/20 text-white backdrop-blur-md'
            }`}>
              <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">water_lux</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tighter leading-none ${
                isScrolled ? 'text-ocean-dark' : 'text-white'
              }`}>HAVHOTELLET</span>
              <span className={`text-[8px] font-extrabold tracking-[0.3em] uppercase opacity-60 ${
                isScrolled ? 'text-ocean-dark' : 'text-white'
              }`}>Lindesnes</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-primary relative group ${
                  isScrolled ? 'text-ocean-dark' : 'text-white/90'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a 
              href="#stay"
              className={`hidden sm:flex min-w-[130px] items-center justify-center rounded-xl h-12 px-6 transition-all text-xs font-bold uppercase tracking-widest shadow-xl shadow-primary/20 ${
                isScrolled ? 'bg-primary text-white hover:bg-blue-600' : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              Book Now
            </a>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors ${
                isScrolled ? 'text-ocean-dark hover:bg-black/5' : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl p-8 flex flex-col gap-6 animate-fade-in-down">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-bold text-ocean-dark hover:text-primary py-2 border-b border-gray-50 last:border-0 flex justify-between items-center"
              >
                {link.name}
                <span className="material-symbols-outlined text-gray-300">chevron_right</span>
              </a>
            ))}
            <div className="pt-4 space-y-4">
              <button className="w-full flex items-center justify-center rounded-2xl h-16 bg-primary text-white font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20">
                Book a Stay
              </button>
              <div className="flex justify-center gap-8 text-gray-400">
                 <span className="material-symbols-outlined">call</span>
                 <span className="material-symbols-outlined">location_on</span>
                 <span className="material-symbols-outlined">language</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
