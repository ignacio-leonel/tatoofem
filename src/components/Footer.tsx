import React from 'react';
import { Instagram, Facebook, MapPin, Clock, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-purple-950/40 to-black border-t border-purple-500/20">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Dark Femme Ink
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Arte que trasciende la piel. Donde la delicadeza se encuentra con la fuerza, 
                  creando tatuajes únicos que cuentan tu historia.
                </p>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-purple-300 mb-4">Contacto</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-purple-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-white font-medium">Estudio</p>
                    <p className="text-gray-300 text-sm">Av. Corrientes 1234<br />Palermo, CABA</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="text-purple-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-white font-medium">WhatsApp</p>
                    <p className="text-gray-300 text-sm">+54 9 11 1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="text-purple-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300 text-sm">hola@darkfemmeink.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-purple-300 mb-4">Horarios</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Lunes - Viernes</span>
                  <span className="text-white font-medium">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sábados</span>
                  <span className="text-white font-medium">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Domingos</span>
                  <span className="text-gray-400">Cerrado</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-lg border border-purple-500/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="text-purple-400" size={16} />
                  <span className="text-purple-300 font-medium text-sm">Atención solo con turno</span>
                </div>
                <p className="text-gray-300 text-xs">
                  Reserva tu cita con anticipación para garantizar la mejor atención personalizada.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-purple-500/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2024 Dark Femme Ink. Todos los derechos reservados.
              </p>
              
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Hecho con</span>
                <Heart className="text-pink-400" size={16} />
                <span>para el arte del tatuaje</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;