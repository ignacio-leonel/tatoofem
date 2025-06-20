import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-purple-900/20' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dark Femme Ink
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="hover:text-purple-400 transition-colors">Inicio</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors">Sobre Mí</button>
            <button onClick={() => scrollToSection('servicios')} className="hover:text-purple-400 transition-colors">Servicios</button>
            <button onClick={() => scrollToSection('galeria')} className="hover:text-purple-400 transition-colors">Galería</button>
            <button onClick={() => scrollToSection('turnos')} className="hover:text-purple-400 transition-colors">Turnos</button>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors">
              <Facebook size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-purple-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-black/95 rounded-lg border border-purple-900/20">
            <div className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection('inicio')} className="text-left hover:text-purple-400 transition-colors">Inicio</button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-purple-400 transition-colors">Sobre Mí</button>
              <button onClick={() => scrollToSection('servicios')} className="text-left hover:text-purple-400 transition-colors">Servicios</button>
              <button onClick={() => scrollToSection('galeria')} className="text-left hover:text-purple-400 transition-colors">Galería</button>
              <button onClick={() => scrollToSection('turnos')} className="text-left hover:text-purple-400 transition-colors">Turnos</button>
              <div className="flex space-x-4 pt-4 border-t border-purple-900/20">
                <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;