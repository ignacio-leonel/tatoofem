import React from 'react';
import { Heart, Star, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sobre Mí
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed italic">
              Soy una artista que encuentra belleza en los contrastes: la delicadeza y la fuerza, 
              lo femenino y lo rebelde, lo clásico y lo moderno.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Texto */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Con más de 8 años de experiencia en el mundo del tatuaje, me especializo en crear 
                piezas únicas que reflejan la personalidad y la historia de cada cliente. Mi estilo 
                combina técnicas tradicionales con toques modernos, siempre manteniendo la elegancia 
                y el carácter que me caracterizan.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Creo que cada tatuaje debe ser una obra de arte personal, cuidadosamente diseñada 
                para complementar tanto tu visión como tu cuerpo. Mi enfoque es colaborativo: 
                trabajamos juntas para crear algo verdaderamente especial.
              </p>

            
            </div>

            {/* Cuadro con imagen y estadísticas */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20 shadow-lg">
                {/* Imagen */}
                <img 
                  src="/images/tatoofem2.png" 
                  alt="Foto de la artista" 
                  className="rounded-xl w-full object-cover h-64 mb-6 shadow-md border border-purple-500/30"
                />

                {/* Estadísticas */}
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mb-2">
                      <Heart className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">500+</h3>
                    <p className="text-gray-300 text-sm">Tatuajes Realizados</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mb-2">
                      <Star className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">8+</h3>
                    <p className="text-gray-300 text-sm">Años de Experiencia</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mb-2">
                      <Users className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">400+</h3>
                    <p className="text-gray-300 text-sm">Clientes Satisfechas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
