
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
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
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
            isScrolled ? 'bg-primary text-white' : 'bg-white/20 text-white backdrop-blur-md'
          }`}>
            <span className="material-symbols-outlined text-2xl">water_lux</span>
          </div>
          <span className={`text-xl font-bold tracking-tight ${
            isScrolled ? 'text-ocean-dark' : 'text-white'
          }`}>Havhotellet</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                isScrolled ? 'text-ocean-dark' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className={`hidden lg:flex items-center gap-2 text-sm font-bold transition-colors ${
            isScrolled ? 'text-ocean-dark/60 hover:text-primary' : 'text-white/70 hover:text-white'
          }`}>
            <span className="material-symbols-outlined text-[20px]">language</span>
            <span>NOR / ENG</span>
          </button>
          
          <a 
            href="#stay"
            className="hidden sm:flex min-w-[120px] items-center justify-center rounded-full h-11 px-6 bg-primary text-white hover:bg-blue-600 transition-all text-sm font-bold shadow-lg shadow-primary/20"
          >
            Book Now
          </a>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-ocean-dark hover:bg-black/5' : 'text-white hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-ocean-dark hover:text-primary py-2 border-b border-gray-50 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <button className="mt-2 w-full flex items-center justify-center rounded-xl h-14 bg-primary text-white font-bold">
            Book a Stay
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
