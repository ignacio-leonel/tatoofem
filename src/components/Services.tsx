import React from 'react';
import { Palette, Layers, RefreshCw, Heart, Star, Crown } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Crown size={32} />,
      title: "Mangas Completas",
      description: "Diseños únicos que fluyen por todo el brazo, contando historias completas con técnica impecable.",
      price: "Desde $80.000",
      duration: "4-6 sesiones"
    },
    {
      icon: <Palette size={32} />,
      title: "Media Manga",
      description: "Piezas artísticas que cubren desde el hombro hasta el codo, perfectas para comenzar tu colección.",
      price: "Desde $45.000",
      duration: "2-3 sesiones"
    },
    {
      icon: <RefreshCw size={32} />,
      title: "Cover-Up / Tapar Tatuajes",
      description: "Transformamos tatuajes antiguos en nuevas obras de arte, dándoles una segunda vida.",
      price: "Consultar",
      duration: "Variable"
    },
    {
      icon: <Heart size={32} />,
      title: "Tatuajes Femeninos",
      description: "Diseños delicados con un toque de fuerza, especializados en líneas finas y detalles únicos.",
      price: "Desde $15.000",
      duration: "1-2 sesiones"
    },
    {
      icon: <Layers size={32} />,
      title: "Blackwork",
      description: "Arte en negro puro con contrastes dramáticos y composiciones poderosas.",
      price: "Desde $25.000",
      duration: "1-3 sesiones"
    },
    {
      icon: <Star size={32} />,
      title: "Diseños Personalizados",
      description: "Creamos piezas únicas basadas en tu visión, historia personal y estilo de vida.",
      price: "Consultar",
      duration: "Variable"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Servicios
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cada servicio está diseñado para brindarte una experiencia única y un resultado excepcional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300 mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Precio:</span>
                    <span className="text-purple-300 font-semibold">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Duración:</span>
                    <span className="text-purple-300 font-semibold">{service.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              * Los precios pueden variar según el tamaño y complejidad del diseño. Incluye consulta previa gratuita.
            </p>
            <button 
              onClick={() => document.getElementById('turnos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Reservar Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;