import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30"></div>

      {/* Decorative sparkles */}
      <div className="absolute top-20 left-10 text-purple-400/20 animate-fade-in-slow">
        <Sparkles size={24} />
      </div>
      <div className="absolute bottom-32 right-16 text-pink-400/20 animate-fade-in delay-1000">
        <Sparkles size={32} />
      </div>
      <div className="absolute top-1/3 right-10 text-purple-400/20 animate-fade-in delay-500">
        <Sparkles size={16} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            <span className="block text-white italic">Arte que</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-glow italic">
              Trasciende
            </span>
            <span className="block text-white italic">la Piel</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed italic">
            Donde la delicadeza se encuentra con la fuerza. <br />
            Tatuajes únicos que cuentan tu historia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('turnos')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Reservar Turno
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-black transition-all duration-300"
            >
              Ver Galería
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
